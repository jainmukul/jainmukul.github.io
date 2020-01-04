define(["exports","../index.js"],function(_exports,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Error404=_exports.$error$404=void 0;function _templateObject_3dfd10902f2211ea84d26724ac09986c(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);_templateObject_3dfd10902f2211ea84d26724ac09986c=function _templateObject_3dfd10902f2211ea84d26724ac09986c(){return data};return data}/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var __decorate=void 0||function(decorators,target,key,desc){var c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if("object"===("undefined"===typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;0<=i;i--){if(d=decorators[i])r=(3>c?d(r):3<c?d(target,key,r):d(target,key))||r}return 3<c&&r&&Object.defineProperty(target,key,r),r},Error404=/*#__PURE__*/function(_PageViewElement){babelHelpers.inherits(Error404,_PageViewElement);function Error404(){babelHelpers.classCallCheck(this,Error404);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Error404).apply(this,arguments))}babelHelpers.createClass(Error404,[{key:"render",value:function render(){return(0,_index.html)(_templateObject_3dfd10902f2211ea84d26724ac09986c())}}],[{key:"styles",get:function get(){return[_index.$sharedStylesDefault]}}]);return Error404}(_index.PageViewElement);_exports.Error404=Error404;_exports.Error404=Error404=__decorate([(0,_index.customElement)("mx-error-404")],Error404);var error404={get Error404(){return Error404}};_exports.$error$404=error404});