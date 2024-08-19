System.register(["@main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function default_1(app, vue) {
        const { defineComponent } = vue;
        return defineComponent({
            name: 'FormGridRadioScale',
            template: `
      <div class="mt-3">
        <GridOptions v-model="item" icon="far fa-circle" />
      </div>
    `,
            props: {
                ...useFormkitField.props
            },
            setup(props, ctx) {
                const mixin = useFormkitField(props, ctx);
                return {
                    ...mixin
                };
            },
        });
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=form-grid-radio-scale.js.map
