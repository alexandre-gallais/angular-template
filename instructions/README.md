# angular-template

## Visual Studio Code

1. Install:
   1. [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
   2. [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
   3. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
   4. [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   5. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   6. [Explorer Exclude](https://marketplace.visualstudio.com/items?itemName=PeterSchmalfeldt.explorer-exclude)
   7. [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
   8. [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
   9. [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
   10. [MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)
   11. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
   12. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   13. [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

   ```bash
   code --install-extension Angular.ng-template --force; code --install-extension formulahendry.auto-rename-tag --force; code --install-extension aaron-bond.better-comments --force; code --install-extension EditorConfig.EditorConfig --force; code --install-extension dbaeumer.vscode-eslint --force; code --install-extension PeterSchmalfeldt.explorer-exclude --force; code --install-extension VisualStudioExptTeam.intellicode-api-usage-examples --force; code --install-extension VisualStudioExptTeam.vscodeintellicode --force; code --install-extension yzhang.markdown-all-in-one --force; code --install-extension DavidAnson.vscode-markdownlint --force; code --install-extension unifiedjs.vscode-mdx --force; code --install-extension christian-kohler.path-intellisense --force; code --install-extension esbenp.prettier-vscode --force; code --install-extension stylelint.vscode-stylelint --force;
   ```

## Node.js

1. Go to <https://nodejs.org/en/>
2. Download the latest version (Current)
3. Install Node.js

## Angular CLI

1. Do the command: `sudo npm uninstall -g @angular/cli`
2. Do the command: `sudo npm cache clean -g --force;`
3. Do the command: `sudo npm install -g @angular/cli@15 --legacy-peer-deps`

## Clone the repo

1. Do the command: `git clone https://github.com/alexandre-gallais/angular-template.git ./`

## New Angular project

1. Do the command: `rm README.md`
2. Do the command: `ng new <REPO_NAME> --directory ./`\
   `Would you like to add Angular routing?` **No**\
   `SCSS`
3. Do the command: `mv environments src/environments`
4. Add

   ``` json
   "fileReplacements": [
       {
           "replace": "src/environments/environment.ts",
           "with": "src/environments/environment.prod.ts"
       }
   ],
   ```

   Into `angular.json > projects > <REPO_NAME> > architect > build > configurations > production`

## ESLint

1. Do the command: `ng add @angular-eslint/schematics`\
   `Would you like to proceed?` **Yes**
2. Do the command: `rm .eslintrc.json; mv eslint/eslintrc.json .eslintrc.json; mv eslint/.eslintignore .eslintignore`
3. Do the command: `npm i -D eslint@8 @typescript-eslint/parser@5 @typescript-eslint/eslint-plugin@5`

## Browserslist + EditorConfig + Stylelint

1. Do the command: `npm i -D npm i stylelint@14 stylelint-config-standard@29 stylelint-order@5 postcss-scss@4`
2. Do the command: `rm .editorconfig; mv angular-template-/.browserslistrc .browserslistrc; mv angular-template-/.editorconfig .editorconfig; mv angular-template-/.stylelintrc.json .stylelintrc.json; rm -r angular-template-`

## End

1. Do the command `rm -r instructions`
