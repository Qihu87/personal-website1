"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ThemeToggle.tsx":
/*!****************************************!*\
  !*** ./src/components/ThemeToggle.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ThemeToggle)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ThemeToggle() {\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ThemeToggle.useEffect\": ()=>{\n            // 检查系统主题偏好\n            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n            const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');\n            setTheme(savedTheme);\n            document.documentElement.setAttribute('data-theme', savedTheme);\n        }\n    }[\"ThemeToggle.useEffect\"], []);\n    const toggleTheme = ()=>{\n        const newTheme = theme === 'dark' ? 'light' : 'dark';\n        setTheme(newTheme);\n        localStorage.setItem('theme', newTheme);\n        document.documentElement.setAttribute('data-theme', newTheme);\n    };\n    // 只在主题加载后显示按钮\n    if (!theme) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"theme-toggle\",\n        onClick: toggleTheme,\n        \"aria-label\": \"Toggle theme\",\n        children: theme === 'dark' ? '🌞' : '🌙'\n    }, void 0, false, {\n        fileName: \"/Users/wangqihu/Documents/personal-website1/src/components/ThemeToggle.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(ThemeToggle, \"3P4xXCVpfh6R2LV2gD7mN6c9AsM=\");\n_c = ThemeToggle;\nvar _c;\n$RefreshReg$(_c, \"ThemeToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNEM7QUFFN0IsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBUztJQUUzQ0MsZ0RBQVNBO2lDQUFDO1lBQ1IsV0FBVztZQUNYLE1BQU1JLGNBQWNDLE9BQU9DLFVBQVUsQ0FBQyxnQ0FBZ0NDLE9BQU87WUFDN0UsTUFBTUMsYUFBYUMsYUFBYUMsT0FBTyxDQUFDLFlBQWFOLENBQUFBLGNBQWMsU0FBUyxPQUFNO1lBQ2xGRCxTQUFTSztZQUNURyxTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxjQUFjTDtRQUN0RDtnQ0FBRyxFQUFFO0lBRUwsTUFBTU0sY0FBYztRQUNsQixNQUFNQyxXQUFXYixVQUFVLFNBQVMsVUFBVTtRQUM5Q0MsU0FBU1k7UUFDVE4sYUFBYU8sT0FBTyxDQUFDLFNBQVNEO1FBQzlCSixTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxjQUFjRTtJQUN0RDtJQUVBLGNBQWM7SUFDZCxJQUFJLENBQUNiLE9BQU8sT0FBTztJQUVuQixxQkFDRSw4REFBQ2U7UUFDQ0MsV0FBVTtRQUNWQyxTQUFTTDtRQUNUTSxjQUFXO2tCQUVWbEIsVUFBVSxTQUFTLE9BQU87Ozs7OztBQUdqQztHQTlCd0JEO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvd2FuZ3FpaHUvRG9jdW1lbnRzL3BlcnNvbmFsLXdlYnNpdGUxL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaGVtZVRvZ2dsZSgpIHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOajgOafpeezu+e7n+S4u+mimOWBj+WlvVxuICAgIGNvbnN0IHByZWZlcnNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCAocHJlZmVyc0RhcmsgPyAnZGFyaycgOiAnbGlnaHQnKTtcbiAgICBzZXRUaGVtZShzYXZlZFRoZW1lKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgc2F2ZWRUaGVtZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSAnZGFyaycgPyAnbGlnaHQnIDogJ2RhcmsnO1xuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBuZXdUaGVtZSk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIG5ld1RoZW1lKTtcbiAgfTtcblxuICAvLyDlj6rlnKjkuLvpopjliqDovb3lkI7mmL7npLrmjInpkq5cbiAgaWYgKCF0aGVtZSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPVwidGhlbWUtdG9nZ2xlXCIgXG4gICAgICBvbkNsaWNrPXt0b2dnbGVUaGVtZX1cbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxuICAgID5cbiAgICAgIHt0aGVtZSA9PT0gJ2RhcmsnID8gJ/CfjJ4nIDogJ/CfjJknfVxuICAgIDwvYnV0dG9uPlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaGVtZVRvZ2dsZSIsInRoZW1lIiwic2V0VGhlbWUiLCJwcmVmZXJzRGFyayIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic2F2ZWRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZVRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImFyaWEtbGFiZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ThemeToggle.tsx\n"));

/***/ })

});