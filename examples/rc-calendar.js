webpackJsonp([5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(217);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(218);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(219);
	
	var React = __webpack_require__(180);
	var Calendar = __webpack_require__(220);
	var DatePicker = Calendar.Picker;
	var zhCn = __webpack_require__(267); // spm error
	var DateTimeFormat = __webpack_require__(222);
	var GregorianCalendar = __webpack_require__(224);
	var CalendarLocale = __webpack_require__(268);
	var now = new GregorianCalendar(zhCn);
	now.setTime(Date.now());
	
	var defaultCalendarValue = new GregorianCalendar(zhCn);
	defaultCalendarValue.setTime(Date.now());
	defaultCalendarValue.addMonth(-1);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  propTypes: {
	    formatter: React.PropTypes.object,
	    defaultValue: React.PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      formatter: new DateTimeFormat('yyyy-MM-dd HH:mm:ss')
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      time: Date.now(),
	      showTime: true,
	      disabled: false,
	      value: this.props.defaultValue
	    };
	  },
	
	  onShowTimeChange: function onShowTimeChange(e) {
	    this.setState({
	      showTime: e.target.checked
	    });
	  },
	
	  onChange: function onChange(value) {
	    console.log('DatePicker change: ' + (value && this.props.formatter.format(value)));
	  },
	
	  onCalendarSelect: function onCalendarSelect(value) {
	    console.log('calendar select: ' + (value && this.props.formatter.format(value)));
	    // controlled value
	    this.setState({
	      time: Date.now(),
	      value: value
	    });
	  },
	
	  onCalendarOk: function onCalendarOk(value) {
	    console.log('calendar ok: ' + (value && this.props.formatter.format(value)));
	    // controlled value
	    this.setState({
	      time: Date.now(),
	      value: value
	    });
	  },
	
	  render: function render() {
	    var state = this.state;
	    var calendar = React.createElement(Calendar, { locale: CalendarLocale,
	      orient: ['top', 'left'],
	      defaultValue: defaultCalendarValue,
	      showTime: this.state.showTime,
	      showOk: true,
	      onOk: this.onCalendarOk,
	      onSelect: this.onCalendarSelect,
	      onClear: this.onCalendarSelect.bind(this, null), showClear: true });
	    return React.createElement(
	      'div',
	      { style: { width: 240, margin: 20 }, 'data-time': this.state.time },
	      React.createElement(
	        'div',
	        { style: { marginBottom: 10 } },
	        React.createElement(
	          'span',
	          null,
	          React.createElement('input', { type: 'checkbox', checked: this.state.showTime, onChange: this.onShowTimeChange }),
	          'showTime'
	        ),
	        '    ',
	        React.createElement(
	          'label',
	          null,
	          React.createElement('input', { checked: state.disabled, onChange: this.toggleDisabled, type: 'checkbox' }),
	          ' disabled '
	        )
	      ),
	      React.createElement(
	        'div',
	        { style: {
	            'boxSizing': 'border-box',
	            'position': 'relative',
	            'display': 'block',
	            'lineHeight': 1.5,
	            marginBottom: 22
	          } },
	        React.createElement(
	          DatePicker,
	          {
	            adjustOrientOnCalendarOverflow: true,
	            animation: 'slide-up',
	            disabled: state.disabled,
	            trigger: React.createElement('span', { className: 'rc-calendar-picker-icon' }),
	            formatter: this.props.formatter, calendar: calendar,
	            value: state.value, onChange: this.onChange },
	          React.createElement('input', { className: 'rc-calendar-picker-input', style: { width: 200 }, disabled: state.disabled,
	            placeholder: '请选择日期' })
	        )
	      )
	    );
	  },
	
	  toggleDisabled: function toggleDisabled() {
	    this.setState({
	      disabled: !this.state.disabled
	    });
	  }
	});
	
	React.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ },
/* 219 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Calendar = __webpack_require__(221);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	var _Picker = __webpack_require__(254);
	
	var _Picker2 = _interopRequireDefault(_Picker);
	
	_Calendar2['default'].Picker = _Picker2['default'];
	exports['default'] = _Calendar2['default'];
	module.exports = exports['default'];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendarFormat = __webpack_require__(222);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _gregorianCalendar = __webpack_require__(224);
	
	var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _dateDateTable = __webpack_require__(242);
	
	var _dateDateTable2 = _interopRequireDefault(_dateDateTable);
	
	var _calendarCalendarHeader = __webpack_require__(246);
	
	var _calendarCalendarHeader2 = _interopRequireDefault(_calendarCalendarHeader);
	
	var _calendarCalendarFooter = __webpack_require__(250);
	
	var _calendarCalendarFooter2 = _interopRequireDefault(_calendarCalendarFooter);
	
	var _localeEnUs = __webpack_require__(253);
	
	var _localeEnUs2 = _interopRequireDefault(_localeEnUs);
	
	function noop() {}
	
	function goStartMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(1);
	  this.setState({ value: next });
	}
	
	function goEndMonth() {
	  var next = this.state.value.clone();
	  next.setDayOfMonth(next.getActualMaximum(_gregorianCalendar2['default'].MONTH));
	  this.setState({ value: next });
	}
	
	function goMonth(direction) {
	  var next = this.state.value.clone();
	  next.addMonth(direction);
	  this.setState({ value: next });
	}
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({ value: next });
	}
	
	function goWeek(direction) {
	  var next = this.state.value.clone();
	  next.addWeekOfYear(direction);
	  this.setState({ value: next });
	}
	
	function goDay(direction) {
	  var next = this.state.value.clone();
	  next.addDayOfMonth(direction);
	  this.setState({ value: next });
	}
	
	function getNow() {
	  var value = new _gregorianCalendar2['default']();
	  value.setTime(Date.now());
	  return value;
	}
	
	function getNowByCurrentStateValue(value) {
	  var ret = undefined;
	  if (value) {
	    ret = value.clone();
	    ret.setTime(Date.now());
	  } else {
	    ret = getNow();
	  }
	  return ret;
	}
	
	var Calendar = (function (_React$Component) {
	  _inherits(Calendar, _React$Component);
	
	  function Calendar(props) {
	    var _this = this;
	
	    _classCallCheck(this, Calendar);
	
	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props);
	    var value = props.value || props.defaultValue || getNow();
	    this.dateFormatter = new _gregorianCalendarFormat2['default'](props.locale.dateFormat);
	    this.state = {
	      orient: props.orient,
	      value: value
	    };
	    // bind methods
	    this.nextMonth = goMonth.bind(this, 1);
	    this.previousMonth = goMonth.bind(this, -1);
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	
	    ['onBlur', 'onFocus', 'chooseToday', 'onClear', 'onSelect', 'setValue', 'onKeyDown', 'onOk'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(Calendar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var value = nextProps.value;
	      if (value !== undefined) {
	        value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
	        this.setState({
	          value: value
	        });
	      }
	      if (nextProps.orient) {
	        this.setState({
	          orient: nextProps.orient
	        });
	      }
	      if (nextProps.locale !== this.props.locale) {
	        this.dateFormatter = new _gregorianCalendarFormat2['default'](nextProps.locale.dateFormat);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return _rcUtil2['default'].PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	    }
	  }, {
	    key: 'onSelect',
	    value: function onSelect(current, keyDownEvent) {
	      var props = this.props;
	      this.setState({
	        value: current
	      });
	      if (!keyDownEvent) {
	        props.onSelect(current);
	      }
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      var keyCode = e.keyCode;
	      // mac
	      var ctrlKey = e.ctrlKey || e.metaKey;
	      switch (keyCode) {
	        case _rcUtil.KeyCode.DOWN:
	          goWeek.call(this, 1);
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.UP:
	          goWeek.call(this, -1);
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.LEFT:
	          if (ctrlKey) {
	            this.previousYear();
	          } else {
	            goDay.call(this, -1);
	          }
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.RIGHT:
	          if (ctrlKey) {
	            this.nextYear();
	          } else {
	            goDay.call(this, 1);
	          }
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.HOME:
	          goStartMonth.call(this);
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.END:
	          goEndMonth.call(this);
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.PAGE_DOWN:
	          this.nextMonth();
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.PAGE_UP:
	          this.previousMonth();
	          e.preventDefault();
	          return 1;
	        case _rcUtil.KeyCode.ENTER:
	          this.props.onSelect(this.state.value);
	          e.preventDefault();
	          return 1;
	        default:
	          this.props.onKeyDown(e);
	          return 1;
	      }
	    }
	  }, {
	    key: 'onClear',
	    value: function onClear() {
	      this.props.onClear();
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	        this._blurTimer = null;
	      } else {
	        this.props.onFocus();
	      }
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      var _this2 = this;
	
	      if (this._blurTimer) {
	        clearTimeout(this._blurTimer);
	      }
	      this._blurTimer = setTimeout(function () {
	        _this2.props.onBlur();
	      }, 100);
	    }
	  }, {
	    key: 'onOk',
	    value: function onOk() {
	      this.props.onOk(this.state.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _className;
	
	      var props = this.props;
	      var locale = props.locale;
	      var state = this.state;
	      var value = state.value;
	      var prefixCls = props.prefixCls;
	
	      var className = (_className = {}, _defineProperty(_className, prefixCls, 1), _defineProperty(_className, prefixCls + '-week-number', props.showWeekNumber), _defineProperty(_className, prefixCls + '-hidden', !props.visible), _defineProperty(_className, props.className, !!props.className), _className);
	
	      var orient = state.orient;
	      if (orient) {
	        orient.forEach(function (o) {
	          className[prefixCls + '-orient-' + o] = 1;
	        });
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: _rcUtil2['default'].classSet(className), style: this.props.style,
	          tabIndex: '0', onFocus: this.onFocus,
	          onBlur: this.onBlur, onKeyDown: this.onKeyDown },
	        _react2['default'].createElement(
	          'div',
	          { style: { outline: 'none' } },
	          _react2['default'].createElement(_calendarCalendarHeader2['default'], {
	            locale: locale,
	            onValueChange: this.setValue,
	            previousYear: this.previousYear,
	            previousMonth: this.previousMonth,
	            nextMonth: this.nextMonth,
	            nextYear: this.nextYear,
	            value: value,
	            prefixCls: prefixCls }),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-calendar-body' },
	            _react2['default'].createElement(_dateDateTable2['default'], {
	              locale: locale,
	              value: value,
	              prefixCls: prefixCls,
	              dateRender: props.dateRender,
	              onSelect: this.onSelect,
	              disabledDate: props.disabledDate,
	              showWeekNumber: props.showWeekNumber,
	              dateFormatter: this.dateFormatter })
	          ),
	          _react2['default'].createElement(_calendarCalendarFooter2['default'], {
	            locale: locale,
	            showClear: props.showClear,
	            showOk: props.showOk,
	            prefixCls: prefixCls,
	            showToday: props.showToday,
	            showTime: props.showTime,
	            value: value,
	            dateFormatter: this.dateFormatter,
	            onClear: this.onClear,
	            onOk: this.onOk,
	            onSelect: this.onSelect,
	            onToday: this.chooseToday
	          })
	        )
	      );
	    }
	  }, {
	    key: 'chooseToday',
	    value: function chooseToday() {
	      var today = this.state.value.clone();
	      today.setTime(Date.now());
	      this.onSelect(today);
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(current) {
	      this.setState({
	        value: current
	      });
	    }
	  }, {
	    key: 'setOrient',
	    value: function setOrient(orient) {
	      // FIXME: hack to prevent breaking rc-animate
	      if (this.state.orient === orient) {
	        return;
	      }
	      this.state.orient = orient;
	      var prefixCls = this.props.prefixCls;
	      var root = _react2['default'].findDOMNode(this);
	      var className = root.className.replace(new RegExp(prefixCls + '-orient-\\w+', 'g'), '');
	      if (orient) {
	        orient.forEach(function (o) {
	          className += ' ' + prefixCls + '-orient-' + o;
	        });
	      }
	      root.className = className;
	    }
	  }]);
	
	  return Calendar;
	})(_react2['default'].Component);
	
	exports['default'] = Calendar;
	
	Calendar.propTypes = {
	  value: _react2['default'].PropTypes.object,
	  defaultValue: _react2['default'].PropTypes.object,
	  className: _react2['default'].PropTypes.string,
	  orient: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['left', 'top', 'right', 'bottom'])),
	  locale: _react2['default'].PropTypes.object,
	  showWeekNumber: _react2['default'].PropTypes.bool,
	  style: _react2['default'].PropTypes.object,
	  showToday: _react2['default'].PropTypes.bool,
	  visible: _react2['default'].PropTypes.bool,
	  showTime: _react2['default'].PropTypes.bool,
	  onSelect: _react2['default'].PropTypes.func,
	  onOk: _react2['default'].PropTypes.func,
	  prefixCls: _react2['default'].PropTypes.string,
	  onKeyDown: _react2['default'].PropTypes.func,
	  onClear: _react2['default'].PropTypes.func,
	  onFocus: _react2['default'].PropTypes.func,
	  onBlur: _react2['default'].PropTypes.func
	};
	
	Calendar.defaultProps = {
	  locale: _localeEnUs2['default'],
	  style: {},
	  visible: true,
	  prefixCls: 'rc-calendar',
	  onKeyDown: noop,
	  className: '',
	  showToday: true,
	  onSelect: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onClear: noop,
	  onOk: noop
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(223);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * DateTimeFormat for
	 * Inspired by DateTimeFormat from JDK.
	 * @author yiminghe@gmail.com
	 */
	
	var GregorianCalendar = __webpack_require__(224);
	var enUsLocale = __webpack_require__(229);
	var MAX_VALUE = Number.MAX_VALUE;
	/**
	 * date or time style enum
	 * @enum {Number} Date.Formatter.Style
	 */
	var DateTimeStyle = {
	  /**
	   * full style
	   */
	  FULL: 0,
	  /**
	   * long style
	   */
	  LONG: 1,
	  /**
	   * medium style
	   */
	  MEDIUM: 2,
	  /**
	   * short style
	   */
	  SHORT: 3
	};
	
	/*
	 Letter    Date or Time Component    Presentation    Examples
	 G    Era designator    Text    AD
	 y    Year    Year    1996; 96
	 M    Month in year    Month    July; Jul; 07
	 w    Week in year    Number    27
	 W    Week in month    Number    2
	 D    Day in year    Number    189
	 d    Day in month    Number    10
	 F    Day of week in month    Number    2
	 E    Day in week    Text    Tuesday; Tue
	 a    Am/pm marker    Text    PM
	 H    Hour in day (0-23)    Number    0
	 k    Hour in day (1-24)    Number    24
	 K    Hour in am/pm (0-11)    Number    0
	 h    Hour in am/pm (1-12)    Number    12
	 m    Minute in hour    Number    30
	 s    Second in minute    Number    55
	 S    Millisecond    Number    978
	 x z    Time zone    General time zone    Pacific Standard Time; PST; GMT-08:00
	 Z    Time zone    RFC 822 time zone    -0800
	 */
	
	var patternChars = new Array(GregorianCalendar.DAY_OF_WEEK_IN_MONTH + 2).join('1');
	var ERA = 0;
	var calendarIndexMap = {};
	
	patternChars = patternChars.split('');
	patternChars[ERA] = 'G';
	patternChars[GregorianCalendar.YEAR] = 'y';
	patternChars[GregorianCalendar.MONTH] = 'M';
	patternChars[GregorianCalendar.DAY_OF_MONTH] = 'd';
	patternChars[GregorianCalendar.HOUR_OF_DAY] = 'H';
	patternChars[GregorianCalendar.MINUTES] = 'm';
	patternChars[GregorianCalendar.SECONDS] = 's';
	patternChars[GregorianCalendar.MILLISECONDS] = 'S';
	patternChars[GregorianCalendar.WEEK_OF_YEAR] = 'w';
	patternChars[GregorianCalendar.WEEK_OF_MONTH] = 'W';
	patternChars[GregorianCalendar.DAY_OF_YEAR] = 'D';
	patternChars[GregorianCalendar.DAY_OF_WEEK_IN_MONTH] = 'F';
	
	(function () {
	  for (var index in patternChars) {
	    calendarIndexMap[patternChars[index]] = index;
	  }
	})();
	
	function mix(t, s) {
	  for (var p in s) {
	    t[p] = s[p];
	  }
	}
	
	var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
	var EMPTY = '';
	
	function substitute(str, o, regexp) {
	  if (typeof str !== 'string' || !o) {
	    return str;
	  }
	
	  return str.replace(regexp || SUBSTITUTE_REG, function (match, name) {
	    if (match.charAt(0) === '\\') {
	      return match.slice(1);
	    }
	    return (o[name] === undefined) ? EMPTY : o[name];
	  });
	}
	
	patternChars = patternChars.join('') + 'ahkKZE';
	
	function encode(lastField, count, compiledPattern) {
	  compiledPattern.push({
	    field: lastField,
	    count: count
	  });
	}
	
	function compile(pattern) {
	  var length = pattern.length;
	  var inQuote = false;
	  var compiledPattern = [];
	  var tmpBuffer = null;
	  var count = 0;
	  var lastField = -1;
	
	  for (var i = 0; i < length; i++) {
	    var c = pattern.charAt(i);
	
	    if (c === '\'') {
	      // '' is treated as a single quote regardless of being
	      // in a quoted section.
	      if ((i + 1) < length) {
	        c = pattern.charAt(i + 1);
	        if (c === '\'') {
	          i++;
	          if (count !== 0) {
	            encode(lastField, count, compiledPattern);
	            lastField = -1;
	            count = 0;
	          }
	          if (inQuote) {
	            tmpBuffer += c;
	          }
	          continue;
	        }
	      }
	      if (!inQuote) {
	        if (count !== 0) {
	          encode(lastField, count, compiledPattern);
	          lastField = -1;
	          count = 0;
	        }
	        tmpBuffer = '';
	        inQuote = true;
	      } else {
	        compiledPattern.push({
	          text: tmpBuffer
	        });
	        inQuote = false;
	      }
	      continue;
	    }
	    if (inQuote) {
	      tmpBuffer += c;
	      continue;
	    }
	    if (!(c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z')) {
	      if (count !== 0) {
	        encode(lastField, count, compiledPattern);
	        lastField = -1;
	        count = 0;
	      }
	      compiledPattern.push({
	        text: c
	      });
	      continue;
	    }
	
	    if (patternChars.indexOf(c) === -1) {
	      throw new Error('Illegal pattern character "' + c + '"');
	    }
	
	    if (lastField === -1 || lastField === c) {
	      lastField = c;
	      count++;
	      continue;
	    }
	    encode(lastField, count, compiledPattern);
	    lastField = c;
	    count = 1;
	  }
	
	  if (inQuote) {
	    throw new Error('Unterminated quote');
	  }
	
	  if (count !== 0) {
	    encode(lastField, count, compiledPattern);
	  }
	
	  return compiledPattern;
	}
	
	var zeroDigit = '0';
	
	// TODO zeroDigit localization??
	function zeroPaddingNumber(value, minDigits, maxDigits, buffer) {
	  // Optimization for 1, 2 and 4 digit numbers. This should
	  // cover most cases of formatting date/time related items.
	  // Note: This optimization code assumes that maxDigits is
	  // either 2 or Integer.MAX_VALUE (maxIntCount in format()).
	  buffer = buffer || [];
	  maxDigits = maxDigits || MAX_VALUE;
	  if (value >= 0) {
	    if (value < 100 && minDigits >= 1 && minDigits <= 2) {
	      if (value < 10 && minDigits === 2) {
	        buffer.push(zeroDigit);
	      }
	      buffer.push(value);
	      return buffer.join('');
	    } else if (value >= 1000 && value < 10000) {
	      if (minDigits === 4) {
	        buffer.push(value);
	        return buffer.join('');
	      }
	      if (minDigits === 2 && maxDigits === 2) {
	        return zeroPaddingNumber(value % 100, 2, 2, buffer);
	      }
	    }
	  }
	  buffer.push(value + '');
	  return buffer.join('');
	}
	
	/**
	 *
	 * date time formatter for GregorianCalendar
	 *
	 *      @example
	 *
	 *          var calendar = new GregorianCalendar(2013,9,24);
	 *          // ' to escape
	 *          var formatter = new GregorianCalendarFormat("'today is' ''yyyy/MM/dd a''");
	 *          document.write(formatter.format(calendar));
	 *
	 * @class GregorianCalendarFormat
	 * @param {String} pattern patter string of date formatter
	 *
	 * <table border="1">
	 * <thead valign="bottom">
	 * <tr><th class="head">Letter</th>
	 * <th class="head">Date or Time Component</th>
	 * <th class="head">Presentation</th>
	 * <th class="head">Examples</th>
	 * </tr>
	 * </thead>
	 * <tbody valign="top">
	 * <tr><td>G</td>
	 * <td>Era designator</td>
	 * <td>Text</td>
	 * <td>AD</td>
	 * </tr>
	 * <tr><td>y</td>
	 * <td>Year</td>
	 * <td>Year</td>
	 * <td>1996; 96</td>
	 * </tr>
	 * <tr><td>M</td>
	 * <td>Month in year</td>
	 * <td>Month</td>
	 * <td>July; Jul; 07</td>
	 * </tr>
	 * <tr><td>w</td>
	 * <td>Week in year</td>
	 * <td>Number</td>
	 * <td>27</td>
	 * </tr>
	 * <tr><td>W</td>
	 * <td>Week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>D</td>
	 * <td>Day in year</td>
	 * <td>Number</td>
	 * <td>189</td>
	 * </tr>
	 * <tr><td>d</td>
	 * <td>Day in month</td>
	 * <td>Number</td>
	 * <td>10</td>
	 * </tr>
	 * <tr><td>F</td>
	 * <td>Day of week in month</td>
	 * <td>Number</td>
	 * <td>2</td>
	 * </tr>
	 * <tr><td>E</td>
	 * <td>Day in week</td>
	 * <td>Text</td>
	 * <td>Tuesday; Tue</td>
	 * </tr>
	 * <tr><td>a</td>
	 * <td>Am/pm marker</td>
	 * <td>Text</td>
	 * <td>PM</td>
	 * </tr>
	 * <tr><td>H</td>
	 *       <td>Hour in day (0-23)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>k</td>
	 *       <td>Hour in day (1-24)</td>
	 * <td>Number</td>
	 * <td>24</td>
	 * </tr>
	 * <tr><td>K</td>
	 * <td>Hour in am/pm (0-11)</td>
	 * <td>Number</td>
	 * <td>0</td>
	 * </tr>
	 * <tr><td>h</td>
	 * <td>Hour in am/pm (1-12)</td>
	 * <td>Number</td>
	 * <td>12</td>
	 * </tr>
	 * <tr><td>m</td>
	 * <td>Minute in hour</td>
	 * <td>Number</td>
	 * <td>30</td>
	 * </tr>
	 * <tr><td>s</td>
	 * <td>Second in minute</td>
	 * <td>Number</td>
	 * <td>55</td>
	 * </tr>
	 * <tr><td>S</td>
	 * <td>Millisecond</td>
	 * <td>Number</td>
	 * <td>978</td>
	 * </tr>
	 * <tr><td>x/z</td>
	 * <td>Time zone</td>
	 * <td>General time zone</td>
	 * <td>Pacific Standard Time; PST; GMT-08:00</td>
	 * </tr>
	 * <tr><td>Z</td>
	 * <td>Time zone</td>
	 * <td>RFC 822 time zone</td>
	 * <td>-0800</td>
	 * </tr>
	 * </tbody>
	 * </table>
	
	 * @param {Object} locale format locale
	 */
	function DateTimeFormat(pattern, locale) {
	  this.locale = locale || enUsLocale;
	  this.originalPattern = pattern;
	  this.pattern = compile(pattern);
	}
	
	function formatField(field, count, locale, calendar) {
	  var current,
	    value;
	  switch (field) {
	    case 'G':
	      value = calendar.getYear() > 0 ? 1 : 0;
	      current = locale.eras[value];
	      break;
	    case 'y':
	      value = calendar.getYear();
	      if (value <= 0) {
	        value = 1 - value;
	      }
	      current = (zeroPaddingNumber(value, 2, count !== 2 ? MAX_VALUE : 2));
	      break;
	    case 'M':
	      value = calendar.getMonth();
	      if (count >= 4) {
	        current = locale.months[value];
	      } else if (count === 3) {
	        current = locale.shortMonths[value];
	      } else {
	        current = zeroPaddingNumber(value + 1, count);
	      }
	      break;
	    case 'k':
	      current = zeroPaddingNumber(calendar.getHourOfDay() || 24,
	        count);
	      break;
	    case 'E':
	      value = calendar.getDayOfWeek();
	      current = count >= 4 ?
	        locale.weekdays[value] :
	        locale.shortWeekdays[value];
	      break;
	    case 'a':
	      current = locale.ampms[calendar.getHourOfDay() >= 12 ?
	        1 :
	        0];
	      break;
	    case 'h':
	      current = zeroPaddingNumber(calendar.
	        getHourOfDay() % 12 || 12, count);
	      break;
	    case 'K':
	      current = zeroPaddingNumber(calendar.
	        getHourOfDay() % 12, count);
	      break;
	    case 'Z':
	      var offset = calendar.getTimezoneOffset();
	      var parts = [offset < 0 ? '-' : '+'];
	      offset = Math.abs(offset);
	      parts.push(zeroPaddingNumber(Math.floor(offset / 60) % 100, 2),
	        zeroPaddingNumber(offset % 60, 2));
	      current = parts.join('');
	      break;
	    default :
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W':
	      var index = calendarIndexMap[field];
	      value = calendar.get(index);
	      current = zeroPaddingNumber(value, count);
	  }
	  return current;
	}
	
	function matchField(dateStr, startIndex, matches) {
	  var matchedLen = -1;
	  var index = -1;
	  var i;
	  var len = matches.length;
	  for (i = 0; i < len; i++) {
	    var m = matches[i];
	    var mLen = m.length;
	    if (mLen > matchedLen &&
	      matchPartString(dateStr, startIndex, m, mLen)) {
	      matchedLen = mLen;
	      index = i;
	    }
	  }
	  return index >= 0 ? {
	    value: index,
	    startIndex: startIndex + matchedLen
	  } : null;
	}
	
	function matchPartString(dateStr, startIndex, match, mLen) {
	  for (var i = 0; i < mLen; i++) {
	    if (dateStr.charAt(startIndex + i) !== match.charAt(i)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function getLeadingNumberLen(str) {
	  var i, c;
	  var len = str.length;
	  for (i = 0; i < len; i++) {
	    c = str.charAt(i);
	    if (c < '0' || c > '9') {
	      break;
	    }
	  }
	  return i;
	}
	
	function matchNumber(dateStr, startIndex, count, obeyCount) {
	  var str = dateStr;
	  var n;
	  if (obeyCount) {
	    if (dateStr.length <= startIndex + count) {
	      return null;
	    }
	    str = dateStr.slice(startIndex, startIndex + count);
	    if (!str.match(/^\d+$/)) {
	      throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + (this.originalPattern));
	    }
	  } else {
	    str = str.slice(startIndex);
	  }
	  n = parseInt(str, 10);
	  if (isNaN(n)) {
	    throw new Error('GregorianCalendarFormat parse error, dateStr: ' + dateStr + ', patter: ' + (this.originalPattern));
	  }
	  return {
	    value: n,
	    startIndex: startIndex + getLeadingNumberLen(str)
	  };
	}
	
	function parseField(calendar, dateStr, startIndex, field, count, obeyCount, tmp) {
	  var match, year, hour;
	  if (dateStr.length <= startIndex) {
	    return startIndex;
	  }
	  var locale = this.locale;
	  switch (field) {
	    case 'G':
	      if ((match = matchField(dateStr, startIndex, locale.eras))) {
	        if (calendar.isSetYear()) {
	          if (match.value === 0) {
	            year = calendar.getYear();
	            calendar.setYear(1 - year);
	          }
	        } else {
	          tmp.era = match.value;
	        }
	      }
	      break;
	    case 'y':
	      if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	        year = match.value;
	        if ('era' in tmp) {
	          if (tmp.era === 0) {
	            year = 1 - year;
	          }
	        }
	        calendar.setYear(year);
	      }
	      break;
	    case 'M':
	      var month;
	      if (count >= 3) {
	        if ((match = matchField(dateStr, startIndex, locale[count === 3 ?
	            'shortMonths' : 'months']))) {
	          month = match.value;
	        }
	      } else {
	        if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	          month = match.value - 1;
	        }
	      }
	      if (match) {
	        calendar.setMonth(month);
	      }
	      break;
	    case 'k':
	      if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	        calendar.setHourOfDay(match.value % 24);
	      }
	      break;
	    case 'E':
	      if ((match = matchField(dateStr, startIndex, locale[count > 3 ?
	          'weekdays' :
	          'shortWeekdays']))) {
	        calendar.setDayOfWeek(match.value);
	      }
	      break;
	    case 'a':
	      if ((match = matchField(dateStr, startIndex, locale.ampms))) {
	        if (calendar.isSetHourOfDay()) {
	          if (match.value) {
	            hour = calendar.getHourOfDay();
	            if (hour < 12) {
	              calendar.setHourOfDay((hour + 12) % 24);
	            }
	          }
	        } else {
	          tmp.ampm = match.value;
	        }
	      }
	      break;
	    case 'h':
	      if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	        hour = match.value %= 12;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'K':
	      if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	        hour = match.value;
	        if (tmp.ampm) {
	          hour += 12;
	        }
	        calendar.setHourOfDay(hour);
	      }
	      break;
	    case 'Z':
	      var sign = 1;
	      var zoneChar = dateStr.charAt(startIndex);
	      if (zoneChar === '-') {
	        sign = -1;
	        startIndex++;
	      } else if (zoneChar === '+') {
	        startIndex++;
	      } else {
	        break;
	      }
	      if ((match = matchNumber.call(this, dateStr, startIndex, 2, true))) {
	        var zoneOffset = match.value * 60;
	        startIndex = match.startIndex;
	        if ((match = matchNumber.call(this, dateStr, startIndex, 2, true))) {
	          zoneOffset += match.value;
	        }
	        calendar.setTimezoneOffset(zoneOffset);
	      }
	      break;
	    default :
	      // case 'd':
	      // case 'H':
	      // case 'm':
	      // case 's':
	      // case 'S':
	      // case 'D':
	      // case 'F':
	      // case 'w':
	      // case 'W'
	      if ((match = matchNumber.call(this, dateStr, startIndex, count, obeyCount))) {
	        var index = calendarIndexMap[field];
	        calendar.set(index, match.value);
	      }
	  }
	  if (match) {
	    startIndex = match.startIndex;
	  }
	  return startIndex;
	}
	
	mix(DateTimeFormat.prototype, {
	  /**
	   * format a GregorianDate instance according to specified pattern
	   * @param {GregorianCalendar} calendar GregorianDate instance
	   * @returns {string} formatted string of GregorianDate instance
	   */
	  format: function (calendar) {
	    if (!calendar.isGregorianCalendar) {
	      throw new Error('calendar must be type of GregorianCalendar');
	    }
	    var i;
	    var ret = [];
	    var pattern = this.pattern;
	    var len = pattern.length;
	    for (i = 0; i < len; i++) {
	      var comp = pattern[i];
	      if (comp.text) {
	        ret.push(comp.text);
	      } else if ('field' in comp) {
	        ret.push(formatField(comp.field, comp.count, this.locale, calendar));
	      }
	    }
	    return ret.join('');
	  },
	
	  /**
	   * parse a formatted string of GregorianDate instance according to specified pattern
	   * @param {String} dateStr formatted string of GregorianDate
	   * @returns {GregorianCalendar}
	   */
	  parse: function (dateStr, calendarLocale) {
	    var calendar = new GregorianCalendar(calendarLocale);
	    var i;
	    var j;
	    var tmp = {};
	    var obeyCount = false;
	    var dateStrLen = dateStr.length;
	    var errorIndex = -1;
	    var startIndex = 0;
	    var oldStartIndex = 0;
	    var pattern = this.pattern;
	    var len = pattern.length;
	
	    loopPattern: {
	      for (i = 0; errorIndex < 0 && i < len; i++) {
	        var comp = pattern[i], text, textLen;
	        oldStartIndex = startIndex;
	        if ((text = comp.text)) {
	          textLen = text.length;
	          if ((textLen + startIndex) > dateStrLen) {
	            errorIndex = startIndex;
	          } else {
	            for (j = 0; j < textLen; j++) {
	              if (text.charAt(j) !== dateStr.charAt(j + startIndex)) {
	                errorIndex = startIndex;
	                break loopPattern;
	              }
	            }
	            startIndex += textLen;
	          }
	        } else if ('field' in comp) {
	          obeyCount = false;
	          var nextComp = pattern[i + 1];
	          if (nextComp) {
	            if ('field' in nextComp) {
	              obeyCount = true;
	            } else {
	              var c = nextComp.text.charAt(0);
	              if (c >= '0' && c <= '9') {
	                obeyCount = true;
	              }
	            }
	          }
	          startIndex = parseField.call(this, calendar,
	            dateStr,
	            startIndex,
	            comp.field,
	            comp.count,
	            obeyCount,
	            tmp);
	          if (startIndex === oldStartIndex) {
	            errorIndex = startIndex;
	          }
	        }
	      }
	    }
	
	    if (errorIndex >= 0) {
	      console.error('error when parsing date');
	      console.error(dateStr);
	      console.error(dateStr.slice(0, errorIndex) + '^');
	      return undefined;
	    }
	    return calendar;
	  }
	});
	
	mix(DateTimeFormat, {
	  Style: DateTimeStyle,
	
	  /**
	   * get a formatter instance of short style pattern.
	   * en-us: M/d/yy h:mm a
	   * zh-cn: yy-M-d ah:mm
	   * @param {Object} locale locale object
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getInstance: function (locale) {
	    return this.getDateTimeInstance(DateTimeStyle.SHORT, DateTimeStyle.SHORT, locale);
	  },
	
	  /**
	   * get a formatter instance of specified date style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateInstance: function (dateStyle, locale) {
	    return this.getDateTimeInstance(dateStyle, undefined, locale);
	  },
	
	  /**
	   * get a formatter instance of specified date style and time style.
	   * @param {Date.Formatter.Style} dateStyle date format style
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getDateTimeInstance: function (dateStyle, timeStyle, locale) {
	    locale = locale || enUsLocale;
	    var datePattern = '';
	    if (dateStyle !== undefined) {
	      datePattern = locale.datePatterns[dateStyle];
	    }
	    var timePattern = '';
	    if (timeStyle !== undefined) {
	      timePattern = locale.timePatterns[timeStyle];
	    }
	    var pattern = datePattern;
	    if (timePattern) {
	      if (datePattern) {
	        pattern = substitute(locale.dateTimePattern, {
	          date: datePattern,
	          time: timePattern
	        });
	      } else {
	        pattern = timePattern;
	      }
	    }
	    return new DateTimeFormat(pattern, locale);
	  },
	
	  /**
	   * get a formatter instance of specified time style.
	   * @param {Date.Formatter.Style} timeStyle time format style
	   * @param {Object} locale
	   * @returns {GregorianCalendar}
	   * @static
	   */
	  getTimeInstance: function (timeStyle, locale) {
	    return this.getDateTimeInstance(undefined, timeStyle, locale);
	  }
	});
	
	module.exports = DateTimeFormat;
	
	DateTimeFormat.version = '@VERSION@';
	
	// gc_format@163.com

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(225);

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * GregorianCalendar class
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	var toInt = parseInt;
	var Utils = __webpack_require__(226);
	var defaultLocale = __webpack_require__(228);
	var Const = __webpack_require__(227);
	
	/**
	 * GregorianCalendar class.
	 *
	 * - no arguments:
	 *   Constructs a default GregorianCalendar using the current time
	 *   in the default time zone with the default locale.
	 * - one argument locale:
	 *   Constructs a GregorianCalendar
	 *   based on the current time in the default time zone with the given locale.
	 *
	 * @class Date.Gregorian
	 */
	function GregorianCalendar(locale) {
	  locale = locale || defaultLocale;
	
	  this.locale = locale;
	
	  this.fields = [];
	
	  /**
	   * The currently set time for this date.
	   * @protected
	   * @type Number|undefined
	   */
	  this.time = undefined;
	  /**
	   * The timezoneOffset in minutes used by this date.
	   * @type Number
	   * @protected
	   */
	
	  this.timezoneOffset = locale.timezoneOffset;
	
	  /**
	   * The first day of the week
	   * @type Number
	   * @protected
	   */
	  this.firstDayOfWeek = locale.firstDayOfWeek;
	
	  /**
	   * The number of days required for the first week in a month or year,
	   * with possible values from 1 to 7.
	   * @@protected
	   * @type Number
	   */
	  this.minimalDaysInFirstWeek = locale.minimalDaysInFirstWeek;
	
	  this.fieldsComputed = false;
	}
	
	Utils.mix(GregorianCalendar, Const);
	
	Utils.mix(GregorianCalendar, {
	  Utils: Utils,
	
	  defaultLocale: defaultLocale,
	
	  /**
	   * Determines if the given year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @param {Number} year the given year.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @static
	   * @method
	   */
	  isLeapYear: Utils.isLeapYear,
	
	  /**
	   * Enum indicating year field of date
	   * @type Number
	   */
	  YEAR: 1,
	  /**
	   * Enum indicating month field of date
	   * @type Number
	   */
	  MONTH: 2,
	  /**
	   * Enum indicating the day of the month
	   * @type Number
	   */
	  DAY_OF_MONTH: 3,
	  /**
	   * Enum indicating the hour (24).
	   * @type Number
	   */
	  HOUR_OF_DAY: 4,
	  /**
	   * Enum indicating the minute of the day
	   * @type Number
	   */
	  MINUTES: 5,
	  /**
	   * Enum indicating the second of the day
	   * @type Number
	   */
	  SECONDS: 6,
	  /**
	   * Enum indicating the millisecond of the day
	   * @type Number
	   */
	  MILLISECONDS: 7,
	  /**
	   * Enum indicating the week number within the current year
	   * @type Number
	   */
	  WEEK_OF_YEAR: 8,
	  /**
	   * Enum indicating the week number within the current month
	   * @type Number
	   */
	  WEEK_OF_MONTH: 9,
	
	  /**
	   * Enum indicating the day of the day number within the current year
	   * @type Number
	   */
	  DAY_OF_YEAR: 10,
	  /**
	   * Enum indicating the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK: 11,
	  /**
	   * Enum indicating the day of the ordinal number of the day of the week
	   * @type Number
	   */
	  DAY_OF_WEEK_IN_MONTH: 12,
	
	  /**
	   * Enum indicating am
	   * @type Number
	   */
	  AM: 0,
	  /**
	   * Enum indicating pm
	   * @type Number
	   */
	  PM: 1
	});
	
	var fields = ['',
	  'Year', 'Month', 'DayOfMonth',
	  'HourOfDay',
	  'Minutes', 'Seconds', 'Milliseconds', 'WeekOfYear',
	  'WeekOfMonth', 'DayOfYear', 'DayOfWeek',
	  'DayOfWeekInMonth'
	];
	
	var YEAR = GregorianCalendar.YEAR;
	var MONTH = GregorianCalendar.MONTH;
	var DAY_OF_MONTH = GregorianCalendar.DAY_OF_MONTH;
	var HOUR_OF_DAY = GregorianCalendar.HOUR_OF_DAY;
	var MINUTE = GregorianCalendar.MINUTES;
	var SECONDS = GregorianCalendar.SECONDS;
	
	var MILLISECONDS = GregorianCalendar.MILLISECONDS;
	var DAY_OF_WEEK_IN_MONTH = GregorianCalendar.DAY_OF_WEEK_IN_MONTH;
	var DAY_OF_YEAR = GregorianCalendar.DAY_OF_YEAR;
	var DAY_OF_WEEK = GregorianCalendar.DAY_OF_WEEK;
	
	var WEEK_OF_MONTH = GregorianCalendar.WEEK_OF_MONTH;
	var WEEK_OF_YEAR = GregorianCalendar.WEEK_OF_YEAR;
	
	var MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	var LEAP_MONTH_LENGTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0-based
	
	var ONE_SECOND = 1000;
	var ONE_MINUTE = 60 * ONE_SECOND;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_WEEK = ONE_DAY * 7;
	
	var EPOCH_OFFSET = 719163; // Fixed date of January 1, 1970 (Gregorian)
	
	var mod = Utils.mod,
	  isLeapYear = Utils.isLeapYear,
	  floorDivide = Math.floor;
	
	var MIN_VALUES = [
	  undefined,
	  1,              // YEAR
	  GregorianCalendar.JANUARY,        // MONTH
	  1,              // DAY_OF_MONTH
	  0,              // HOUR_OF_DAY
	  0,              // MINUTE
	  0,              // SECONDS
	  0,              // MILLISECONDS
	
	  1,              // WEEK_OF_YEAR
	  undefined,              // WEEK_OF_MONTH
	
	  1,              // DAY_OF_YEAR
	  GregorianCalendar.SUNDAY,         // DAY_OF_WEEK
	  1             // DAY_OF_WEEK_IN_MONTH
	];
	
	var MAX_VALUES = [
	  undefined,
	  292278994,      // YEAR
	  GregorianCalendar.DECEMBER,       // MONTH
	  undefined, // DAY_OF_MONTH
	  23,             // HOUR_OF_DAY
	  59,             // MINUTE
	  59,             // SECONDS
	  999,            // MILLISECONDS
	  undefined,             // WEEK_OF_YEAR
	  undefined,              // WEEK_OF_MONTH
	  undefined,            // DAY_OF_YEAR
	  GregorianCalendar.SATURDAY,       // DAY_OF_WEEK
	  undefined              // DAY_OF_WEEK_IN_MONTH
	];
	
	GregorianCalendar.prototype = {
	  constructor: GregorianCalendar,
	
	  isGregorianCalendar: 1,
	
	  /**
	   * Determines if current year is a leap year.
	   * Returns true if the given year is a leap year. To specify BC year numbers,
	   * 1 - year number must be given. For example, year BC 4 is specified as -3.
	   * @returns {Boolean} true if the given year is a leap year; false otherwise.
	   * @method
	   * @member Date.Gregorian
	   */
	  isLeapYear: function () {
	    return isLeapYear(this.getYear());
	  },
	
	  /**
	   * Return local info for current date instance
	   * @returns {Object}
	   */
	  getLocale: function () {
	    return this.locale;
	  },
	
	  /**
	   * Returns the minimum value for
	   * the given calendar field of this GregorianCalendar instance.
	   * The minimum value is defined as the smallest value
	   * returned by the get method for any possible time value,
	   * taking into consideration the current values of the getFirstDayOfWeek,
	   * getMinimalDaysInFirstWeek.
	   * @param field the calendar field.
	   * @returns {Number} the minimum value for the given calendar field.
	   */
	  getActualMinimum: function (field) {
	    if (MIN_VALUES[field] !== undefined) {
	      return MIN_VALUES[field];
	    }
	
	    var fields = this.fields;
	    if (field === WEEK_OF_MONTH) {
	      var cal = this.clone();
	      cal.clear();
	      cal.set(fields[YEAR], fields[MONTH], 1);
	      return cal.get(WEEK_OF_MONTH);
	    }
	
	    throw new Error('minimum value not defined!');
	  },
	
	  /**
	   * Returns the maximum value for the given calendar field
	   * of this GregorianCalendar instance.
	   * The maximum value is defined as the largest value returned
	   * by the get method for any possible time value, taking into consideration
	   * the current values of the getFirstDayOfWeek, getMinimalDaysInFirstWeek methods.
	   * @param field the calendar field.
	   * @returns {Number} the maximum value for the given calendar field.
	   */
	  getActualMaximum: function (field) {
	    if (MAX_VALUES[field] !== undefined) {
	      return MAX_VALUES[field];
	    }
	    var value,
	      fields = this.fields;
	    switch (field) {
	      case DAY_OF_MONTH:
	        value = getMonthLength(fields[YEAR], fields[MONTH]);
	        break;
	
	      case WEEK_OF_YEAR:
	        var endOfYear = this.clone();
	        endOfYear.clear();
	        endOfYear.set(fields[YEAR], GregorianCalendar.DECEMBER, 31);
	        value = endOfYear.get(WEEK_OF_YEAR);
	        if (value === 1) {
	          value = 52;
	        }
	        break;
	
	      case WEEK_OF_MONTH:
	        var endOfMonth = this.clone();
	        endOfMonth.clear();
	        endOfMonth.set(fields[YEAR], fields[MONTH], getMonthLength(fields[YEAR], fields[MONTH]));
	        value = endOfMonth.get(WEEK_OF_MONTH);
	        break;
	
	      case DAY_OF_YEAR:
	        value = getYearLength(fields[YEAR]);
	        break;
	
	      case DAY_OF_WEEK_IN_MONTH:
	        value = toInt((getMonthLength(fields[YEAR], fields[MONTH]) - 1) / 7) + 1;
	        break;
	    }
	    if (value === undefined) {
	      throw new Error('maximum value not defined!');
	    }
	    return value;
	  },
	
	  /**
	   * Determines if the given calendar field has a value set,
	   * including cases that the value has been set by internal fields calculations
	   * triggered by a get method call.
	   * @param field the calendar field to be cleared.
	   * @returns {boolean} true if the given calendar field has a value set; false otherwise.
	   */
	  isSet: function (field) {
	    return this.fields[field] !== undefined;
	  },
	
	  /**
	   * Converts the time value (millisecond offset from the Epoch)
	   * to calendar field values.
	   * @protected
	   */
	  computeFields: function () {
	    var time = this.time;
	    var timezoneOffset = this.timezoneOffset * ONE_MINUTE;
	    var fixedDate = toInt(timezoneOffset / ONE_DAY);
	    var timeOfDay = timezoneOffset % ONE_DAY;
	    fixedDate += toInt(time / ONE_DAY);
	    timeOfDay += time % ONE_DAY;
	    if (timeOfDay >= ONE_DAY) {
	      timeOfDay -= ONE_DAY;
	      fixedDate++;
	    } else {
	      while (timeOfDay < 0) {
	        timeOfDay += ONE_DAY;
	        fixedDate--;
	      }
	    }
	
	    fixedDate += EPOCH_OFFSET;
	
	    var date = Utils.getGregorianDateFromFixedDate(fixedDate);
	
	    var year = date.year;
	
	    var fields = this.fields;
	    fields[YEAR] = year;
	    fields[MONTH] = date.month;
	    fields[DAY_OF_MONTH] = date.dayOfMonth;
	    fields[DAY_OF_WEEK] = date.dayOfWeek;
	
	    if (timeOfDay !== 0) {
	      fields[HOUR_OF_DAY] = toInt(timeOfDay / ONE_HOUR);
	      var r = timeOfDay % ONE_HOUR;
	      fields[MINUTE] = toInt(r / ONE_MINUTE);
	      r %= ONE_MINUTE;
	      fields[SECONDS] = toInt(r / ONE_SECOND);
	      fields[MILLISECONDS] = r % ONE_SECOND;
	    } else {
	      fields[HOUR_OF_DAY] =
	        fields[MINUTE] =
	          fields[SECONDS] =
	            fields[MILLISECONDS] = 0;
	    }
	
	    var fixedDateJan1 = Utils.getFixedDate(year, GregorianCalendar.JANUARY, 1);
	    var dayOfYear = fixedDate - fixedDateJan1 + 1;
	    var fixDateMonth1 = fixedDate - date.dayOfMonth + 1;
	
	    fields[DAY_OF_YEAR] = dayOfYear;
	    fields[DAY_OF_WEEK_IN_MONTH] = toInt((date.dayOfMonth - 1) / 7) + 1;
	
	    var weekOfYear = getWeekNumber(this, fixedDateJan1, fixedDate);
	
	    // 本周没有足够的时间在当前年
	    if (weekOfYear === 0) {
	      // If the date belongs to the last week of the
	      // previous year, use the week number of "12/31" of
	      // the "previous" year.
	      var fixedDec31 = fixedDateJan1 - 1;
	      var prevJan1 = fixedDateJan1 - getYearLength(year - 1);
	      weekOfYear = getWeekNumber(this, prevJan1, fixedDec31);
	    } else
	    // 本周是年末最后一周，可能有足够的时间在新的一年
	    if (weekOfYear >= 52) {
	      var nextJan1 = fixedDateJan1 + getYearLength(year);
	      var nextJan1st = getDayOfWeekDateOnOrBefore(nextJan1 + 6, this.firstDayOfWeek);
	      var nDays = nextJan1st - nextJan1;
	      // 本周有足够天数在新的一年
	      if (nDays >= this.minimalDaysInFirstWeek &&
	          // 当天确实在本周，weekOfYear === 53 时是不需要这个判断
	        fixedDate >= (nextJan1st - 7)
	      ) {
	        weekOfYear = 1;
	      }
	    }
	
	    fields[WEEK_OF_YEAR] = weekOfYear;
	    fields[WEEK_OF_MONTH] = getWeekNumber(this, fixDateMonth1, fixedDate);
	
	    this.fieldsComputed = true;
	  },
	
	  /**
	   * Converts calendar field values to the time value
	   * (millisecond offset from the Epoch).
	   * @protected
	   */
	  computeTime: function () {
	    if (!this.isSet(YEAR)) {
	      throw new Error('year must be set for GregorianCalendar');
	    }
	
	    var fields = this.fields;
	
	    var year = fields[YEAR];
	    var timeOfDay = 0;
	    if (this.isSet(HOUR_OF_DAY)) {
	      timeOfDay += fields[HOUR_OF_DAY];
	    }
	    timeOfDay *= 60;
	    timeOfDay += fields[MINUTE] || 0;
	    timeOfDay *= 60;
	    timeOfDay += fields[SECONDS] || 0;
	    timeOfDay *= 1000;
	    timeOfDay += fields[MILLISECONDS] || 0;
	
	    var fixedDate = 0;
	
	    fields[YEAR] = year;
	
	    fixedDate = fixedDate + this.getFixedDate();
	
	    // millis represents local wall-clock time in milliseconds.
	    var millis = (fixedDate - EPOCH_OFFSET) * ONE_DAY + timeOfDay;
	
	    millis -= this.timezoneOffset * ONE_MINUTE;
	
	    this.time = millis;
	
	    this.computeFields();
	  },
	
	  /**
	   * Fills in any unset fields in the calendar fields. First,
	   * the computeTime() method is called if the time value (millisecond offset from the Epoch)
	   * has not been calculated from calendar field values.
	   * Then, the computeFields() method is called to calculate all calendar field values.
	   * @protected
	   */
	  complete: function () {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    if (!this.fieldsComputed) {
	      this.computeFields();
	    }
	  },
	
	  getFixedDate: function () {
	
	    var self = this;
	
	    var fields = self.fields;
	
	    var firstDayOfWeekCfg = self.firstDayOfWeek;
	
	    var year = fields[YEAR];
	
	    var month = GregorianCalendar.JANUARY;
	
	    if (self.isSet(MONTH)) {
	      month = fields[MONTH];
	      if (month > GregorianCalendar.DECEMBER) {
	        year += toInt(month / 12);
	        month %= 12;
	      } else if (month < GregorianCalendar.JANUARY) {
	        year += floorDivide(month / 12);
	        month = mod(month, 12);
	      }
	    }
	
	    // Get the fixed date since Jan 1, 1 (Gregorian). We are on
	    // the first day of either `month' or January in 'year'.
	    var fixedDate = Utils.getFixedDate(year, month, 1);
	    var firstDayOfWeek;
	    var dayOfWeek = self.firstDayOfWeek;
	
	    if (self.isSet(DAY_OF_WEEK)) {
	      dayOfWeek = fields[DAY_OF_WEEK];
	    }
	
	    if (self.isSet(MONTH)) {
	      if (self.isSet(DAY_OF_MONTH)) {
	        fixedDate += fields[DAY_OF_MONTH] - 1;
	      } else {
	        if (self.isSet(WEEK_OF_MONTH)) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	
	          // If we have enough days in the first week, then
	          // move to the previous week.
	          if ((firstDayOfWeek - fixedDate) >= self.minimalDaysInFirstWeek) {
	            firstDayOfWeek -= 7;
	          }
	
	          if (dayOfWeek !== firstDayOfWeekCfg) {
	            firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	          }
	
	          fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_MONTH] - 1);
	        } else {
	          var dowim;
	          if (self.isSet(DAY_OF_WEEK_IN_MONTH)) {
	            dowim = fields[DAY_OF_WEEK_IN_MONTH];
	          } else {
	            dowim = 1;
	          }
	          var lastDate = (7 * dowim);
	          if (dowim < 0) {
	            lastDate = getMonthLength(year, month) + (7 * (dowim + 1));
	          }
	          fixedDate = getDayOfWeekDateOnOrBefore(fixedDate + lastDate - 1, dayOfWeek);
	        }
	      }
	    } else {
	      // We are on the first day of the year.
	      if (self.isSet(DAY_OF_YEAR)) {
	        fixedDate += fields[DAY_OF_YEAR] - 1;
	      } else {
	        firstDayOfWeek = getDayOfWeekDateOnOrBefore(fixedDate + 6, firstDayOfWeekCfg);
	        // If we have enough days in the first week, then move
	        // to the previous week.
	        if ((firstDayOfWeek - fixedDate) >= self.minimalDaysInFirstWeek) {
	          firstDayOfWeek -= 7;
	        }
	        if (dayOfWeek !== firstDayOfWeekCfg) {
	          firstDayOfWeek = getDayOfWeekDateOnOrBefore(firstDayOfWeek + 6, dayOfWeek);
	        }
	        fixedDate = firstDayOfWeek + 7 * (fields[WEEK_OF_YEAR] - 1);
	      }
	    }
	
	    return fixedDate;
	  },
	
	  /**
	   * Returns this Calendar's time value in milliseconds
	   * @member Date.Gregorian
	   * @returns {Number} the current time as UTC milliseconds from the epoch.
	   */
	  getTime: function () {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    return this.time;
	  },
	
	  /**
	   * Sets this Calendar's current time from the given long value.
	   * @param time the new time in UTC milliseconds from the epoch.
	   */
	  setTime: function (time) {
	    this.time = time;
	    this.fieldsComputed = false;
	    this.complete();
	  },
	
	  /**
	   * Returns the value of the given calendar field.
	   * @param field the given calendar field.
	   * @returns {Number} the value for the given calendar field.
	   */
	  get: function (field) {
	    this.complete();
	    return this.fields[field];
	  },
	
	  /**
	   * Returns the year of the given calendar field.
	   * @method getYear
	   * @returns {Number} the year for the given calendar field.
	   */
	
	  /**
	   * Returns the month of the given calendar field.
	   * @method getMonth
	   * @returns {Number} the month for the given calendar field.
	   */
	
	  /**
	   * Returns the day of month of the given calendar field.
	   * @method getDayOfMonth
	   * @returns {Number} the day of month for the given calendar field.
	   */
	
	  /**
	   * Returns the hour of day of the given calendar field.
	   * @method getHourOfDay
	   * @returns {Number} the hour of day for the given calendar field.
	   */
	
	  /**
	   * Returns the minute of the given calendar field.
	   * @method getMinute
	   * @returns {Number} the minute for the given calendar field.
	   */
	
	  /**
	   * Returns the second of the given calendar field.
	   * @method getSecond
	   * @returns {Number} the second for the given calendar field.
	   */
	
	  /**
	   * Returns the millisecond of the given calendar field.
	   * @method getMilliSecond
	   * @returns {Number} the millisecond for the given calendar field.
	   */
	
	  /**
	   * Returns the week of year of the given calendar field.
	   * @method getWeekOfYear
	   * @returns {Number} the week of year for the given calendar field.
	   */
	
	  /**
	   * Returns the week of month of the given calendar field.
	   * @method getWeekOfMonth
	   * @returns {Number} the week of month for the given calendar field.
	   */
	
	  /**
	   * Returns the day of year of the given calendar field.
	   * @method getDayOfYear
	   * @returns {Number} the day of year for the given calendar field.
	   */
	
	  /**
	   * Returns the day of week of the given calendar field.
	   * @method getDayOfWeek
	   * @returns {Number} the day of week for the given calendar field.
	   */
	
	  /**
	   * Returns the day of week in month of the given calendar field.
	   * @method getDayOfWeekInMonth
	   * @returns {Number} the day of week in month for the given calendar field.
	   */
	
	  /**
	   * Sets the given calendar field to the given value.
	   * @param field the given calendar field.
	   * @param v the value to be set for the given calendar field.
	   */
	  set: function (field, v) {
	    var len = arguments.length;
	    if (len === 2) {
	      this.fields[field] = v;
	    } else if (len < MILLISECONDS + 1) {
	      for (var i = 0; i < len; i++) {
	        this.fields[YEAR + i] = arguments[i];
	      }
	    } else {
	      throw  new Error('illegal arguments for GregorianCalendar set');
	    }
	    this.time = undefined;
	  },
	
	  /**
	   * Set the year of the given calendar field.
	   * @method setYear
	   */
	
	  /**
	   * Set the month of the given calendar field.
	   * @method setMonth
	   */
	
	  /**
	   * Set the day of month of the given calendar field.
	   * @method setDayOfMonth
	   */
	
	  /**
	   * Set the hour of day of the given calendar field.
	   * @method setHourOfDay
	   */
	
	  /**
	   * Set the minute of the given calendar field.
	   * @method setMinute
	   */
	
	  /**
	   * Set the second of the given calendar field.
	   * @method setSecond
	   */
	
	  /**
	   * Set the millisecond of the given calendar field.
	   * @method setMilliSecond
	   */
	
	  /**
	   * Set the week of year of the given calendar field.
	   * @method setWeekOfYear
	   */
	
	  /**
	   * Set the week of month of the given calendar field.
	   * @method setWeekOfMonth
	   */
	
	  /**
	   * Set the day of year of the given calendar field.
	   * @method setDayOfYear
	   */
	
	  /**
	   * Set the day of week of the given calendar field.
	   * @method setDayOfWeek
	   */
	
	  /**
	   * Set the day of week in month of the given calendar field.
	   * @method setDayOfWeekInMonth
	   */
	
	  /**
	   * add for specified field based on two rules:
	   *
	   *  - Add rule 1. The value of field after the call minus the value of field before the
	   *  call is amount, modulo any overflow that has occurred in field
	   *  Overflow occurs when a field value exceeds its range and,
	   *  as a result, the next larger field is incremented or
	   *  decremented and the field value is adjusted back into its range.
	   *
	   *  - Add rule 2. If a smaller field is expected to be invariant,
	   *  but it is impossible for it to be equal to its
	   *  prior value because of changes in its minimum or maximum after
	   *  field is changed, then its value is adjusted to be as close
	   *  as possible to its expected value. A smaller field represents a
	   *  smaller unit of time. HOUR_OF_DAY is a smaller field than
	   *  DAY_OF_MONTH. No adjustment is made to smaller fields
	   *  that are not expected to be invariant. The calendar system
	   *  determines what fields are expected to be invariant.
	   *
	   *
	   *      @example
	   *      use('date/gregorian',function(S, GregorianCalendar){
	         *          var d = new GregorianCalendar();
	         *          d.set(2012, GregorianCalendar.JANUARY, 31);
	         *          d.add(Gregorian.MONTH,1);
	         *          // 2012-2-29
	         *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	         *          d.add(Gregorian.MONTH,12);
	         *          // 2013-2-28
	         *          document.writeln('<p>'+d.getYear()+'-'+d.getMonth()+'-'+d.getDayOfWeek())
	         *      });
	   *
	   * @param field the calendar field.
	   * @param {Number} amount he amount of date or time to be added to the field.
	   */
	  add: function (field, amount) {
	    if (!amount) {
	      return;
	    }
	    var self = this;
	    var fields = self.fields;
	    // computer and retrieve original value
	    var value = self.get(field);
	    if (field === YEAR) {
	      value += amount;
	      self.set(YEAR, value);
	      adjustDayOfMonth(self);
	    } else if (field === MONTH) {
	      value += amount;
	      var yearAmount = floorDivide(value / 12);
	      value = mod(value, 12);
	      if (yearAmount) {
	        self.set(YEAR, fields[YEAR] + yearAmount);
	      }
	      self.set(MONTH, value);
	      adjustDayOfMonth(self);
	    } else {
	      switch (field) {
	        case HOUR_OF_DAY:
	          amount *= ONE_HOUR;
	          break;
	        case MINUTE:
	          amount *= ONE_MINUTE;
	          break;
	        case SECONDS:
	          amount *= ONE_SECOND;
	          break;
	        case MILLISECONDS:
	          break;
	        case WEEK_OF_MONTH:
	        case WEEK_OF_YEAR:
	        case DAY_OF_WEEK_IN_MONTH:
	          amount *= ONE_WEEK;
	          break;
	        case DAY_OF_WEEK:
	        case DAY_OF_YEAR:
	        case DAY_OF_MONTH:
	          amount *= ONE_DAY;
	          break;
	        default:
	          throw new Error('illegal field for add');
	      }
	      self.setTime(self.time + amount);
	    }
	
	  },
	
	  /**
	   * add the year of the given calendar field.
	   * @method addYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the month of the given calendar field.
	   * @method addMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of month of the given calendar field.
	   * @method addDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the hour of day of the given calendar field.
	   * @method addHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the minute of the given calendar field.
	   * @method addMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the second of the given calendar field.
	   * @method addSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the millisecond of the given calendar field.
	   * @method addMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the week of year of the given calendar field.
	   * @method addWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the week of month of the given calendar field.
	   * @method addWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of year of the given calendar field.
	   * @method addDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of week of the given calendar field.
	   * @method addDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * add the day of week in month of the given calendar field.
	   * @method addDayOfWeekInMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * Get rolled value for the field
	   * @protected
	   */
	  getRolledValue: function (value, amount, min, max) {
	    var diff = value - min;
	    var range = max - min + 1;
	    amount %= range;
	    return min + (diff + amount + range) % range;
	  },
	
	  /**
	   * Adds a signed amount to the specified calendar field without changing larger fields.
	   * A negative roll amount means to subtract from field without changing
	   * larger fields. If the specified amount is 0, this method performs nothing.
	   *
	   *
	   *
	   *      @example
	   *      var d = new GregorianCalendar();
	   *      d.set(1999, GregorianCalendar.AUGUST, 31);
	   *      // 1999-4-30
	   *      // Tuesday June 1, 1999
	   *      d.set(1999, GregorianCalendar.JUNE, 1);
	   *      d.add(Gregorian.WEEK_OF_MONTH,-1); // === d.add(Gregorian.WEEK_OF_MONTH,
	   *      d.get(Gregorian.WEEK_OF_MONTH));
	   *      // 1999-06-29
	   *
	   *
	   * @param field the calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   */
	  roll: function (field, amount) {
	    if (!amount) {
	      return;
	    }
	    var self = this;
	    // computer and retrieve original value
	    var value = self.get(field);
	    var min = self.getActualMinimum(field);
	    var max = self.getActualMaximum(field);
	    value = self.getRolledValue(value, amount, min, max);
	
	    self.set(field, value);
	
	    // consider compute time priority
	    switch (field) {
	      case MONTH:
	        adjustDayOfMonth(self);
	        break;
	      default:
	        // other fields are set already when get
	        self.updateFieldsBySet(field);
	        break;
	    }
	  },
	
	  /**
	   * roll the year of the given calendar field.
	   * @method rollYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the month of the given calendar field.
	   * @param {Number} amount the signed amount to add to field.
	   * @method rollMonth
	   */
	
	  /**
	   * roll the day of month of the given calendar field.
	   * @method rollDayOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the hour of day of the given calendar field.
	   * @method rollHourOfDay
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the minute of the given calendar field.
	   * @method rollMinute
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the second of the given calendar field.
	   * @method rollSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the millisecond of the given calendar field.
	   * @method rollMilliSecond
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the week of year of the given calendar field.
	   * @method rollWeekOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the week of month of the given calendar field.
	   * @method rollWeekOfMonth
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the day of year of the given calendar field.
	   * @method rollDayOfYear
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * roll the day of week of the given calendar field.
	   * @method rollDayOfWeek
	   * @param {Number} amount the signed amount to add to field.
	   */
	
	  /**
	   * remove other priority fields when call getFixedDate
	   * precondition: other fields are all set or computed
	   * @protected
	   */
	  updateFieldsBySet: function (field) {
	    var fields = this.fields;
	    switch (field) {
	      case WEEK_OF_MONTH:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case DAY_OF_YEAR:
	        fields[MONTH] = undefined;
	        break;
	      case DAY_OF_WEEK:
	        fields[DAY_OF_MONTH] = undefined;
	        break;
	      case WEEK_OF_YEAR:
	        fields[DAY_OF_YEAR] = undefined;
	        fields[MONTH] = undefined;
	        break;
	    }
	  },
	
	  /**
	   * get current date instance's timezone offset
	   * @returns {Number}
	   */
	  getTimezoneOffset: function () {
	    return this.timezoneOffset;
	  },
	
	  /**
	   * set current date instance's timezone offset
	   */
	  setTimezoneOffset: function (timezoneOffset) {
	    if (this.timezoneOffset !== timezoneOffset) {
	      this.fieldsComputed = undefined;
	      this.timezoneOffset = timezoneOffset;
	    }
	  },
	
	  /**
	   * set first day of week for current date instance
	   */
	  setFirstDayOfWeek: function (firstDayOfWeek) {
	    if (this.firstDayOfWeek !== firstDayOfWeek) {
	      this.firstDayOfWeek = firstDayOfWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /**
	   * Gets what the first day of the week is; e.g., SUNDAY in the U.S., MONDAY in France.
	   * @returns {Number} the first day of the week.
	   */
	  getFirstDayOfWeek: function () {
	    return this.firstDayOfWeek;
	  },
	
	  /**
	   * Sets what the minimal days required in the first week of the year are; For example,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * call this method with value 1.
	   * If it must be a full week, use value 7.
	   * @param minimalDaysInFirstWeek the given minimal days required in the first week of the year.
	   */
	  setMinimalDaysInFirstWeek: function (minimalDaysInFirstWeek) {
	    if (this.minimalDaysInFirstWeek !== minimalDaysInFirstWeek) {
	      this.minimalDaysInFirstWeek = minimalDaysInFirstWeek;
	      this.fieldsComputed = false;
	    }
	  },
	
	  /**
	   * Gets what the minimal days required in the first week of the year are; e.g.,
	   * if the first week is defined as one that contains the first day of the first month of a year,
	   * this method returns 1.
	   * If the minimal days required must be a full week, this method returns 7.
	   * @returns {Number} the minimal days required in the first week of the year.
	   */
	  getMinimalDaysInFirstWeek: function () {
	    return this.minimalDaysInFirstWeek;
	  },
	
	  /**
	   * Returns the number of weeks in the week year
	   * represented by this GregorianCalendar.
	   *
	   * For example, if this GregorianCalendar's date is
	   * December 31, 2008 with the ISO
	   * 8601 compatible setting, this method will return 53 for the
	   * period: December 29, 2008 to January 3, 2010
	   * while getActualMaximum(WEEK_OF_YEAR) will return
	   * 52 for the period: December 31, 2007 to December 28, 2008.
	   *
	   * @return {Number} the number of weeks in the week year.
	   */
	  getWeeksInWeekYear: function () {
	    var weekYear = this.getWeekYear();
	    if (weekYear === this.get(YEAR)) {
	      return this.getActualMaximum(WEEK_OF_YEAR);
	    }
	    // Use the 2nd week for calculating the max of WEEK_OF_YEAR
	    var gc = this.clone();
	    gc.clear();
	    gc.setWeekDate(weekYear, 2, this.get(DAY_OF_WEEK));
	    return gc.getActualMaximum(WEEK_OF_YEAR);
	  },
	
	  /**
	   * Returns the week year represented by this GregorianCalendar.
	   * The dates in the weeks between 1 and the
	   * maximum week number of the week year have the same week year value
	   * that may be one year before or after the calendar year value.
	   *
	   * @return {Number} the week year represented by this GregorianCalendar.
	   */
	  getWeekYear: function () {
	    var year = this.get(YEAR); // implicitly  complete
	    var weekOfYear = this.get(WEEK_OF_YEAR);
	    var month = this.get(MONTH);
	    if (month === GregorianCalendar.JANUARY) {
	      if (weekOfYear >= 52) {
	        --year;
	      }
	    } else if (month === GregorianCalendar.DECEMBER) {
	      if (weekOfYear === 1) {
	        ++year;
	      }
	    }
	    return year;
	  },
	  /**
	   * Sets this GregorianCalendar to the date given by the date specifiers - weekYear,
	   * weekOfYear, and dayOfWeek. weekOfYear follows the WEEK_OF_YEAR numbering.
	   * The dayOfWeek value must be one of the DAY_OF_WEEK values: SUNDAY to SATURDAY.
	   *
	   * @param weekYear    the week year
	   * @param weekOfYear  the week number based on weekYear
	   * @param dayOfWeek   the day of week value
	   */
	  setWeekDate: function (weekYear, weekOfYear, dayOfWeek) {
	    if (dayOfWeek < GregorianCalendar.SUNDAY || dayOfWeek > GregorianCalendar.SATURDAY) {
	      throw new Error('invalid dayOfWeek: ' + dayOfWeek);
	    }
	    var fields = this.fields;
	    // To avoid changing the time of day fields by date
	    // calculations, use a clone with the GMT time zone.
	    var gc = this.clone();
	    gc.clear();
	    gc.setTimezoneOffset(0);
	    gc.set(YEAR, weekYear);
	    gc.set(WEEK_OF_YEAR, 1);
	    gc.set(DAY_OF_WEEK, this.getFirstDayOfWeek());
	    var days = dayOfWeek - this.getFirstDayOfWeek();
	    if (days < 0) {
	      days += 7;
	    }
	    days += 7 * (weekOfYear - 1);
	    if (days !== 0) {
	      gc.add(DAY_OF_YEAR, days);
	    } else {
	      gc.complete();
	    }
	    fields[YEAR] = gc.get(YEAR);
	    fields[MONTH] = gc.get(MONTH);
	    fields[DAY_OF_MONTH] = gc.get(DAY_OF_MONTH);
	    this.complete();
	  },
	  /**
	   * Creates and returns a copy of this object.
	   * @returns {Date.Gregorian}
	   */
	  clone: function () {
	    if (this.time === undefined) {
	      this.computeTime();
	    }
	    var cal = new GregorianCalendar(this.locale);
	    cal.setTimezoneOffset(cal.getTimezoneOffset());
	    cal.setFirstDayOfWeek(cal.getFirstDayOfWeek());
	    cal.setMinimalDaysInFirstWeek(cal.getMinimalDaysInFirstWeek());
	    cal.setTime(this.time);
	    return cal;
	  },
	
	  /**
	   * Compares this GregorianCalendar to the specified Object.
	   * The result is true if and only if the argument is a GregorianCalendar object
	   * that represents the same time value (millisecond offset from the Epoch)
	   * under the same Calendar parameters and Gregorian change date as this object.
	   * @param {Date.Gregorian} obj the object to compare with.
	   * @returns {boolean} true if this object is equal to obj; false otherwise.
	   */
	  equals: function (obj) {
	    return this.getTime() === obj.getTime() &&
	      this.firstDayOfWeek === obj.firstDayOfWeek &&
	      this.timezoneOffset === obj.timezoneOffset &&
	      this.minimalDaysInFirstWeek === obj.minimalDaysInFirstWeek;
	  },
	
	  /**
	   * Sets all the calendar field values or specified field and the time value
	   * (millisecond offset from the Epoch) of this Calendar undefined.
	   * This means that isSet() will return false for all the calendar fields,
	   * and the date and time calculations will treat the fields as if they had never been set.
	   * @param [field] the calendar field to be cleared.
	   */
	  clear: function (field) {
	    if (field === undefined) {
	      this.field = [];
	    } else {
	      this.fields[field] = undefined;
	    }
	    this.time = undefined;
	    this.fieldsComputed = false;
	  }
	};
	
	var GregorianCalendarProto = GregorianCalendar.prototype;
	
	Utils.each(fields, function (f, index) {
	  if (f) {
	    GregorianCalendarProto['get' + f] = function () {
	      return this.get(index);
	    };
	
	    GregorianCalendarProto['isSet' + f] = function () {
	      return this.isSet(index);
	    };
	
	    GregorianCalendarProto['set' + f] = function (v) {
	      return this.set(index, v);
	    };
	
	    GregorianCalendarProto['add' + f] = function (v) {
	      return this.add(index, v);
	    };
	
	    GregorianCalendarProto['roll' + f] = function (v) {
	      return this.roll(index, v);
	    };
	  }
	});
	
	// ------------------- private start
	
	function adjustDayOfMonth(self) {
	  var fields = self.fields;
	  var year = fields[YEAR];
	  var month = fields[MONTH];
	  var monthLen = getMonthLength(year, month);
	  var dayOfMonth = fields[DAY_OF_MONTH];
	  if (dayOfMonth > monthLen) {
	    self.set(DAY_OF_MONTH, monthLen);
	  }
	}
	
	function getMonthLength(year, month) {
	  return isLeapYear(year) ? LEAP_MONTH_LENGTH[month] : MONTH_LENGTH[month];
	}
	
	function getYearLength(year) {
	  return isLeapYear(year) ? 366 : 365;
	}
	
	function getWeekNumber(self, fixedDay1, fixedDate) {
	  var fixedDay1st = getDayOfWeekDateOnOrBefore(fixedDay1 + 6, self.firstDayOfWeek);
	  var nDays = (fixedDay1st - fixedDay1);
	  if (nDays >= self.minimalDaysInFirstWeek) {
	    fixedDay1st -= 7;
	  }
	  var normalizedDayOfPeriod = (fixedDate - fixedDay1st);
	  return floorDivide(normalizedDayOfPeriod / 7) + 1;
	}
	
	function getDayOfWeekDateOnOrBefore(fixedDate, dayOfWeek) {
	  // 1.1.1 is monday
	  // one week has 7 days
	  return fixedDate - mod(fixedDate - dayOfWeek, 7);
	}
	
	// ------------------- private end
	
	module.exports = GregorianCalendar;
	/*
	 http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html
	
	 TODO
	 - day saving time
	 - i18n
	 - julian calendar
	 */


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * utils for gregorian date
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	
	var Const = __webpack_require__(227);
	var floor = Math.floor;
	var ACCUMULATED_DAYS_IN_MONTH
	        //   1/1 2/1 3/1 4/1 5/1 6/1 7/1 8/1 9/1 10/1 11/1 12/1
	        = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
	
	    ACCUMULATED_DAYS_IN_MONTH_LEAP
	        //   1/1 2/1   3/1   4/1   5/1   6/1   7/1   8/1   9/1
	        // 10/1   11/1   12/1
	        = [0, 31, 59 + 1, 90 + 1, 120 + 1, 151 + 1, 181 + 1,
	            212 + 1, 243 + 1, 273 + 1, 304 + 1, 334 + 1],
	
	    DAYS_OF_YEAR = 365,
	    DAYS_OF_4YEAR = 365 * 4 + 1,
	    DAYS_OF_100YEAR = DAYS_OF_4YEAR * 25 - 1,
	    DAYS_OF_400YEAR = DAYS_OF_100YEAR * 4 + 1;
	
	function getDayOfYear(year, month, dayOfMonth) {
	    return dayOfMonth + (exports.isLeapYear(year) ?
	        ACCUMULATED_DAYS_IN_MONTH_LEAP[month] :
	        ACCUMULATED_DAYS_IN_MONTH[month]);
	}
	
	function getDayOfWeekFromFixedDate(fixedDate) {
	    // The fixed day 1 (January 1, 1 Gregorian) is Monday.
	    if (fixedDate >= 0) {
	        return fixedDate % 7;
	    }
	    return exports.mod(fixedDate, 7);
	}
	
	function getGregorianYearFromFixedDate(fixedDate) {
	    var d0;
	    var d1, d2, d3;//, d4;
	    var n400, n100, n4, n1;
	    var year;
	    d0 = fixedDate - 1;
	
	    n400 = floor(d0 / DAYS_OF_400YEAR);
	    d1 = exports.mod(d0, DAYS_OF_400YEAR);
	    n100 = floor(d1 / DAYS_OF_100YEAR);
	    d2 = exports.mod(d1, DAYS_OF_100YEAR);
	    n4 = floor(d2 / DAYS_OF_4YEAR);
	    d3 = exports.mod(d2, DAYS_OF_4YEAR);
	    n1 = floor(d3 / DAYS_OF_YEAR);
	
	    year = 400 * n400 + 100 * n100 + 4 * n4 + n1;
	
	    // ?
	    if (!(n100 === 4 || n1 === 4)) {
	        ++year;
	    }
	
	    return year;
	}
	
	var exports = module.exports = {
	    each: function (arr, fn) {
	        for (var i = 0, len = arr.length; i < len; i++) {
	            if (fn(arr[i], i, arr) === false) {
	                break;
	            }
	        }
	    },
	
	    mix: function (t, s) {
	        for (var p in s) {
	            t[p] = s[p];
	        }
	    },
	
	    isLeapYear: function (year) {
	        if ((year & 3) !== 0) {
	            return false;
	        }
	        return (year % 100 !== 0) || (year % 400 === 0);
	    },
	
	    mod: function (x, y) {
	        // 负数时不是镜像关系
	        return (x - y * floor(x / y));
	    },
	
	    // month: 0 based
	    getFixedDate: function (year, month, dayOfMonth) {
	        var prevYear = year - 1;
	        // 考虑公元前
	        return DAYS_OF_YEAR * prevYear + floor(prevYear / 4) -
	            floor(prevYear / 100) + floor(prevYear / 400) +
	            getDayOfYear(year, month, dayOfMonth);
	    },
	
	    getGregorianDateFromFixedDate: function (fixedDate) {
	        var year = getGregorianYearFromFixedDate(fixedDate);
	        var jan1 = exports.getFixedDate(year, Const.JANUARY, 1);
	        var isLeap = exports.isLeapYear(year);
	        var ACCUMULATED_DAYS = isLeap ? ACCUMULATED_DAYS_IN_MONTH_LEAP : ACCUMULATED_DAYS_IN_MONTH;
	        var daysDiff = fixedDate - jan1;
	        var month, i;
	
	        for (i = 0; i < ACCUMULATED_DAYS.length; i++) {
	            if (ACCUMULATED_DAYS[i] <= daysDiff) {
	                month = i;
	            } else {
	                break;
	            }
	        }
	
	        var dayOfMonth = fixedDate - jan1 - ACCUMULATED_DAYS[month] + 1;
	        var dayOfWeek = getDayOfWeekFromFixedDate(fixedDate);
	
	        return {
	            year: year,
	            month: month,
	            dayOfMonth: dayOfMonth,
	            dayOfWeek: dayOfWeek,
	            isLeap: isLeap
	        };
	    }
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * const for gregorian date
	 * @author yiminghe@gmail.com
	 */
	
	module.exports = {
	    /**
	     * Enum indicating sunday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    SUNDAY: 0,
	    /**
	     * Enum indicating monday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    MONDAY: 1,
	    /**
	     * Enum indicating tuesday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    TUESDAY: 2,
	    /**
	     * Enum indicating wednesday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    WEDNESDAY: 3,
	    /**
	     * Enum indicating thursday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    THURSDAY: 4,
	    /**
	     * Enum indicating friday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    FRIDAY: 5,
	    /**
	     * Enum indicating saturday
	     * @type Number
	     * @member Date.Gregorian
	     */
	    SATURDAY: 6,
	    /**
	     * Enum indicating january
	     * @type Number
	     * @member Date.Gregorian
	     */
	    JANUARY: 0,
	    /**
	     * Enum indicating february
	     * @type Number
	     * @member Date.Gregorian
	     */
	    FEBRUARY: 1,
	    /**
	     * Enum indicating march
	     * @type Number
	     * @member Date.Gregorian
	     */
	    MARCH: 2,
	    /**
	     * Enum indicating april
	     * @type Number
	     * @member Date.Gregorian
	     */
	    APRIL: 3,
	    /**
	     * Enum indicating may
	     * @type Number
	     * @member Date.Gregorian
	     */
	    MAY: 4,
	    /**
	     * Enum indicating june
	     * @type Number
	     * @member Date.Gregorian
	     */
	    JUNE: 5,
	    /**
	     * Enum indicating july
	     * @type Number
	     * @member Date.Gregorian
	     */
	    JULY: 6,
	    /**
	     * Enum indicating august
	     * @type Number
	     * @member Date.Gregorian
	     */
	    AUGUST: 7,
	    /**
	     * Enum indicating september
	     * @type Number
	     * @member Date.Gregorian
	     */
	    SEPTEMBER: 8,
	    /**
	     * Enum indicating october
	     * @type Number
	     * @member Date.Gregorian
	     */
	    OCTOBER: 9,
	    /**
	     * Enum indicating november
	     * @type Number
	     * @member Date.Gregorian
	     */
	    NOVEMBER: 10,
	    /**
	     * Enum indicating december
	     * @type Number
	     * @member Date.Gregorian
	     */
	    DECEMBER: 11
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	/**
	 * en-us locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	module.exports = {
	  // in minutes
	  timezoneOffset: -8 * 60,
	  firstDayOfWeek: 0,
	  minimalDaysInFirstWeek: 1
	};


/***/ },
/* 229 */
/***/ function(module, exports) {

	/**
	 * en-us locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	module.exports = {
	  eras: ['BC', 'AD'],
	  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	    'August', 'September', 'October', 'November', 'December'],
	  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	    'Oct', 'Nov', 'Dec'],
	  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
	    'Saturday'],
	  shortWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	  veryShortWeekdays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	  ampms: ['AM', 'PM'],
	  datePatterns: ['EEEE, MMMM d, yyyy', 'MMMM d, yyyy', 'MMM d, yyyy', 'M/d/yy'],
	  timePatterns: ['h:mm:ss a \'GMT\'Z', 'h:mm:ss a', 'h:mm:ss a', 'h:mm a'],
	  dateTimePattern: '{date} {time}'
	};


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  guid: __webpack_require__(231),
	  classSet: __webpack_require__(232),
	  joinClasses: __webpack_require__(233),
	  KeyCode: __webpack_require__(234),
	  PureRenderMixin: __webpack_require__(235),
	  shallowEqual: __webpack_require__(236),
	  createChainedFunction: __webpack_require__(237),
	  Dom: {
	    addEventListener: __webpack_require__(238),
	    contains: __webpack_require__(239)
	  },
	  Children: {
	    toArray: __webpack_require__(240),
	    mapSelf: __webpack_require__(241)
	  }
	};


/***/ },
/* 231 */
/***/ function(module, exports) {

	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + (seed++);
	};


/***/ },
/* 232 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;


/***/ },
/* 233 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */ ) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 234 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	      // Function keys don't generate text
	    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO &&
	    keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO &&
	    keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A &&
	    keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(236);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 236 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;


/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function () {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function () {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};


/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(180);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(180);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function (children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateTHead = __webpack_require__(243);
	
	var _DateTHead2 = _interopRequireDefault(_DateTHead);
	
	var _DateTBody = __webpack_require__(245);
	
	var _DateTBody2 = _interopRequireDefault(_DateTBody);
	
	var DateTable = (function (_React$Component) {
	  _inherits(DateTable, _React$Component);
	
	  function DateTable() {
	    _classCallCheck(this, DateTable);
	
	    _get(Object.getPrototypeOf(DateTable.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DateTable, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      return _react2['default'].createElement(
	        'table',
	        { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	        _react2['default'].createElement(_DateTHead2['default'], props),
	        _react2['default'].createElement(_DateTBody2['default'], props)
	      );
	    }
	  }]);
	
	  return DateTable;
	})(_react2['default'].Component);
	
	exports['default'] = DateTable;
	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateConstants = __webpack_require__(244);
	
	var _DateConstants2 = _interopRequireDefault(_DateConstants);
	
	var DateTHead = (function (_React$Component) {
	  _inherits(DateTHead, _React$Component);
	
	  function DateTHead() {
	    _classCallCheck(this, DateTHead);
	
	    _get(Object.getPrototypeOf(DateTHead.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DateTHead, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var value = props.value;
	      var locale = props.locale;
	      var prefixCls = props.prefixCls;
	      var veryShortWeekdays = [];
	      var weekDays = [];
	      var firstDayOfWeek = value.getFirstDayOfWeek();
	      var showWeekNumberEl = undefined;
	
	      for (var i = 0; i < _DateConstants2['default'].DATE_COL_COUNT; i++) {
	        var index = (firstDayOfWeek + i) % _DateConstants2['default'].DATE_COL_COUNT;
	        veryShortWeekdays[i] = locale.format.veryShortWeekdays[index];
	        weekDays[i] = locale.format.weekdays[index];
	      }
	
	      if (props.showWeekNumber) {
	        showWeekNumberEl = _react2['default'].createElement(
	          'th',
	          { role: 'columnheader', className: prefixCls + '-column-header ' + prefixCls + '-week-number-header' },
	          _react2['default'].createElement(
	            'span',
	            { className: prefixCls + '-column-header-inner' },
	            'x'
	          )
	        );
	      }
	      var weekDaysEls = weekDays.map(function (day, xindex) {
	        return _react2['default'].createElement(
	          'th',
	          { key: xindex, role: 'columnheader', title: day, className: prefixCls + '-column-header' },
	          _react2['default'].createElement(
	            'span',
	            { className: prefixCls + '-column-header-inner' },
	            veryShortWeekdays[xindex]
	          )
	        );
	      });
	      return _react2['default'].createElement(
	        'thead',
	        null,
	        _react2['default'].createElement(
	          'tr',
	          { role: 'row' },
	          showWeekNumberEl,
	          weekDaysEls
	        )
	      );
	    }
	  }]);
	
	  return DateTHead;
	})(_react2['default'].Component);
	
	exports['default'] = DateTHead;
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  DATE_ROW_COUNT: 6,
	  DATE_COL_COUNT: 7
	};
	module.exports = exports["default"];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DateConstants = __webpack_require__(244);
	
	var _DateConstants2 = _interopRequireDefault(_DateConstants);
	
	function isSameDay(one, two) {
	  return one.getYear() === two.getYear() && one.getMonth() === two.getMonth() && one.getDayOfMonth() === two.getDayOfMonth();
	}
	
	function beforeCurrentMonthYear(current, today) {
	  if (current.getYear() < today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() < today.getMonth();
	}
	
	function afterCurrentMonthYear(current, today) {
	  if (current.getYear() > today.getYear()) {
	    return 1;
	  }
	  return current.getYear() === today.getYear() && current.getMonth() > today.getMonth();
	}
	
	function getIdFromDate(d) {
	  return 'rc-calendar-' + d.getYear() + '-' + d.getMonth() + '-' + d.getDayOfMonth();
	}
	
	function noop() {}
	
	function handleDayClick(current) {
	  this.props.onSelect(current);
	}
	
	var DateTBody = (function (_React$Component) {
	  _inherits(DateTBody, _React$Component);
	
	  function DateTBody() {
	    _classCallCheck(this, DateTBody);
	
	    _get(Object.getPrototypeOf(DateTBody.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(DateTBody, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var i = undefined;
	      var j = undefined;
	      var current = undefined;
	      var dateTable = [];
	      var showWeekNumber = props.showWeekNumber;
	      var value = props.value;
	      var today = value.clone();
	      var prefixCls = props.prefixCls;
	      var cellClass = prefixCls + '-cell';
	      var weekNumberCellClass = prefixCls + '-week-number-cell';
	      var dateClass = prefixCls + '-date';
	      var dateRender = props.dateRender;
	      var disabledDate = props.disabledDate;
	      var dateFormatter = this.props.dateFormatter;
	      var todayClass = prefixCls + '-today';
	      var selectedClass = prefixCls + '-selected-day';
	      var lastMonthDayClass = prefixCls + '-last-month-cell';
	      var nextMonthDayClass = prefixCls + '-next-month-btn-day';
	      var disabledClass = prefixCls + '-disabled-cell';
	      var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
	      var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
	      today.setTime(Date.now());
	      var month1 = value.clone();
	      month1.set(value.getYear(), value.getMonth(), 1);
	      var day = month1.getDayOfWeek();
	      var lastMonthDiffDay = (day + 7 - value.getFirstDayOfWeek()) % 7;
	      // calculate last month
	      var lastMonth1 = month1.clone();
	      lastMonth1.addDayOfMonth(0 - lastMonthDiffDay);
	      var passed = 0;
	      for (i = 0; i < _DateConstants2['default'].DATE_ROW_COUNT; i++) {
	        for (j = 0; j < _DateConstants2['default'].DATE_COL_COUNT; j++) {
	          current = lastMonth1;
	          if (passed) {
	            current = current.clone();
	            current.addDayOfMonth(passed);
	          }
	          dateTable.push(current);
	          passed++;
	        }
	      }
	      var tableHtml = [];
	      passed = 0;
	      for (i = 0; i < _DateConstants2['default'].DATE_ROW_COUNT; i++) {
	        var weekNumberCell = undefined;
	        var dateCells = [];
	        if (showWeekNumber) {
	          weekNumberCell = _react2['default'].createElement(
	            'td',
	            { key: dateTable[passed].getWeekOfYear(), role: 'gridcell',
	              className: weekNumberCellClass },
	            dateTable[passed].getWeekOfYear()
	          );
	        }
	        for (j = 0; j < _DateConstants2['default'].DATE_COL_COUNT; j++) {
	          var next = null;
	          var last = null;
	          current = dateTable[passed];
	          if (j < _DateConstants2['default'].DATE_COL_COUNT - 1) {
	            next = dateTable[passed + 1];
	          }
	          if (j > 0) {
	            last = dateTable[passed - 1];
	          }
	          var cls = cellClass;
	          var disabled = false;
	          var selected = false;
	
	          if (isSameDay(current, today)) {
	            cls += ' ' + todayClass;
	          }
	          if (isSameDay(current, value)) {
	            cls += ' ' + selectedClass;
	            selected = true;
	          }
	          if (beforeCurrentMonthYear(current, value)) {
	            cls += ' ' + lastMonthDayClass;
	          }
	          if (afterCurrentMonthYear(current, value)) {
	            cls += ' ' + nextMonthDayClass;
	          }
	          if (disabledDate) {
	            if (disabledDate(current, value)) {
	              cls += ' ' + disabledClass;
	              disabled = true;
	
	              if (!last || !disabledDate(last, value)) {
	                cls += ' ' + firstDisableClass;
	              }
	
	              if (!next || !disabledDate(next, value)) {
	                cls += ' ' + lastDisableClass;
	              }
	            }
	          }
	
	          var dateHtml = undefined;
	          if (dateRender) {
	            dateHtml = dateRender(current, value);
	          } else {
	            dateHtml = _react2['default'].createElement(
	              'span',
	              {
	                key: getIdFromDate(current),
	                className: dateClass,
	                'aria-selected': selected,
	                'aria-disabled': disabled },
	              current.getDayOfMonth()
	            );
	          }
	
	          dateCells.push(_react2['default'].createElement(
	            'td',
	            { key: passed, onClick: disabled ? noop : handleDayClick.bind(this, current), role: 'gridcell',
	              title: dateFormatter.format(current), className: cls },
	            dateHtml
	          ));
	
	          passed++;
	        }
	        tableHtml.push(_react2['default'].createElement(
	          'tr',
	          {
	            key: i,
	            role: 'row' },
	          weekNumberCell,
	          dateCells
	        ));
	      }
	      return _react2['default'].createElement(
	        'tbody',
	        { className: prefixCls + 'tbody' },
	        tableHtml
	      );
	    }
	  }]);
	
	  return DateTBody;
	})(_react2['default'].Component);
	
	exports['default'] = DateTBody;
	
	DateTBody.propTypes = {
	  dateFormatter: _react2['default'].PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _monthMonthPanel = __webpack_require__(247);
	
	var _monthMonthPanel2 = _interopRequireDefault(_monthMonthPanel);
	
	var _gregorianCalendarFormat = __webpack_require__(222);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _yearYearPanel = __webpack_require__(248);
	
	var _yearYearPanel2 = _interopRequireDefault(_yearYearPanel);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var toFragment = _rcUtil2['default'].Children.mapSelf;
	
	var CalendarHeader = (function (_React$Component) {
	  _inherits(CalendarHeader, _React$Component);
	
	  function CalendarHeader(props) {
	    _classCallCheck(this, CalendarHeader);
	
	    _get(Object.getPrototypeOf(CalendarHeader.prototype), 'constructor', this).call(this, props);
	    this.state = {};
	    this.yearFormatter = new _gregorianCalendarFormat2['default'](props.locale.yearFormat);
	    this.monthFormatter = new _gregorianCalendarFormat2['default'](props.locale.monthFormat);
	    this.showMonthPanel = this.showMonthPanel.bind(this);
	    this.showYearPanel = this.showYearPanel.bind(this);
	    this.onSelect = this.onSelect.bind(this);
	  }
	
	  _createClass(CalendarHeader, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var locale = this.props.locale;
	      if (nextProps.locale !== locale) {
	        this.yearFormatter = new _gregorianCalendarFormat2['default'](locale.yearFormat);
	        this.monthFormatter = new _gregorianCalendarFormat2['default'](locale.monthFormat);
	      }
	    }
	  }, {
	    key: 'onSelect',
	    value: function onSelect(value) {
	      this.setState({
	        showMonthPanel: 0,
	        showYearPanel: 0
	      });
	      this.props.onValueChange(value);
	    }
	  }, {
	    key: 'getMonthYearElement',
	    value: function getMonthYearElement() {
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var locale = props.locale;
	      var value = this.props.value;
	      var monthBeforeYear = locale.monthBeforeYear;
	      var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
	      var year = _react2['default'].createElement(
	        'a',
	        { className: prefixCls + '-year-select',
	          role: 'button',
	          onClick: this.showYearPanel,
	          title: locale.monthSelect },
	        this.yearFormatter.format(value)
	      );
	      var month = _react2['default'].createElement(
	        'a',
	        { className: prefixCls + '-month-select',
	          role: 'button',
	          onClick: this.showMonthPanel,
	          title: locale.monthSelect },
	        this.monthFormatter.format(value)
	      );
	      var my = [];
	      if (monthBeforeYear) {
	        my = [month, year];
	      } else {
	        my = [year, month];
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: selectClassName },
	        toFragment(my)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var state = this.state;
	      var prefixCls = props.prefixCls;
	      var locale = props.locale;
	      var value = props.value;
	      var PanelClass = null;
	      if (state.showMonthPanel) {
	        PanelClass = _monthMonthPanel2['default'];
	      } else if (state.showYearPanel) {
	        PanelClass = _yearYearPanel2['default'];
	      }
	      var panel = undefined;
	      if (PanelClass) {
	        panel = _react2['default'].createElement(PanelClass, { locale: locale, value: value, rootPrefixCls: prefixCls, onSelect: this.onSelect });
	      }
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-header' },
	        _react2['default'].createElement(
	          'a',
	          { className: prefixCls + '-prev-year-btn',
	            role: 'button',
	            onClick: props.previousYear,
	            title: locale.previousYear },
	          '«'
	        ),
	        _react2['default'].createElement(
	          'a',
	          { className: prefixCls + '-prev-month-btn',
	            role: 'button',
	            onClick: props.previousMonth,
	            title: locale.previousMonth },
	          '‹'
	        ),
	        this.getMonthYearElement(),
	        _react2['default'].createElement(
	          'a',
	          { className: prefixCls + '-next-month-btn',
	            onClick: props.nextMonth,
	            title: locale.nextMonth },
	          '›'
	        ),
	        _react2['default'].createElement(
	          'a',
	          { className: prefixCls + '-next-year-btn',
	            onClick: props.nextYear,
	            title: locale.nextYear },
	          '»'
	        ),
	        panel
	      );
	    }
	  }, {
	    key: 'showMonthPanel',
	    value: function showMonthPanel() {
	      this.setState({
	        showMonthPanel: 1,
	        showYearPanel: 0
	      });
	    }
	  }, {
	    key: 'showYearPanel',
	    value: function showYearPanel() {
	      this.setState({
	        showMonthPanel: 0,
	        showYearPanel: 1
	      });
	    }
	  }]);
	
	  return CalendarHeader;
	})(_react2['default'].Component);
	
	exports['default'] = CalendarHeader;
	
	CalendarHeader.propTypes = {
	  locale: _react2['default'].PropTypes.object,
	  value: _react2['default'].PropTypes.object,
	  onValueChange: _react2['default'].PropTypes.func
	};
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(230);
	
	var _yearYearPanel = __webpack_require__(248);
	
	var _yearYearPanel2 = _interopRequireDefault(_yearYearPanel);
	
	var ROW = 4;
	var COL = 3;
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({
	    value: next
	  });
	}
	
	function showYearPanel() {
	  this.setState({
	    showYearPanel: 1
	  });
	}
	
	function chooseMonth(month) {
	  var next = this.state.value.clone();
	  next.setMonth(month);
	  this.props.onSelect(next);
	}
	
	function onYearPanelSelect(current) {
	  this.setState({
	    value: current,
	    showYearPanel: 0
	  });
	}
	
	var MonthPanel = (function (_React$Component) {
	  _inherits(MonthPanel, _React$Component);
	
	  function MonthPanel(props) {
	    _classCallCheck(this, MonthPanel);
	
	    _get(Object.getPrototypeOf(MonthPanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: props.value
	    };
	    // bind methods
	    this.nextYear = goYear.bind(this, 1);
	    this.previousYear = goYear.bind(this, -1);
	    this.showYearPanel = showYearPanel.bind(this);
	    this.onYearPanelSelect = onYearPanelSelect.bind(this);
	    this.prefixCls = props.rootPrefixCls + '-month-panel';
	  }
	
	  _createClass(MonthPanel, [{
	    key: 'getMonths',
	    value: function getMonths() {
	      var props = this.props;
	      var value = this.state.value;
	      var current = value.clone();
	      var locale = props.locale;
	      var months = [];
	      var shortMonths = locale.format.shortMonths;
	      var index = 0;
	      for (var i = 0; i < ROW; i++) {
	        months[i] = [];
	        for (var j = 0; j < COL; j++) {
	          current.setMonth(index);
	          months[i][j] = {
	            value: index,
	            content: shortMonths[index],
	            title: shortMonths[index]
	          };
	          index++;
	        }
	      }
	
	      return months;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var locale = props.locale;
	      var months = this.getMonths();
	      var year = value.getYear();
	      var currentMonth = value.getMonth();
	      var prefixCls = this.prefixCls;
	      var monthsEls = months.map(function (month, index) {
	        var tds = month.map(function (m) {
	          var _classNameMap;
	
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', m.value === currentMonth), _classNameMap);
	          return _react2['default'].createElement(
	            'td',
	            { role: 'gridcell',
	              key: m.value,
	              onClick: chooseMonth.bind(_this, m.value),
	              title: m.title,
	              className: (0, _rcUtil.classSet)(classNameMap) },
	            _react2['default'].createElement(
	              'a',
	              {
	                className: prefixCls + '-month' },
	              m.content
	            )
	          );
	        });
	        return _react2['default'].createElement(
	          'tr',
	          { key: index, role: 'row' },
	          tds
	        );
	      });
	
	      var yearPanel = undefined;
	      if (this.state.showYearPanel) {
	        yearPanel = _react2['default'].createElement(_yearYearPanel2['default'], { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls,
	          onSelect: this.onYearPanelSelect });
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: this.prefixCls },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-header' },
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-prev-year-btn',
	                role: 'button',
	                onClick: this.previousYear,
	                title: locale.previousYear },
	              '«'
	            ),
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-year-select',
	                role: 'button',
	                onClick: this.showYearPanel,
	                title: locale.yearSelect },
	              _react2['default'].createElement(
	                'span',
	                { className: prefixCls + '-year-select-content' },
	                year
	              ),
	              _react2['default'].createElement(
	                'span',
	                { className: prefixCls + '-year-select-arrow' },
	                'x'
	              )
	            ),
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-next-year-btn',
	                role: 'button',
	                onClick: this.nextYear,
	                title: locale.nextYear },
	              '»'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-body' },
	            _react2['default'].createElement(
	              'table',
	              { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	              _react2['default'].createElement(
	                'tbody',
	                { className: prefixCls + '-tbody' },
	                monthsEls
	              )
	            )
	          )
	        ),
	        yearPanel
	      );
	    }
	  }]);
	
	  return MonthPanel;
	})(_react2['default'].Component);
	
	exports['default'] = MonthPanel;
	
	MonthPanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(230);
	
	var _decadeDecadePanel = __webpack_require__(249);
	
	var _decadeDecadePanel2 = _interopRequireDefault(_decadeDecadePanel);
	
	var ROW = 4;
	var COL = 3;
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({ value: next });
	}
	
	function chooseYear(year) {
	  var next = this.state.value.clone();
	  next.setYear(year);
	  this.props.onSelect(next);
	}
	
	var YearPanel = (function (_React$Component) {
	  _inherits(YearPanel, _React$Component);
	
	  function YearPanel(props) {
	    var _this = this;
	
	    _classCallCheck(this, YearPanel);
	
	    _get(Object.getPrototypeOf(YearPanel.prototype), 'constructor', this).call(this, props);
	    this.prefixCls = props.rootPrefixCls + '-year-panel';
	    this.state = {
	      value: props.value
	    };
	    this.nextDecade = goYear.bind(this, 10);
	    this.previousDecade = goYear.bind(this, -10);
	    ['showDecadePanel', 'onDecadePanelSelect'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(YearPanel, [{
	    key: 'onDecadePanelSelect',
	    value: function onDecadePanelSelect(current) {
	      this.setState({
	        value: current,
	        showDecadePanel: 0
	      });
	    }
	  }, {
	    key: 'getYears',
	    value: function getYears() {
	      var value = this.state.value;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var previousYear = startYear - 1;
	      var endYear = startYear + 9;
	      var years = [];
	      var index = 0;
	      for (var i = 0; i < ROW; i++) {
	        years[i] = [];
	        for (var j = 0; j < COL; j++) {
	          var year = previousYear + index;
	          var content = undefined;
	          if (year < startYear) {
	            content = '';
	          } else if (year > endYear) {
	            content = '';
	          } else {
	            content = year + '';
	          }
	          years[i][j] = {
	            content: content,
	            year: year,
	            title: content
	          };
	          index++;
	        }
	      }
	      return years;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props;
	      var value = this.state.value;
	      var locale = props.locale;
	      var years = this.getYears();
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 10, 10) * 10;
	      var endYear = startYear + 9;
	      var prefixCls = this.prefixCls;
	
	      var yeasEls = years.map(function (row, index) {
	        var tds = row.map(function (y) {
	          var _classNameMap;
	
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', y.year === currentYear), _defineProperty(_classNameMap, prefixCls + '-last-decade-cell', y.year < startYear), _defineProperty(_classNameMap, prefixCls + '-next-decade-cell', y.year > endYear), _classNameMap);
	          var clickHandler = undefined;
	          if (y.year < startYear) {
	            clickHandler = _this2.previousDecade;
	          } else if (y.year > endYear) {
	            clickHandler = _this2.nextDecade;
	          } else {
	            clickHandler = chooseYear.bind(_this2, y.year);
	          }
	          return _react2['default'].createElement(
	            'td',
	            { role: 'gridcell',
	              title: y.title,
	              key: y.content,
	              onClick: clickHandler,
	              className: (0, _rcUtil.classSet)(classNameMap)
	            },
	            _react2['default'].createElement(
	              'a',
	              {
	                className: prefixCls + '-year' },
	              y.content
	            )
	          );
	        });
	        return _react2['default'].createElement(
	          'tr',
	          { key: index, role: 'row' },
	          tds
	        );
	      });
	
	      var decadePanel = undefined;
	      if (this.state.showDecadePanel) {
	        decadePanel = _react2['default'].createElement(_decadeDecadePanel2['default'], { locale: locale, value: value, rootPrefixCls: props.rootPrefixCls,
	          onSelect: this.onDecadePanelSelect });
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: this.prefixCls },
	        _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-header' },
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-prev-decade-btn',
	                role: 'button',
	                onClick: this.previousDecade,
	                title: locale.previousDecade },
	              '«'
	            ),
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-decade-select',
	                role: 'button',
	                onClick: this.showDecadePanel,
	                title: locale.decadeSelect },
	              _react2['default'].createElement(
	                'span',
	                { className: prefixCls + '-decade-select-content' },
	                startYear,
	                '-',
	                endYear
	              ),
	              _react2['default'].createElement(
	                'span',
	                { className: prefixCls + '-decade-select-arrow' },
	                'x'
	              )
	            ),
	            _react2['default'].createElement(
	              'a',
	              { className: prefixCls + '-next-decade-btn',
	                role: 'button',
	                onClick: this.nextDecade,
	                title: locale.nextDecade },
	              '»'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-body' },
	            _react2['default'].createElement(
	              'table',
	              { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	              _react2['default'].createElement(
	                'tbody',
	                { className: prefixCls + '-tbody' },
	                yeasEls
	              )
	            )
	          )
	        ),
	        decadePanel
	      );
	    }
	  }, {
	    key: 'showDecadePanel',
	    value: function showDecadePanel() {
	      this.setState({
	        showDecadePanel: 1
	      });
	    }
	  }]);
	
	  return YearPanel;
	})(_react2['default'].Component);
	
	exports['default'] = YearPanel;
	
	YearPanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(230);
	
	var ROW = 4;
	var COL = 3;
	
	function goYear(direction) {
	  var next = this.state.value.clone();
	  next.addYear(direction);
	  this.setState({
	    value: next
	  });
	}
	
	function chooseDecade(year, e) {
	  var next = this.state.value.clone();
	  next.setYear(year);
	  this.props.onSelect(next);
	  e.preventDefault();
	}
	
	var DecadePanel = (function (_React$Component) {
	  _inherits(DecadePanel, _React$Component);
	
	  function DecadePanel(props) {
	    _classCallCheck(this, DecadePanel);
	
	    _get(Object.getPrototypeOf(DecadePanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: props.value
	    };
	
	    // bind methods
	    this.prefixCls = props.rootPrefixCls + '-decade-panel';
	    this.nextCentury = goYear.bind(this, 100);
	    this.previousCentury = goYear.bind(this, -100);
	  }
	
	  _createClass(DecadePanel, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.state.value;
	      var locale = this.props.locale;
	      var currentYear = value.getYear();
	      var startYear = parseInt(currentYear / 100, 10) * 100;
	      var preYear = startYear - 10;
	      var endYear = startYear + 99;
	      var decades = [];
	      var index = 0;
	      var prefixCls = this.prefixCls;
	
	      for (var i = 0; i < ROW; i++) {
	        decades[i] = [];
	        for (var j = 0; j < COL; j++) {
	          var startDecade = preYear + index * 10;
	          var endDecade = preYear + index * 10 + 9;
	          decades[i][j] = {
	            startDecade: startDecade,
	            endDecade: endDecade
	          };
	          index++;
	        }
	      }
	
	      var decadesEls = decades.map(function (row, decadeIndex) {
	        var tds = row.map(function (d) {
	          var _classNameMap;
	
	          var dStartDecade = d.startDecade;
	          var dEndDecade = d.endDecade;
	          var isLast = dStartDecade < startYear;
	          var isNext = dEndDecade > endYear;
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, prefixCls + '-last-century-cell', isLast), _defineProperty(_classNameMap, prefixCls + '-next-century-cell', isNext), _classNameMap);
	          var content = undefined;
	          var clickHandler = undefined;
	          if (isLast) {
	            clickHandler = _this.previousCentury;
	          } else if (isNext) {
	            clickHandler = _this.nextCentury;
	          } else {
	            content = dStartDecade + '-' + dEndDecade;
	            clickHandler = chooseDecade.bind(_this, dStartDecade);
	          }
	          return _react2['default'].createElement(
	            'td',
	            {
	              key: dStartDecade,
	              onClick: clickHandler,
	              role: 'gridcell',
	              className: (0, _rcUtil.classSet)(classNameMap)
	            },
	            _react2['default'].createElement(
	              'a',
	              {
	                className: prefixCls + '-decade' },
	              content
	            )
	          );
	        });
	        return _react2['default'].createElement(
	          'tr',
	          { key: decadeIndex, role: 'row' },
	          tds
	        );
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: this.prefixCls },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-header' },
	          _react2['default'].createElement(
	            'a',
	            { className: prefixCls + '-prev-century-btn',
	              role: 'button',
	              onClick: this.previousCentury,
	              title: locale.previousCentury },
	            '«'
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-century' },
	            startYear,
	            '-',
	            endYear
	          ),
	          _react2['default'].createElement(
	            'a',
	            { className: prefixCls + '-next-century-btn',
	              role: 'button',
	              onClick: this.nextCentury,
	              title: locale.nextCentury },
	            '»'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-body' },
	          _react2['default'].createElement(
	            'table',
	            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	            _react2['default'].createElement(
	              'tbody',
	              { className: prefixCls + '-tbody' },
	              decadesEls
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return DecadePanel;
	})(_react2['default'].Component);
	
	exports['default'] = DecadePanel;
	
	DecadePanel.propTypes = {
	  locale: _react2['default'].PropTypes.object
	};
	
	DecadePanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _timeTime = __webpack_require__(251);
	
	var _timeTime2 = _interopRequireDefault(_timeTime);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var toFragment = _rcUtil2['default'].Children.mapSelf;
	
	var CalendarFooter = (function (_React$Component) {
	  _inherits(CalendarFooter, _React$Component);
	
	  function CalendarFooter() {
	    _classCallCheck(this, CalendarFooter);
	
	    _get(Object.getPrototypeOf(CalendarFooter.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(CalendarFooter, [{
	    key: 'getTodayTime',
	    value: function getTodayTime() {
	      var value = this.props.value;
	      var today = value.clone();
	      today.setTime(Date.now());
	      return this.props.dateFormatter.format(today);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var value = props.value;
	      var locale = props.locale;
	      var prefixCls = props.prefixCls;
	      var footerEl = null;
	      if (props.showToday || props.showTime) {
	        var nowEl = undefined;
	        var localeNow = locale.today;
	        if (props.showTime) {
	          localeNow = locale.now || locale.today;
	        }
	        if (props.showToday) {
	          nowEl = _react2['default'].createElement(
	            'a',
	            { className: prefixCls + '-today-btn',
	              role: 'button',
	              onClick: props.onToday,
	              title: this.getTodayTime() },
	            localeNow
	          );
	        }
	        var clearEl = undefined;
	        if (props.showClear) {
	          clearEl = _react2['default'].createElement(
	            'a',
	            { className: prefixCls + '-clear-btn',
	              role: 'button',
	              onClick: props.onClear },
	            locale.clear
	          );
	        }
	        var okBtn = undefined;
	        if (props.showOk) {
	          okBtn = _react2['default'].createElement(
	            'a',
	            { className: prefixCls + '-ok-btn',
	              role: 'button',
	              onClick: props.onOk },
	            locale.ok
	          );
	        }
	        var footerBtn = undefined;
	        if (nowEl || clearEl) {
	          footerBtn = _react2['default'].createElement(
	            'span',
	            { className: prefixCls + '-footer-btn' },
	            toFragment([nowEl, okBtn, clearEl])
	          );
	        }
	        var timeEl = undefined;
	        if (props.showTime) {
	          timeEl = _react2['default'].createElement(_timeTime2['default'], { value: value, prefixCls: prefixCls, locale: locale, onChange: props.onSelect });
	        }
	        footerEl = _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-footer' },
	          timeEl,
	          footerBtn
	        );
	      }
	
	      return footerEl;
	    }
	  }]);
	
	  return CalendarFooter;
	})(_react2['default'].Component);
	
	exports['default'] = CalendarFooter;
	module.exports = exports['default'];

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _TimePanel = __webpack_require__(252);
	
	var _TimePanel2 = _interopRequireDefault(_TimePanel);
	
	var setHourOfDay = 'setHourOfDay';
	var setMinutes = 'setMinutes';
	var setSeconds = 'setSeconds';
	
	function padding(number) {
	  var ret = number;
	  if (ret < 10) {
	    ret = '0' + ret;
	  }
	  return ret;
	}
	
	function loop(value, min, max) {
	  var ret = value;
	  if (ret === min - 1) {
	    ret = max;
	  } else if (ret === max + 1) {
	    ret = min;
	  }
	  return ret;
	}
	
	function keyDownWrap(method, min, max) {
	  return function onKeyDown(e) {
	    var value = e.target.value;
	    var number = parseInt(value, 10);
	    var keyCode = e.keyCode;
	    var handled = undefined;
	    if (keyCode === _rcUtil.KeyCode.DOWN) {
	      number++;
	      e.stopPropagation();
	      e.preventDefault();
	      handled = 1;
	    } else if (keyCode === _rcUtil.KeyCode.UP) {
	      number--;
	      e.stopPropagation();
	      e.preventDefault();
	      handled = 1;
	    }
	    if (handled) {
	      number = loop(number, min, max);
	      var time = this.props.value.clone();
	      time[method](number);
	      this.props.onChange(time, e);
	    }
	  };
	}
	
	var Time = (function (_React$Component) {
	  _inherits(Time, _React$Component);
	
	  function Time(props) {
	    var _this = this;
	
	    _classCallCheck(this, Time);
	
	    _get(Object.getPrototypeOf(Time.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      showHourPanel: 0,
	      showMinutePanel: 0,
	      showSecondPanel: 0
	    };
	    var events = ['onHourKeyDown', 'onMinuteKeyDown', 'onSecondKeyDown', 'onHourClick', 'onMinuteClick', 'onSecondClick', 'onSelectPanel'];
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(Time, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return _rcUtil2['default'].PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	    }
	  }, {
	    key: 'onSelectPanel',
	    value: function onSelectPanel(value, setter) {
	      var _this2 = this;
	
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 0,
	        showSecondPanel: 0
	      }, function () {
	        // ie9 has broken focus
	        _react2['default'].findDOMNode(_this2.refs[setter]).focus();
	      });
	      this.props.onChange(value);
	    }
	  }, {
	    key: 'onHourClick',
	    value: function onHourClick() {
	      this.setState({
	        showHourPanel: 1,
	        showMinutePanel: 0,
	        showSecondPanel: 0
	      });
	    }
	  }, {
	    key: 'onMinuteClick',
	    value: function onMinuteClick() {
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 1,
	        showSecondPanel: 0
	      });
	    }
	  }, {
	    key: 'onSecondClick',
	    value: function onSecondClick() {
	      this.setState({
	        showHourPanel: 0,
	        showMinutePanel: 0,
	        showSecondPanel: 1
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var state = this.state;
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var value = props.value;
	      var locale = props.locale;
	      var hour = value.getHourOfDay();
	      var minute = value.getMinutes();
	      var second = value.getSeconds();
	      var panel = undefined;
	      var commonProps = {
	        value: value,
	        onSelect: this.onSelectPanel,
	        rootPrefixCls: prefixCls
	      };
	      if (state.showHourPanel) {
	        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 4, getter: 'getHourOfDay', setter: setHourOfDay,
	          title: locale.hourPanelTitle
	        }, commonProps));
	      } else if (state.showMinutePanel) {
	        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 10, getter: 'getMinutes', setter: setMinutes,
	          title: locale.minutePanelTitle
	        }, commonProps));
	      } else if (state.showSecondPanel) {
	        panel = _react2['default'].createElement(_TimePanel2['default'], _extends({ rowCount: 6, colCount: 10, getter: 'getSeconds', setter: setSeconds,
	          title: locale.secondPanelTitle
	        }, commonProps));
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: prefixCls + '-time' },
	        _react2['default'].createElement('input', { className: prefixCls + '-time-input',
	          title: locale.hourInput,
	          ref: setHourOfDay,
	          readOnly: true,
	          value: padding(hour),
	          onClick: this.onHourClick,
	          onKeyDown: this.onHourKeyDown }),
	        _react2['default'].createElement(
	          'span',
	          { className: prefixCls + '-time-minute' },
	          _react2['default'].createElement(
	            'span',
	            null,
	            ' : '
	          ),
	          _react2['default'].createElement('input', { className: prefixCls + '-time-input',
	            title: locale.minuteInput,
	            ref: setMinutes,
	            readOnly: true,
	            value: padding(minute),
	            onClick: this.onMinuteClick,
	            onKeyDown: this.onMinuteKeyDown })
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: prefixCls + '-time-second' },
	          _react2['default'].createElement(
	            'span',
	            null,
	            ' : '
	          ),
	          _react2['default'].createElement('input', { className: prefixCls + '-time-input',
	            title: locale.secondInput,
	            ref: setSeconds,
	            readOnly: true,
	            value: padding(second),
	            onClick: this.onSecondClick,
	            onKeyDown: this.onSecondKeyDown })
	        ),
	        panel
	      );
	    }
	  }]);
	
	  return Time;
	})(_react2['default'].Component);
	
	exports['default'] = Time;
	
	Time.prototype.onHourKeyDown = keyDownWrap('setHourOfDay', 0, 23);
	Time.prototype.onMinuteKeyDown = keyDownWrap('setMinutes', 0, 59);
	Time.prototype.onSecondKeyDown = keyDownWrap('setSeconds', 0, 59);
	
	Time.propTypes = {
	  onChange: _react2['default'].PropTypes.func
	};
	
	Time.defaultProps = {
	  onChange: function onChange() {}
	};
	module.exports = exports['default'];

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(230);
	
	function choose(hour, e) {
	  var next = this.state.value.clone();
	  var method = this.props.setter;
	  next[method](hour);
	  this.props.onSelect(next, method);
	  e.preventDefault();
	}
	
	var TimePanel = (function (_React$Component) {
	  _inherits(TimePanel, _React$Component);
	
	  function TimePanel(props) {
	    _classCallCheck(this, TimePanel);
	
	    _get(Object.getPrototypeOf(TimePanel.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      value: props.value
	    };
	    this.prefixCls = props.rootPrefixCls + '-time-panel';
	  }
	
	  _createClass(TimePanel, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.state.value;
	      var props = this.props;
	      var method = props.getter;
	      var currentHour = value[method]();
	      var data = [];
	      var prefixCls = this.prefixCls;
	      var ROW = props.rowCount;
	      var COL = props.colCount;
	
	      for (var i = 0; i < ROW; i++) {
	        data[i] = [];
	        for (var j = 0; j < COL; j++) {
	          data[i][j] = i * COL + j;
	        }
	      }
	
	      var hoursEls = data.map(function (row, index) {
	        var tds = row.map(function (d) {
	          var _classNameMap;
	
	          var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', d === currentHour), _classNameMap);
	          return _react2['default'].createElement(
	            'td',
	            {
	              key: d,
	              onClick: choose.bind(_this, d),
	              role: 'gridcell',
	              className: (0, _rcUtil.classSet)(classNameMap) },
	            _react2['default'].createElement(
	              'a',
	              {
	                className: prefixCls + '-time' },
	              d
	            )
	          );
	        });
	        return _react2['default'].createElement(
	          'tr',
	          { key: index, role: 'row' },
	          tds
	        );
	      });
	
	      return _react2['default'].createElement(
	        'div',
	        { className: prefixCls },
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-header' },
	          _react2['default'].createElement(
	            'div',
	            { className: prefixCls + '-title' },
	            props.title
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-body' },
	          _react2['default'].createElement(
	            'table',
	            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
	            _react2['default'].createElement(
	              'tbody',
	              { className: prefixCls + '-tbody' },
	              hoursEls
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return TimePanel;
	})(_react2['default'].Component);
	
	exports['default'] = TimePanel;
	
	TimePanel.defaultProps = {
	  onSelect: function onSelect() {}
	};
	module.exports = exports['default'];

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _gregorianCalendarFormatLibLocaleEnUs = __webpack_require__(229);
	
	var _gregorianCalendarFormatLibLocaleEnUs2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleEnUs);
	
	exports['default'] = {
	  today: 'Today',
	  now: 'Now',
	  ok: 'Ok',
	  clear: 'Clear',
	  hourPanelTitle: 'Select hour',
	  minutePanelTitle: 'Select minute',
	  secondPanelTitle: 'Select second',
	  monthSelect: 'Choose a month',
	  yearSelect: 'Choose a year',
	  decadeSelect: 'Choose a decade',
	  yearFormat: 'yyyy',
	  dateFormat: 'M/d/yyyy',
	  monthFormat: 'MMMM',
	  monthBeforeYear: true,
	  previousMonth: 'Previous month (PageUp)',
	  nextMonth: 'Next month (PageDown)',
	  hourInput: 'Last hour(Up), Next hour(Down)',
	  minuteInput: 'Last minute(Up), Next minute(Down)',
	  secondInput: 'Last second(Up), Next second(Down)',
	  previousYear: 'Last year (Control + left)',
	  nextYear: 'Next year (Control + right)',
	  previousDecade: 'Last decade',
	  nextDecade: 'Next decade',
	  previousCentury: 'Last century',
	  nextCentury: 'Next century',
	  format: _gregorianCalendarFormatLibLocaleEnUs2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gregorianCalendarFormat = __webpack_require__(222);
	
	var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _rcAlign = __webpack_require__(255);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(259);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var toFragment = _rcUtil2['default'].Children.mapSelf;
	
	var orientMap = {
	  tl: ['top', 'left'],
	  tr: ['top', 'right'],
	  bl: ['bottom', 'left'],
	  br: ['bottom', 'right']
	};
	
	function getImmutableOrient(orient) {
	  if (orient) {
	    for (var i in orientMap) {
	      if (orientMap.hasOwnProperty(i)) {
	        var original = orientMap[i];
	        if (original[0] === orient[0] && original[1] === orient[1]) {
	          return original;
	        }
	      }
	    }
	  }
	}
	
	function prevent(e) {
	  e.preventDefault();
	}
	
	function noop() {}
	
	function refFn(field, component) {
	  this[field] = component;
	}
	
	/**
	 * DatePicker = wrap input using Calendar
	 */
	
	var Picker = (function (_React$Component) {
	  _inherits(Picker, _React$Component);
	
	  function Picker(props) {
	    var _this = this;
	
	    _classCallCheck(this, Picker);
	
	    _get(Object.getPrototypeOf(Picker.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      open: false,
	      value: props.value || props.defaultValue
	    };
	    var events = ['onCalendarAlign', 'onInputClick', 'onCalendarBlur', 'onTriggerClick', 'onCalendarClear', 'onCalendarKeyDown', 'onCalendarOk', 'onKeyDown', 'onCalendarSelect', 'focusInput', 'getInputDOMNode'];
	    // bind methods
	    events.forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
	    this.saveInputRef = refFn.bind(this, 'inputInstance');
	  }
	
	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var value = nextProps.value;
	      if (value !== undefined) {
	        // null special meaning
	        value = value || nextProps.defaultValue || null;
	        this.setState({
	          value: value
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.haveOpened && this.props.renderCalendarToBody) {
	        _react2['default'].render(this.getCalendarElement(), this.getCalendarContainer());
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.calendarContainer) {
	        _react2['default'].unmountComponentAtNode(this.calendarContainer);
	        this.calendarContainer.parentNode.removeChild(this.calendarContainer);
	        this.calendarContainer = null;
	      }
	    }
	  }, {
	    key: 'onCalendarAlign',
	    value: function onCalendarAlign(node, align) {
	      var points = align.points;
	      var newOrient = orientMap[points[0]];
	      this.calendarInstance.setOrient(newOrient);
	      // focus after align
	      _react2['default'].findDOMNode(this.calendarInstance).focus();
	    }
	  }, {
	    key: 'onInputClick',
	    value: function onInputClick() {
	      this.toggle();
	    }
	  }, {
	    key: 'onTriggerClick',
	    value: function onTriggerClick() {
	      this.toggle();
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      // down
	      if (e.keyCode === _rcUtil.KeyCode.DOWN) {
	        e.preventDefault();
	        this.open();
	      }
	    }
	  }, {
	    key: 'onCalendarKeyDown',
	    value: function onCalendarKeyDown(e) {
	      if (e.keyCode === _rcUtil.KeyCode.ESC) {
	        e.stopPropagation();
	        this.close(this.focusInput);
	      }
	    }
	  }, {
	    key: 'onCalendarSelect',
	    value: function onCalendarSelect(value) {
	      var currentValue = this.state.value;
	      this.setState({
	        value: value
	      });
	      if (!this.props.calendar.props.showTime) {
	        this.close(this.focusInput);
	      }
	      if (!currentValue || currentValue.getTime() !== value.getTime()) {
	        this.props.onChange(value);
	      }
	    }
	  }, {
	    key: 'onCalendarBlur',
	    value: function onCalendarBlur() {
	      if (document.activeElement === this.getInputDOMNode()) {
	        return;
	      }
	      // if invisible, will not trigger blur
	      // do not set if already false, avoid ruin animate
	      this.close();
	    }
	  }, {
	    key: 'onCalendarOk',
	    value: function onCalendarOk() {
	      this.close(this.focusInput);
	    }
	  }, {
	    key: 'onCalendarClear',
	    value: function onCalendarClear() {
	      this.setState({
	        value: null
	      });
	      this.close(this.focusInput);
	      if (this.state.value !== null) {
	        this.props.onChange(null);
	      }
	    }
	  }, {
	    key: 'getInputDOMNode',
	    value: function getInputDOMNode() {
	      return _react2['default'].findDOMNode(this.inputInstance);
	    }
	  }, {
	    key: 'getTransitionName',
	    value: function getTransitionName() {
	      var props = this.props;
	      var transitionName = props.transitionName;
	      if (!transitionName && props.animation) {
	        transitionName = props.prefixCls + '-' + props.animation;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'getCalendarContainer',
	    value: function getCalendarContainer() {
	      if (!this.calendarContainer) {
	        this.calendarContainer = document.createElement('div');
	        this.calendarContainer.className = this.props.prefixCls + '-container';
	        document.body.appendChild(this.calendarContainer);
	      }
	      return this.calendarContainer;
	    }
	  }, {
	    key: 'getAlign',
	    value: function getAlign(orient) {
	      var points = ['tl', 'bl'];
	      var offset = [0, 5];
	      var adjustOrientOnCalendarOverflow = this.props.adjustOrientOnCalendarOverflow;
	      if (orient.indexOf('top') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['tl', 'bl'];
	      } else if (orient.indexOf('top') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['tr', 'br'];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('left') !== -1) {
	        points = ['bl', 'tl'];
	        offset = [0, -5];
	      } else if (orient.indexOf('bottom') !== -1 && orient.indexOf('right') !== -1) {
	        points = ['br', 'tr'];
	        offset = [0, -5];
	      }
	      var adjustX = undefined;
	      var adjustY = undefined;
	      if (adjustOrientOnCalendarOverflow === true) {
	        adjustX = adjustY = true;
	      } else if (!adjustOrientOnCalendarOverflow) {
	        adjustX = adjustY = false;
	      } else {
	        adjustX = adjustOrientOnCalendarOverflow.x;
	        adjustY = adjustOrientOnCalendarOverflow.y;
	      }
	      return {
	        points: points,
	        offset: offset,
	        overflow: {
	          adjustX: adjustX,
	          adjustY: adjustY
	        }
	      };
	    }
	  }, {
	    key: 'getCalendarElement',
	    value: function getCalendarElement() {
	      var props = this.props;
	      var state = this.state;
	      var calendarProp = props.calendar;
	      var orient = undefined;
	      // re align when open
	      if (state.open) {
	        orient = getImmutableOrient(calendarProp.props.orient) || orientMap.tl;
	      }
	      var calendarElement = _react2['default'].cloneElement(calendarProp, {
	        ref: (0, _rcUtil.createChainedFunction)(calendarProp.props.ref, this.saveCalendarRef),
	        value: state.value,
	        visible: state.open,
	        orient: orient,
	        onBlur: this.onCalendarBlur,
	        onKeyDown: this.onCalendarKeyDown,
	        onOk: (0, _rcUtil.createChainedFunction)(calendarProp.props.onOk, this.onCalendarOk),
	        onSelect: (0, _rcUtil.createChainedFunction)(calendarProp.props.onSelect, this.onCalendarSelect),
	        onClear: (0, _rcUtil.createChainedFunction)(calendarProp.props.onClear, this.onCalendarClear)
	      });
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          animateMount: true,
	          showProp: 'calendarOpen',
	          transitionName: this.getTransitionName() },
	        _react2['default'].createElement(
	          _rcAlign2['default'],
	          { target: this.getInputDOMNode,
	            key: 'calendar',
	            onAlign: this.onCalendarAlign,
	            calendarOpen: state.open,
	            disabled: !state.open,
	            align: orient && this.getAlign(orient) },
	          calendarElement
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classes;
	
	      var props = this.props;
	      var disabled = props.disabled;
	      var prefixCls = props.prefixCls;
	      var renderCalendarToBody = props.renderCalendarToBody;
	      var input = props.children;
	      var state = this.state;
	      var value = state.value;
	      var calendar = undefined;
	      this.haveOpened = this.haveOpened || state.open;
	      if (!renderCalendarToBody && this.haveOpened) {
	        calendar = this.getCalendarElement();
	      }
	      var inputValue = '';
	      if (value) {
	        inputValue = props.formatter.format(value);
	      }
	      input = _react2['default'].cloneElement(input, {
	        ref: (0, _rcUtil.createChainedFunction)(input.props.ref, this.saveInputRef),
	        disabled: disabled,
	        onChange: noop,
	        onClick: disabled ? noop : this.onInputClick,
	        value: inputValue,
	        onKeyDown: disabled ? noop : this.onKeyDown
	      });
	      var classes = (_classes = {}, _defineProperty(_classes, prefixCls, 1), _defineProperty(_classes, prefixCls + '-open', state.open), _defineProperty(_classes, prefixCls + '-disabled', disabled), _classes);
	      var trigger = props.trigger;
	      if (trigger) {
	        trigger = _react2['default'].cloneElement(trigger, {
	          unselectable: true,
	          onMouseDown: prevent,
	          onClick: disabled ? noop : this.onTriggerClick
	        });
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: (0, _rcUtil.classSet)(classes), style: props.style },
	        toFragment([input, calendar, trigger])
	      );
	    }
	  }, {
	    key: 'focusInput',
	    value: function focusInput() {
	      this.getInputDOMNode().focus();
	    }
	  }, {
	    key: 'setOpen',
	    value: function setOpen(open, callback) {
	      if (this.state.open !== open) {
	        this.setState({
	          open: open
	        }, callback);
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      if (this.state.open) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }, {
	    key: 'open',
	    value: function open(callback) {
	      this.setOpen(true, callback);
	    }
	  }, {
	    key: 'close',
	    value: function close(callback) {
	      this.setOpen(false, callback);
	    }
	  }]);
	
	  return Picker;
	})(_react2['default'].Component);
	
	Picker.propTypes = {
	  onChange: _react2['default'].PropTypes.func,
	  calendar: _react2['default'].PropTypes.element,
	  style: _react2['default'].PropTypes.style,
	  prefixCls: _react2['default'].PropTypes.string,
	  renderCalendarToBody: _react2['default'].PropTypes.bool,
	  adjustOrientOnCalendarOverflow: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.object])
	};
	
	Picker.defaultProps = {
	  prefixCls: 'rc-calendar-picker',
	  adjustOrientOnCalendarOverflow: true,
	  renderCalendarToBody: false,
	  style: {},
	  onChange: noop,
	  formatter: new _gregorianCalendarFormat2['default']('yyyy-MM-dd')
	};
	
	exports['default'] = Picker;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// export this package's api
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Align = __webpack_require__(256);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _domAlign = __webpack_require__(257);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(230);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	function isWindow(obj) {
	  /*eslint-disable eqeqeq */
	  return obj != null && obj == obj.window;
	  /*eslint-enable eqeqeq */
	}
	
	function buffer(fn, ms) {
	  var timer;
	  return function () {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Align = (function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    _get(Object.getPrototypeOf(Align.prototype), 'constructor', this).apply(this, arguments);
	    this.handleWindowResize = this.handleWindowResize.bind(this);
	  }
	
	  _createClass(Align, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var props = this.props;
	      // if parent ref not attached .... use document.getElementById
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	        if (props.monitorWindowResize) {
	          this.startMonitorWindowResize();
	        }
	      }
	    }
	  }, {
	    key: 'startMonitorWindowResize',
	    value: function startMonitorWindowResize() {
	      if (!this.resizeHandler) {
	        this.resizeHandler = _rcUtil2['default'].Dom.addEventListener(window, 'resize', buffer(this.handleWindowResize, this.props.monitorBufferTime));
	      }
	    }
	  }, {
	    key: 'stopMonitorWindowResize',
	    value: function stopMonitorWindowResize() {
	      if (this.resizeHandler) {
	        this.resizeHandler.remove();
	        this.resizeHandler = null;
	      }
	    }
	  }, {
	    key: 'handleWindowResize',
	    value: function handleWindowResize() {
	      var props = this.props;
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stopMonitorWindowResize();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var reAlign = false;
	      var props = this.props;
	      var currentTarget;
	
	      if (!props.disabled) {
	        if (prevProps.disabled || prevProps.align !== props.align) {
	          reAlign = true;
	          currentTarget = props.target();
	        } else {
	          var lastTarget = prevProps.target();
	          currentTarget = props.target();
	          if (isWindow(lastTarget) && isWindow(currentTarget)) {
	            reAlign = false;
	          } else if (lastTarget !== currentTarget) {
	            reAlign = true;
	          }
	        }
	      }
	
	      if (reAlign) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	      }
	
	      if (props.monitorWindowResize && !props.disabled) {
	        this.startMonitorWindowResize();
	      } else {
	        this.stopMonitorWindowResize();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children);
	    }
	  }]);
	
	  return Align;
	})(_react2['default'].Component);
	
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	Align.PropTypes = {
	  align: _react2['default'].PropTypes.object.isRequired,
	  target: _react2['default'].PropTypes.func,
	  onAlign: _react2['default'].PropTypes.func,
	  monitorBufferTime: _react2['default'].PropTypes.number,
	  monitorWindowResize: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(258);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = element;
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible')) {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	exports['default'] = domAlign;
	
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ },
/* 258 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = undefined;
	
	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var preset = -9999;
	  if ('left' in offset) {
	    elem.style.left = preset + 'px';
	  }
	  if ('top' in offset) {
	    elem.style.top = preset + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      ret[key] = preset + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(260);

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(261);
	
	var _ChildrenUtils2 = _interopRequireDefault(_ChildrenUtils);
	
	var _AnimateChild = __webpack_require__(262);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(266);
	
	var _util2 = _interopRequireDefault(_util);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (c) {
	        return !!c.props[showProp];
	      });
	    }
	    children.forEach(function (c) {
	      _this.performAppear(c.key);
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    var showProp = props.showProp;
	    var exclusive = props.exclusive;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    // exclusive needs immediate response
	    var currentChildren = this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	    } else {
	      newChildren = _ChildrenUtils2['default'].mergeChildren(currentChildren, nextChildren);
	    }
	
	    // exclusive needs immediate response
	    if (exclusive) {
	      Object.keys(currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	      currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = c.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = c.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(
	          _AnimateChild2['default'],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    }
	    return children[0] || null;
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var utils = {
	  toArrayChildren: function toArrayChildren(children) {
	    var ret = [];
	    _react2['default'].Children.forEach(children, function (c) {
	      ret.push(c);
	    });
	    return ret;
	  },
	
	  findChildInChildrenByKey: function findChildInChildrenByKey(children, key) {
	    var ret = null;
	    if (children) {
	      children.forEach(function (c) {
	        if (ret) {
	          return;
	        }
	        if (c.key === key) {
	          ret = c;
	        }
	      });
	    }
	    return ret;
	  },
	
	  findShownChildInChildrenByKey: function findShownChildInChildrenByKey(children, key, showProp) {
	    var ret = null;
	    if (children) {
	      children.forEach(function (c) {
	        if (c.key === key && c.props[showProp]) {
	          if (ret) {
	            throw new Error('two child with same key for <rc-animate> children');
	          }
	          ret = c;
	        }
	      });
	    }
	    return ret;
	  },
	
	  findHiddenChildInChildrenByKey: function findHiddenChildInChildrenByKey(children, key, showProp) {
	    var found = 0;
	    if (children) {
	      children.forEach(function (c) {
	        if (found) {
	          return;
	        }
	        found = c.key === key && !c.props[showProp];
	      });
	    }
	    return found;
	  },
	
	  isSameChildren: function isSameChildren(c1, c2, showProp) {
	    var same = c1.length === c2.length;
	    if (same) {
	      c1.forEach(function (child, i) {
	        var child2 = c2[i];
	        if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      });
	    }
	    return same;
	  },
	
	  mergeChildren: function mergeChildren(prev, next) {
	    var ret = [];
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextChildrenPending = {};
	    var pendingChildren = [];
	    prev.forEach(function (c) {
	      if (utils.findChildInChildrenByKey(next, c.key)) {
	        if (pendingChildren.length) {
	          nextChildrenPending[c.key] = pendingChildren;
	          pendingChildren = [];
	        }
	      } else {
	        pendingChildren.push(c);
	      }
	    });
	
	    next.forEach(function (c) {
	      if (nextChildrenPending.hasOwnProperty(c.key)) {
	        ret = ret.concat(nextChildrenPending[c.key]);
	      }
	      ret.push(c);
	    });
	
	    ret = ret.concat(pendingChildren);
	
	    return ret;
	  }
	};
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(180);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cssAnimation = __webpack_require__(263);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(266);
	
	var _util2 = _interopRequireDefault(_util);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _react2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    if (this.stopper) {
	      this.stopper.stop();
	      this.stopper = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(264);
	var Css = __webpack_require__(265);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 265 */
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 266 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 267 */
/***/ function(module, exports) {

	/**
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	module.exports = {
	  // in minutes
	  timezoneOffset: 8 * 60,
	  firstDayOfWeek: 1,
	  minimalDaysInFirstWeek: 1
	};


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _gregorianCalendarFormatLibLocaleZhCn = __webpack_require__(269);
	
	var _gregorianCalendarFormatLibLocaleZhCn2 = _interopRequireDefault(_gregorianCalendarFormatLibLocaleZhCn);
	
	exports['default'] = {
	  today: '今天',
	  now: '此刻',
	  ok: '确定',
	  clear: '清除',
	  previousMonth: '上个月 (翻页上键)',
	  nextMonth: '下个月 (翻页下键)',
	  monthSelect: '选择月份',
	  yearSelect: '选择年份',
	  decadeSelect: '选择年代',
	  hourInput: '上一小时(上方向键), 下一小时(下方向键)',
	  minuteInput: '上一分钟(上方向键), 下一分钟(下方向键)',
	  secondInput: '上一秒(上方向键), 下一小时(下方向键)',
	  hourPanelTitle: '选择小时',
	  minutePanelTitle: '选择分钟',
	  secondPanelTitle: '选择秒',
	  yearFormat: 'yyyy\'年\'',
	  monthFormat: 'M\'月\'',
	  dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
	  previousYear: '上一年 (Control键加左方向键)',
	  nextYear: '下一年 (Control键加右方向键)',
	  previousDecade: '上一年代',
	  nextDecade: '下一年代',
	  previousCentury: '上一世纪',
	  nextCentury: '下一世纪',
	  format: _gregorianCalendarFormatLibLocaleZhCn2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 269 */
/***/ function(module, exports) {

	/**
	 * zh-cn locale
	 * @ignore
	 * @author yiminghe@gmail.com
	 */
	module.exports = {
	  eras: ['公元前', '公元'],
	  months: ['一月', '二月', '三月', '四月', '五月', '六月',
	    '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月',
	    '七月', '八月', '九月', '十月', '十一月', '十二月'],
	  weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四',
	    '星期五', '星期六'],
	  shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五',
	    '周六'],
	  veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
	  ampms: ['上午', '下午'],
	  /*jshint quotmark: false*/
	  datePatterns: ["yyyy'年'M'月'd'日' EEEE", "yyyy'年'M'月'd'日'", "yyyy-M-d", "yy-M-d"],
	  timePatterns: ["ahh'时'mm'分'ss'秒' 'GMT'Z", "ahh'时'mm'分'ss'秒'", "H:mm:ss", "ah:mm"],
	  dateTimePattern: '{date} {time}'
	};


/***/ }
]);
//# sourceMappingURL=rc-calendar.js.map