"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var portfolioItems_1 = require("@/data/portfolioItems");
function PortfolioGrid() {
    return id = "work";
    className = "py-8 md:py-16" >
        { /* Portfolio Grid - Desktop View */}
        < div;
    className = "image-grid hidden md:grid grid-cols-2 gap-0" >
        { portfolioItems: portfolioItems_1.portfolioItems, : .map(function (item, index) { return key = { index: index }; }, href = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["/portfolio/", ""], ["/portfolio/", ""])), item.id)) } >
        className;
    {
        "relative group overflow-hidden aspect-[16/9] ".concat(item.isTextOnly ? 'flex items-center justify-center bg-navy' : '', " cursor-pointer");
    }
     >
        {};
    item.isTextOnly ? src = { item: item, : .imageUrl }
        :
    ;
    alt = { item: item, : .title };
    className = "w-full h-full object-cover"
        /  >
        className;
    "hidden group-hover:flex absolute inset-0 bg-black/20 items-center justify-center" >
        className;
    "text-white text-center" >
        className;
    "text-2xl font-playfair" > { item: item, : .title } < /h3>
        < p;
    className = "text-sm" > { item: item, : .year } < /p>
        < /div>
        < /div>
        < />;
    className = "text-white text-center p-8" >
        className;
    "text-3xl font-playfair mb-1" > { item: item, : .title } < /h3>
        < p;
    className = "text-sm" > { item: item, : .year } < /p>
        < /div>;
}
exports.default = PortfolioGrid;
/div>
    < /Link>;
/div>;
{ /* Portfolio Grid - Mobile View */ }
className;
"image-grid md:hidden grid grid-cols-1 gap-4 px-4" >
    { portfolioItems: portfolioItems_1.portfolioItems, : .map(function (item, index) { return key = { index: index }; }, href = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["/portfolio/", ""], ["/portfolio/", ""])), item.id)) } >
    className;
{
    "relative overflow-hidden aspect-[16/9] ".concat(item.isTextOnly ? 'flex items-center justify-center bg-navy' : '', " cursor-pointer");
}
 >
    {};
item.isTextOnly ? src = { item: item, : .imageUrl }
    :
;
alt = { item: item, : .title };
className = "w-full h-full object-cover"
    /  >
    className;
"absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4" >
    className;
"text-xl font-playfair" > { item: item, : .title } < /h3>
    < p;
className = "text-xs" > { item: item, : .year } < /p>
    < /div>
    < />;
className = "text-white text-center p-8" >
    className;
"text-2xl font-playfair mb-1" > { item: item, : .title } < /h3>
    < p;
className = "text-xs" > { item: item, : .year } < /p>
    < /div>;
/div>
    < /Link>;
/div>
    < /section>;
;
var templateObject_1, templateObject_2;
