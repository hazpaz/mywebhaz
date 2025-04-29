"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wouter_1 = require("wouter");
var portfolioItems_1 = require("@/data/portfolioItems");
var wouter_2 = require("wouter");
var react_1 = require("react");
function PortfolioDetail() {
    var _a = (0, wouter_1.useRoute)("/portfolio/:id"), params = _a[1];
    var id = params === null || params === void 0 ? void 0 : params.id;
    var item = portfolioItems_1.portfolioItems.find(function (item) { return item.id === id; });
    (0, react_1.useEffect)(function () {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    if (!item) {
        return />;;
    }
    return className = "min-h-screen" >
        { /* Header */}
        < header;
    className = "bg-white sticky top-0 z-10 border-b" >
        className;
    "max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" >
        href;
    "/" >
        className;
    "text-xl font-playfair font-bold text-navy cursor-pointer" > Marina;
    Weishaupt < /span>
        < /Link>
        < div;
    className = "flex items-center space-x-6" >
        href;
    "/#work" >
        className;
    "text-navy hover:opacity-80 transition-opacity cursor-pointer" >
        className;
    "hidden sm:inline" > Back;
    to < /span>Work
        < /span>
        < /Link>
        < div;
    className = "flex space-x-3" >
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
        < /div>
        < /div>
        < /header>;
    { /* Main Content */ }
    className;
    "py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" >
        { /* Title Section */}
        < div;
    className = "text-center mb-12" >
        className;
    "text-3xl md:text-5xl font-playfair font-bold mb-4 text-navy" > { item: item, : .title } < /h1>
        < p;
    className = "text-lg text-gray-600" > { item: item, : .year } < /p>
        < /div>;
    { /* Main Image */ }
    {
        !item.isTextOnly && className;
        "w-full aspect-[16/9] md:aspect-[21/9] mb-12 overflow-hidden rounded-lg" >
            src;
        {
            item.imageUrl;
        }
        alt = { item: item, : .title };
        className = "w-full h-full object-cover"
            /  >
            /div>;
    }
    { /* Description */ }
    className;
    "max-w-3xl mx-auto mb-16" >
        className;
    "text-lg text-gray-700 leading-relaxed" >
        { item: item, : .description }
        < /p>
        < /div>;
    { /* Additional Images */ }
    {
        item.additionalImages && item.additionalImages.length > 0 && className;
        "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" >
            { item: item, : .additionalImages.map(function (imageUrl, index) { return key = { index: index }; }, className = "w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md" >
                    src, { imageUrl: imageUrl }, alt = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " - Image ", ""], ["", " - Image ", ""])), item.title, index + 1)) };
        className = "w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            /  >
            /div>;
    }
    /div>;
}
exports.default = PortfolioDetail;
{ /* Navigation buttons */ }
className;
"flex flex-col sm:flex-row justify-between items-center mt-20" >
    href;
"/#work" >
    className;
"bg-navy hover:bg-opacity-90 text-white mb-4 sm:mb-0" >
    className;
"fas fa-arrow-left mr-2" > /i> Back to All Projects
    < /Button>
    < /Link>
    < wouter_2.Link;
href = "/#contact" >
    variant;
"outline";
className = "border-navy text-navy hover:bg-navy hover:text-white" >
    Get in Touch < i;
className = "fas fa-arrow-right ml-2" > /i>
    < /Button>
    < /Link>
    < /div>
    < /main>;
{ /* Footer */ }
className;
"bg-lightgray py-8 mt-16" >
    className;
"max-w-7xl mx-auto px-4 sm:px-6" >
    className;
"flex flex-col md:flex-row justify-between items-center" >
    className;
"text-sm text-gray-600 mb-4 md:mb-0" >
;
{
    new Date().getFullYear();
}
Marina;
Weishaupt.All;
rights;
reserved.
    < /p>
    < wouter_2.Link;
href = "/" >
    className;
"bg-navy text-white p-2 rounded-full hover:bg-opacity-90 transition-colors inline-block cursor-pointer";
aria - label;
"Back to top" >
    className;
"w-5 h-5";
fill = "none";
stroke = "currentColor";
viewBox = "0 0 24 24";
xmlns = "http://www.w3.org/2000/svg" >
    strokeLinecap;
"round";
strokeLinejoin = "round";
strokeWidth = "2";
d = "M5 15l7-7 7 7" > /path>
    < /svg>
    < /span>
    < /Link>
    < /div>
    < /div>
    < /footer>
    < /div>;
;
var templateObject_1;
