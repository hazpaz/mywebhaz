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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbEllipsis = exports.BreadcrumbSeparator = exports.BreadcrumbPage = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.BreadcrumbList = exports.Breadcrumb = void 0;
var React = require("react");
var react_slot_1 = require("@radix-ui/react-slot");
var Breadcrumb = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return ref;
}, { ref: ref }, aria - label, "breadcrumb", __assign({}, props) /  > );
exports.Breadcrumb = Breadcrumb;
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), BreadcrumbList, displayName = "BreadcrumbList";
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbList = BreadcrumbList;
var BreadcrumbItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), BreadcrumbItem, displayName = "BreadcrumbItem";
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbItem = BreadcrumbItem;
var BreadcrumbLink = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var asChild = _a.asChild, className = _a.className, props = __rest(_a, ["asChild", "className"]);
        var Comp = asChild ? react_slot_1.Slot : "a";
        return ref = { ref: ref };
        className = {};
        { }
    }], props, false));
exports.BreadcrumbLink = BreadcrumbLink;
/>;
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, role = "link", aria - disabled, "true", aria - current, "page", className = {}, __assign({}, props) /  >
), BreadcrumbPage, displayName = "BreadcrumbPage";
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbPage = BreadcrumbPage;
var BreadcrumbSeparator = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return role = "presentation";
};
exports.BreadcrumbSeparator = BreadcrumbSeparator;
aria - hidden;
"true";
className = {};
{
    props;
}
(_a = 
    >
        { children: children }) !== null && _a !== void 0 ? _a : />}
    < /li>;
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return role = "presentation";
};
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
aria - hidden;
"true";
className = {};
{
    props;
}
    >
        className;
"h-4 w-4" /  >
    className;
"sr-only" > More < /span>
    < /span>;
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
