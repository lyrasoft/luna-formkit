import {
  useBs5Tooltip,
  useDisableIfStackNotEmpty,
  useDisableOnSubmit,
  useFormComponent,
  useFormValidation,
  useKeepAlive,
} from '@windwalker-io/unicorn-next';
import { useFormkitEditor } from '~vendor/lyrasoft/formkit/dist/index';

const { mount } = await useFormkitEditor();

mount('formkit-edit-app');

const formSelector = '#admin-form';

useBs5Tooltip();

useFormComponent(formSelector);

useFormValidation().then(() => useDisableOnSubmit(formSelector));

useDisableIfStackNotEmpty();

useKeepAlive(location.href);
