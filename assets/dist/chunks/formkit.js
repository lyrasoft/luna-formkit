import { useUniDirective, hasRoute, route, __, html, selectAll, uid, module, useFormValidation } from "@windwalker-io/unicorn-next";
useFormValidation();
class FormkitHandler {
  constructor(el, uid2) {
    this.el = el;
    this.uid = uid2;
    this.registerValidation();
    this.autoCheckOther();
    this.toggleSelectOtherInput();
  }
  async registerValidation() {
    const form = this.el.querySelector("form") || this.el.closest("form");
    if (!form) {
      return;
    }
    const routeKey = "formkit.action." + this.uid;
    if (hasRoute(routeKey)) {
      const action = route(routeKey);
      const button = this.el.querySelector("[data-task=submit]");
      button?.addEventListener("click", () => {
        form.action = action;
        form.requestSubmit();
        setTimeout(() => {
          form.removeAttribute("action");
        }, 500);
      });
    }
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
  toggleSelectOtherInput() {
    const selectInputs = selectAll("select[data-field-input]");
    for (const selectInput of selectInputs) {
      selectInput.addEventListener("change", () => toggle(selectInput));
      toggle(selectInput);
    }
    function toggle(selectInput) {
      const option = selectInput.querySelector("option[data-other-option]");
      const otherInput = selectInput.closest(".l-form-select-wrapper")?.querySelector(".js-other-text");
      if (option && otherInput) {
        if (option.selected) {
          otherInput.style.display = "block";
        } else {
          otherInput.style.display = "none";
        }
      }
    }
  }
}
const ready = useUniDirective(
  "formkit",
  {
    mounted(el, { value }) {
      const uniId = value || uid();
      module(el, "formkit", (el2) => new FormkitHandler(el2, uniId));
    }
  }
);
export {
  FormkitHandler,
  ready
};
//# sourceMappingURL=formkit.js.map
