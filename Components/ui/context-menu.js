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
exports.ContextMenuRadioGroup = exports.ContextMenuSubTrigger = exports.ContextMenuSubContent = exports.ContextMenuSub = exports.ContextMenuPortal = exports.ContextMenuGroup = exports.ContextMenuShortcut = exports.ContextMenuSeparator = exports.ContextMenuLabel = exports.ContextMenuRadioItem = exports.ContextMenuCheckboxItem = exports.ContextMenuItem = exports.ContextMenuContent = exports.ContextMenuTrigger = exports.ContextMenu = void 0;
var React = require("react");
var ContextMenuPrimitive = require("@radix-ui/react-context-menu");
var lucide_react_1 = require("lucide-react");
var ContextMenu = ContextMenuPrimitive.Root;
exports.ContextMenu = ContextMenu;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
exports.ContextMenuTrigger = ContextMenuTrigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
exports.ContextMenuGroup = ContextMenuGroup;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
exports.ContextMenuPortal = ContextMenuPortal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
exports.ContextMenuSub = ContextMenuSub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
var ContextMenuSubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
{
    props;
}
    >
        { children: children }
    < lucide_react_1.ChevronRight;
className = "ml-auto h-4 w-4" /  >
    /ContextMenuPrimitive.SubTrigger>;
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ContextMenuSubContent, displayName = ContextMenuPrimitive.SubContent.displayName;
exports.ContextMenuSubContent = ContextMenuSubContent;
exports.ContextMenuSubContent = ContextMenuSubContent;
var ContextMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
    /ContextMenuPrimitive.Portal>), ContextMenuContent, displayName = ContextMenuPrimitive.Content.displayName;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuContent = ContextMenuContent;
var ContextMenuItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.ContextMenuItem = ContextMenuItem;
{
    props;
}
/>;
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return ref = { ref: ref };
}, className = {}, checked = { checked: checked }, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-4 w-4" /  >
    /ContextMenuPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /ContextMenuPrimitive.CheckboxItem>), ContextMenuCheckboxItem, displayName = ContextMenuPrimitive.CheckboxItem.displayName;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
var ContextMenuRadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-2 w-2 fill-current" /  >
    /ContextMenuPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /ContextMenuPrimitive.RadioItem>), ContextMenuRadioItem, displayName = ContextMenuPrimitive.RadioItem.displayName;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
var ContextMenuLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.ContextMenuLabel = ContextMenuLabel;
{
    props;
}
/>;
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ContextMenuSeparator, displayName = ContextMenuPrimitive.Separator.displayName;
exports.ContextMenuSeparator = ContextMenuSeparator;
exports.ContextMenuSeparator = ContextMenuSeparator;
var ContextMenuShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
    {
        props;
    }
    />;
};
exports.ContextMenuShortcut = ContextMenuShortcut;
ContextMenuShortcut.displayName = "ContextMenuShortcut";
