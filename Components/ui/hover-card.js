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
exports.HoverCardContent = exports.HoverCardTrigger = exports.HoverCard = void 0;
var React = require("react");
var HoverCardPrimitive = require("@radix-ui/react-hover-card");
var HoverCard = HoverCardPrimitive.Root;
exports.HoverCard = HoverCard;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
exports.HoverCardTrigger = HoverCardTrigger;
var HoverCardContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
    return ref = { ref: ref };
}, align = { align: align }, sideOffset = { sideOffset: sideOffset }, className = {}, __assign({}, props) /  >
), HoverCardContent, displayName = HoverCardPrimitive.Content.displayName;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardContent = HoverCardContent;
