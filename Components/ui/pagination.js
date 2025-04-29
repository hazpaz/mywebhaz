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
exports.PaginationPrevious = exports.PaginationNext = exports.PaginationLink = exports.PaginationItem = exports.PaginationEllipsis = exports.PaginationContent = exports.Pagination = void 0;
var React = require("react");
var lucide_react_1 = require("lucide-react");
var Pagination = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return role = "navigation";
};
exports.Pagination = Pagination;
aria - label;
"pagination";
className = {};
{
    props;
}
/>;
Pagination.displayName = "Pagination";
var PaginationContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), PaginationContent, displayName = "PaginationContent";
exports.PaginationContent = PaginationContent;
exports.PaginationContent = PaginationContent;
var PaginationItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), PaginationItem, displayName = "PaginationItem";
exports.PaginationItem = PaginationItem;
exports.PaginationItem = PaginationItem;
var PaginationLink = function (_a) {
    var className = _a.className, isActive = _a.isActive, _b = _a.size, size = _b === void 0 ? "icon" : _b, props = __rest(_a, ["className", "isActive", "size"]);
    return (aria - current) = { isActive: isActive, "page": undefined };
};
exports.PaginationLink = PaginationLink;
className = { cn: function (buttonVariants) { } }({
    variant: isActive ? "outline" : "ghost",
    size: size,
}),
    className;
{
    props;
}
/>;
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (aria - label) = "Go to previous page";
};
exports.PaginationPrevious = PaginationPrevious;
size = "default";
className = {};
{
    props;
}
    >
        className;
"h-4 w-4" /  >
    Previous < /span>
    < /PaginationLink>;
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (aria - label) = "Go to next page";
};
exports.PaginationNext = PaginationNext;
size = "default";
className = {};
{
    props;
}
    >
        Next < /span>
    < lucide_react_1.ChevronRight;
className = "h-4 w-4" /  >
    /PaginationLink>;
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (aria - hidden);
};
exports.PaginationEllipsis = PaginationEllipsis;
className = {};
{
    props;
}
    >
        className;
"h-4 w-4" /  >
    className;
"sr-only" > More;
pages < /span>
    < /span>;
PaginationEllipsis.displayName = "PaginationEllipsis";
