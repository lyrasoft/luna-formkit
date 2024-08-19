import fusion, { webpackVueBundle, parallel, wait, babel, ts } from '@windwalker-io/fusion';
import path from 'path';

export async function js() {
  // Watch start
  fusion.watch('src/js/**/*.{js,mjs,ts}');
  // Watch end

  // Compile Start
  return wait(
    babel('src/**/*.{js,mjs}', 'dist/', { module: 'systemjs' }),
    ts(['src/**/*.ts', 'src/**/*.d.ts'], 'dist/', { tsconfig: './tsconfig.js.json' }),
  );
  // Compile end
}

export async function formkitEdit() {
  return webpackVueBundle(
    'vue/entries/formkit-editor.ts',
    'dist/editor/index.js',
    (config) => {
      config.resolve.alias = {
        '@': path.resolve(),
        '@vue': path.resolve(path.resolve(), './vue/'),
      };
      // Exclude Vue
      config.externals = { vue: 'Vue' };
      // Use tsconfig.vue.json if exists, default is tsconfig.json
      config.module.rules[4].options.configFile = 'tsconfig.vue.json';
      // Override if you need

      config.output.chunkFilename = process.env.NODE_ENV === 'production'
        ? 'chunks/chunk-vendor.[name].js'
        : 'dev/page-vendor.[name].js';
    }
  );
}

export default parallel(js, formkitEdit);

/*
 * APIs
 *
 * Compile entry:
 * fusion.js(source, dest, options = {})
 * fusion.babel(source, dest, options = {})
 * fusion.module(source, dest, options = {})
 * fusion.ts(source, dest, options = {})
 * fusion.typeScript(source, dest, options = {})
 * fusion.css(source, dest, options = {})
 * fusion.sass(source, dest, options = {})
 * fusion.copy(source, dest, options = {})
 *
 * Live Reload:
 * fusion.livereload(source, dest, options = {})
 * fusion.reload(file)
 *
 * Gulp proxy:
 * fusion.src(source, options)
 * fusion.dest(path, options)
 * fusion.watch(glob, opt, fn)
 * fusion.symlink(directory, options = {})
 * fusion.lastRun(task, precision)
 * fusion.tree(options = {})
 * fusion.series(...tasks)
 * fusion.parallel(...tasks)
 *
 * Stream Helper:
 * fusion.through(handler) // Same as through2.obj()
 *
 * Config:
 * fusion.disableNotification()
 * fusion.enableNotification()
 */
