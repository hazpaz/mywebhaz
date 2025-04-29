"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var PortfolioGrid_1 = require("@/components/PortfolioGrid");
var Footer_1 = require("@/components/Footer");
var button_1 = require("@/components/ui/button");
function Home() {
    var _a = (0, react_1.useState)(false), isMobileMenuOpen = _a[0], setIsMobileMenuOpen = _a[1];
    var toggleMobileMenu = function () {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
    };
    var closeMobileMenu = function () {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = "";
    };
    return className = "min-h-screen text-navy" >
        />
        < PortfolioGrid_1.default /  >
        />
        < Footer_1.default /  >
        isOpen;
    {
        isMobileMenuOpen;
    }
    onClose = { closeMobileMenu: closeMobileMenu }
        /  >
        { /* Mobile Menu Toggle Button */}
        < button_1.Button;
    onClick = { toggleMobileMenu: toggleMobileMenu };
    className = "md:hidden fixed bottom-6 right-6 z-40 bg-navy text-white p-6 rounded-full shadow-lg h-12 w-12 flex items-center justify-center";
    aria - label;
    "Toggle mobile menu"
        >
            className;
    "fas fa-bars" > /i>
        < /Button>
        < /div>;
    ;
}
exports.default = Home;
