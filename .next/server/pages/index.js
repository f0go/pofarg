"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/index.tsx","import":"Space_Mono","arguments":[{"variable":"--font-space-mono","subsets":["latin"],"weight":"400","style":"normal"}],"variableName":"space_mono"}
var index_tsx_import_Space_Mono_arguments_variable_font_space_mono_subsets_latin_weight_400_style_normal_variableName_space_mono_ = __webpack_require__(749);
var index_tsx_import_Space_Mono_arguments_variable_font_space_mono_subsets_latin_weight_400_style_normal_variableName_space_mono_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Space_Mono_arguments_variable_font_space_mono_subsets_latin_weight_400_style_normal_variableName_space_mono_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/index.tsx","import":"Roboto","arguments":[{"variable":"--font-roboto","subsets":["latin"],"weight":"400","style":"normal"}],"variableName":"roboto"}
var index_tsx_import_Roboto_arguments_variable_font_roboto_subsets_latin_weight_400_style_normal_variableName_roboto_ = __webpack_require__(9377);
var index_tsx_import_Roboto_arguments_variable_font_roboto_subsets_latin_weight_400_style_normal_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(index_tsx_import_Roboto_arguments_variable_font_roboto_subsets_latin_weight_400_style_normal_variableName_roboto_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/CryptoText.tsx


const CryptoText = ({ text , hard =false  })=>{
    const [hover, setHover] = (0,external_react_.useState)(false);
    const [renderText, setRenderText] = (0,external_react_.useState)(text);
    const chars = text.split("");
    (0,external_react_.useEffect)(()=>{
        // when hover is true, we want to replace the next characters:
        // "a" with "4"
        // "e" with "3"
        // "i" with "1"
        // "o" with "0"
        // when hover is false, we want to replace the next characters:
        // "4" with "a"
        // "3" with "e"
        // "1" with "i"
        // "0" with "o"
        const replacements = {
            hard: {
                a: "4",
                e: "3",
                i: "1",
                o: "0",
                s: "5",
                A: "4",
                E: "3",
                I: "1",
                O: "0",
                S: "5"
            },
            soft: {
                e: "3",
                o: "0",
                E: "3",
                O: "0"
            }
        };
        const newChars = chars.map((char)=>{
            if (hard) {
                if (replacements.hard.hasOwnProperty(char)) {
                    return replacements.hard[char];
                } else {
                    return char;
                }
            } else {
                if (replacements.soft.hasOwnProperty(char)) {
                    return replacements.soft[char];
                } else {
                    return char;
                }
            }
        });
        const newText = newChars.join("");
        setRenderText(hover ? newText : text);
    }, [
        chars,
        hover,
        hard,
        text
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        onMouseEnter: ()=>setHover(true),
        onMouseLeave: ()=>setHover(false),
        children: renderText
    });
};

;// CONCATENATED MODULE: ./src/components/ChevronSvg.tsx

const ChevronSvg = ({ className , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M33 33L50 50L67 33",
            stroke: "#95959f",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 10
        })
    });

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/localData.js


async function getLocalData() {
    const filePath = external_path_default().join(process.cwd(), "src/data/exchanges.json");
    const jsonData = await promises_default().readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData;
}

;// CONCATENATED MODULE: ./src/utils/utils.ts
const generateRandomString = (length)=>Math.random().toString(36).substring(2, length + 2);
function orderFunction(order) {
    return function(a, b) {
        const aHasUpdate = a.hasOwnProperty("last_update");
        const bHasUpdate = b.hasOwnProperty("last_update");
        if (!aHasUpdate && !bHasUpdate) {
            return 0;
        } else if (!aHasUpdate) {
            return order === "asc" ? -1 : 1; // Undefined goes first in "asc" order
        } else if (!bHasUpdate) {
            return order === "asc" ? 1 : -1; // Undefined goes first in "asc" order
        } else if (order === "asc") {
            if (!isDate(a.last_update) && !isDate(b.last_update)) {
                return compareStrings(a.last_update, b.last_update); // Compare strings, accounting for undefined values
            } else if (!isDate(a.last_update)) {
                return 1; // Non-date strings go after dates in "asc" order
            } else if (!isDate(b.last_update)) {
                return -1; // Non-date strings go after dates in "asc" order
            } else {
                const aDate = getDateValue(a.last_update);
                const bDate = getDateValue(b.last_update);
                return aDate - bDate; // Compare dates
            }
        } else {
            if (!isDate(a.last_update) && !isDate(b.last_update)) {
                return compareStrings(b.last_update, a.last_update); // Compare strings, accounting for undefined values
            } else if (!isDate(a.last_update)) {
                return -1; // Non-date strings go before dates in "desc" order
            } else if (!isDate(b.last_update)) {
                return 1; // Non-date strings go before dates in "desc" order
            } else {
                const aDate = getDateValue(a.last_update);
                const bDate = getDateValue(b.last_update);
                return bDate - aDate; // Compare dates
            }
        }
    };
}
function isDate(value) {
    return value !== undefined && !isNaN(Date.parse(value));
}
function getDateValue(value) {
    return value !== undefined ? new Date(value).getTime() : 0;
}
function compareStrings(a, b) {
    if (a === undefined && b === undefined) {
        return 0;
    } else if (a === undefined) {
        return -1;
    } else if (b === undefined) {
        return 1;
    }
    return a.localeCompare(b);
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/ArrowSvg.tsx

const ArrowSvg = ({ className  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8 12V12.5H8.5V12H8ZM8.35355 3.14645C8.15829 2.95118 7.84171 2.95118 7.64645 3.14645L4.46447 6.32843C4.2692 6.52369 4.2692 6.84027 4.46447 7.03553C4.65973 7.2308 4.97631 7.2308 5.17157 7.03553L8 4.20711L10.8284 7.03553C11.0237 7.2308 11.3403 7.2308 11.5355 7.03553C11.7308 6.84027 11.7308 6.52369 11.5355 6.32843L8.35355 3.14645ZM3 12.5H8V11.5H3V12.5ZM8.5 12V3.5H7.5V12H8.5Z",
            fill: "#CECECE"
        })
    });

;// CONCATENATED MODULE: ./src/components/CollapseArrowSvg.tsx

const CollapseArrowSvg = ({ className , onClick  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.8227 15.875C12.4571 16.5083 11.5429 16.5083 11.1773 15.875M12.8227 15.875H11.1773M12.8227 15.875L12.2598 15.55L11.1773 15.875M12.8227 15.875L16.6332 9.27501C16.9989 8.64168 16.5418 7.85001 15.8105 7.85001H8.18946C7.45815 7.85001 7.00108 8.64167 7.36673 9.27501L11.1773 15.875",
            stroke: "#CECECE",
            strokeWidth: "1.3"
        })
    });

;// CONCATENATED MODULE: ./src/components/ExchangeElementList.tsx







const ExchangeElementList = ({ exchange  })=>{
    const [isCollapsed, setIsCollapsed] = (0,external_react_.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ` grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 border-b border-[#333333] pt-6 first-of-type:border-y lg:first-of-type:pt-3 pb-6 lg:py-3 items-center text-[#CECECE] lg:hover:bg-[#111] hover:text-white transition-colors`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex justify-between lg:col-span-3",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: exchange.url,
                        target: "_blank",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: exchange.iconPath,
                                alt: exchange.name,
                                width: 32,
                                height: 32,
                                priority: true,
                                className: "border-[#1D1D1D] border rounded-lg mr-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CryptoText, {
                                text: exchange.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CollapseArrowSvg, {
                        className: `w-[24px] lg:hidden ${!isCollapsed && "rotate-180"}`,
                        onClick: ()=>setIsCollapsed(!isCollapsed)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `lg:col-span-3 text-[#95959f] ${isCollapsed && "hidden lg:block"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2",
                        children: "Documentos"
                    }),
                    exchange.docs.url ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: exchange.docs.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline text-[#CECECE] flex gap-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CryptoText, {
                                text: exchange.docs.text
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowSvg, {
                                className: "w-4 flex-shrink-0"
                            })
                        ]
                    }) : exchange.docs.text
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `lg:col-span-2 ${isCollapsed && "hidden lg:block"} ${!exchange.last_update ? "text-[#95959f]" : ""}}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2",
                        children: "\xdaltima actualizaci\xf3n"
                    }),
                    exchange.last_update ? exchange.last_update : "-"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `lg:col-span-4 text-[#95959f] ${isCollapsed && "hidden lg:block"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "col-span-3 text-xs text-[#95959f] font-mono block lg:hidden mb-2",
                        children: "Estado"
                    }),
                    exchange.notes ? exchange.notes.url ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        href: exchange.notes.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline text-[#CECECE] flex gap-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(CryptoText, {
                                text: exchange.notes.text
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ArrowSvg, {
                                className: "w-4 flex-shrink-0"
                            })
                        ]
                    }) : exchange.notes.text : "-"
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/index.tsx











async function getStaticProps() {
    const exchanges = await getLocalData();
    return {
        props: {
            exchanges
        }
    };
}
function Home({ exchanges  }) {
    const [order, setOrder] = (0,external_react_.useState)("desc");
    const orderedExchanges = exchanges.sort(orderFunction(order));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Proof of Funds - Argentina"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: `font-mono min-h-screen max-w-screen-2xl mx-auto p-5 lg:p-8 pb-12 ${(index_tsx_import_Space_Mono_arguments_variable_font_space_mono_subsets_latin_weight_400_style_normal_variableName_space_mono_default()).variable} ${(index_tsx_import_Roboto_arguments_variable_font_roboto_subsets_latin_weight_400_style_normal_variableName_roboto_default()).variable}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: " grid grid-cols-1 lg:grid-cols-12 gap-6 text-[#F5F5F7]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl col-span-1 lg:col-span-3",
                                children: "PR00F OF FUNDS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "col-span-1 lg:col-span-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CryptoText, {
                                    hard: true,
                                    text: "LISTADO DE EXCHANGES ARGENTINOS DE CRIPTOMONEDAS Y SUS INFORMES DE TRANSPARENCIA"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "/",
                                className: "sol w-[64px] lg:w-[96px] order-first lg:order-last lg:col-start-12 col-span-1 lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/img/sol.svg",
                                            alt: "Argentina",
                                            width: 96,
                                            height: 96,
                                            priority: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "wink",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/img/sol_guino.svg",
                                            alt: "Argentina",
                                            width: 96,
                                            height: 96,
                                            priority: true
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "mt-10 lg:mt-36",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-8 mb-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs lg:col-span-3 text-[#95959f]",
                                        children: "Exchange"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs col-span-3 text-[#95959f] hidden lg:block",
                                        children: "Documentos"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-xs col-span-2 text-[#95959f] hidden lg:flex lg:gap-1 lg:items-center",
                                        children: [
                                            "Actualizado",
                                            /*#__PURE__*/ jsx_runtime_.jsx(ChevronSvg, {
                                                className: `w-5 flex-shrink-0 flex items-center cursor-pointer ${order === "asc" && "rotate-180"}`,
                                                onClick: ()=>setOrder(order === "asc" ? "desc" : "asc")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xs col-span-4 text-[#95959f] hidden lg:block",
                                        children: "Estado"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-roboto",
                                children: orderedExchanges.map((exchange, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ExchangeElementList, {
                                        exchange: exchange
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                        className: "mt-[48px] lg:mt-36 lg:flex lg:justify-between text-[#6E6E73]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-[12px] leading-[14px]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Agradecimientos a",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://twitter.com/facumontanaro_",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "underline inline-flex gap-1",
                                                children: "Facu Montanaro"
                                            }),
                                            " ",
                                            "por el dise\xf1o,",
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "lg:block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://twitter.com/AndreusCafe",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "underline inline-flex gap-1",
                                                children: "Andr\xe9s Tonello"
                                            }),
                                            " ",
                                            "y",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://twitter.com/_LautaroLopez",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "underline inline-flex gap-1",
                                                children: "Lautaro L\xf3pez"
                                            }),
                                            " ",
                                            "por la implementaci\xf3n."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-[12px] leading-[14px] mt-[20px] lg:mt-0",
                                children: [
                                    "Si queres colaborar con alg\xfan dato, escribime a",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://twitter.com/f0go",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline inline-flex gap-1",
                                        children: "@f0go"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,339], () => (__webpack_exec__(2743)));
module.exports = __webpack_exports__;

})();