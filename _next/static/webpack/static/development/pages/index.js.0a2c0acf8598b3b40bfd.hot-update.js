webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Root.js":
/*!****************************!*\
  !*** ./components/Root.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mdi-material-ui/GithubCircle */ "./node_modules/mdi-material-ui/GithubCircle.js");
/* harmony import */ var mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var use_ether_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-ether-provider */ "./node_modules/use-ether-provider/dist/index.js");
/* harmony import */ var use_ether_provider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(use_ether_provider__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/admin/Projects/erc20-faucet/components/Root.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {// margin: '0 50px'
    },
    contWrapper: {
      minHeight: '500px'
    },
    dialogWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '30px'
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    },
    footer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '30px 0 20px 0'
    },
    by: {
      fontSize: '0.7em'
    },
    icons: {
      display: 'flex'
    },
    chip: {
      margin: '10px'
    },
    donate: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px 20px 20px'
    },
    donateTitle: {
      display: 'flex',
      padding: '20px 10px',
      alignItems: 'center'
    },
    titleMsg: {
      color: 'rgba(90, 90, 90, 0.8)'
    },
    donateIcon: {
      marginRight: '2px',
      color: '#f50057'
    },
    addressWrapper: {
      margin: '10px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    address: {
      fontSize: '0.5em',
      color: 'rgba(90, 90, 90, 0.4)',
      padding: '2px',
      '&:hover': {
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        cursor: 'pointer'
      }
    },
    notify: {
      color: '#f50057',
      fontSize: '0.5em'
    }
  };
});

var Root = function Root(_ref) {
  var children = _ref.children,
      setError = _ref.setError;
  var classes = useStyles();
  var provider = Object(use_ether_provider__WEBPACK_IMPORTED_MODULE_9__["useEtherProvider"])();

  if (!provider) {
    return __jsx("div", {
      className: classes.dialogWrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.dialog,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: 'h6',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Support [Rinkeby testnet] only"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Ethereum wallet connecting..."), __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  }

  return __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: classes.contWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, children), __jsx("div", {
    className: classes.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.by,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "bybit exchange"), __jsx("div", {
    className: classes.icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: __jsx(mdi_material_ui_GithubCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }),
    label: 'Star',
    className: classes.chip,
    component: "a",
    href: "https://github.com/BigMurry/erc20-faucet",
    target: '_blank',
    clickable: true,
    color: "secondary",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))));
};

var RootWrapper = function RootWrapper(props) {
  return __jsx(notistack__WEBPACK_IMPORTED_MODULE_6__["SnackbarProvider"], {
    maxSnack: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(Root, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RootWrapper);

/***/ })

})
//# sourceMappingURL=index.js.0a2c0acf8598b3b40bfd.hot-update.js.map