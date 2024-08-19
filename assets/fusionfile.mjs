import fusion, { webpackVueBundle } from '@windwalker-io/fusion';
import path from 'path';

export async function main() {
  return webpackVueBundle(
    'vue/entries/formkit-edit.ts',
    'dist/js/formkit-edit/index.js',
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
    }
  );
}

export default main;

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
