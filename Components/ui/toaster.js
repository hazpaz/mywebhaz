"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = void 0;
var use_toast_1 = require("@/hooks/use-toast");
function Toaster() {
    var toasts = (0, use_toast_1.useToast)().toasts;
    return ({ toasts: toasts, : .map.apply(, __spreadArray([function (_a) {
                var id = _a.id, title = _a.title, description = _a.description, action = _a.action, props = __rest(_a, ["id", "title", "description", "action"]);
                return key = { id: id };
                { }
            }], props, false)) } >
        className) = "grid gap-1" >
        { title: title } && { title: title } < /ToastTitle>};
    {
        description && ({ description: description } < /ToastDescription>);
    }
    /div>;
    {
        action;
    }
    />
        < /Toast>;
}
exports.Toaster = Toaster;
/>
    < /ToastProvider>;
