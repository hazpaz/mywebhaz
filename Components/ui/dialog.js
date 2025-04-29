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
exports.DialogDescription = exports.DialogTitle = exports.DialogFooter = exports.DialogHeader = exports.DialogContent = exports.DialogTrigger = exports.DialogClose = exports.DialogOverlay = exports.DialogPortal = exports.Dialog = void 0;
var React = require("react");
var DialogPrimitive = require("@radix-ui/react-dialog");
var Dialog = DialogPrimitive.Root;
exports.Dialog = Dialog;
var DialogTrigger = DialogPrimitive.Trigger;
exports.DialogTrigger = DialogTrigger;
var DialogPortal = DialogPrimitive.Portal;
exports.DialogPortal = DialogPortal;
var DialogClose = DialogPrimitive.Close;
exports.DialogClose = DialogClose;
var DialogOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DialogOverlay, displayName = DialogPrimitive.Overlay.displayName;
exports.DialogOverlay = DialogOverlay;
exports.DialogOverlay = DialogOverlay;
var DialogContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (/>
        < DialogPrimitive.Content);
}, ref = { ref: ref }, className = {}, __assign({}, props) >
    { children: children }
    < DialogPrimitive.Close, className = "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" >
    className, "h-4 w-4" /  >
    className, "sr-only" > Close < /span>
    < /DialogPrimitive.Close>
    < /DialogPrimitive.Content>
    < /DialogPortal>), DialogContent, displayName = DialogPrimitive.Content.displayName;
exports.DialogContent = DialogContent;
exports.DialogContent = DialogContent;
var DialogHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.DialogHeader = DialogHeader;
{
    props;
}
/>;
DialogHeader.displayName = "DialogHeader";
var DialogFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.DialogFooter = DialogFooter;
{
    props;
}
/>;
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DialogTitle, displayName = DialogPrimitive.Title.displayName;
exports.DialogTitle = DialogTitle;
exports.DialogTitle = DialogTitle;
var DialogDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), DialogDescription, displayName = DialogPrimitive.Description.displayName;
exports.DialogDescription = DialogDescription;
exports.DialogDescription = DialogDescription;
