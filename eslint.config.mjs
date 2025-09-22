import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2021,
        sourceType: "module",
    },

    rules: {
        "no-unused-vars": "error",
        eqeqeq: ["error", "always"],
        semi: ["error", "always"],
        quotes: ["error", "single"],
        indent: ["error", 4],
        "no-console": "warn",
        "no-trailing-spaces": "error",
        "comma-dangle": ["error", "never"],
    },
}]);