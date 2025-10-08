import type { Directive } from 'vue';

type AutoSizeOptions = undefined | {
  minHeight?: number;
  maxHeight?: number;
}

export default <Directive<HTMLTextAreaElement, AutoSizeOptions>> {
  mounted(el, { value }) {
    resize(el, value);
  },

  updated(el, { value }) {
    resize(el, value);
  }
}

function resize(el: HTMLTextAreaElement, options: AutoSizeOptions) {
  // @see https://css-tricks.com/auto-growing-inputs-textareas/
  const borderWidth = (parseInt(window.getComputedStyle(el).borderWidth) || 0) * 2;
  const paddingTop = parseInt(window.getComputedStyle(el).paddingTop) || 0;
  const paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom) || 0;
  const lineHeight = parseInt(window.getComputedStyle(el).lineHeight) || 0;
  const lines = (el.value.match(/\n/g)?.length || 0) + 1;

  let contentHeight = borderWidth + (lineHeight * lines) + paddingTop + paddingBottom;

  options = options || {};

  const minHeight = options.minHeight;

  if (minHeight) {
    contentHeight = contentHeight < minHeight
      ? minHeight
      : contentHeight
  }

  const maxHeight = options.maxHeight;

  if (maxHeight) {
    if (contentHeight > maxHeight) {
      contentHeight = maxHeight;
      // this.styles.maxHeight = true;
    } else {
      // this.styles.maxHeight = false;
    }
  }

  const heightVal = contentHeight + 'px';
  el.style.height = `${heightVal}`;
}
