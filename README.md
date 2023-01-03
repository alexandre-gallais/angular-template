# angular-template

My personal configuration template for Angular new project.

Last update: **2023-01-04**\
Angular version: **15**\
Device: **Mac M1**\
IDE: **Visual Studio Code** (I know VSCode is not an IDE)

## Step by step install

1. Go see [instructions/README.md](./instructions/README.md).

## Quick install 🙂

### Visual Studio Code extensions

```bash
code --install-extension Angular.ng-template --force; code --install-extension formulahendry.auto-rename-tag --force; code --install-extension aaron-bond.better-comments --force; code --install-extension EditorConfig.EditorConfig --force; code --install-extension dbaeumer.vscode-eslint --force; code --install-extension PeterSchmalfeldt.explorer-exclude --force; code --install-extension VisualStudioExptTeam.intellicode-api-usage-examples --force; code --install-extension VisualStudioExptTeam.vscodeintellicode --force; code --install-extension yzhang.markdown-all-in-one --force; code --install-extension DavidAnson.vscode-markdownlint --force; code --install-extension unifiedjs.vscode-mdx --force; code --install-extension christian-kohler.path-intellisense --force; code --install-extension esbenp.prettier-vscode --force; code --install-extension stylelint.vscode-stylelint --force;
```

### Update Angular CLI

```bash
sudo npm uninstall -g @angular/cli; sudo npm cache clean -g --force; sudo npm install -g @angular/cli@15 --legacy-peer-deps
```

### Create a new Angular project

**Don't forget to change `<REPO_NAME>`**

```bash
git clone https://github.com/alexandre-gallais/angular-template.git ./; rm README.md; ng new <REPO_NAME> --defaults --style=scss --directory ./; ng add @angular-eslint/schematics --skip-confirmation; npm i -D eslint@8 @typescript-eslint/parser@5 @typescript-eslint/eslint-plugin@5 stylelint@14 stylelint-config-standard@29 stylelint-order@5 postcss-scss@4; rm .eslintrc.json; mv eslint/eslintrc.json .eslintrc.json; mv eslint/.eslintignore .eslintignore; rm .editorconfig; mv angular-template-/.browserslistrc .browserslistrc; mv angular-template-/.editorconfig .editorconfig; mv angular-template-/.stylelintrc.json .stylelintrc.json; rm -r angular-template-; rm -r instructions; mv environments src/environments
```

Add

``` json
"fileReplacements": [
    {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
    }
],
```

Into `angular.json > projects > <REPO_NAME> > architect > build > configurations > production`
