"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_found_1 = require("@/pages/not-found");
var Home_1 = require("@/pages/Home");
var PortfolioDetail_1 = require("@/pages/PortfolioDetail");
function Router() {
    return path = "/";
    component = { Home: Home_1.default } /  >
        path;
    "/portfolio/:id";
    component = { PortfolioDetail: PortfolioDetail_1.default } /  >
        component;
    {
        not_found_1.default;
    }
    />
        < /Switch>;
    ;
}
function App() {
    return (/>
        < Router /  >
        /TooltipProvider>);
}
exports.default = App;
