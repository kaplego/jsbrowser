import { alarms } from "./alarms";
import { tabs } from "./tabs";

type browser = {
    /**
     * Schedule code to run at a specific time in the future. This is like [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) and [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval), except that those functions don't work with background pages that are loaded on demand.
     *
     * Alarms do not persist across browser sessions. They are created globally across all contexts of a single extension. E.g. alarm created in background script will fire [`onAlarm`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) event in background script, options page, popup page and extension tabs (and vice versa). Alarms API is not available in [`Content scripts`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis).
     * 
     * To use this API you need to have the "alarms" [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
     */
    alarms: alarms,
    /**
     * Interact with the browser's tab system.
     * 
     * You can use this API to get a list of opened tabs, filtered by various criteria, and to open, update, move, reload, and remove tabs. You can't directly access the content hosted by tabs using this API, but you can insert JavaScript and CSS into tabs using the [`tabs.executeScript()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) or [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) APIs.
     * 
     * You can use most of this API without any special permission. However:
     * 
     * - To access `Tab.url`, `Tab.title`, and `Tab.favIconUrl` (or to filter by these properties via [`tabs.query()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)), you need to have the `"tabs"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), or have [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that match `Tab.url`.
     *     - Access to these properties by host permissions is supported since Firefox 86 and Chrome 50. In Firefox 85 and earlier, the "tabs" permission was required instead.
     * - To use [`tabs.executeScript()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) or [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS), you must have the host [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) for the tab
     * 
     * Alternatively, you can get these permissions temporarily, only for the currently active tab and only in response to an explicit user action, by asking for the [`"activeTab"` permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
     * 
     * Many tab operations use a Tab `id`. Tab `id`s are guaranteed to be unique to a single tab only within a browser session. If the browser is restarted, then it can and will reuse tab `id`s. To associate information with a tab across browser restarts, use [`sessions.setTabValue()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
     */
    tabs: tabs
};

export default browser;