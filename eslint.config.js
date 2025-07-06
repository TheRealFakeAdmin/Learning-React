import eslintRecommended from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
    eslintRecommended.configs.recommended,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            react: reactPlugin,
            "react-hooks": reactHooks,
            prettier: prettierPlugin,
        },
        rules: {
            // Base preferences
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "comma-dangle": [
                "error",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "never",
                },
            ],
            "eol-last": ["error", "always"],
            "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],

            // Prettier integration
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    singleQuote: false,
                    trailingComma: "es5",
                    tabWidth: 4,
                },
            ],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
