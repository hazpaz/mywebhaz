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
exports.MenubarShortcut = exports.MenubarSub = exports.MenubarGroup = exports.MenubarSubTrigger = exports.MenubarSubContent = exports.MenubarPortal = exports.MenubarRadioItem = exports.MenubarRadioGroup = exports.MenubarCheckboxItem = exports.MenubarLabel = exports.MenubarSeparator = exports.MenubarItem = exports.MenubarContent = exports.MenubarTrigger = exports.MenubarMenu = exports.Menubar = void 0;
var React = require("react");
var MenubarPrimitive = require("@radix-ui/react-menubar");
var lucide_react_1 = require("lucide-react");
function MenubarMenu(_a) {
    var props = __rest(_a, []);
    return __assign({}, props) /  >
    ;
}
exports.MenubarMenu = MenubarMenu;
function MenubarGroup(_a) {
    var props = __rest(_a, []);
    return __assign({}, props) /  >
    ;
}
exports.MenubarGroup = MenubarGroup;
function MenubarPortal(_a) {
    var props = __rest(_a, []);
    return __assign({}, props) /  >
    ;
}
exports.MenubarPortal = MenubarPortal;
function MenubarRadioGroup(_a) {
    var props = __rest(_a, []);
    return __assign({}, props) /  >
    ;
}
exports.MenubarRadioGroup = MenubarRadioGroup;
function MenubarSub(_a) {
    var props = __rest(_a, []);
    return data - slot;
    "menubar-sub";
    {
        props;
    }
    />;
}
exports.MenubarSub = MenubarSub;
var Menubar = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), Menubar, displayName = MenubarPrimitive.Root.displayName;
exports.Menubar = Menubar;
exports.Menubar = Menubar;
var MenubarTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), MenubarTrigger, displayName = MenubarPrimitive.Trigger.displayName;
exports.MenubarTrigger = MenubarTrigger;
exports.MenubarTrigger = MenubarTrigger;
var MenubarSubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.MenubarSubTrigger = MenubarSubTrigger;
{
    props;
}
    >
        { children: children }
    < lucide_react_1.ChevronRight;
className = "ml-auto h-4 w-4" /  >
    /MenubarPrimitive.SubTrigger>;
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), MenubarSubContent, displayName = MenubarPrimitive.SubContent.displayName;
exports.MenubarSubContent = MenubarSubContent;
exports.MenubarSubContent = MenubarSubContent;
var MenubarContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.alignOffset, alignOffset = _c === void 0 ? -4 : _c, _d = _a.sideOffset, sideOffset = _d === void 0 ? 8 : _d, props = __rest(_a, ["className", "align", "alignOffset", "sideOffset"]);
    return ref = { ref: ref };
}, align = { align: align }, alignOffset = { alignOffset: alignOffset }, sideOffset = { sideOffset: sideOffset }, className = {}, __assign({}, props) /  >
    /MenubarPrimitive.Portal>);
exports.MenubarContent = MenubarContent;
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.MenubarItem = MenubarItem;
{
    props;
}
/>;
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return ref = { ref: ref };
}, className = {}, checked = { checked: checked }, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-4 w-4" /  >
    /MenubarPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /MenubarPrimitive.CheckboxItem>), MenubarCheckboxItem, displayName = MenubarPrimitive.CheckboxItem.displayName;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
var MenubarRadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-2 w-2 fill-current" /  >
    /MenubarPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /MenubarPrimitive.RadioItem>), MenubarRadioItem, displayName = MenubarPrimitive.RadioItem.displayName;
exports.MenubarRadioItem = MenubarRadioItem;
exports.MenubarRadioItem = MenubarRadioItem;
var MenubarLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.MenubarLabel = MenubarLabel;
{
    props;
}
/>;
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), MenubarSeparator, displayName = MenubarPrimitive.Separator.displayName;
exports.MenubarSeparator = MenubarSeparator;
exports.MenubarSeparator = MenubarSeparator;
var MenubarShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
    {
        props;
    }
    />;
};
exports.MenubarShortcut = MenubarShortcut;
MenubarShortcut.displayname = "MenubarShortcut";
