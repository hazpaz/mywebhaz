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
exports.DrawerDescription = exports.DrawerTitle = exports.DrawerFooter = exports.DrawerHeader = exports.DrawerContent = exports.DrawerClose = exports.DrawerTrigger = exports.DrawerOverlay = exports.DrawerPortal = exports.Drawer = void 0;
var React = require("react");
var vaul_1 = require("vaul");
var Drawer = function (_a) {
    var _b = _a.shouldScaleBackground, shouldScaleBackground = _b === void 0 ? true : _b, props = __rest(_a, ["shouldScaleBackground"]);
    return shouldScaleBackground = { shouldScaleBackground: shouldScaleBackground };
};
exports.Drawer = Drawer;
{
    props;
}
/>;
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul_1.Drawer.Trigger;
exports.DrawerTrigger = DrawerTrigger;
var DrawerPortal = vaul_1.Drawer.Portal;
exports.DrawerPortal = DrawerPortal;
var DrawerClose = vaul_1.Drawer.Close;
exports.DrawerClose = DrawerClose;
var DrawerOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DrawerOverlay, displayName = vaul_1.Drawer.Overlay.displayName;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerOverlay = DrawerOverlay;
var DrawerContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (/>
        < vaul_1.Drawer.Content);
}, ref = { ref: ref }, className = {}, __assign({}, props) >
    className, "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" /  >
    { children: children }
    < /DrawerPrimitive.Content>
    < /DrawerPortal>), DrawerContent, displayName = "DrawerContent";
exports.DrawerContent = DrawerContent;
exports.DrawerContent = DrawerContent;
var DrawerHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.DrawerHeader = DrawerHeader;
{
    props;
}
/>;
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.DrawerFooter = DrawerFooter;
{
    props;
}
/>;
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DrawerTitle, displayName = vaul_1.Drawer.Title.displayName;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTitle = DrawerTitle;
var DrawerDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DrawerDescription, displayName = vaul_1.Drawer.Description.displayName;
exports.DrawerDescription = DrawerDescription;
exports.DrawerDescription = DrawerDescription;
