
import '@main';

u.formValidation();

class FormkitHandler {
  constructor(protected el: HTMLElement, protected uid: string) {
    this.registerValidation();
    this.autoCheckOther();
  }

  async registerValidation() {
    const form = this.el.querySelector('form')!;

    const action = u.route('formkit.action.' + this.uid);
    const button = this.el.querySelector<HTMLButtonElement>('[data-task=submit]')!;

    button.addEventListener('click', () => {
      form.action = action;
      form.requestSubmit();

      setTimeout(() => {
        form.removeAttribute('action');
      }, 500);
    });

    form.addEventListener('submit', (e) => {
      let invalid = 0;
      let scrollTarget: HTMLElement | undefined = undefined;
      const $form = e.currentTarget as HTMLFormElement;

      // 驗證選擇列表
      // -----------------------------
      // const fields = $form.querySelectorAll<HTMLDivElement>('.input-list-container[required]');

      // 驗證矩陣
      // -----------------------------
      const grids = form.querySelectorAll<HTMLElement>('.c-grid-scale[required]');

      for (const grid of grids) {
        const $rows = grid.querySelectorAll('tbody > tr');

        // 移除前次驗證的資訊
        grid.closest<HTMLElement>('.form-group')!.classList.remove('has-invalid');

        for (const $row of $rows) {
          const $inputs = Array.from(
            $row.querySelectorAll<HTMLInputElement>('[type=checkbox], [type=radio]')
          );
          const checked = $inputs.filter((input) => input.checked);

          // 移除前次驗證的資訊
          // $row.closest('.form-group').removeClass('has-invalid');
          $row.querySelector('.invalid-feedback')?.remove();

          for (const $input of $inputs) {
            $input.setCustomValidity('');
          }

          // 確認沒有勾選就產生錯誤提示
          if (checked.length === 0) {
            const text = u.__('unicorn.message.validation.value.missing');
            const help = u.html(`<small class="invalid-feedback form-control-tooltip d-block">${text}</small>`);

            // 設定 HTML5 驗證結果
            for (const $input of $inputs) {
              $input.setCustomValidity(text);
            }

            // 插入提示
            $row.querySelector('.c-row-text')!.appendChild(help);
            grid.closest<HTMLElement>('.form-group')!.classList.add('has-invalid');

            // 準備滑動到第一個物件
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
    u.selectAll<HTMLInputElement>('.js-other-text', (el) => {
      el.addEventListener('input', () => {
        const option = el.closest('[data-input-option]')
          ?.querySelector<HTMLInputElement>('[data-radio-item-input], [data-checkbox-item-input]');

        if (option) {
          option.checked = true;
        }
      });
    });
  }
}

u.directive(
  'formkit',
  {
    mounted(el, { value }) {
      u.module<any, HTMLElement>(el, 'formkit', (el) => new FormkitHandler(el, value))
    }
  }
)
