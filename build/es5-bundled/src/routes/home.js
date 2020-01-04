define(["exports","../index.js"],function(_exports,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Home=_exports.$home=void 0;function _templateObject2_3e0108302f2211ea84d26724ac09986c(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          height: 100%;\n          width: 100%;\n        }\n\n        .container {\n          height: 100%;\n          flex-direction: column;\n        }\n\n        h1 {\n          font-size: 102px;\n          line-height: 102px;\n          margin: 0;\n          font-weight: 400;\n        }\n\n        h4 {\n          font-size: 52px;\n          line-height: 52px;\n          margin: 0;\n          top: -3px;\n          font-weight: 400;\n        }\n\n        p {\n          font-size: 27px;\n          line-height: 27px;\n          top: -1px;\n          margin: 0;\n        }\n      "]);_templateObject2_3e0108302f2211ea84d26724ac09986c=function _templateObject2_3e0108302f2211ea84d26724ac09986c(){return data};return data}function _templateObject_3e0108302f2211ea84d26724ac09986c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div class=\"container flex v-center h-center\">\n        <div class=\"intro-head flex v-center h-center\">\n          <div>\n            <h1>HI</h1>\n          </div>\n          <div>\n            <h4>I'M Mukul Jain</h4>\n            <p>Full Stack Web Developer</p>\n          </div>\n        </div>\n        <mx-social-links></mx-social-links>\n      </div>\n    "]);_templateObject_3e0108302f2211ea84d26724ac09986c=function _templateObject_3e0108302f2211ea84d26724ac09986c(){return data};return data}var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r},Home=/*#__PURE__*/function(_PageViewElement){babelHelpers.inherits(Home,_PageViewElement);function Home(){babelHelpers.classCallCheck(this,Home);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Home).apply(this,arguments))}babelHelpers.createClass(Home,[{key:"render",value:function render(){return(0,_index.html)(_templateObject_3e0108302f2211ea84d26724ac09986c())}}],[{key:"styles",get:function get(){return[_index.$sharedStylesDefault,(0,_index.css)(_templateObject2_3e0108302f2211ea84d26724ac09986c())]}}]);return Home}(_index.PageViewElement);_exports.Home=Home;_exports.Home=Home=__decorate([(0,_index.customElement)("mx-home")],Home);var home={get Home(){return Home}};_exports.$home=home});