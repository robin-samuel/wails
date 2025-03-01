// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import { Call as $Call, CancellablePromise as $CancellablePromise } from "/wails/runtime.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as nobindingshere$0 from "../no_bindings_here/models.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import * as $models from "./models.js";

/**
 * Get someone.
 * @param {$models.Alias} aliasValue
 * @returns {$CancellablePromise<$models.Person>}
 */
export function Get(aliasValue) {
    return $Call.ByName("main.GreetService.Get", aliasValue);
}

/**
 * Apparently, aliases are all the rage right now.
 * @param {$models.AliasedPerson} p
 * @returns {$CancellablePromise<$models.StrangelyAliasedPerson>}
 */
export function GetButAliased(p) {
    return $Call.ByName("main.GreetService.GetButAliased", p);
}

/**
 * Get someone quite different.
 * @returns {$CancellablePromise<$models.GenericPerson<boolean>>}
 */
export function GetButDifferent() {
    return $Call.ByName("main.GreetService.GetButDifferent");
}

/**
 * @returns {$CancellablePromise<nobindingshere$0.PrivatePerson>}
 */
export function GetButForeignPrivateAlias() {
    return $Call.ByName("main.GreetService.GetButForeignPrivateAlias");
}

/**
 * @returns {$CancellablePromise<$models.AliasGroup>}
 */
export function GetButGenericAliases() {
    return $Call.ByName("main.GreetService.GetButGenericAliases");
}

/**
 * Greet a lot of unusual things.
 * @param {$models.EmptyAliasStruct} $0
 * @param {$models.EmptyStruct} $1
 * @returns {$CancellablePromise<$models.AliasStruct>}
 */
export function Greet($0, $1) {
    return $Call.ByName("main.GreetService.Greet", $0, $1);
}
