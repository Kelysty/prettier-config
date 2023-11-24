# @kelysty/prettier-config

## Installation

Using `npm`:
```bash
npm install --save-dev prettier @kelysty/prettier-config
```
Using `yarn`:
```bash
yarn add --dev prettier @kelysty/prettier-config
```

## Usage

At first you need to create `.prettierrc.js` file in the root of your project
to provide configuration for Prettier.

Then you can simply put this code line inside just created config file:

```js
// .prettierrc.js

module.exports = require('@kelysty/prettier-config');
```

**If** you want to extend / override some tweaks of imported configuration
you can do it like this instead:

```js
// .prettierrc.js

// importing base configuration
const baseConfig = require('@kelysty/prettier-config');

// spread it inside final configuration object
module.exports = {
  ...baseConfig,

  // Example: override the semi option
  semi: false,

  // additional configuration goes here
}
```

And finally, do not forget to **add script to run prettier** in your package.json

```json
  "scripts": {
    "prettier": "prettier '**/*.{js,md,yaml,yml,json}'",
  }
```
