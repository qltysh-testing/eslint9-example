Troubleshooting an eslint 8 to 9 migration.

Running qlty check with a config file at an eslint 8 location like ".eslintrc.json" produces a non-sensical error:

```
$ qlty check --all --no-fix

 ERRORS: 1

Plugin  Result                                               Message                      Debug File
eslint  Error                                                Exited with code 2 in 0.29s  .qlty/out/invoke-HK2MNE.yaml
        Value for 'config' of type 'path::String' required.  You're using eslint.config.js, some command line flags are no longer available. Please see https://eslint.org/docs/latest/use/command-line-interface for details.
❌ Lint error
Some common debugging steps can be found at: https://qlty.sh/d/lint-error
```

This is because eslint 9 now expects a different location for config files. This can be seen by attempting to run eslint without specifying the location as well:

```
$ npx eslint .

Oops! Something went wrong! :(

ESLint: 9.35.0

ESLint couldn't find an eslint.config.(js|mjs|cjs) file.

From ESLint v9.0.0, the default configuration file is now eslint.config.js.
If you are using a .eslintrc.* file, please follow the migration guide
to update your configuration file to the new format:

https://eslint.org/docs/latest/use/configure/migration-guide

If you still have problems after following the migration guide, please stop by
https://eslint.org/chat/help to chat with the team.
```

You can point eslint at the the legacy file location with a `config_files = ` directive in qlty.toml. 

This "fixes" this issue, in that qlty and eslint now report the same problems related to an incompatible eslint configuration file.