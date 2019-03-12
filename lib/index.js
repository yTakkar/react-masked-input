'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers');

var _SingleInput = require('./SingleInput');

var _SingleInput2 = _interopRequireDefault(_SingleInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaskedInput = function (_React$Component) {
  _inherits(MaskedInput, _React$Component);

  function MaskedInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MaskedInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MaskedInput.__proto__ || Object.getPrototypeOf(MaskedInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeInput: 0,
      otp: [],
      hidePlaceholder: {}
    }, _this.getOtp = function () {
      return _this.props.onChange(_this.state.otp.join(''));
    }, _this.focusInput = function (input) {
      var numInputs = _this.props.numInputs;

      var activeInput = Math.max(Math.min(numInputs - 1, input), 0);
      _this.setState({ activeInput: activeInput });
    }, _this.focusNextInput = function () {
      var activeInput = _this.state.activeInput;

      _this.focusInput(activeInput + 1);
    }, _this.focusPrevInput = function () {
      var activeInput = _this.state.activeInput;

      _this.focusInput(activeInput - 1);
    }, _this.changeCodeAtFocus = function (value) {
      var _this$state = _this.state,
          activeInput = _this$state.activeInput,
          otp = _this$state.otp;

      otp[activeInput] = value;
      _this.setState({ otp: otp });
      _this.getOtp();
    }, _this.handleOnPaste = function (e) {
      e.preventDefault();
      var numInputs = _this.props.numInputs;
      var _this$state2 = _this.state,
          activeInput = _this$state2.activeInput,
          otp = _this$state2.otp;

      // Get pastedData in an array of max size (num of inputs - current position)

      var pastedData = e.clipboardData.getData('text/plain').slice(0, numInputs - activeInput).split('');

      // Paste data from focused input onwards
      for (var pos = 0; pos < numInputs; ++pos) {
        if (pos >= activeInput && pastedData.length > 0) {
          otp[pos] = pastedData.shift();
        }
      }

      _this.setState({ otp: otp });
      _this.getOtp();
    }, _this.handleOnChange = function (e) {
      _this.changeCodeAtFocus(e.target.value);
      _this.focusNextInput();
    }, _this.handleOnKeyDown = function (e) {
      switch (e.keyCode) {
        case _helpers.keyboard.BACKSPACE:
          e.preventDefault();
          _this.changeCodeAtFocus('');
          _this.focusPrevInput();
          break;
        case _helpers.keyboard.DELETE:
          e.preventDefault();
          _this.changeCodeAtFocus('');
          break;
        case _helpers.keyboard.LEFT_ARROW:
          e.preventDefault();
          _this.focusPrevInput();
          break;
        case _helpers.keyboard.RIGHT_ARROW:
          e.preventDefault();
          _this.focusNextInput();
          break;
        default:
          break;
      }
    }, _this.getRestInputProps = function (i) {
      var _ref2 = _this.props.inputPropsMap[i] || {},
          _ = _ref2.placeholder,
          restInputProps = _objectWithoutProperties(_ref2, ['placeholder']);

      return restInputProps;
    }, _this.getInputPlaceholder = function (i) {
      var _this$props = _this.props,
          inputPropsMap = _this$props.inputPropsMap,
          placeholder = _this$props.placeholder;
      var hidePlaceholder = _this.state.hidePlaceholder;

      if (!hidePlaceholder[i] && inputPropsMap[i]) return inputPropsMap[i].placeholder;
      if (!hidePlaceholder[i] && placeholder) return placeholder;
      return '';
    }, _this.renderInputs = function () {
      var _this$state3 = _this.state,
          activeInput = _this$state3.activeInput,
          otp = _this$state3.otp;
      var _this$props2 = _this.props,
          numInputs = _this$props2.numInputs,
          inputStyle = _this$props2.inputStyle,
          focusStyle = _this$props2.focusStyle,
          separator = _this$props2.separator,
          isDisabled = _this$props2.isDisabled,
          disabledStyle = _this$props2.disabledStyle,
          error = _this$props2.error,
          errorStyle = _this$props2.errorStyle,
          shouldAutoFocus = _this$props2.shouldAutoFocus,
          isInputNum = _this$props2.isInputNum,
          groupSeperatorPositions = _this$props2.groupSeperatorPositions,
          groupSeperator = _this$props2.groupSeperator;

      var inputs = [];

      var _loop = function _loop(i) {
        inputs.push(_react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_SingleInput2.default, _extends({
            key: i,
            focus: activeInput === i,
            value: otp && otp[i],
            onChange: _this.handleOnChange,
            onKeyDown: _this.handleOnKeyDown,
            onPaste: _this.handleOnPaste,
            onFocus: function onFocus(e) {
              _this.setState({
                activeInput: i,
                hidePlaceholder: _defineProperty({}, i, true)
              });
              e.target.select();
            },
            onBlur: function onBlur() {
              _this.setState({
                activeInput: -1,
                hidePlaceholder: _defineProperty({}, i, false)
              });
            },
            separator: separator,
            inputStyle: inputStyle,
            focusStyle: focusStyle,
            isLastChild: i === numInputs - 1,
            isDisabled: isDisabled,
            disabledStyle: disabledStyle,
            error: error,
            errorStyle: errorStyle,
            shouldAutoFocus: shouldAutoFocus,
            isInputNum: isInputNum,
            placeholder: _this.getInputPlaceholder(i)
          }, _this.getRestInputProps(i))),
          groupSeperatorPositions.includes(i) && groupSeperator
        ));
      };

      for (var i = 0; i < numInputs; i++) {
        _loop(i);
      }
      return inputs;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Helper to return OTP from input


  // Focus on input by index


  // Focus on next input


  // Focus on previous input


  // Change OTP value at focused input


  // Handle pasted OTP


  _createClass(MaskedInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerStyle = _props.containerStyle,
          errorText = _props.errorText,
          error = _props.error;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            style: Object.assign({ display: "flex" }, (0, _helpers.isObject)(containerStyle) && containerStyle),
            className: !(0, _helpers.isObject)(containerStyle) && containerStyle
          },
          this.renderInputs()
        ),
        error && errorText
      );
    }
  }]);

  return MaskedInput;
}(_react2.default.Component);

MaskedInput.defaultProps = {
  numInputs: 4,
  onChange: function onChange() {},
  isDisabled: false,
  shouldAutoFocus: false,
  inputPropsMap: {},
  groupSeperatorPositions: [],
  separator: _react2.default.createElement(
    'span',
    null,
    '\xA0'
  )
};

exports.default = MaskedInput;