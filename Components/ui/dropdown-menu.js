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
exports.DropdownMenuRadioGroup = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuPortal = exports.DropdownMenuGroup = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuLabel = exports.DropdownMenuRadioItem = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenu = void 0;
var React = require("react");
var DropdownMenuPrimitive = require("@radix-ui/react-dropdown-menu");
var lucide_react_1 = require("lucide-react");
var DropdownMenu = DropdownMenuPrimitive.Root;
exports.DropdownMenu = DropdownMenu;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
exports.DropdownMenuGroup = DropdownMenuGroup;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
exports.DropdownMenuPortal = DropdownMenuPortal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
exports.DropdownMenuSub = DropdownMenuSub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
var DropdownMenuSubTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, children = _a.children, props = __rest(_a, ["className", "inset", "children"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
{
    props;
}
    >
        { children: children }
    < lucide_react_1.ChevronRight;
className = "ml-auto" /  >
    /DropdownMenuPrimitive.SubTrigger>;
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DropdownMenuSubContent, displayName = DropdownMenuPrimitive.SubContent.displayName;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
var DropdownMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, props = __rest(_a, ["className", "sideOffset"]);
    return ref = { ref: ref };
}, sideOffset = { sideOffset: sideOffset }, className = {}, __assign({}, props) /  >
    /DropdownMenuPrimitive.Portal>), DropdownMenuContent, displayName = DropdownMenuPrimitive.Content.displayName;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuContent = DropdownMenuContent;
var DropdownMenuItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.DropdownMenuItem = DropdownMenuItem;
{
    props;
}
/>;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, checked = _a.checked, props = __rest(_a, ["className", "children", "checked"]);
    return ref = { ref: ref };
}, className = {}, checked = { checked: checked }, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-4 w-4" /  >
    /DropdownMenuPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /DropdownMenuPrimitive.CheckboxItem>), DropdownMenuCheckboxItem, displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
var DropdownMenuRadioItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" >
    className, "h-2 w-2 fill-current" /  >
    /DropdownMenuPrimitive.ItemIndicator>
    < /span>, { children: children }
    < /DropdownMenuPrimitive.RadioItem>), DropdownMenuRadioItem, displayName = DropdownMenuPrimitive.RadioItem.displayName;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
var DropdownMenuLabel = React.forwardRef(function (_a, ref) {
    var className = _a.className, inset = _a.inset, props = __rest(_a, ["className", "inset"]);
    return ref = { ref: ref };
}, className = { cn: function (, inset) { } } && "pl-8", className);
exports.DropdownMenuLabel = DropdownMenuLabel;
{
    props;
}
/>;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DropdownMenuSeparator, displayName = DropdownMenuPrimitive.Separator.displayName;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
var DropdownMenuShortcut = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
    {
        props;
    }
    />;
};
exports.DropdownMenuShortcut = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
