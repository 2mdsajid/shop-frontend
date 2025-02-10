module.exports = {

"[project]/src/components/id/DisplayImages.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
const DisplayImages = (props)=>{
    const { name, image, images, isFreeDelivery } = props;
    const [currentImage, setCurrentImage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](image);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full rounded-md p-2 shadow relative",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                alt: name,
                className: "mb-4",
                height: "400",
                src: currentImage,
                style: {
                    aspectRatio: "400/400",
                    objectFit: "cover"
                },
                width: "400"
            }, void 0, false, {
                fileName: "<[project]/src/components/id/DisplayImages.tsx>",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            images && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex space-x-2",
                children: images.map((i, k)=>{
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("img", {
                        onClick: ()=>setCurrentImage(i),
                        alt: `${name} ${i}`,
                        className: `border p-1 ${currentImage === i && 'border border-black'}`,
                        height: "50",
                        src: i,
                        style: {
                            aspectRatio: "50/50",
                            objectFit: "cover"
                        },
                        width: "50"
                    }, k, false, {
                        fileName: "<[project]/src/components/id/DisplayImages.tsx>",
                        lineNumber: 33,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/src/components/id/DisplayImages.tsx>",
                lineNumber: 30,
                columnNumber: 17
            }, this),
            isFreeDelivery && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute top-2 left-2 bg-green-500 text-white text-center py-1 px-2 rounded-md",
                children: "Free Delivery"
            }, void 0, false, {
                fileName: "<[project]/src/components/id/DisplayImages.tsx>",
                lineNumber: 49,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/id/DisplayImages.tsx>",
        lineNumber: 17,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = DisplayImages;

})()),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
        type: type,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/input.tsx>",
        lineNumber: 11,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;

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
"[project]/src/components/id/QuantityCounter.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/use-toast.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
;
;
const QuantityCounter = (props)=>{
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"]();
    const { itemsLeft, productId } = props;
    const { id, quantity: quantityInLocalStorage } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSingleCartItem"](productId);
    const [quantity, setQuantity] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](quantityInLocalStorage || 1);
    const changeQuantity = (e)=>{
        const val = e.currentTarget.value;
        if (!val.trim()) {
            setQuantity(0);
            return;
        }
        const num = parseInt(val, 10);
        if (isNaN(num) || num < 1) {
            setQuantity(0);
            return;
        }
        if (itemsLeft && num > itemsLeft) {
            setQuantity(itemsLeft);
            return;
        }
        setQuantity(num);
    };
    const decreaseQuantity = ()=>{
        if (quantity == 1) return;
        setQuantity((oldValue)=>oldValue - 1);
    };
    const increaseQuantity = ()=>{
        if (itemsLeft && itemsLeft === quantity) return;
        setQuantity((oldValue)=>oldValue + 1);
    };
    const proceedToCheckout = async ()=>{
        const items = [
            {
                id: productId,
                quantity
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-center space-x-4 mt-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "text-sm font-medium",
                        children: "Quantity"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-gray-200 text-gray-600",
                                onClick: decreaseQuantity,
                                children: "-"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                className: "w-12 text-center",
                                type: "text",
                                value: quantity,
                                onChange: changeQuantity
                            }, void 0, false, {
                                fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                className: "bg-gray-200 text-gray-600",
                                onClick: increaseQuantity,
                                children: "+"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    itemsLeft && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "text-sm text-gray-500",
                        children: [
                            " Items Left : ",
                            itemsLeft
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                        lineNumber: 81,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex space-x-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-blue-500 text-white py-2 px-6",
                        onClick: proceedToCheckout,
                        children: "Buy Now"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        className: "bg-orange-500 text-white py-2 px-6",
                        onClick: (e)=>{
                            e.preventDefault();
                            const { state, message } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToCart"](productId, quantity);
                            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"]({
                                title: state,
                                variant: state,
                                description: message,
                                duration: 2500
                            });
                        },
                        children: "Add to Cart"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/id/QuantityCounter.tsx>",
        lineNumber: 73,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = QuantityCounter;

})()),
"[project]/src/app/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");

}.call(this) }),

};

//# sourceMappingURL=_1a9fa6._.js.map