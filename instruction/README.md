# ANGULAR TEMPLATE

Last update: 2022-12-28\
Angular version: 15
Device: Mac M1

## GitHub

1. Go to <https://github.com/>
2. Create a new repo with just a name.
3. Go to [.git/config](../.git/config).
4. Change the `url` parameter by the new repo url.
5. Save the change.

## Node.js

1. Go to <https://nodejs.org/en/>
2. Download the latest version (Current)
3. Install Node.js

## Angular CLI

1. Do the command: `sudo npm install -g @angular/cli@15`
2. Do the command: `ng new <repo-name> --directory ./`\
   `Would you like to add Angular routing?` No\
   `SCSS`

## ESLint

1. Do the command: `ng add @angular-eslint/schematics`\
   `Would you like to proceed?` Yes
2. Do the command: `npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
3. In [.eslintrc.json](../.eslintrc.json) replace

   ```json
   "plugin:@typescript-eslint/recommended",
   ```

   by

   ```json
   "plugin:@typescript-eslint/recommended",
   "plugin:@typescript-eslint/recommended-requiring-type-checking",
   "plugin:@typescript-eslint/strict",
   "./modules/eslint-ts.cjs",
   ```

4. Add

   ```json
   "parserOptions": {
       "project": "./tsconfig.json"
   },
   ```

   to `*.ts` config
5. Remove `"eslint:recommended",`

## TypeScript

1. Do the command: `npm i -D typescript`

## End

1. Do the command `rm -r instruction`
