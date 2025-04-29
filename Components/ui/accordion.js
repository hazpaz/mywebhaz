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
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
var React = require("react");
var AccordionPrimitive = require("@radix-ui/react-accordion");
var lucide_react_1 = require("lucide-react");
var Accordion = AccordionPrimitive.Root;
exports.Accordion = Accordion;
var AccordionItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), AccordionItem, displayName = "AccordionItem";
exports.AccordionItem = AccordionItem;
exports.AccordionItem = AccordionItem;
var AccordionTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return className = "flex" >
        ref;
}, { ref: ref }, className = {}, __assign({}, props) >
    { children: children }
    < lucide_react_1.ChevronDown, className = "h-4 w-4 shrink-0 transition-transform duration-200" /  >
    /AccordionPrimitive.Trigger>
    < /AccordionPrimitive.Header>), AccordionTrigger, displayName = AccordionPrimitive.Trigger.displayName;
exports.AccordionTrigger = AccordionTrigger;
exports.AccordionTrigger = AccordionTrigger;
var AccordionContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return ref = { ref: ref };
}, className = "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", __assign({}, props) >
    className, {} > { children: children } < /div>
    < /AccordionPrimitive.Content>), AccordionContent, displayName = AccordionPrimitive.Content.displayName;
exports.AccordionContent = AccordionContent;
exports.AccordionContent = AccordionContent;
