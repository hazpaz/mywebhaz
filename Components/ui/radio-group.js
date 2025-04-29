"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroupItem = exports.RadioGroup = void 0;
var React = require("react");
var RadioGroupPrimitive = require("@radix-ui/react-radio-group");
var RadioGroup = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return className = {};
        { }
    }], props, false));
exports.RadioGroup = RadioGroup;
ref = { ref: ref }
    /  >
;
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        className = {};
        { }
    }], props, false));
exports.RadioGroupItem = RadioGroupItem;
    >
        className;
"flex items-center justify-center" >
    className;
"h-2.5 w-2.5 fill-current text-current" /  >
    /RadioGroupPrimitive.Indicator>
    < /RadioGroupPrimitive.Item>;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
