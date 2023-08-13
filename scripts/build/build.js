// eslint-disable-next-line import/no-extraneous-dependencies
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/app.js'],
  bundle: true,
  minify: true,
  treeShaking: true,
  platform: 'node',
  target: ['node18.7.1'],
  outdir: 'dist',
  format: 'cjs',
  // outfile: 'output.js',
});
