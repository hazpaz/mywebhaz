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
exports.NavigationMenuViewport = exports.NavigationMenuIndicator = exports.NavigationMenuLink = exports.NavigationMenuTrigger = exports.NavigationMenuContent = exports.NavigationMenuItem = exports.NavigationMenuList = exports.NavigationMenu = exports.navigationMenuTriggerStyle = void 0;
var React = require("react");
var NavigationMenuPrimitive = require("@radix-ui/react-navigation-menu");
var class_variance_authority_1 = require("class-variance-authority");
var NavigationMenu = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    { children: children }
    < NavigationMenuViewport /  >
    /NavigationMenuPrimitive.Root>), NavigationMenu, displayName = NavigationMenuPrimitive.Root.displayName;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenu = NavigationMenu;
var NavigationMenuList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), NavigationMenuList, displayName = NavigationMenuPrimitive.List.displayName;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuList = NavigationMenuList;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
exports.NavigationMenuItem = NavigationMenuItem;
var navigationMenuTriggerStyle = (0, class_variance_authority_1.cva)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
var NavigationMenuTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = { cn: function (navigationMenuTriggerStyle) { } }(), "group", className);
exports.NavigationMenuTrigger = NavigationMenuTrigger;
{
    props;
}
    >
        { children: children };
{
    " ";
}
className;
"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180";
aria - hidden;
"true"
    /  >
    /NavigationMenuPrimitive.Trigger>;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), NavigationMenuContent, displayName = NavigationMenuPrimitive.Content.displayName;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuContent = NavigationMenuContent;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
exports.NavigationMenuLink = NavigationMenuLink;
var NavigationMenuViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {} >
        className;
}, {}, ref = { ref: ref }, __assign({}, props) /  >
    /div>), NavigationMenuViewport, displayName = NavigationMenuPrimitive.Viewport.displayName;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.NavigationMenuViewport = NavigationMenuViewport;
var NavigationMenuIndicator = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" /  >
    /NavigationMenuPrimitive.Indicator>), NavigationMenuIndicator, displayName = NavigationMenuPrimitive.Indicator.displayName;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
