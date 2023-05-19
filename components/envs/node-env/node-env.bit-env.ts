/**
 * this env extends node-env version 0.0.32.
 * to inspect its config @see https://bit.cloud/teambit/node-env?version=0.0.32
 * */
import { PackageGenerator } from '@teambit/pkg';
import { NodeEnv } from '@teambit/node.node';
import { Compiler } from "@teambit/compiler";
import { EnvHandler } from "@teambit/envs";
import {
  TypescriptCompiler,
  resolveTypes,
  TypescriptTask,
} from "@teambit/typescript.typescript-compiler";
import { ESLintLinter, EslintTask } from "@teambit/defender.eslint-linter";
import { JestTask, JestTester } from "@teambit/defender.jest-tester";
import { PrettierFormatter } from "@teambit/defender.prettier-formatter";
import { Tester } from "@teambit/tester";

export class MyNodeEnv extends NodeEnv {
  /* shorthand name for the environment */
  name = 'node-env';

  package() {
    /**
     * override the default package-generator service
     */
    return PackageGenerator.from({
      /**
       * override the default package.json properties
       */
      packageJson: {
        /* extend the default package.json props */
        ...this.packageJson,
        /* add this property */
        type: 'commonjs',
      },
    });
  }

  /* the compiler to use during development */
  compiler(): EnvHandler<Compiler> {
    /**
     * @see https://bit.dev/reference/typescript/using-typescript
     */
    return TypescriptCompiler.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      types: resolveTypes(__dirname, ['./types']),
    });
  }

  /* the test runner to use during development */
  tester(): EnvHandler<Tester> {
    /**
     * @see https://bit.dev/reference/jest/using-jest
     */
    return JestTester.from({
      config: require.resolve('./config/jest.config'),
    });
  }

  /* the linter to use during development */
  linter() {
    /**
     * @see https://bit.dev/reference/eslint/using-eslint
     */
    return ESLintLinter.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      configPath: require.resolve('./config/eslintrc.js'),
      pluginsPath: __dirname,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    });
  }

  /**
   * the formatter to use during development
   * (source files are not formatted as part of the components' build)
   */
  formatter() {
    /**
     * @see https://bit.dev/reference/prettier/using-prettier
     */
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
    });
  }

  /**
   * a set of processes to be performed before a component is snapped, during its build phase
   * @see https://bit.dev/docs/node-env/build-pipelines
   */
  build() {
    return super.build().replace([
      TypescriptTask.from({
        tsconfig: require.resolve('./config/tsconfig.json'),
        types: resolveTypes(__dirname, ['./types']),
      }),
      EslintTask.from({
        tsconfig: require.resolve('./config/tsconfig.json'),
        configPath: require.resolve('./config/eslintrc.js'),
        pluginsPath: __dirname,
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
      }),
      JestTask.from({ config: require.resolve('./config/jest.config') }),
    ]);
  }
}

export default new MyNodeEnv();