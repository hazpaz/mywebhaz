"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
function MobileMenu(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var handleLinkClick = function (e) {
        onClose();
    };
    return className = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["fixed inset-0 bg-white z-50 ", " flex-col"], ["fixed inset-0 bg-white z-50 ", " flex-col"])), isOpen ? 'flex' : 'hidden');
}
exports.default = MobileMenu;
    >
        className;
"flex justify-between items-center p-6 border-b" >
    className;
"text-xl font-playfair" > Marina;
Weishaupt < /h2>
    < button;
onClick = { onClose: onClose };
className = "text-2xl";
aria - label;
"Close menu"
    >
        className;
"fas fa-times" > /i>
    < /button>
    < /div>
    < nav;
className = "flex flex-col p-6 space-y-6 text-lg" >
    href;
"#";
onClick = { handleLinkClick: handleLinkClick };
className = "hover:text-gray-600"
    >
        Home
    < /a>
    < a;
href = "#work";
onClick = { handleLinkClick: handleLinkClick };
className = "hover:text-gray-600"
    >
        Work
    < /a>
    < a;
href = "#contact";
onClick = { handleLinkClick: handleLinkClick };
className = "hover:text-gray-600"
    >
        Contact
    < /a>
    < /nav>
    < div;
className = "mt-auto p-6 border-t" >
    className;
"flex justify-center gap-6" >
    href;
"https://behance.net/";
className = "text-navy hover:text-blue-500 transition-colors";
aria - label;
"Behance";
target = "_blank";
rel = "noopener noreferrer"
    >
        className;
"fab fa-behance text-xl" > /i>
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
"fab fa-linkedin-in text-xl" > /i>
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
"fab fa-instagram text-xl" > /i>
    < /a>
    < /div>
    < /div>
    < /div>;
;
var templateObject_1;
