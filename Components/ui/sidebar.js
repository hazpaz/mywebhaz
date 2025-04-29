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
exports.useSidebar = exports.SidebarTrigger = exports.SidebarSeparator = exports.SidebarRail = exports.SidebarProvider = exports.SidebarMenuSubItem = exports.SidebarMenuSubButton = exports.SidebarMenuSub = exports.SidebarMenuSkeleton = exports.SidebarMenuItem = exports.SidebarMenuButton = exports.SidebarMenuBadge = exports.SidebarMenuAction = exports.SidebarMenu = exports.SidebarInset = exports.SidebarInput = exports.SidebarHeader = exports.SidebarGroupLabel = exports.SidebarGroupContent = exports.SidebarGroupAction = exports.SidebarGroup = exports.SidebarFooter = exports.SidebarContent = exports.Sidebar = void 0;
var React = require("react");
var react_slot_1 = require("@radix-ui/react-slot");
var class_variance_authority_1 = require("class-variance-authority");
var use_mobile_1 = require("@/hooks/use-mobile");
var sheet_1 = require("@/components/ui/sheet");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React.createContext(null);
function useSidebar() {
    var context = React.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
exports.useSidebar = useSidebar;
var SidebarProvider = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var _b = _a.defaultOpen, defaultOpen = _b === void 0 ? true : _b, openProp = _a.open, setOpenProp = _a.onOpenChange, className = _a.className, style = _a.style, children = _a.children, props = __rest(_a, ["defaultOpen", "open", "onOpenChange", "className", "style", "children"]);
        var isMobile = (0, use_mobile_1.useIsMobile)();
        var _c = React.useState(false), openMobile = _c[0], setOpenMobile = _c[1];
        // This is the internal state of the sidebar.
        // We use openProp and setOpenProp for control from outside the component.
        var _d = React.useState(defaultOpen), _open = _d[0], _setOpen = _d[1];
        var open = openProp !== null && openProp !== void 0 ? openProp : _open;
        var setOpen = React.useCallback(function (value) {
            var openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            }
            else {
                _setOpen(openState);
            }
            // This sets the cookie to keep the sidebar state.
            document.cookie = "".concat(SIDEBAR_COOKIE_NAME, "=").concat(openState, "; path=/; max-age=").concat(SIDEBAR_COOKIE_MAX_AGE);
        }, [setOpenProp, open]);
        // Helper to toggle the sidebar.
        var toggleSidebar = React.useCallback(function () {
            return isMobile
                ? setOpenMobile(function (open) { return !open; })
                : setOpen(function (open) { return !open; });
        }, [isMobile, setOpen, setOpenMobile]);
        // Adds a keyboard shortcut to toggle the sidebar.
        React.useEffect(function () {
            var handleKeyDown = function (event) {
                if (event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                    (event.metaKey || event.ctrlKey)) {
                    event.preventDefault();
                    toggleSidebar();
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            return function () { return window.removeEventListener("keydown", handleKeyDown); };
        }, [toggleSidebar]);
        // We add a state so that we can do data-state="expanded" or "collapsed".
        // This makes it easier to style the sidebar with Tailwind classes.
        var state = open ? "expanded" : "collapsed";
        var contextValue = React.useMemo(function () { return ({
            state: state,
            open: open,
            setOpen: setOpen,
            isMobile: isMobile,
            openMobile: openMobile,
            setOpenMobile: setOpenMobile,
            toggleSidebar: toggleSidebar,
        }); }, [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
        return value = { contextValue: contextValue } >
            delayDuration;
        {
            0;
        }
         >
            style;
        {
            {
                "--sidebar-width";
                SIDEBAR_WIDTH,
                    "--sidebar-width-icon";
                SIDEBAR_WIDTH_ICON,
                ;
            }
        }
    }], style, false));
exports.SidebarProvider = SidebarProvider;
as;
React.CSSProperties;
className = {};
ref = { ref: ref };
{
    props;
}
    >
        { children: children }
    < /div>
    < /TooltipProvider>
    < /SidebarContext.Provider>;
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var _b = _a.side, side = _b === void 0 ? "left" : _b, _c = _a.variant, variant = _c === void 0 ? "sidebar" : _c, _d = _a.collapsible, collapsible = _d === void 0 ? "offcanvas" : _d, className = _a.className, children = _a.children, props = __rest(_a, ["side", "variant", "collapsible", "className", "children"]);
        var _e = useSidebar(), isMobile = _e.isMobile, state = _e.state, openMobile = _e.openMobile, setOpenMobile = _e.setOpenMobile;
        if (collapsible === "none") {
            return className = {};
            ref = { ref: ref };
            { }
        }
    }], props, false));
exports.Sidebar = Sidebar;
    >
        { children: children }
    < /div>;
if (isMobile) {
    return open = { openMobile: openMobile };
    onOpenChange = { setOpenMobile: setOpenMobile };
    {
        props;
    }
     >
        data - sidebar;
    "sidebar";
    data - mobile;
    "true";
    className = "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden";
    style = {};
    {
        "--sidebar-width";
        SIDEBAR_WIDTH_MOBILE,
        ;
    }
    as;
    React.CSSProperties;
}
side = { side: side }
    >
        className;
"sr-only" >
    Sidebar < /SheetTitle>
    < sheet_1.SheetDescription > Displays;
the;
mobile;
sidebar. < /SheetDescription>
    < /SheetHeader>
    < div;
className = "flex h-full w-full flex-col" > { children: children } < /div>
    < /SheetContent>
    < /Sheet>;
return ref = { ref: ref };
className = "group peer hidden text-sidebar-foreground md:block";
data - state;
{
    state;
}
data - collapsible;
{
    state === "collapsed" ? collapsible : "";
}
data - variant;
{
    variant;
}
data - side;
{
    side;
}
    >
        { /* This is what handles the sidebar gap on desktop */}
    < div;
className = { cn: function (, , , variant) { } } === "floating" || variant === "inset"
    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
    : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]";
/>
    < div;
className = { cn: function (, side) { } } === "left"
    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
    // Adjust the padding for floating and inset variants.
    variant === "floating" || variant === "inset"
        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
    className;
{
    props;
}
    >
        data - sidebar;
"sidebar";
className = "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
    >
        { children: children }
    < /div>
    < /div>
    < /div>;
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React.forwardRef(function (_a, ref) {
    var className = _a.className, onClick = _a.onClick, props = __rest(_a, ["className", "onClick"]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return ref = { ref: ref };
    data - sidebar;
    "trigger";
    variant = "ghost";
    size = "icon";
    className = {};
    onClick = {}(event);
});
exports.SidebarTrigger = SidebarTrigger;
{
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    toggleSidebar();
}
{
    props;
}
    >
        />
    < span;
className = "sr-only" > Toggle;
Sidebar < /span>
    < /Button>;
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var toggleSidebar = useSidebar().toggleSidebar;
    return ref = { ref: ref };
    data - sidebar;
    "rail";
    aria - label;
    "Toggle Sidebar";
    tabIndex = {} - 1;
}, onClick = { toggleSidebar: toggleSidebar }, title = "Toggle Sidebar", className = {}, __assign({}, props) /  >
);
exports.SidebarRail = SidebarRail;
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        className = {};
        { }
    }], props, false));
exports.SidebarInset = SidebarInset;
/>;
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "input";
        className = {};
        { }
    }], props, false));
exports.SidebarInput = SidebarInput;
/>;
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "header";
        className = {};
        { }
    }], props, false));
exports.SidebarHeader = SidebarHeader;
/>;
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "footer";
        className = {};
        { }
    }], props, false));
exports.SidebarFooter = SidebarFooter;
/>;
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "separator";
        className = {};
        { }
    }], props, false));
exports.SidebarSeparator = SidebarSeparator;
/>;
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "content";
        className = {};
        { }
    }], props, false));
exports.SidebarContent = SidebarContent;
/>;
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return ref = { ref: ref };
        data - sidebar;
        "group";
        className = {};
        { }
    }], props, false));
exports.SidebarGroup = SidebarGroup;
/>;
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "asChild"]);
        var Comp = asChild ? react_slot_1.Slot : "div";
        return ref = { ref: ref };
        data - sidebar;
        "group-label";
        className = {};
        { }
    }], props, false));
exports.SidebarGroupLabel = SidebarGroupLabel;
/>;
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, props = __rest(_a, ["className", "asChild"]);
        var Comp = asChild ? react_slot_1.Slot : "button";
        return ref = { ref: ref };
        data - sidebar;
        "group-action";
        className = {};
        { }
    }], props, false));
exports.SidebarGroupAction = SidebarGroupAction;
/>;
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, data - sidebar, "group-content", className = {}, __assign({}, props) /  >
), SidebarGroupContent, displayName = "SidebarGroupContent";
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupContent = SidebarGroupContent;
var SidebarMenu = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, data - sidebar, "menu", className = {}, __assign({}, props) /  >
), SidebarMenu, displayName = "SidebarMenu";
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenu = SidebarMenu;
var SidebarMenuItem = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, data - sidebar, "menu-item", className = {}, __assign({}, props) /  >
), SidebarMenuItem, displayName = "SidebarMenuItem";
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuItem = SidebarMenuItem;
var sidebarMenuButtonVariants = (0, class_variance_authority_1.cva)("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
var SidebarMenuButton = React.forwardRef(function (_a, ref) {
    var _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.isActive, isActive = _c === void 0 ? false : _c, _d = _a.variant, variant = _d === void 0 ? "default" : _d, _e = _a.size, size = _e === void 0 ? "default" : _e, tooltip = _a.tooltip, className = _a.className, props = __rest(_a, ["asChild", "isActive", "variant", "size", "tooltip", "className"]);
    var Comp = asChild ? react_slot_1.Slot : "button";
    var _f = useSidebar(), isMobile = _f.isMobile, state = _f.state;
    var button = ref = { ref: ref };
    data - sidebar;
    "menu-button";
    data - size;
    {
        size;
    }
    data - active;
    {
        isActive;
    }
    className = { cn: function (sidebarMenuButtonVariants) { } }({ variant: variant, size: size }), className;
});
exports.SidebarMenuButton = SidebarMenuButton;
{
    props;
}
/>;
if (!tooltip) {
    return button;
}
if (typeof tooltip === "string") {
    tooltip = {
        children: tooltip,
    };
}
return (asChild > { button: button } < /TooltipTrigger>
    < tooltip_1.TooltipContent);
side = "right";
align = "center";
hidden = { state: state } !== "collapsed" || isMobile;
{
    tooltip;
}
/>
    < /Tooltip>;
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.showOnHover, showOnHover = _c === void 0 ? false : _c, props = __rest(_a, ["className", "asChild", "showOnHover"]);
    var Comp = asChild ? react_slot_1.Slot : "button";
    return ref = { ref: ref };
    data - sidebar;
    "menu-action";
    className = { cn: function (, 
        // Increases the hit area of the button on mobile.
        , , , , , showOnHover) { } } &&
        "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className;
});
exports.SidebarMenuAction = SidebarMenuAction;
{
    props;
}
/>;
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, data - sidebar, "menu-badge", className = {}, __assign({}, props) /  >
), SidebarMenuBadge, displayName = "SidebarMenuBadge";
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuBadge = SidebarMenuBadge;
var SidebarMenuSkeleton = React.forwardRef.apply(React, __spreadArray([function (_a, ref) {
        var className = _a.className, _b = _a.showIcon, showIcon = _b === void 0 ? false : _b, props = __rest(_a, ["className", "showIcon"]);
        // Random width between 50 to 90%.
        var width = React.useMemo(function () {
            return "".concat(Math.floor(Math.random() * 40) + 50, "%");
        }, []);
        return ref = { ref: ref };
        data - sidebar;
        "menu-skeleton";
        className = {};
        { }
    }], props, false));
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
    >
        { showIcon: showIcon } && className;
"size-4 rounded-md";
data - sidebar;
"menu-skeleton-icon"
    /  >
;
className;
"h-4 max-w-[--skeleton-width] flex-1";
data - sidebar;
"menu-skeleton-text";
style = {};
{
    "--skeleton-width";
    width,
    ;
}
as;
React.CSSProperties;
/>
    < /div>;
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ref = { ref: ref };
}, data - sidebar, "menu-sub", className = {}, __assign({}, props) /  >
), SidebarMenuSub, displayName = "SidebarMenuSub";
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSub = SidebarMenuSub;
var SidebarMenuSubItem = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return ref;
}, { ref: ref }, __assign({}, props) /  > );
exports.SidebarMenuSubItem = SidebarMenuSubItem;
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React.forwardRef(function (_a, ref) {
    var _b = _a.asChild, asChild = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "md" : _c, isActive = _a.isActive, className = _a.className, props = __rest(_a, ["asChild", "size", "isActive", "className"]);
    var Comp = asChild ? react_slot_1.Slot : "a";
    return ref = { ref: ref };
    data - sidebar;
    "menu-sub-button";
    data - size;
    {
        size;
    }
    data - active;
    {
        isActive;
    }
    className = { cn: function (, , size) { } } === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className;
});
exports.SidebarMenuSubButton = SidebarMenuSubButton;
{
    props;
}
/>;
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
