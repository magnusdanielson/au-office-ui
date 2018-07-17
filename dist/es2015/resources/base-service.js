var MyAbstractBaseService = /** @class */ (function () {
    function MyAbstractBaseService() {
    }
    MyAbstractBaseService.prototype.doServiceThings = function () {
        throw new Error('abstract services don\'t do things');
    };
    return MyAbstractBaseService;
}());
export { MyAbstractBaseService };
