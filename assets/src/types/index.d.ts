import '@windwalker-io/unicorn/src/types';
import useFormkitFieldFunc from '@vue/services/form-mixin';
import type { Unicorn } from '@windwalker-io/unicorn';

declare global {
  // var u: Unicorn;

  interface Window {
    useFormkitField: typeof useFormkitFieldFunc;
  }

  var useFormkitField: typeof useFormkitFieldFunc;

  namespace useFormkitField {
    export var props: any;
  }
}
