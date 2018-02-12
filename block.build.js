/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    Editable = _wp$blocks.Editable,
    source = _wp$blocks.source;
var __ = wp.i18n.__;

// This is the siple block to render static text.

registerBlockType('basic/basic-static', {
    title: __('Hello World'),
    description: __('Simple Static Block To Render The HELLO WORLD!'),
    icon: 'universal-access-alt',
    category: 'layout',
    keywords: [__('static'), __('helloworld')],
    useOnce: false,
    html: false,
    // save() {
    //     return <div className="statctext"> <p> HELLO WORLD! </p> </div>;
    // },
    edit: function edit() {
        return wp.element.createElement(
            'div',
            { className: 'statctext' },
            ' ',
            wp.element.createElement(
                'p',
                null,
                ' HELLO WORLD!! '
            ),
            ' '
        );
    }
});

// This is the simple static block to render the sitename.
registerBlockType('basic/sitename', {
    title: __('Site Name'),
    description: __('This blocks renders the site name of our website'),
    icon: 'universal-access-alt',
    category: 'layout',
    keyWords: [__('websitename')],
    useOnce: true,
    attributes: {
        content: {
            source: 'text',
            selector: 'h1'
        }
    },
    save: function save(_ref) {
        var attributes = _ref.attributes;

        return wp.element.createElement(
            'div',
            { className: 'statctext' },
            '  ',
            wp.element.createElement(
                'h1',
                null,
                ' ',
                attributes.content,
                ' '
            ),
            ' '
        );
    },
    edit: function edit(_ref2) {
        var attributes = _ref2.attributes;

        attributes.content = "gutenberg.test";
        return wp.element.createElement(
            'div',
            { className: 'statctext' },
            ' ',
            wp.element.createElement(
                'h1',
                null,
                ' ',
                attributes.content,
                ' '
            ),
            ' '
        );
    }
});

// This is the simple static block to render the sitename.
registerBlockType('basic/inputfield', {
    title: __('Dynamic Name'),
    description: __('This blocks renders the name of what you enter.'),
    icon: 'universal-access-alt',
    category: 'layout',
    keyWords: [__('dynamicname')],
    useOnce: true,
    attributes: {
        content: {
            source: 'text',
            selector: 'h1'
        }
    },
    save: function save(_ref3) {
        var attributes = _ref3.attributes;

        return wp.element.createElement(
            'div',
            { className: 'statctext' },
            '  ',
            wp.element.createElement(
                'h1',
                null,
                ' ',
                attributes.content,
                ' '
            ),
            ' '
        );
    },
    edit: function edit(_ref4) {
        var attributes = _ref4.attributes,
            setAttributes = _ref4.setAttributes,
            isSelected = _ref4.isSelected;

        function onChange(event) {
            setAttributes({ content: event.target.value });
        }
        if (isSelected) {
            alert("OHH It's Selected!!!");
        }
        return wp.element.createElement('input', { value: attributes.content, onChange: onChange, placeholder: 'Enther the .... ' });
    }
});

registerBlockType('basic/editabletext', {
    title: __('Montu Editable'),
    description: __('This blocks renders the editable input field.'),
    icon: 'universal-access-alt',
    category: 'layout',
    keyWords: [__('montueditable')],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p'
        }
    },
    save: function save(_ref5) {
        var attributes = _ref5.attributes;

        return wp.element.createElement(
            'div',
            { className: 'statctext' },
            ' ',
            wp.element.createElement(
                'p',
                null,
                ' ',
                attributes.content,
                ' '
            ),
            ' '
        );
    },
    edit: function edit(_ref6) {
        var attributes = _ref6.attributes,
            setAttributes = _ref6.setAttributes,
            setFocus = _ref6.setFocus,
            focus = _ref6.focus,
            className = _ref6.className;

        function onChange(newContent) {
            setAttributes({ content: newContent });
        }
        return wp.element.createElement(Editable, {
            tagName: 'p',
            className: className,
            value: attributes.content,
            onFocus: setFocus,
            focus: focus,
            onChange: onChange
        });
    }
});

/***/ })
/******/ ]);