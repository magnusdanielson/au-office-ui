System.register(["./office-button-enums"], function (exports_1, context_1) {
    "use strict";
    var office_button_enums_1, ButtonTypeViewEngineHooks;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (office_button_enums_1_1) {
                office_button_enums_1 = office_button_enums_1_1;
            }
        ],
        execute: function () {
            // By convention, Aurelia will look for any classes of the form 
            // {name}ViewEngineHooks and load them as a ViewEngineHooks resource. We can
            // use the @viewEngineHooks decorator instead if we want to give the class a
            // different name.
            ButtonTypeViewEngineHooks = /** @class */ (function () {
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
            exports_1("ButtonTypeViewEngineHooks", ButtonTypeViewEngineHooks);
        }
    };
});
