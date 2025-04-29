"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Navigation_1 = require("@/components/Navigation");
function Header() {
    return className = "relative h-screen overflow-hidden" >
        { /* Background Image */}
        < div;
    className = "absolute inset-0" >
        src;
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";
    alt = "Majestic mountain landscape";
    className = "object-cover w-full h-full"
        /  >
        /div>
        < div;
    className = "relative z-10 flex flex-col md:flex-row h-full" >
        { /* Left side (image) */}
        < div;
    className = "w-full md:w-1/2 h-full" >
        { /* This side is just the background image shown above */}
        < /div>;
    { /* Right side (content) */ }
    className;
    "w-full md:w-1/2 h-full bg-white flex flex-col justify-center p-8 md:p-16" >
        { /* Navigation */}
        < Navigation_1.default /  >
        { /* Social Media Icons (Top Right) */}
        < div;
    className = "absolute top-6 md:top-6 right-6 md:left-auto md:right-44 flex gap-3" >
        href;
    "https://behance.net/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "Behance";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-behance text-navy" > /i>
        < /a>
        < a;
    href = "https://instagram.com/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "Instagram";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-instagram text-navy" > /i>
        < /a>
        < a;
    href = "https://linkedin.com/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "LinkedIn";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-linkedin-in text-navy" > /i>
        < /a>
        < /div>;
    { /* Hero Content */ }
    className;
    "mt-16 md:mt-0" >
        className;
    "text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4" >
        Hi;
    I;
    'm Marina Weishaupt
        < /h1>
        < p;
    className = "text-lg text-gray-600 mb-8" >
        I;
    'm a photographer based in Ulm / southern Germany.
        < /p>
        < div;
    className = "flex gap-3 mb-12" >
        href;
    "https://behance.net/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "Behance";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-behance text-navy" > /i>
        < /a>
        < a;
    href = "https://instagram.com/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "Instagram";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-instagram text-navy" > /i>
        < /a>
        < a;
    href = "https://linkedin.com/";
    className = "p-2 rounded-full bg-bluegray hover:bg-gray-200 transition-colors";
    aria - label;
    "LinkedIn";
    target = "_blank";
    rel = "noopener noreferrer"
        >
            className;
    "fab fa-linkedin-in text-navy" > /i>
        < /a>
        < /div>
        < a;
    href = "#work";
    className = "animate-bounce flex justify-center mt-16 md:mt-32" >
        className;
    "w-8 h-8";
    fill = "none";
    stroke = "currentColor";
    viewBox = "0 0 24 24";
    xmlns = "http://www.w3.org/2000/svg" >
        strokeLinecap;
    "round";
    strokeLinejoin = "round";
    strokeWidth = "2";
    d = "M19 9l-7 7-7-7" > /path>
        < /svg>
        < /a>
        < /div>
        < /div>
        < /div>
        < /header>;
    ;
}
exports.default = Header;
