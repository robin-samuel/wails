// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import { Call as $Call, CancellablePromise as $CancellablePromise, Create as $Create } from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * @param {number[]} $in
 * @returns {$CancellablePromise<void>}
 */
export function ArrayInt($in) {
    return $Call.ByName("main.GreetService.ArrayInt", $in);
}

/**
 * @param {boolean} $in
 * @returns {$CancellablePromise<boolean>}
 */
export function BoolInBoolOut($in) {
    return $Call.ByName("main.GreetService.BoolInBoolOut", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Float32InFloat32Out($in) {
    return $Call.ByName("main.GreetService.Float32InFloat32Out", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Float64InFloat64Out($in) {
    return $Call.ByName("main.GreetService.Float64InFloat64Out", $in);
}

/**
 * Greet someone
 * @param {string} name
 * @returns {$CancellablePromise<string>}
 */
export function Greet(name) {
    return $Call.ByName("main.GreetService.Greet", name);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Int16InIntOut($in) {
    return $Call.ByName("main.GreetService.Int16InIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function Int16PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.Int16PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Int32InIntOut($in) {
    return $Call.ByName("main.GreetService.Int32InIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function Int32PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.Int32PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Int64InIntOut($in) {
    return $Call.ByName("main.GreetService.Int64InIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function Int64PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.Int64PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function Int8InIntOut($in) {
    return $Call.ByName("main.GreetService.Int8InIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function Int8PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.Int8PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function IntInIntOut($in) {
    return $Call.ByName("main.GreetService.IntInIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function IntPointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.IntPointerInAndOutput", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function IntPointerInputNamedOutputs($in) {
    return $Call.ByName("main.GreetService.IntPointerInputNamedOutputs", $in);
}

/**
 * @param {{ [_: `${number}`]: number }} $in
 * @returns {$CancellablePromise<void>}
 */
export function MapIntInt($in) {
    return $Call.ByName("main.GreetService.MapIntInt", $in);
}

/**
 * @param {{ [_: `${number}`]: number | null }} $in
 * @returns {$CancellablePromise<void>}
 */
export function MapIntIntPointer($in) {
    return $Call.ByName("main.GreetService.MapIntIntPointer", $in);
}

/**
 * @param {{ [_: `${number}`]: number[] }} $in
 * @returns {$CancellablePromise<void>}
 */
export function MapIntSliceInt($in) {
    return $Call.ByName("main.GreetService.MapIntSliceInt", $in);
}

/**
 * @param {{ [_: `${number}`]: number[] }} $in
 * @returns {$CancellablePromise<{ [_: `${number}`]: number[] }>}
 */
export function MapIntSliceIntInMapIntSliceIntOut($in) {
    return $Call.ByName("main.GreetService.MapIntSliceIntInMapIntSliceIntOut", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType1($result);
    }));
}

/**
 * @returns {$CancellablePromise<string>}
 */
export function NoInputsStringOut() {
    return $Call.ByName("main.GreetService.NoInputsStringOut");
}

/**
 * @param {boolean | null} $in
 * @returns {$CancellablePromise<boolean | null>}
 */
export function PointerBoolInBoolOut($in) {
    return $Call.ByName("main.GreetService.PointerBoolInBoolOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function PointerFloat32InFloat32Out($in) {
    return $Call.ByName("main.GreetService.PointerFloat32InFloat32Out", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function PointerFloat64InFloat64Out($in) {
    return $Call.ByName("main.GreetService.PointerFloat64InFloat64Out", $in);
}

/**
 * @param {{ [_: `${number}`]: number } | null} $in
 * @returns {$CancellablePromise<void>}
 */
export function PointerMapIntInt($in) {
    return $Call.ByName("main.GreetService.PointerMapIntInt", $in);
}

/**
 * @param {string | null} $in
 * @returns {$CancellablePromise<string | null>}
 */
export function PointerStringInStringOut($in) {
    return $Call.ByName("main.GreetService.PointerStringInStringOut", $in);
}

/**
 * @param {string[]} $in
 * @returns {$CancellablePromise<string[]>}
 */
export function StringArrayInputNamedOutput($in) {
    return $Call.ByName("main.GreetService.StringArrayInputNamedOutput", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType2($result);
    }));
}

/**
 * @param {string[]} $in
 * @returns {$CancellablePromise<string[]>}
 */
export function StringArrayInputNamedOutputs($in) {
    return $Call.ByName("main.GreetService.StringArrayInputNamedOutputs", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType2($result);
    }));
}

/**
 * @param {string[]} $in
 * @returns {$CancellablePromise<string[]>}
 */
export function StringArrayInputStringArrayOut($in) {
    return $Call.ByName("main.GreetService.StringArrayInputStringArrayOut", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType2($result);
    }));
}

/**
 * @param {string[]} $in
 * @returns {$CancellablePromise<string>}
 */
export function StringArrayInputStringOut($in) {
    return $Call.ByName("main.GreetService.StringArrayInputStringOut", $in);
}

/**
 * @param {$models.Person} $in
 * @returns {$CancellablePromise<$models.Person>}
 */
export function StructInputStructOutput($in) {
    return $Call.ByName("main.GreetService.StructInputStructOutput", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType3($result);
    }));
}

/**
 * @param {$models.Person | null} $in
 * @returns {$CancellablePromise<void>}
 */
export function StructPointerInputErrorOutput($in) {
    return $Call.ByName("main.GreetService.StructPointerInputErrorOutput", $in);
}

/**
 * @param {$models.Person | null} $in
 * @returns {$CancellablePromise<$models.Person | null>}
 */
export function StructPointerInputStructPointerOutput($in) {
    return $Call.ByName("main.GreetService.StructPointerInputStructPointerOutput", $in).then(/** @type {($result: any) => any} */(($result) => {
        return $$createType4($result);
    }));
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function UInt16InUIntOut($in) {
    return $Call.ByName("main.GreetService.UInt16InUIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function UInt16PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.UInt16PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function UInt32InUIntOut($in) {
    return $Call.ByName("main.GreetService.UInt32InUIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function UInt32PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.UInt32PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function UInt64InUIntOut($in) {
    return $Call.ByName("main.GreetService.UInt64InUIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function UInt64PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.UInt64PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function UInt8InUIntOut($in) {
    return $Call.ByName("main.GreetService.UInt8InUIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function UInt8PointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.UInt8PointerInAndOutput", $in);
}

/**
 * @param {number} $in
 * @returns {$CancellablePromise<number>}
 */
export function UIntInUIntOut($in) {
    return $Call.ByName("main.GreetService.UIntInUIntOut", $in);
}

/**
 * @param {number | null} $in
 * @returns {$CancellablePromise<number | null>}
 */
export function UIntPointerInAndOutput($in) {
    return $Call.ByName("main.GreetService.UIntPointerInAndOutput", $in);
}

// Private type creation functions
const $$createType0 = $Create.Array($Create.Any);
const $$createType1 = $Create.Map($Create.Any, $$createType0);
const $$createType2 = $Create.Array($Create.Any);
const $$createType3 = $models.Person.createFrom;
const $$createType4 = $Create.Nullable($$createType3);
