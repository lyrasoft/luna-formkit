System.register(["@main"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function default_1(app, vue) {
        const { defineComponent } = vue;
        return defineComponent({
            name: 'FormPointScale',
            template: `
      <div class="mt-3">
        <div class="row gy-3">
          <div class="col-lg-4">
            <label :for="getId('min')" class="mr-2">數值</label>
            <div class="d-flex gap-2 align-items-center">
              <select :id="getId('min')" v-model="item.min" class="form-select">
                <option value="0">0</option>
                <option value="1">1</option>
              </select>

              <span class="mx-2">到</span>

              <select :id="getId('max')" v-model="item.max" class="form-select">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          
          <div class="col-lg-2">
            <label :for="getId('start')" class="mr-2">最小標籤</label>
            <input :id="getId('start')" type="text" v-model="item.start" class="form-control">
          </div>
          <div class="col-lg-2">
            <label :for="getId('end')" class="mr-2">最大標籤</label>
            <input :id="getId('end')" type="text" v-model="item.end" class="form-control">
          </div>
        </div>
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

//# sourceMappingURL=form-point-scale.js.map
