module.exports = {

"[project]/src/app/_components/carousel/CarouselDots.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CarouselDots": ()=>CarouselDots
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function CarouselDots({ count, currentIndex, onDotClick }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
        children: Array.from({
            length: count
        }).map((_, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: ()=>onDotClick(index),
                className: `w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`,
                "aria-label": `Go to slide ${index + 1}`
            }, index, false, {
                fileName: "<[project]/src/app/_components/carousel/CarouselDots.tsx>",
                lineNumber: 13,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/carousel/CarouselDots.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_components/carousel/CarouselItem.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CarouselItem": ()=>CarouselItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function CarouselItem({ image, title, description, isActive }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `absolute inset-0 transition-all duration-500 ease-in-out transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                src: image,
                alt: title,
                className: "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute bottom-0 left-0 right-0 p-8 text-white",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                            className: "text-2xl font-bold mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-sm opacity-90",
                            children: description
                        }, void 0, false, {
                            fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_components/carousel/CarouselItem.tsx>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_components/carousel/useCarouselControls.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCarouselControls": ()=>useCarouselControls
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function useCarouselControls({ currentIndex, setCurrentIndex, itemsLength, autoPlayInterval }) {
    const goToNext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setCurrentIndex((currentIndex + 1) % itemsLength);
    }, [
        currentIndex,
        itemsLength,
        setCurrentIndex
    ]);
    const goToPrevious = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        setCurrentIndex((currentIndex - 1 + itemsLength) % itemsLength);
    }, [
        currentIndex,
        itemsLength,
        setCurrentIndex
    ]);
    const goToIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((index)=>{
        setCurrentIndex(index);
    }, [
        setCurrentIndex
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const timer = setInterval(goToNext, autoPlayInterval);
        return ()=>clearInterval(timer);
    }, [
        goToNext,
        autoPlayInterval
    ]);
    return {
        goToNext,
        goToPrevious,
        goToIndex
    };
}

})()),
"[project]/src/app/_components/carousel/Carousel.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Carousel": ()=>Carousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) {export default as ChevronLeft}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) {export default as ChevronRight}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$CarouselDots$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/carousel/CarouselDots.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$CarouselItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/carousel/CarouselItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$useCarouselControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/carousel/useCarouselControls.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function Carousel({ items, autoPlayInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const { goToNext, goToPrevious, goToIndex } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$useCarouselControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselControls"]({
        currentIndex,
        setCurrentIndex,
        itemsLength: items.length,
        autoPlayInterval
    });
    const renderSlide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((index)=>{
        const item = items[index];
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$CarouselItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselItem"], {
            ...item,
            isActive: currentIndex === index
        }, index, false, {
            fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
            lineNumber: 22,
            columnNumber: 7
        }, this);
    }, [
        items,
        currentIndex
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "relative h-[400px] w-full",
                children: items.map((_, index)=>renderSlide(index))
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: goToPrevious,
                className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all",
                "aria-label": "Previous slide",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronLeft$7d$__["ChevronLeft"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: goToNext,
                className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all",
                "aria-label": "Next slide",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronRight$7d$__["ChevronRight"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$CarouselDots$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselDots"], {
                count: items.length,
                currentIndex: currentIndex,
                onDotClick: goToIndex
            }, void 0, false, {
                fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/_components/carousel/Carousel.tsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/_components/sections/LandingPage.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$Carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/carousel/Carousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/_components/carousel/types.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const bagData = [
    {
        name: 'Clean and elegant handbag cherishing',
        description: 'stay elegant !',
        imageSrc: '/bags/1.png'
    },
    {
        name: 'Elegant and sophisticated purse delight',
        description: 'embrace sophistication!',
        imageSrc: '/bags/2.png'
    },
    {
        name: 'Attractive and stylish bag allure',
        description: 'captivate with style!',
        imageSrc: '/bags/4.png'
    }
];
const LandingPage = (props)=>{
    const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
        delay: 1000,
        stopOnFocusIn: true,
        stopOnInteraction: true,
        stopOnMouseEnter: true
    }));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "w-screen pt-5  mx-auto px-4 md:px-10 lg:px-20 xl:px-28",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$Carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Carousel"], {
            items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$carousel$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["carouselItems"]
        }, void 0, false, {
            fileName: "<[project]/src/app/_components/sections/LandingPage.tsx>",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/_components/sections/LandingPage.tsx>",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LandingPage;

})()),
"[project]/src/lib/actions.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addToCart": ()=>addToCart,
    "confirmAndGetPlaceOrderItems": ()=>confirmAndGetPlaceOrderItems,
    "deletePurse": ()=>deletePurse,
    "getAllOrders": ()=>getAllOrders,
    "getAllProducts": ()=>getAllProducts,
    "getCartItems": ()=>getCartItems,
    "getCheckoutItems": ()=>getCheckoutItems,
    "getCheckoutToken": ()=>getCheckoutToken,
    "getCurrentAddress": ()=>getCurrentAddress,
    "getLatestBags": ()=>getLatestBags,
    "getOrderById": ()=>getOrderById,
    "getPlaceOrderToken": ()=>getPlaceOrderToken,
    "getProductCategories": ()=>getProductCategories,
    "getProductsByCategory": ()=>getProductsByCategory,
    "getSingleBagData": ()=>getSingleBagData,
    "getSingleCartItem": ()=>getSingleCartItem,
    "removeFromCart": ()=>removeFromCart,
    "updateOrderStatus": ()=>updateOrderStatus
});
const getProductCategories = async ()=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-categories`, {
            cache: 'no-store',
            method: 'GET'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: error.message
        };
    }
};
const getProductsByCategory = async (category)=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-products-by-category/${category}`, {
            cache: 'no-store',
            method: 'GET'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: error.message
        };
    }
};
const getLatestBags = async ()=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-latest`, {
            cache: 'no-store',
            method: 'GET'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: 'Some Error Occured!'
        };
    }
};
const addToCart = (id, quantity)=>{
    try {
        const existingCart = localStorage.getItem('cart') || '[]';
        const parsedCart = JSON.parse(existingCart);
        const existingItem = parsedCart.find((item)=>item.id === id);
        if (existingItem) {
            existingItem.quantity = quantity;
        } else {
            parsedCart.push({
                id,
                quantity
            });
        }
        localStorage.setItem('cart', JSON.stringify(parsedCart));
        return {
            state: 'success',
            message: `Successfully added ${quantity} items to cart`
        };
    } catch (error) {
        console.error('Error adding to cart:', error);
        return {
            state: 'destructive',
            message: 'Unable to add to cart. Please try again later.'
        };
    }
};
const getCartItems = async ()=>{
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString || cartDataString === 'undefined') {
        return [];
    }
    const cartItemsLocalStorage = JSON.parse(cartDataString);
    const cartItemsDetails = [];
    for (const item of cartItemsLocalStorage){
        try {
            const { data, message } = await getSingleBagData(item.id);
            if (data) {
                cartItemsDetails.push({
                    details: data,
                    quantity: item.quantity
                });
            }
        } catch (error) {
            console.error(`Error fetching details for item with ID ${item.id}:`, error);
            return [];
        }
    }
    return cartItemsDetails;
};
const getSingleCartItem = (id)=>{
    const cartDataString = localStorage.getItem('cart');
    if (!cartDataString || cartDataString === 'undefined') {
        return {
            id: id,
            quantity: 1
        };
    }
    const cartItems = JSON.parse(cartDataString);
    if (cartItems.length === 0) {
        return {
            id: id,
            quantity: 1
        };
    }
    const cartItem = cartItems.find((item)=>item.id === id);
    return {
        id: id,
        quantity: cartItem?.quantity || 1
    };
};
const removeFromCart = (id)=>{
    try {
        const cartDataString = localStorage.getItem('cart');
        if (!cartDataString) {
            return {
                state: 'destructive',
                message: 'Items Not Found!'
            };
        }
        const cartData = JSON.parse(cartDataString);
        const updatedCartData = cartData.filter((data)=>data.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCartData));
        return {
            state: 'success',
            message: 'Removed successfully!'
        };
    } catch (error) {
        return {
            state: 'destructive',
            message: 'Some error occured!'
        };
    }
};
const getCheckoutToken = async (items)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/generate-checkout-token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: error.message
        };
    }
};
const getPlaceOrderToken = async (items)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/generate-place-order-token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: error.message
        };
    }
};
const getCheckoutItems = async (token)=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-checkout-token-items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return {
            data: null,
            message: 'Error Fetching The Data!'
        };
    }
};
const confirmAndGetPlaceOrderItems = async (token, userId)=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/confirm-and-get-place-order-items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                token,
                userId
            })
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: 'Error Fetching The Data!'
        };
    }
};
const getAllProducts = async ()=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-all`, {
            cache: 'no-store'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: 'Error Fetching The Data!'
        };
    }
};
const getSingleBagData = async (id)=>{
    try {
        // return DUMMY_BAGS_DATA.find(b => b.id === id)
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        return await response.json();
    } catch (error) {
        return {
            data: null,
            message: 'Some Error Occured!'
        };
    }
};
const deletePurse = async (id)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/delete/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const { state, message } = await response.json();
        return {
            state,
            message
        };
    } catch (error) {
        return {
            state: 'destructive',
            message: 'Some Error Occured!'
        };
    }
};
const getAllOrders = async ()=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/get-all-orders`, {
            method: 'GET',
            cache: 'no-store'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: 'Some Error Occured!'
        };
    }
};
const getOrderById = async (id)=>{
    try {
        const response = await fetch(`${process.env.BACKEND}/product/get-order/${id}`, {
            method: 'GET',
            cache: 'no-store'
        });
        const { data, message } = await response.json();
        return {
            data,
            message
        };
    } catch (error) {
        return {
            data: null,
            message: 'Some Error Occured!'
        };
    }
};
const updateOrderStatus = async (status, orderId)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/product/update-order-status/${orderId}`, {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        });
        const { state, message } = await response.json();
        return {
            state,
            message
        };
    } catch (error) {
        return {
            state: 'destructive',
            message: 'Some Error Occured!'
        };
    }
};
const getCurrentAddress = async ()=>{
    try {
        const ip = '103.146.218.156';
        const response = await fetch(`https://ipinfo.io/${ip}/json?token=80ea4f6c43a232`);
        if (!response.ok) return null;
        const ipInfoResponse = await response.json();
        return ipInfoResponse;
    } catch (error) {
        return null;
    }
};

})()),
"[project]/src/components/reusable/BuyNowButton.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const BuyNowButton = (props)=>{
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"]();
    const { productId } = props;
    const proceedToCheckout = async ()=>{
        const items = [
            {
                id: productId,
                quantity: 1
            }
        ];
        const { data, message } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutToken"](items);
        if (!data) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]({
                variant: "destructive",
                title: "warning",
                description: message
            });
        }
        router.push(`/checkout?t=${data}`);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
        onClick: proceedToCheckout,
        className: " px-2 py-2 rounded-md border flex items-center gap-1 hover:scale-110 transform transition-transform duration-100",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoBagHandleOutline"], {
                size: 20
            }, void 0, false, {
                fileName: "<[project]/src/components/reusable/BuyNowButton.tsx>",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "text-sm",
                children: "Get"
            }, void 0, false, {
                fileName: "<[project]/src/components/reusable/BuyNowButton.tsx>",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/reusable/BuyNowButton.tsx>",
        lineNumber: 35,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = BuyNowButton;

})()),
"[project]/src/components/reusable/ReusableImage.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const ReusableImage = (props)=>{
    const { src, className, alt } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
        src: src,
        className: className,
        alt: alt || 'An Image Component',
        loading: "lazy",
        style: {
            maxWidth: '100%',
            height: 'auto',
            display: 'block'
        }
    }, void 0, false, {
        fileName: "<[project]/src/components/reusable/ReusableImage.tsx>",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ReusableImage;

})()),
"[project]/src/components/reusable/BasicBagInfoCard.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reusable$2f$BuyNowButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/reusable/BuyNowButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reusable$2f$ReusableImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/reusable/ReusableImage.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
;
;
const BasicBagInfoCard = (props)=>{
    const { id, name, price, imageUrl, hasDiscount, isNew } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/${id}`,
        className: "w-full relative h-max p-1 border rounded-md hover:scale-105 transform transition-transform duration-300",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "w-full flex flex-col items-start gap-1",
            children: [
                isNew && isNew && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute top-1 left-1 p-1 rounded text-xs border bg-green-600 text-white",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineFire"], {}, void 0, false, {
                                fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                lineNumber: 22,
                                columnNumber: 67
                            }, this),
                            " HOT"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                        lineNumber: 22,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                    lineNumber: 21,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reusable$2f$ReusableImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "w-full rounded-md ",
                    src: imageUrl,
                    alt: name
                }, void 0, false, {
                    fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "w-full text-wrap p-2",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "font-bold text-lg text-wrap",
                            children: name
                        }, void 0, false, {
                            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "text-gray-700 text-base",
                            children: hasDiscount && hasDiscount.state ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "flex gap-2 items-center",
                                children: [
                                    "Rs ",
                                    Math.round(price - hasDiscount.value),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "line-through text-xs text-red-300",
                                        children: [
                                            "Rs ",
                                            Math.round(price),
                                            "  "
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                        lineNumber: 32,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                lineNumber: 30,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-start",
                                children: [
                                    "Rs ",
                                    Math.round(price)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                lineNumber: 35,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-between items-center gap-2  w-full",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-wrap gap-1 my-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "p-2 rounded-full border hover:scale-110 transform transition-transform duration-100 ",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoCartOutline"], {
                                                size: 20,
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    const { state, message } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"](id, 1);
                                                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]({
                                                        title: state,
                                                        variant: state,
                                                        description: message,
                                                        duration: 2500
                                                    });
                                                }
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                                lineNumber: 41,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                            lineNumber: 40,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "p-2 rounded-full border hover:scale-110 transform transition-transform duration-100 ",
                                            href: `/${id}`,
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosExpand"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                    lineNumber: 39,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reusable$2f$BuyNowButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        productId: id
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/reusable/BasicBagInfoCard.tsx>",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = BasicBagInfoCard /* 

                {hasDiscount && hasDiscount.state && (
                    <div className="absolute -top-5 -right-2 rounded-full p-3 flex flex-col gap-1 text-xs border bg-red-200">
                        <span className="">{hasDiscount.value}%</span>
                    </div>
                )}
                <img className="w-full" src={image} alt={name} />
                <div className="">
                    <div className="font-bold text-lg mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        Rs {price}
                    </p>
                    <div className='flex flex-wrap gap-2 my-2'>
                        <Button>Add To Cart</Button>
                        <Button>View</Button>
                    </div>
                </div>

*/ ;

})()),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_364ddc._.js.map