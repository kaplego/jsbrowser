# JSBrowser
JSBrowser are TypeScript files for the [Browser Object Model](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API) (BOM) based on [Mozilla Web Docs](https://developers.mozilla.org).

### How to use ?
Download one of the releases from GitHub that can be found [here](https://github.com/kaplego/jsbrowser/releases);
Then extract it on your folder, and import it as followed.

```js
/**
 * @type {import('./jsbrowser/index.js').default}
 */
const b = browser;
```
Then you can use `b` as the browser object.

### Example
```js
/**
 * @type {import('./jsbrowser/index.js').default}
 */
const b = browser;

function result(tabs) {
    console.log(tabs);
}
function rejected(error) {
    throw error;
}

b.tabs.query({
    active: true
}).then(result, rejected);
```