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
exports.Progress = void 0;
var React = require("react");
var ProgressPrimitive = require("@radix-ui/react-progress");
var Progress = React.forwardRef(function (_a, ref) {
    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) >
    className, "h-full w-full flex-1 bg-primary transition-all", style = {}, { transform: "translateX(-".concat(100 - (value || 0), "%)") });
exports.Progress = Progress;
/>
    < /ProgressPrimitive.Root>;
Progress.displayName = ProgressPrimitive.Root.displayName;
