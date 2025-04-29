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
exports.ToastAction = exports.ToastClose = exports.ToastDescription = exports.ToastTitle = exports.Toast = exports.ToastViewport = exports.ToastProvider = void 0;
var React = require("react");
var ToastPrimitives = require("@radix-ui/react-toast");
var class_variance_authority_1 = require("class-variance-authority");
var ToastProvider = ToastPrimitives.Provider;
exports.ToastProvider = ToastProvider;
var ToastViewport = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ToastViewport, displayName = ToastPrimitives.Viewport.displayName;
exports.ToastViewport = ToastViewport;
exports.ToastViewport = ToastViewport;
var toastVariants = (0, class_variance_authority_1.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
var Toast = React.forwardRef(function (_a, ref) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return ref = { ref: ref };
    className = { cn: function (toastVariants) { } }({ variant: variant }), className;
});
exports.Toast = Toast;
{
    props;
}
/>;
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ToastAction, displayName = ToastPrimitives.Action.displayName;
exports.ToastAction = ToastAction;
exports.ToastAction = ToastAction;
var ToastClose = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, toast - close, "", __assign({}, props) >
    className, "h-4 w-4" /  >
    /ToastPrimitives.Close>), ToastClose, displayName = ToastPrimitives.Close.displayName;
exports.ToastClose = ToastClose;
exports.ToastClose = ToastClose;
var ToastTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ToastTitle, displayName = ToastPrimitives.Title.displayName;
exports.ToastTitle = ToastTitle;
exports.ToastTitle = ToastTitle;
var ToastDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), ToastDescription, displayName = ToastPrimitives.Description.displayName;
exports.ToastDescription = ToastDescription;
exports.ToastDescription = ToastDescription;
