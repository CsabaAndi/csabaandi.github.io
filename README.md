

## Available Scripts

### `npm run deploy`

Builds then deploys the app to gh-pages github branch

### `npm start`


### `npx depcheck --detailed` 

Lists unused dependancies

### `npm prune` 

This command removes the packages that are no longer listed in package.json file and are not in use.


## Docker

### `docker-compose up -d --build`

### `docker-compose stop`

## dev bug fixes :

 * gh-pages : deploy branch already exists bug fix --> `delete node_modules/.cache/gh-pages`
 * gh-pages : sometimes it just doesn't want to update to the latest commit --> `just make another commit then deploy it to gh-pages`
