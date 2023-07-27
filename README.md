## Available Scripts

### `npm run deploy`

Builds then deploys the app to gh-pages github branch

### `npm start`


### `npx depcheck --detailed` 

Lists unused dependancies

### `npm prune` 

This command removes the packages that are no longer listed in package.json file and are not in use.

## dev bug fixes :

 * gh-pages deploy branch already exists bug fix : `delete node_modules/.cache/gh-pages`
