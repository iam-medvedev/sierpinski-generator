import { build, Format } from 'esbuild';
import * as path from 'path';

const formats: Format[] = ['cjs', 'esm'];

/**
 * Returns output filename with desired format
 */
function getOutputFilename(filename: string, format: Format) {
  switch (format) {
    case 'esm':
      return `${filename}.mjs`;
    default:
      return `${filename}.js`;
  }
}

/**
 * Builds each entrypoint
 */
async function createBuild() {
  for (const format of formats) {
    const entryPoint = 'index';
    const outputFilename = getOutputFilename(entryPoint, format);

    try {
      await build({
        entryPoints: [path.resolve(__dirname, `./src/${entryPoint}.ts`)],
        bundle: true,
        minify: true,
        platform: 'node',
        loader: {
          '.ts': 'ts',
        },
        outfile: path.resolve(__dirname, './dist/', outputFilename),
        format,
      });
      console.info(`— ${outputFilename} was built`);
    } catch (e) {
      console.info(`🚨 ${outputFilename} build error:`);
      console.error(e);
    }
  }
}

createBuild();
