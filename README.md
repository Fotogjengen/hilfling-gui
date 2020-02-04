# hilfling-gui

This project is Fotogjenens own custom gui library. It is exported as an NPM library, and can be downloaded and used in other frontend projects.

This project uses React Typescript to write components and Storybook as component documentation.

## Important file extenstion naming
* css modules MUST be named `<component-name>.module.css`
* The projects src/ folder CANNOT contain ANY .js files 

## Local setup
1. Clone reposetory
2. `npm install`
3. `npm run storybook`

## Useage in other projects
1. `npm i hilfling-gui`
2. import as `import {Component} from 'hilfling-gui/lib'`

Use as any other npm component library

## Publish NPM package
1. `npm login` med fotogjengen-web bruker
2. `npm version patch` eller `npm version <version number>`, sistnevnte for breaking changes
3. `npm publish`


