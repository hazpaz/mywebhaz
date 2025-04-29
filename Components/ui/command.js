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
exports.CommandSeparator = exports.CommandShortcut = exports.CommandItem = exports.CommandGroup = exports.CommandEmpty = exports.CommandList = exports.CommandInput = exports.CommandDialog = exports.Command = void 0;
var React = require("react");
var cmdk_1 = require("cmdk");
var Command = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), Command, displayName = cmdk_1.Command.displayName;
exports.Command = Command;
exports.Command = Command;
var CommandDialog = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (__assign({}, props) >
        className) = "overflow-hidden p-0 shadow-lg" >
        className;
    "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" >
        { children: children }
        < /Command>
        < /DialogContent>
        < /Dialog>;
};
exports.CommandDialog = CommandDialog;
var CommandInput = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = "flex items-center border-b px-3";
}, cmdk - input - wrapper, "" >
    className, "mr-2 h-4 w-4 shrink-0 opacity-50" /  >
    ref, { ref: ref }, className = {}, __assign({}, props) /  >
    /div>), CommandInput, displayName = cmdk_1.Command.Input.displayName;
exports.CommandInput = CommandInput;
exports.CommandInput = CommandInput;
var CommandList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), CommandList, displayName = cmdk_1.Command.List.displayName;
exports.CommandList = CommandList;
exports.CommandList = CommandList;
var CommandEmpty = React.forwardRef(function (props, ref) { return ref = { ref: ref }; }, className = "py-6 text-center text-sm", __assign({}, props) /  >
), CommandEmpty, displayName = cmdk_1.Command.Empty.displayName;
exports.CommandEmpty = CommandEmpty;
exports.CommandEmpty = CommandEmpty;
var CommandGroup = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), CommandGroup, displayName = cmdk_1.Command.Group.displayName;
exports.CommandGroup = CommandGroup;
exports.CommandGroup = CommandGroup;
var CommandSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), CommandSeparator, displayName = cmdk_1.Command.Separator.displayName;
exports.CommandSeparator = CommandSeparator;
exports.CommandSeparator = CommandSeparator;
var CommandItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), CommandItem, displayName = cmdk_1.Command.Item.displayName;
exports.CommandItem = CommandItem;
exports.CommandItem = CommandItem;
var CommandShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
    {
        props;
    }
    />;
};
exports.CommandShortcut = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
