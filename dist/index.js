'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('strToHump', function () {
    function strToHump(str) {
        var rule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

        var type = Object.prototype.toString.call(str).slice(8, -1).toLowerCase();
        if (type === 'string') {
            var arr = str.split(rule);
            arr.forEach(function (v, i) {
                if (i !== 0) {
                    if (arr[i][0]) {
                        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
                    }
                }
            });
            str = arr.join('');
        } else {
            console.log('参数错误,请输入字符串');
        }
        return str;
    }

    return strToHump;
});