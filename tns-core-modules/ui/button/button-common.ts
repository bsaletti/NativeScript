﻿import { Button as ButtonDefinition } from ".";
import { TextBase, booleanConverter } from "../text-base";

export * from "../text-base";

export abstract class ButtonBase extends TextBase implements ButtonDefinition {
    public static tapEvent = "tap";

    get textWrap(): boolean {
        return this.style.whiteSpace === "normal";
    }
    set textWrap(value: boolean) {
        if (typeof value === "string") {
            value = booleanConverter(value)
        }
            
        this.style.whiteSpace = value ? "normal" : "nowrap";
    }
}

ButtonBase.prototype.recycleNativeView = "auto";