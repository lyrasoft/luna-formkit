import { useUniDirective, route, __, html, selectAll, module, useFormValidation } from "@windwalker-io/unicorn-next";
useFormValidation();
class FormkitHandler {
  constructor(el, uid) {
    this.el = el;
    this.uid = uid;
    this.registerValidation();
    this.autoCheckOther();
  }
  async registerValidation() {
    const form = this.el.querySelector("form");
    const action = route("formkit.action." + this.uid);
    const button = this.el.querySelector("[data-task=submit]");
    button.addEventListener("click", () => {
      form.action = action;
      form.requestSubmit();
      setTimeout(() => {
        form.removeAttribute("action");
      }, 500);
    });
    form.addEventListener("submit", (e) => {
      let invalid = 0;
      let scrollTarget = void 0;
      e.currentTarget;
      const grids = form.querySelectorAll(".c-grid-scale[required]");
      for (const grid of grids) {
        const $rows = grid.querySelectorAll("tbody > tr");
        grid.closest(".form-group").classList.remove("has-invalid");
        for (const $row of $rows) {
          const $inputs = Array.from(
            $row.querySelectorAll("[type=checkbox], [type=radio]")
          );
          const checked = $inputs.filter((input) => input.checked);
          $row.querySelector(".invalid-feedback")?.remove();
          for (const $input of $inputs) {
            $input.setCustomValidity("");
          }
          if (checked.length === 0) {
            const text = __("unicorn.message.validation.value.missing");
            const help = html(`<small class="invalid-feedback form-control-tooltip d-block">${text}</small>`);
            for (const $input of $inputs) {
              $input.setCustomValidity(text);
            }
            $row.querySelector(".c-row-text").appendChild(help);
            grid.closest(".form-group").classList.add("has-invalid");
            if (!scrollTarget) {
              scrollTarget = grid;
            }
            invalid++;
          }
        }
      }
      if (invalid > 0) {
        if (scrollTarget) {
          scrollTarget.scrollIntoView();
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }
  autoCheckOther() {
    selectAll(".js-other-text", (el) => {
      el.addEventListener("input", () => {
        const option = el.closest("[data-input-option]")?.querySelector("[data-radio-item-input], [data-checkbox-item-input]");
        if (option) {
          option.checked = true;
        }
      });
    });
  }
}
const ready = useUniDirective(
  "formkit",
  {
    mounted(el, { value }) {
      module(el, "formkit", (el2) => new FormkitHandler(el2, value));
    }
  }
);
export {
  FormkitHandler,
  ready
};
//# sourceMappingURL=formkit.js.map
