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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var use_toast_1 = require("@/hooks/use-toast");
function ContactSection() {
    var toast = (0, use_toast_1.useToast)().toast;
    var _a = (0, react_1.useState)({
        name: "",
        email: "",
        message: ""
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Error",
                description: "Please fill out all fields",
                variant: "destructive"
            });
            return;
        }
        // Show success message
        toast({
            title: "Success",
            description: "Your message has been sent. Thank you!",
        });
        // Reset form
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };
    return id = "contact";
    className = "py-16 px-8 md:px-16 bg-lightgray" >
        className;
    "max-w-4xl mx-auto" >
        className;
    "text-3xl md:text-4xl font-playfair font-bold mb-8" > Get in touch < /h2>
        < div;
    className = "grid md:grid-cols-2 gap-8" >
        className;
    "text-lg mb-6" >
        I;
    'm always interested in new projects and collaborations. Feel free to reach out if you';
    d;
    like;
    to;
    work;
    together;
    or;
    just;
    say;
    hello.
        < /p>
        < div;
    className = "mb-4" >
        className;
    "font-medium mb-1" > Email < /h3>
        < a;
    href = "mailto:contact@marinaweishaupt.com";
    className = "text-blue-600 hover:underline" >
        contact;
    /a>
        < /div>
        < div;
    className = "mb-8" >
        className;
    "font-medium mb-1" > Social < /h3>
        < div;
    className = "flex gap-4" >
        href;
    "https://behance.net/";
    className = "text-navy hover:text-blue-500 transition-colors";
    aria - label;
    "Behance";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-behance text-lg" > /i>
        < /a>
        < a;
    href = "https://linkedin.com/";
    className = "text-navy hover:text-blue-500 transition-colors";
    aria - label;
    "LinkedIn";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-linkedin-in text-lg" > /i>
        < /a>
        < a;
    href = "https://instagram.com/";
    className = "text-navy hover:text-blue-500 transition-colors";
    aria - label;
    "Instagram";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-instagram text-lg" > /i>
        < /a>
        < /div>
        < /div>
        < /div>
        < div >
        onSubmit;
    {
        handleSubmit;
    }
    className = "space-y-4" >
        htmlFor;
    "name";
    className = "block mb-1 font-medium" > Name < /label>
        < input_1.Input;
    type = "text";
    id = "name";
    name = "name";
    value = { formData: formData, : .name };
    onChange = { handleChange: handleChange };
    className = "w-full p-2 border border-gray-300 rounded";
    required
        /  >
        /div>
        < div >
        htmlFor;
    "email";
    className = "block mb-1 font-medium" > Email < /label>
        < input_1.Input;
    type = "email";
    id = "email";
    name = "email";
    value = { formData: formData, : .email };
    onChange = { handleChange: handleChange };
    className = "w-full p-2 border border-gray-300 rounded";
    required
        /  >
        /div>
        < div >
        htmlFor;
    "message";
    className = "block mb-1 font-medium" > Message < /label>
        < textarea_1.Textarea;
    id = "message";
    name = "message";
    rows = { 4:  };
    value = { formData: formData, : .message };
    onChange = { handleChange: handleChange };
    className = "w-full p-2 border border-gray-300 rounded";
    required
        /  >
        /div>
        < button_1.Button;
    type = "submit";
    className = "bg-navy text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
        >
            Send;
    Message
        < /Button>
        < /form>
        < /div>
        < /div>
        < /div>
        < /section>;
    ;
}
exports.default = ContactSection;
