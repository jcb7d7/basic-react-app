"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./style.scss");

var _users = _interopRequireDefault(require("./components/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render(_react["default"].createElement(_users["default"], null), document.getElementById('Users'));