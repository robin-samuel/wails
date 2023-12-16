package parser

import (
	"fmt"
	"sort"
	"strconv"
	"strings"

	"github.com/samber/lo"
)

const header = `// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

`

const bindingTemplate = `
		/**
		 * {{structName}}.{{methodName}}
		 *Comments
* @param names {string}
		 * @returns {Promise<string>}
		 **/
	    {{methodName}}: function({{inputs}}) { return wails.CallByID({{ID}}, ...Array.prototype.slice.call(arguments, 0)); },
`

const enumTemplate = `
        	export enum {{.EnumName}} {
        	    {{.EnumValues}}
        	}
`

var reservedWords = []string{
	"abstract",
	"arguments",
	"await",
	"boolean",
	"break",
	"byte",
	"case",
	"catch",
	"char",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"double",
	"else",
	"enum",
	"eval",
	"export",
	"extends",
	"false",
	"final",
	"finally",
	"float",
	"for",
	"function",
	"goto",
	"if",
	"implements",
	"import",
	"in",
	"instanceof",
	"int",
	"interface",
	"let",
	"long",
	"native",
	"new",
	"null",
	"package",
	"private",
	"protected",
	"public",
	"return",
	"short",
	"static",
	"super",
	"switch",
	"synchronized",
	"this",
	"throw",
	"throws",
	"transient",
	"true",
	"try",
	"typeof",
	"var",
	"void",
	"volatile",
	"while",
	"with",
	"yield",
	"object",
}

func sanitiseJSVarName(name string) string {
	// if the name is a reserved word, prefix with an
	// underscore
	if lo.Contains(reservedWords, name) {
		return "_" + name
	}
	return name
}

func GenerateBinding(structName string, method *BoundMethod) (string, []string, []string) {
	var namespacedStructs []string
	var models []string
	result := strings.ReplaceAll(bindingTemplate, "{{structName}}", structName)
	result = strings.ReplaceAll(result, "{{methodName}}", method.Name)
	result = strings.ReplaceAll(result, "{{ID}}", fmt.Sprintf("%v", method.ID))
	comments := strings.TrimSpace(method.DocComment)
	if comments != "" {
		comments = " " + comments
	}
	result = strings.ReplaceAll(result, "Comments", comments)
	var params string
	for _, input := range method.Inputs {
		inputName := sanitiseJSVarName(input.Name)
		pkgName := getPackageName(input)
		if pkgName != "" {
			models = append(models, pkgName)
		}
		if input.Type.IsStruct || input.Type.IsEnum {
			nsStruct := input.NamespacedStructType()
			namespacedStructs = append(namespacedStructs, nsStruct)
		}

		params += "         * @param " + inputName + " {" + input.JSType() + "}\n"
	}
	params = strings.TrimSuffix(params, "\n")
	if len(params) == 0 {
		params = "         *"
	}
	result = strings.ReplaceAll(result, "* @param names {string}", params)
	var inputs string
	for _, input := range method.Inputs {
		pkgName := getPackageName(input)
		if pkgName != "" {
			models = append(models, pkgName)
		}
		inputs += sanitiseJSVarName(input.Name) + ", "
	}
	inputs = strings.TrimSuffix(inputs, ", ")
	args := inputs
	if len(args) > 0 {
		args = ", " + args
	}
	result = strings.ReplaceAll(result, "{{inputs}}", inputs)
	result = strings.ReplaceAll(result, "{{args}}", args)

	// outputs
	var returns string
	if len(method.Outputs) == 0 {
		returns = " * @returns {Promise<void>}"
	} else {
		returns = " * @returns {Promise<"
		for _, output := range method.Outputs {
			pkgName := getPackageName(output)
			if pkgName != "" {
				models = append(models, pkgName)
			}
			jsType := output.JSType()
			if jsType == "error" {
				jsType = "void"
			}
			if output.Type.IsStruct {
				namespacedStructs = append(namespacedStructs, output.NamespacedStructType())
				jsType = output.NamespacedStructVariable()
			}
			returns += jsType + ", "
		}
		returns = strings.TrimSuffix(returns, ", ")
		returns += ">}"
	}
	result = strings.ReplaceAll(result, " * @returns {Promise<string>}", returns)

	return result, lo.Uniq(models), lo.Uniq(namespacedStructs)
}

func getPackageName(input *Parameter) string {
	if !input.Type.IsStruct {
		return ""
	}
	result := input.Type.Package
	if result == "" {
		result = "main"
	}
	return result
}

func normalisePackageNames(packageNames []string) map[string]string {
	// We iterate over the package names and determine if any of them
	// have a forward slash. If this is the case, we assume that the
	// package name is the last element of the path. If this has already
	// been found, then we need to add a digit to the end of the package
	// name to make it unique. We return a map of the original package
	// name to the new package name.
	var result = make(map[string]string)
	var packagesConverted = make(map[string]struct{})
	var count = 1
	for _, packageName := range packageNames {
		var originalPackageName = packageName
		if strings.Contains(packageName, "/") {
			parts := strings.Split(packageName, "/")
			packageName = parts[len(parts)-1]
		}
		if _, ok := packagesConverted[packageName]; ok {
			// We've already seen this package name. Add a digit
			// to the end of the package name to make it unique
			count += 1
			packageName += strconv.Itoa(count)

		}
		packagesConverted[packageName] = struct{}{}
		result[originalPackageName] = packageName
	}

	return result
}

func GenerateBindings(bindings map[string]map[string][]*BoundMethod) map[string]string {

	var result = make(map[string]string)

	var normalisedPackageNames = normalisePackageNames(lo.Keys(bindings))
	// sort the bindings keys
	packageNames := lo.Keys(bindings)
	sort.Strings(packageNames)
	for _, packageName := range packageNames {
		var allModels []string
		var allNamespacedStructs []string

		packageBindings := bindings[packageName]
		structNames := lo.Keys(packageBindings)
		sort.Strings(structNames)
		for _, structName := range structNames {
			result[normalisedPackageNames[packageName]] += "export const " + structName + " = {\n"
			methods := packageBindings[structName]
			sort.Slice(methods, func(i, j int) bool {
				return methods[i].Name < methods[j].Name
			})
			for _, method := range methods {
				thisBinding, models, namespacedStructs := GenerateBinding(structName, method)
				allNamespacedStructs = append(allNamespacedStructs, namespacedStructs...)
				allModels = append(allModels, models...)
				result[normalisedPackageNames[packageName]] += thisBinding
			}
			result[normalisedPackageNames[packageName]] += "};\n\n"
		}

		if len(allNamespacedStructs) > 0 {
			typedefs := "/**\n"
			for _, namespacedStruct := range lo.Uniq(allNamespacedStructs) {
				typedefs += " * @typedef {import('./models')." + namespacedStruct + "} " + strings.ReplaceAll(namespacedStruct, ".", "") + "\n"
			}
			typedefs += " */\n\n"
			result[normalisedPackageNames[packageName]] = typedefs + result[normalisedPackageNames[packageName]]
		}

		result[normalisedPackageNames[packageName]] = header + result[normalisedPackageNames[packageName]]
	}

	return result
}