"use client";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizableHandle = exports.ResizablePanel = exports.ResizablePanelGroup = void 0;
var ResizablePrimitive = require("react-resizable-panels");
var ResizablePanelGroup = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return className = {};
};
exports.ResizablePanelGroup = ResizablePanelGroup;
{
    props;
}
/>;
var ResizablePanel = ResizablePrimitive.Panel;
exports.ResizablePanel = ResizablePanel;
var ResizableHandle = function (_a) {
    var withHandle = _a.withHandle, className = _a.className, props = __rest(_a, ["withHandle", "className"]);
    return className = {};
};
exports.ResizableHandle = ResizableHandle;
{
    props;
}
    >
        { withHandle: withHandle } && className;
"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border" >
    className;
"h-2.5 w-2.5" /  >
    /div>;
/ResizablePrimitive.PanelResizeHandle>;
