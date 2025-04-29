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
exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialogDescription = exports.AlertDialogTitle = exports.AlertDialogFooter = exports.AlertDialogHeader = exports.AlertDialogContent = exports.AlertDialogTrigger = exports.AlertDialogOverlay = exports.AlertDialogPortal = exports.AlertDialog = void 0;
var React = require("react");
var AlertDialogPrimitive = require("@radix-ui/react-alert-dialog");
var AlertDialog = AlertDialogPrimitive.Root;
exports.AlertDialog = AlertDialog;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
exports.AlertDialogTrigger = AlertDialogTrigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
exports.AlertDialogPortal = AlertDialogPortal;
var AlertDialogOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
}, __assign({}, props), ref = { ref: ref }
    /  >
), AlertDialogOverlay, displayName = AlertDialogPrimitive.Overlay.displayName;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogOverlay = AlertDialogOverlay;
var AlertDialogContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (/>
        < AlertDialogPrimitive.Content);
}, ref = { ref: ref }, className = {}, __assign({}, props) /  >
    /AlertDialogPortal>), AlertDialogContent, displayName = AlertDialogPrimitive.Content.displayName;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogContent = AlertDialogContent;
var AlertDialogHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.AlertDialogHeader = AlertDialogHeader;
{
    props;
}
/>;
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.AlertDialogFooter = AlertDialogFooter;
{
    props;
}
/>;
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), AlertDialogTitle, displayName = AlertDialogPrimitive.Title.displayName;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTitle = AlertDialogTitle;
var AlertDialogDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), AlertDialogDescription, displayName = AlertDialogPrimitive.Description.displayName;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogDescription = AlertDialogDescription;
var AlertDialogAction = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = { cn: function (buttonVariants) { } }(), className);
exports.AlertDialogAction = AlertDialogAction;
{
    props;
}
/>;
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = { cn: function (buttonVariants) { } }({ variant: "outline" }), "mt-2 sm:mt-0", className);
exports.AlertDialogCancel = AlertDialogCancel;
{
    props;
}
/>;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
