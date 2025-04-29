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
exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetClose = exports.SheetTrigger = exports.SheetOverlay = exports.SheetPortal = exports.Sheet = void 0;
var React = require("react");
var SheetPrimitive = require("@radix-ui/react-dialog");
var class_variance_authority_1 = require("class-variance-authority");
var Sheet = SheetPrimitive.Root;
exports.Sheet = Sheet;
var SheetTrigger = SheetPrimitive.Trigger;
exports.SheetTrigger = SheetTrigger;
var SheetClose = SheetPrimitive.Close;
exports.SheetClose = SheetClose;
var SheetPortal = SheetPrimitive.Portal;
exports.SheetPortal = SheetPortal;
var SheetOverlay = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
}, __assign({}, props), ref = { ref: ref }
    /  >
), SheetOverlay, displayName = SheetPrimitive.Overlay.displayName;
exports.SheetOverlay = SheetOverlay;
exports.SheetOverlay = SheetOverlay;
var sheetVariants = (0, class_variance_authority_1.cva)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
    },
    defaultVariants: {
        side: "right",
    },
});
var SheetContent = React.forwardRef(function (_a, ref) {
    var _b = _a.side, side = _b === void 0 ? "right" : _b, className = _a.className, children = _a.children, props = __rest(_a, ["side", "className", "children"]);
    return (/>
        < SheetPrimitive.Content);
}, ref = { ref: ref }, className = { cn: function (sheetVariants) { } }({ side: side }), className);
exports.SheetContent = SheetContent;
{
    props;
}
    >
        { children: children }
    < SheetPrimitive.Close;
className = "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" >
    className;
"h-4 w-4" /  >
    className;
"sr-only" > Close < /span>
    < /SheetPrimitive.Close>
    < /SheetPrimitive.Content>
    < /SheetPortal>;
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.SheetHeader = SheetHeader;
{
    props;
}
/>;
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.SheetFooter = SheetFooter;
{
    props;
}
/>;
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), SheetTitle, displayName = SheetPrimitive.Title.displayName;
exports.SheetTitle = SheetTitle;
exports.SheetTitle = SheetTitle;
var SheetDescription = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), SheetDescription, displayName = SheetPrimitive.Description.displayName;
exports.SheetDescription = SheetDescription;
exports.SheetDescription = SheetDescription;
