require('esbuild').build({
  entryPoints: ['src/contentScripts/index.ts'],
  outfile: 'extension/dist/contentScripts/index.global.js',
  bundle: true,
  sourcemap: 'inline',
}).catch(() => process.exit(1))
