"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Notfound = function Notfound() {
  var navigate = (0, _reactRouterDom.useNavigate)();

  var goToHome = function goToHome() {
    navigate("/");
  };

  return;
};