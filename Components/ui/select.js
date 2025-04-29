"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectScrollDownButton = exports.SelectScrollUpButton = exports.SelectSeparator = exports.SelectItem = exports.SelectLabel = exports.SelectContent = exports.SelectTrigger = exports.SelectValue = exports.SelectGroup = exports.Select = void 0;
var React = require("react");
var SelectPrimitive = require("@radix-ui/react-select");
var Select = SelectPrimitive.Root;
exports.Select = Select;
var SelectGroup = SelectPrimitive.Group;
exports.SelectGroup = SelectGroup;
var SelectValue = SelectPrimitive.Value;
exports.SelectValue = SelectValue;
var SelectTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    { children: children }
    < SelectPrimitive.Icon, asChild >
    className, "h-4 w-4 opacity-50" /  >
    /SelectPrimitive.Icon>
    < /SelectPrimitive.Trigger>), SelectTrigger, displayName = SelectPrimitive.Trigger.displayName;
exports.SelectTrigger = SelectTrigger;
exports.SelectTrigger = SelectTrigger;
var SelectScrollUpButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "h-4 w-4" /  >
    /SelectPrimitive.ScrollUpButton>), SelectScrollUpButton, displayName = SelectPrimitive.ScrollUpButton.displayName;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
var SelectScrollDownButton = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "h-4 w-4" /  >
    /SelectPrimitive.ScrollDownButton>), SelectScrollDownButton, displayName = SelectPrimitive.ScrollDownButton.displayName;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollDownButton = SelectScrollDownButton;
var SelectContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, _b = _a.position, position = _b === void 0 ? "popper" : _b, props = __rest(_a, ["className", "children", "position"]);
    return ref = { ref: ref };
}, className = { cn: function (, position) { } } === "popper" &&
    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className);
exports.SelectContent = SelectContent;
position = { position: position };
{
    props;
}
    >
        />
    < SelectPrimitive.Viewport;
className = { cn: function (, position) { } } === "popper" &&
    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]";
    >
        { children: children }
    < /SelectPrimitive.Viewport>
    < SelectScrollDownButton /  >
    /SelectPrimitive.Content>
    < /SelectPrimitive.Portal>;
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), SelectLabel, displayName = SelectPrimitive.Label.displayName;
exports.SelectLabel = SelectLabel;
exports.SelectLabel = SelectLabel;
var SelectItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-4 w-4" /  >
    /SelectPrimitive.ItemIndicator>
    < /span>
    < SelectPrimitive.ItemText > { children: children } < /SelectPrimitive.ItemText>
    < /SelectPrimitive.Item>), SelectItem, displayName = SelectPrimitive.Item.displayName;
exports.SelectItem = SelectItem;
exports.SelectItem = SelectItem;
var SelectSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), SelectSeparator, displayName = SelectPrimitive.Separator.displayName;
exports.SelectSeparator = SelectSeparator;
exports.SelectSeparator = SelectSeparator;
