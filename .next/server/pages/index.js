"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./components/Layout/Layout.tsx + 3 modules
var Layout = __webpack_require__(662);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./components/SVGIcons/index.ts + 3 modules
var SVGIcons = __webpack_require__(186);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/KawaiiHeader/AnimatedHeader.tsx






const AnimatedHeader = ({
  visible,
  onClick,
  onComplete
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Header, {
  size: "huge",
  as: "h1",
  onClick: onClick,
  children: ["Platzi", /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Transition, {
    animation: "jiggle",
    visible: visible,
    duration: 900,
    onComplete: onComplete,
    children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcons/* Avocado */.dd, {
      size: "58px"
    })
  }), "Avo"]
});

/* harmony default export */ const KawaiiHeader_AnimatedHeader = (AnimatedHeader);
;// CONCATENATED MODULE: ./components/KawaiiHeader/RottenHeader.tsx






const RottenHeader = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Header, {
  size: "huge",
  as: "h1",
  children: ["Platzi", /*#__PURE__*/jsx_runtime_.jsx(SVGIcons/* PosMeMuero */.nw, {
    size: "58px"
  }), "Avo"]
});

/* harmony default export */ const KawaiiHeader_RottenHeader = (RottenHeader);
;// CONCATENATED MODULE: ./components/KawaiiHeader/ModalHeaderContent.tsx







const ModalHeaderContent = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3586822566" + " " + "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
      columns: 2,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
        verticalAlign: "middle",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          width: "5",
          children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcons/* PosMeMuero */.nw, {
            size: "154px"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Column, {
          width: "11",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
            as: "h2",
            children: "Mataste el aguacate"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "jsx-3586822566",
            children: "Lo tocaste tanto que lo mataste."
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "jsx-3586822566",
            children: "Por otro lado, eres una persona muy curiosa y has descubierto esto. :)"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3586822566",
      children: [".container.jsx-3586822566{padding:2rem;}"]
    })]
  });
};

/* harmony default export */ const KawaiiHeader_ModalHeaderContent = (ModalHeaderContent);
;// CONCATENATED MODULE: ./components/KawaiiHeader/KawaiiHeader.tsx









const KawaiiHeader = () => {
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(true);
  const {
    0: meMori,
    1: setMeMori
  } = (0,external_react_.useState)(false);
  const {
    0: modalOpen,
    1: setModalOpen
  } = (0,external_react_.useState)(false);
  const {
    0: count,
    1: setCount
  } = (0,external_react_.useState)(0);

  const closeModal = () => setModalOpen(false);

  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  (0,external_react_.useEffect)(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-927310824" + " " + "container",
    children: [meMori ? /*#__PURE__*/jsx_runtime_.jsx(KawaiiHeader_RottenHeader, {}) : /*#__PURE__*/jsx_runtime_.jsx(KawaiiHeader_AnimatedHeader, {
      visible: visible,
      onClick: toggleVisible,
      onComplete: () => setCount(prevCount => prevCount + 1)
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Confirm, {
      open: modalOpen,
      content: KawaiiHeader_ModalHeaderContent,
      onCancel: closeModal,
      onConfirm: closeModal,
      cancelButton: "Ay, lo siento",
      confirmButton: "OK",
      closeOnDimmerClick: false
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "927310824",
      children: [".container.jsx-927310824{margin:2rem 0 3rem;}", ".container.jsx-927310824 .header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]
    })]
  });
};

/* harmony default export */ const KawaiiHeader_KawaiiHeader = (KawaiiHeader);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ProductList/ProductList.tsx





const mapProductsToCards = products => products.map(({
  name,
  id,
  price,
  image
}) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
  href: "/product/[id]",
  as: `/product/${id}`,
  passHref: true,
  children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card, {
    as: "a",
    header: name,
    image: image,
    meta: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Meta, {
      style: {
        color: 'dimgray'
      },
      children: price
    })
  })
}, id));

const ProductList = ({
  products
}) => /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
  itemsPerRow: 2,
  stackable: true,
  children: mapProductsToCards(products)
});

/* harmony default export */ const ProductList_ProductList = (ProductList);
;// CONCATENATED MODULE: ./pages/index.tsx






const getStaticProps = async () => {
  // page only
  const PROTOCOL = process.env.PROTOCOL;
  const URL = process.env.BKND_URL;
  const response = await fetch(`${PROTOCOL}${URL}/api/avo`);
  const {
    data: productList
  } = await response.json();
  return {
    props: {
      productList
    }
  };
};

const HomePage = ({
  productList
}) => {
  // const [productList, setProductList] = useState<TProduct[]>([]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(KawaiiHeader_KawaiiHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(ProductList_ProductList, {
      products: productList
    })]
  });
};

/* harmony default export */ const pages = (HomePage);

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 8:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 347:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,245,215], () => (__webpack_exec__(202)));
module.exports = __webpack_exports__;

})();