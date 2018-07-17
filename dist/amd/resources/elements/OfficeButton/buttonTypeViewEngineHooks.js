define(["require", "exports", "./office-button-enums"], function (require, exports, office_button_enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // By convention, Aurelia will look for any classes of the form 
    // {name}ViewEngineHooks and load them as a ViewEngineHooks resource. We can
    // use the @viewEngineHooks decorator instead if we want to give the class a
    // different name.
    var ButtonTypeViewEngineHooks = /** @class */ (function () {
        function ButtonTypeViewEngineHooks() {
        }
        // The `beforeBind` method is called before the ViewModel is bound to
        // the view. We want to expose the enum to the binding context so that
        // when Aurelia binds the data it will find our ButtonType enum.
        ButtonTypeViewEngineHooks.prototype.beforeBind = function (view) {
            // We add the enum to the override context. This will expose the enum
            // to the view without interfering with any properties on the
            // bindingContext itself.
            view.overrideContext['ButtonType'] = office_button_enums_1.ButtonType;
            // Since TypeScript enums are not iterable, we need to do a bit of extra
            // legwork if we plan on iterating over the enum keys.
            view.overrideContext['ButtonTypes'] =
                Object.keys(office_button_enums_1.ButtonType)
                    .filter(function (key) { return typeof office_button_enums_1.ButtonType[key] === 'number'; });
        };
        return ButtonTypeViewEngineHooks;
    }());
    exports.ButtonTypeViewEngineHooks = ButtonTypeViewEngineHooks;
});
