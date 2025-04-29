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
exports.ToggleGroupItem = exports.ToggleGroup = void 0;
var React = require("react");
var ToggleGroupPrimitive = require("@radix-ui/react-toggle-group");
var ToggleGroupContext = React.createContext({
    size: "default",
    variant: "default",
});
var ToggleGroup = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, size = _a.size, children = _a.children, props = __rest(_a, ["className", "variant", "size", "children"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    value, {}, { variant: variant, size: size });
exports.ToggleGroup = ToggleGroup;
 >
    { children: children }
    < /ToggleGroupContext.Provider>
    < /ToggleGroupPrimitive.Root>;
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "children", "variant", "size"]);
    var context = React.useContext(ToggleGroupContext);
    return ref = { ref: ref };
    className = { cn: function (toggleVariants) { } }({
        variant: context.variant || variant,
        size: context.size || size,
    }),
        className;
});
exports.ToggleGroupItem = ToggleGroupItem;
{
    props;
}
    >
        { children: children }
    < /ToggleGroupPrimitive.Item>;
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
