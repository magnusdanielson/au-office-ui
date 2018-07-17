System.register([], function (exports_1, context_1) {
    "use strict";
    var MyAbstractBaseService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MyAbstractBaseService = /** @class */ (function () {
                function MyAbstractBaseService() {
                }
                MyAbstractBaseService.prototype.doServiceThings = function () {
                    throw new Error('abstract services don\'t do things');
                };
                return MyAbstractBaseService;
            }());
            exports_1("MyAbstractBaseService", MyAbstractBaseService);
        }
    };
});
