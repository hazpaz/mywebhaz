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
exports.InputOTPSeparator = exports.InputOTPSlot = exports.InputOTPGroup = exports.InputOTP = void 0;
var React = require("react");
var input_otp_1 = require("input-otp");
var InputOTP = React.forwardRef(function (_a, ref) {
    var className = _a.className, containerClassName = _a.containerClassName, props = __rest(_a, ["className", "containerClassName"]);
    return ref = { ref: ref };
}, containerClassName = {}, className = {}, __assign({}, props) /  >
), InputOTP, displayName = "InputOTP";
exports.InputOTP = InputOTP;
exports.InputOTP = InputOTP;
var InputOTPGroup = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, className = {}, __assign({}, props) /  >
), InputOTPGroup, displayName = "InputOTPGroup";
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPGroup = InputOTPGroup;
var InputOTPSlot = React.forwardRef(function (_a, ref) {
    var index = _a.index, className = _a.className, props = __rest(_a, ["index", "className"]);
    var inputOTPContext = React.useContext(input_otp_1.OTPInputContext);
    var _b = inputOTPContext.slots[index], char = _b.char, hasFakeCaret = _b.hasFakeCaret, isActive = _b.isActive;
    return ref = { ref: ref };
    className = { cn: function (, isActive) { } } && "z-10 ring-2 ring-ring ring-offset-background",
        className;
});
exports.InputOTPSlot = InputOTPSlot;
{
    props;
}
    >
        { char: char };
{
    hasFakeCaret && className;
    "pointer-events-none absolute inset-0 flex items-center justify-center" >
        className;
    "h-4 w-px animate-caret-blink bg-foreground duration-1000" /  >
        /div>;
}
/div>;
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return ref = { ref: ref };
}, role = "separator", __assign({}, props) >
    />
    < /div>), InputOTPSeparator, displayName = "InputOTPSeparator";
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSeparator = InputOTPSeparator;
