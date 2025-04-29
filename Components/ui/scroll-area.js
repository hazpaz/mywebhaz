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
exports.ScrollBar = exports.ScrollArea = void 0;
var React = require("react");
var ScrollAreaPrimitive = require("@radix-ui/react-scroll-area");
var ScrollArea = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "h-full w-full rounded-[inherit]" >
    { children: children }
    < /ScrollAreaPrimitive.Viewport>
    < ScrollBar /  >
    />
    < /ScrollAreaPrimitive.Root>), ScrollArea, displayName = ScrollAreaPrimitive.Root.displayName;
exports.ScrollArea = ScrollArea;
exports.ScrollArea = ScrollArea;
var ScrollBar = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.orientation, orientation = _b === void 0 ? "vertical" : _b, props = __rest(_a, ["className", "orientation"]);
    return ref = { ref: ref };
}, orientation = { orientation: orientation }, className = { cn: function (, orientation) { } } === "vertical" &&
    "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" &&
    "h-2.5 flex-col border-t border-t-transparent p-[1px]", className);
exports.ScrollBar = ScrollBar;
{
    props;
}
    >
        className;
"relative flex-1 rounded-full bg-border" /  >
    /ScrollAreaPrimitive.ScrollAreaScrollbar>;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
