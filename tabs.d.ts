import { BrowserEvent, MatchPatterns } from './util';

declare type ISOLanguageCode = "und"|"aa"|"ab"|"ae"|"af"|"ak"|"am"|"an"|"ar"|"as"|"av"|"ay"|"az"|"ba"|"be"|"bg"|"bh"|"bi"|"bm"|"bn"|"bo"|"br"|"bs"|"ca"|"ce"|"ch"|"co"|"cr"|"cs"|"cu"|"cv"|"cy"|"da"|"de"|"dv"|"dz"|"ee"|"el"|"en"|"eo"|"es"|"et"|"eu"|"fa"|"ff"|"fi"|"fj"|"fo"|"fr"|"fy"|"ga"|"gd"|"gl"|"gn"|"gu"|"gv"|"ha"|"he"|"hi"|"ho"|"hr"|"ht"|"hu"|"hy"|"hz"|"ia"|"id"|"ie"|"ig"|"ii"|"ik"|"io"|"is"|"it"|"iu"|"ja"|"jv"|"ka"|"kg"|"ki"|"kj"|"kk"|"kl"|"km"|"kn"|"ko"|"kr"|"ks"|"ku"|"kv"|"kw"|"ky"|"la"|"lb"|"lg"|"li"|"ln"|"lo"|"lt"|"lu"|"lv"|"mg"|"mh"|"mi"|"mk"|"ml"|"mn"|"mr"|"ms"|"mt"|"my"|"na"|"nb"|"nd"|"ne"|"ng"|"nl"|"nn"|"no"|"nr"|"nv"|"ny"|"oc"|"oj"|"om"|"or"|"os"|"pa"|"pi"|"pl"|"ps"|"pt"|"qu"|"rm"|"rn"|"ro"|"ru"|"rw"|"sa"|"sc"|"sd"|"se"|"sg"|"si"|"sk"|"sl"|"sm"|"sn"|"so"|"sq"|"sr"|"ss"|"st"|"su"|"sv"|"sw"|"ta"|"te"|"tg"|"th"|"ti"|"tk"|"tl"|"tn"|"to"|"tr"|"ts"|"tt"|"tw"|"ty"|"ug"|"uk"|"ur"|"uz"|"ve"|"vi"|"vo"|"wa"|"wo"|"xh"|"yi"|"yo"|"za"|"zh"|"zu";

/**
 * Specifies the reason a tab was muted or unmuted.
 * 
 * - "capture" — Tab capture started, forcing a muted state change.
 * - "extension" — An extension set the muted state. If this is the reason, `extensionId` in [`tabs.mutedInfo`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfo) will contain the ID of the extension responsible.
 * - "user" — The user set the muted state.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfoReason)
 */
declare type MutedInfoReason = "capture" | "extension" | "user";

/**
 * This object contains a boolean indicating whether the tab is muted, and the reason for the last state change.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfo)
 */
declare type MutedInfo = {
    /**
     * The ID of the extension that last changed the muted state. Not set if an extension was not the reason the muted state last changed.
     */
    extensionId?: string,
    /**
     * Whether the tab is currently muted. Equivalent to whether the muted audio indicator is showing.
     */
    muted: boolean,
    /**
     * [`tabs.MutedInfoReason`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/MutedInfoReason)
     * 
     * The reason the tab was muted or unmuted. Not set if the tab's muted state has never been changed.
     */
    reason?: MutedInfoReason
}

/**
 * The type `tabs.PageSettings` is used to control how a tab is rendered as a PDF by the [`tabs.saveAsPDF()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) method.
 * 
 * All its properties are optional.
 * 
 * For setting headers and footers, you can include certain special characters in the strings you supply. These will be replaced in the rendered output as follows:
 * 
 * - "&P": the page number, like "2"
 * - "&PT": the page number and the total number of pages, like "2 of 3"
 * - "&D": the current date/time
 * - "&T": the page title
 * - "&U": the page URL
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings)
 */
declare type PageSettings = {
    /**
     * `number`
     * 
     * The spacing between the bottom of the footers and the bottom edge of the paper (inches). Default: 0.
     */
    edgeBottom?: number,
    /**
     * `number`
     * 
     * The spacing between the left header/footer and the left edge of the paper (inches). Default: 0.
     */
    edgeLeft?: number,
    /**
     * `number`
     * 
     * The spacing between the right header/footer and the left edge of the paper (inches). Default: 0.
     */
    edgeRight?: number,
    /**
     * `number`
     * 
     * The spacing between the top of the headers and the top edge of the paper (inches). Default: 0.
     */
    edgeTop?: number,
    /**
     * The text for the page's center footer. Default: ''.
     */
    footerCenter?: string,
    /**
     * The text for the page's left footer. Default: '&PT'.
     */
    footerLeft?: string,
    /**
     * The text for the page's right footer. Default: '&D'.
     */
    footerRight?: string,
    /**
     * The text for the page's center header. Default: ''.
     */
    headerCenter?: string,
    /**
     * The text for the page's left header. Default: '&T'.
     */
    headerLeft?: string,
    /**
     * The text for the page's right header. Default: '&U'.
     */
    headerRight?: string,
    /**
     * `number`
     * 
     * The margin between the page content and the bottom edge of the paper (inches). Default: 0.5.
     */
    marginBottom?: number,
    /**
     * `number`
     * 
     * The margin between the page content and the left edge of the paper (inches). Default: 0.5.
     */
    marginLeft?: number,
    /**
     * `number`
     * 
     * The margin between the page content and the right edge of the paper (inches). Default: 0.5.
     */
    marginRight?: number,
    /**
     * `number`
     * 
     * The margin between the page content and the top edge of the paper (inches). Default: 0.5.
     */
    marginTop?: number,
    /**
     * `integer`
     * 
     * Page orientation: 0 means "portrait", 1 means "landscape". Default: 0.
     */
    orientation?: number,
    /**
     * `number`
     * 
     * The paper height in paper size units. Default: 11.0.
     */
    paperHeight?: number,
    /**
     * `integer`
     * 
     * The paper size unit: 0 = inches, 1 = millimeters. Default: 0.
     */
    paperSizeUnit?: number,
    /**
     * `number`
     * 
     * The paper width in paper size units. Default: 8.5.
     */
    paperWidth?: number,
    /**
     * `number`
     * 
     * Page content scaling factor. 1 means 100% or normal size. Default: 1.
     */
    scaling?: number,
    /**
     * Whether the page background colors should be shown. Default: false.
     */
    showBackgroundColors?: boolean,
    /**
     * Whether the page background images should be shown. Default: false.
     */
    showBackgroundImages?: boolean,
    /**
     * Whether the page content should shrink to fit the page width (overrides scaling). Default: true.
     */
    shrinkToFit?: boolean,
    /**
     * The name of the file the PDF is saved in, with or without the `.pdf` extension.
     */
    toFileName?: string
}

/**
 * The type `tabs.Tab` contains information about a tab. This provides access to information about what content is in the tab, how large the content is, what special states or restrictions are in effect, and so forth.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)
 */
declare type Tab = {
    /**
     * Whether the tab is active in its window. This may be true even if the tab's window is not currently focused.
     * 
     * The active tab is usually the selected one. However, on Firefox for Android, extension popups open in a new tab. When this popup tab is selected, the active tab will instead be the one in which the popup opened.
     */
    active: boolean,
    /**
     * Indicates whether the tab is drawing attention. For example, when the tab displays a modal dialog, `attention` will be `true`.
     */
    attention?: boolean,
    /**
     * Indicates whether the tab is producing sound. However, the user will not hear the sound if the tab is muted (see the mutedInfo property).
     */
    audible?: boolean,
    /**
     * Whether the tab can be discarded automatically by the browser when resources are low.
     */
    autoDiscardable?: boolean,
    /**
     * The cookie store of the tab. If different tabs can have different cookie stores (for example, to support [contextual identity](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)), you can pass this as the `storeId` option into various methods of the [`cookies`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies) API, to set and get cookies associated with this tab's cookie store. Only present if the extension has the `"cookies"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
     */
    cookieStoreId?: string,
    /**
     * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
     */
    discarded?: boolean,
    /**
     * The URL of the tab's favicon. Only present if the extension has the `"tabs"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). It may also be an empty string if the tab is loading.
     */
    favIconUrl?: string,
    /**
     * `integer`
     * 
     * The height of the tab in pixels.
     */
    height?: number,
    /**
     * Whether the tab is hidden.
     */
    hidden: boolean,
    /**
     * Whether the tab is highlighted, i.e. part of the current tab selection. An active tab is always highlighted, but some browsers may allow additional tabs to be highlighted, for example by clicking them while holding `Ctrl`, `Shift` or `⌘ Command` keys.
     * 
     * Firefox for Android doesn't support highlighting multiple tabs, and Firefox desktop requires the `browser.tabs.multiselect` preference (enabled by default).
     */
    highlighted: boolean,
    /**
     * `integer`
     * 
     * The tab's ID. Tab IDs are unique within a browser session. The tab ID may also be set to [`tabs.TAB_ID_NONE`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/TAB_ID_NONE) for browser windows that don't host content tabs (for example, devtools windows).
     */
    id?: number,
    /**
     * Whether the tab is in a private browsing window.
     */
    incognito: boolean,
    /**
     * The zero-based index of the tab within its window.
     */
    index: number,
    /**
     * True if the tab can be [rendered in Reader Mode](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), false otherwise.
     */
    isArticle: boolean,
    /**
     * True if the tab is currently being [rendered in Reader Mode](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode), false otherwise.
     */
    isInReaderMode: boolean,
    /**
     * Time at which the tab was last accessed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
     */
    lastAccessed: number,
    /**
     * 
     * 
     * The current muted state for the tab and the reason for the last state change.
     */
    mutedInfo?: MutedInfo,
    /**
     * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists and is in the same window.
     */
    openerTabId?: number,
    /**
     * Whether the tab is pinned.
     */
    pinned: boolean,
    /**
     * Whether the tab is selected. This property has been replaced by `active` and `highlighted`.
     * @deprecated This property is deprecated, and is not supported in Firefox. Use `active` instead.
     */
    selected: boolean,
    /**
     * The session ID used to uniquely identify a `Tab` obtained from the [`sessions`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions) API.
     */
    sessionId?: string,
    /**
     * Either *loading* or *complete*.
     */
    status?: string,
    /**
     * The ID of the tab's successor.
     */
    successorTabId?: number,
    /**
     * The title of the tab. Only present if the extension has the `"tabs"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that matches the tab's URL.
     */
    title?: string,
    /**
     * The URL of the document that the tab is displaying. Only present if the extension has the `"tabs"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) that matches the tab's URL.
     */
    url?: string,
    /**
     * The width of the tab in pixels.
     */
    width?: number,
    /**
     * The ID of the window that hosts this tab.
     */
    windowId: number
}

/**
 * Indicates whether the tab has finished loading.
 * 
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/TabStatus)
 */
declare type TabStatus = "loading" | "complete";

/**
 * The type of window that hosts this tab.
 * 
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/WindowType)
 */
declare type WindowType = "normal" | "popup" | "panel" | "devtools";

/**
 * Defines how zoom changes are handled. Extensions can pass this value into [`tabs.setZoomSettings()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings) to control how the browser handles attempts to change zoom settings for a tab. Defaults to "automatic".
 * 
 * - "automatic" — Zoom changes are handled normally by the browser.
 * - "disabled" — Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
 * - "manual" — The extension will handle zoom changes itself, by listening for the [`tabs.onZoomChange`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onZoomChange) event and scaling the page accordingly. This mode does not support `per-origin` zooming: it will ignore the `scope` [`zoom setting`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) and always use `per-tab`.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode)
 */
declare type ZoomSettingsMode = "automatic" | "disabled" | "manual";

/**
 * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab. This defaults to `per-origin` when [`tabs.zoomSettingsMode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode) is "automatic", and is always `per-tab` otherwise.
 * 
 * - "per-origin" — All other tabs with the same origin as this tab will have the zoom changes applied to them. This scope is only available if [`tabs.zoomSettingsMode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode) is "automatic".
 * - "per-tab" — Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also:
 *     - in Firefox the zoom level persists across page loads and navigation within the tab.
 *     - in Chrome-based browsers zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope)
 */
declare type ZoomSettingsScope = "per-origin" | "per-tab";

/**
 * Defines zoom settings for a tab: [`mode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode), [`scope`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope), and default zoom factor.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings)
 */
declare type ZoomSettings = {
    /**
     * `number`
     * 
     * The default zoom level for the current tab. Note that this is only used in [`tabs.getZoomSettings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getZoomSettings).
     */
    defaultZoomFactor?: number,
    /**
     * [`tabs.ZoomSettingsMode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsMode)
     * 
     * Defines whether zoom changes are handled by the browser, by the extension, or are disabled.
     */
    mode?: ZoomSettingsMode,
    /**
     * [`tabs.ZoomSettingsScope`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope)
     * 
     * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab.
     */
    scope?: ZoomSettingsScope
};

export declare interface tabs {
    /**
     * A special ID value given to tabs that are not browser tabs (for example, tabs in devtools windows).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/TAB_ID_NONE)
     */
    TAB_ID_NONE: string,
    /**
     * Creates a data URI encoding the image of an area of the given tab. You must have the `<all_urls>` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to use this method.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a data URL which encodes the captured image. May be assigned to the 'src' property of an HTML Image element for display. If any error occurs the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureTab)
     */
    captureTab(
        /**
         * `integer`
         * 
         * ID of the tab to capture. Defaults to the active tab in the current window.
         */
        tabId?: number,
        /**
         * [`extensionTypes.ImageDetails`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails)
         */
        options?: import("./extensionTypes").ImageDetails
    ): Promise<string>,
    /**
     * Creates a data URI encoding the image of an area of the currently active tab in the specified window. You must have the `<all_urls>` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to use this method. (Alternately, Chrome allows use of this method with the `activeTab` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and a qualifying user gesture).@returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a data URL which encodes the captured image. May be assigned to the 'src' property of an HTML Image element for display. If any error occurs the promise will be rejected with an error message.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a data URL which encodes the captured image. May be assigned to the 'src' property of an HTML Image element for display. If any error occurs the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab)
     */
    captureVisibleTab(
        /**
         * `integer`
         * 
         * The target window. Defaults to the current window.
         */
        windowId?: number,
        /**
         * [`extensionTypes.ImageDetails`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails)
         */
        options?: import("./extensionTypes").ImageDetails
    ): Promise<string>,
    /**
     * Call this function to set up a connection between the extension's background scripts (or other privileged scripts, such as popup scripts or options page scripts) and any [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) that belong to this extension and are running in the specified tab. This function returns a [`runtime.Port`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object.
     * 
     * When this is called, the [`runtime.onConnect`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) event will be fired in any content script belonging to this extension that are running in the specified tab. The event listener will be passed another [`runtime.Port`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) object. The two sides can then use the `Port` objects to exchange messages.
     * 
     * For more details, see [connection-based messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). You can message without creating a connection, for advice on choosing between the options, see [Choosing between one-off messages and connection-based messaging](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
     * @returns [`runtime.Port`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port). A port that can be used to communicate with the content scripts running in the specified tab.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect)
     */
    connect(
        /**
         * `integer`
         * 
         * ID of the tab whose content scripts we want to connect to.
         */
        tabId: number,
        connectInfo: {
            /**
             * Will be passed into [`runtime.onConnect`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onConnect) event listeners in content scripts belonging to this extension and running in the specified tab.
             */
            name?: string,
            /**
             * `integer`
             * 
             * Open a port to a specific frame identified by `frameId` instead of all frames in the tab.
             */
            frameId?: number
        }
    ): Promise<import("./runtime").Port>,
    /**
     * Creates a new tab.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object containing details about the created tab. If the tab could not be created (for example, because `url` used a privileged scheme) the promise will be rejected with an error message.
     * 
     * The promise returned by `browser.tabs.create()` resolves as soon as the tab has been created. The tab may still be loading. To detect when the tab has finished loading, listen to the [`tabs.onUpdated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) or the [`webNavigation.onCompleted`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted) event before calling `tabs.create`.
     * 
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create)
     */
    create(
        createProperties: {
            /**
             * Properties to give the new tab. To learn more about these properties, see the [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) documentation.
             */
            active?: boolean,
            /**
             * Use this to create a tab whose cookie store ID is `cookieStoreId`. This option is only available if the extension has the `"cookies"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
             */
            cookieStoreId?: string,
            /**
             * Whether the tab is created and made visible in the tab bar without any content loaded into memory, a state known as discarded. The tab's content is loaded when the tab is activated.
             */
            discarded?: boolean,
            /**
             * `integer`
             * 
             * The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window.
             */
            index?: number,
            /**
             * `integer`
             * 
             * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
             */
            openerTabId?: number,
            /**
             * If `true`, open this tab in [Reader Mode](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Defaults to `false`.
             */
            openInReaderMode?: boolean
            /**
             * Whether the tab should be pinned. Defaults to false.
             */
            pinned?: boolean,
            /**
             * Whether the tab should become the selected tab in the window. Defaults to `true`.
             * @deprecated This property is deprecated, and is not supported in Firefox. Use `active` instead.
             */
            selected?: boolean,
            /**
             * The title of the tab. Allowed only if the tab is created with `discarded` set to `true`.
             */
            title?: string,
            /**
             * The URL to navigate the tab to initially. Defaults to the New Tab Page.
             * 
             * Fully-qualified URLs must include a scheme (for example, `http://www.google.com` not `www.google.com`).
             * 
             * For security reasons, in Firefox, this may not be a privileged URL. So passing any of the following URLs will fail:
             * 
             * - `chrome:` URLs
             * - `javascript:` URLs
             * - `data:` URLs
             * - `file:` URLs (i.e., files on the filesystem. However, to use a file packaged inside the extension, see below)
             * - privileged `about:` URLs (for example, `about:config`, `about:addons`, `about:debugging`). Non-privileged URLs (e.g., `about:blank`) are allowed.
             * - The New Tab page (`about:newtab`) can be opened if no value for URL is provided.
             * 
             * To load a page that's packaged with your extension, specify an absolute URL starting at the extension's manifest.json file. For example: '/path/to/my-page.html'. If you omit the leading '/', the URL is treated as a relative URL, and different browsers may construct different absolute URLs.
             */
            url?: string,
            /**
             * `integer`
             * 
             * The window to create the new tab in. Defaults to the current window.
             */
            windowId?: number
        }
    ): Promise<Tab>,
    /**
     * Detects the primary language of the content in a tab, using the [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a string representing an ISO language code such as `en` or `fr`. For a complete list of languages supported by this method, see [kLanguageInfoTable](https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc#l23). For an unknown language, `"und"` will be returned (but see [bug 1288263](https://bugzilla.mozilla.org/show_bug.cgi?id=1288263)). If any error occurs the promise will be rejected with an error message.
     * 
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/detectLanguage)
     */
    detectLanguage(
        /**
         * `integer`
         * 
         * Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * Currently, if a `tabId` is specified, this method uses this callback to return the results instead of returning a promise. The callback receives as its only input parameter a string containing the detected language code such as `en` or `fr`.
         */
        callback?: (language: ISOLanguageCode) => void
    ): Promise<ISOLanguageCode>,
    /**
     * Discards one or more tabs.
     * 
     * Some browsers automatically "discard" tabs that they don't think are likely to be needed by the user soon. The tab stays visible in the tabstrip and the browser remembers its state, so if the user selects a tab that has been discarded, it is immediately restored.
     * 
     * The details of exactly what is discarded are browser-specific, but in general, discarding a tab enables the browser to free some of the memory occupied by that tab.
     * 
     * The [`tabs.discard()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard) API enables an extension to discard one or more tabs. It's not possible to discard the currently active tab, or a tab whose document contains a [`beforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) listener that would display a prompt.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when all the specified tabs have been discarded. If any error occurs (for example, invalid tab IDs), the promise will be rejected with an error message.
     * 
     * If the ID of the active tab is passed in, it will not be discarded, but the promise will be fulfilled and any other tabs passed in will be discarded.
     * 
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard)
     */
    discard(
        /**
         * `integer` or `Array<integer>`,
         * 
         * The IDs of the tab or tabs to discard.
         */
        tabsId: number | Array<number>
    ): Promise<void>;
    /**
     * Duplicates a tab, given its ID.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object containing details about the duplicated tab. The `Tab` object only contains `url`, `title` and `favIconUrl` if the extension has the [`"tabs"` permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) or matching [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). If any error occurs the promise will be rejected with an error message.
     * 
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/duplicate)
     */
    duplicate(
        /**
         * `integer`
         * 
         * The ID of the tab to be duplicated.
         */
        tabId: number,
        /**
         * An object describing how the tab is duplicated.
         */
        duplicateProperties?: {
            /**
             * The position of the new tab in the window. The value is constrained to the range zero to the number of tabs in the window.
             */
            index?: number,
            /**
             * Whether the tab becomes the active tab in the window. Does not affect whether the window is focused. Defaults to `true`.
             */
            active?: boolean
        }
    ): Promise<Tab>,
    /**
     * Injects JavaScript code into a page.
     * 
     * You can inject code into pages whose URL can be expressed using a [match pattern](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). To do so, its scheme must be one of: `http`, `https`, or `file`.
     * 
     * You must have the permission for the page's URL —either explicitly, as a [host permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)— or, via the [activeTab permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
     * 
     * You can also inject code into pages packaged with your own extension:
     * ```
     * browser.tabs.create({url: "/my-page.html"}).then(() => {
     *   browser.tabs.executeScript({
     *     code: `console.log('location:', window.location.href);`
     *   });
     * });
     * ```
     * You don't need any special permissions to do this.
     * 
     * You cannot inject code into any of the browser's built-in pages, such as: `about:debugging`, `about:addons`, or the page that opens when you open a new empty tab.
     * 
     * The scripts you inject are called [content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will resolve to an array of objects. The array's values represent the result of the script in every injected frame.
     * 
     * The result of the script is the last evaluated statement, which is similar to what would be output (the results, not any `console.log()` output) if you executed the script in the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console). For example, consider a script like this:4
     * ```
     * let foo='my result'; foo;
     * ```
     * Here the results array will contain the string "`my result`" as an element.
     * 
     * The result values must be [structured clonable](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) (see [Data cloning algorithm](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
     * 
     * 🅘 The last statement may be also a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), but this feature is unsupported by [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) library.
     * 
     * If any error occurs, the promise will be rejected with an error message.
     * 
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
     */
    executeScript(
        /**
         * `integer`
         * 
         * The ID of the tab in which to run the script.
         * 
         * Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * An object describing the script to run.
         */
        details: {
            /**
             * If `true`, the code will be injected into all frames of the current page.
             * 
             * If `true` and `frameId` is set, then it will raise an error. (`frameId` and `allFrames` are mutually exclusive.)
             * 
             * If it is `false`, code is only injected into the top frame.
             * 
             * Defaults to `false`.
             */
            allFrames?: boolean,
            /**
             * Code to inject, as a text string.
             * @warning Don't use this property to interpolate untrusted data into JavaScript, as this could lead to a security issue.
             */
            code?: string,
            /**
             * Path to a file containing the code to inject.
             * 
             * - In Firefox, relative URLs not starting at the extension root are resolved relative to the current page URL.
             * - In Chrome, these URLs are resolved relative to the extension's base URL.
             * 
             * To work cross-browser, you can specify the path as a relative URL, starting at the extension's root, like this: `"/path/to/script.js"`.
             */
            file?: string,
            /**
             * `integer`
             * 
             * The frame where the code should be injected.
             * 
             * Defaults to `0` (the top-level frame).
             */
            frameId?: number,
            /**
             * If `true`, the code will be injected into embedded `about:blank` and `about:srcdoc` frames if your extension has access to their parent document. The code cannot be inserted in top-level `about:` frames.
             * 
             * Defaults to `false`.
             */
            matchAboutBlank?: boolean,
            /**
             * The soonest that the code will be injected into the tab.
             * 
             * Defaults to `"document_idle"`.
             */
            runAt?: "document_start"|"document_end"|"document_idle"
        }
    ): Promise<Object[]>,
    /**
     * Given a tab ID, get the tab's details as a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object.
     * 
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object containing information about the tab. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/get)
     */
    get(
        /**
         * `integer`
         * 
         * ID of the tab to get.
         */
        tabId: number
    ): Promise<Tab>,
    /**
     * Gets details about all tabs in the specified window.
     * 
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) objects, containing information about all the tabs in the window. If the window could not be found or some other error occurs, the promise will be rejected with an error message.
     * @deprecated This method has been deprecated. Use [`tabs.query({currentWindow: true})`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) instead.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getAllInWindow)
     */
    getAllInWindow(
        /**
         * `integer`
         * 
         * Defaults to the current window.
         */
        windowId?: number
    ): Promise<Tab[]>,
    /**
     * Get a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) containing information about the tab that this script is running in.
     * 
     * 🅘 This function is only useful in contexts where there is a browser tab, such as an [options page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages). If you call it from a background script or a popup, it will return `undefined`.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object containing information about the current tab. If any error occurs the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getCurrent)
     */
    getCurrent(): Promise<Tab>,
    /**
     * Gets the tab that is selected in the specified window.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a tabs.Tab object containing information about the selected tab. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * @deprecated This method has been deprecated. Use [`tabs.query({active: true})`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) instead.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getSelected)
     */
    getSelected(
        /**
         * `integer`
         * 
         * Defaults to the current window.
         */
        windowId?: number
    ): Promise<Tab>,
    /**
     * Gets the current zoom factor for the specified tab.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with the tab's current zoom factor, as a number between 0.3 and 5. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getZoom)
     */
    getZoom(
        /**
         * `integer`
         * 
         * The ID of the tab to get the current zoom factor from. Defaults to the active tab of the current window.
         */
        tabId?: number
    ): Promise<number>,
    /**
     * Gets the current zoom settings for a specified tab.
     * @returns A Promise that will be fulfilled with a [`tabs.ZoomSettings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettings) object representing the tab's current zoom settings. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/getZoomSettings)
     */
    getZoomSettings(
        /**
         * `integer`
         * 
         * The ID of the tab to get the current zoom factor from. Defaults to the active tab of the current window.
         */
        tabId?: number
    ): Promise<ZoomSettings>,
    /**
     * Navigate to the next page in tab's history, if available.
     * @returns A Promise that is fulfilled when the page navigation finishes.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/goForward)
     */
    goForward(
        /**
         * `integer`
         * 
         * The ID of the tab to navigate. Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * When the page navigation finishes, this function is called without parameters.
         */
        callback?: () => void
    ): Promise<void>,
    /**
     * Navigate to the previous page in tab's history, if available.
     * @returns A Promise that is fulfilled when the page navigation finishes.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/goBack)
     */
    goBack(
        /**
         * `integer`
         * 
         * The ID of the tab to navigate. Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * When the page navigation finishes, this function is called without parameters.
         */
        callback?: () => void
    ): Promise<void>,
    /**
     * Hides one or more tabs.
     * 
     * Hidden tabs are no longer visible in the browser's tabstrip. Hidden tabs are not automatically [discarded](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/discard): the code running in them continues to run. You can explicitly discard tabs whenever you hide them: although this is not appropriate in all situations, it will help to reduce the resources used by the browser.
     * 
     * Not all tabs are eligible for being hidden:
     * 
     * - Tabs that are pinned cannot be hidden.
     * - Tabs that are sharing the screen, microphone or camera cannot be hidden.
     * - The current active tab cannot be hidden.
     * - Tabs that are in the process of being closed cannot be hidden.
     * 
     * The first time an extension hides a tab, the browser will tell the user that the tab is being hidden, show them how they can access the hidden tab, and give them the option of disabling the extension instead.
     * 
     * To use this API you must have the "tabHide" [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
     * @returns A Promise that will be fulfilled with an array containing the IDs of the tabs that were hidden. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide)
     * @experimental
     */
    hide(
        /**
         * `integer` or `Array<integer>`
         * 
         * The IDs of the tab or tabs to hide.
         * 
         * If any of these tabs are not eligible for being hidden, they will not be hidden, but the call will still succeed and eligible tabs will still be hidden. For example, if you pass `[1, 3]`, and `1` identifies the active tab, then only `3` will be hidden.
         * 
         * However, if any of the tab IDs are invalid, the call will fail and no tabs will be hidden.
         */
        tabIds: number | number[]
    ): Promise<string[]>
    /**
     * Highlights (selects) one or more tabs. Tabs are specified using a window ID and a range of tab indices.
     * @returns A Promise that will be fulfilled with a [`windows.Window`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) object containing details about the window whose tabs were highlighted. If the window could not be found or some other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/highlight)
     */
    highlight(
        highlightInfo: {
            /**
             * `integer`
             * 
             * ID of the window that contains the tabs.
             */
            windowId?: number,
            /**
             * Defaults to `true`. If set to `false`, the [`windows.Window`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) object won't have a `tabs` property containing a list of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) objects representing the tabs open in the window.
             * 
             * 🅘 Populating the window (the default behavior) can be an expensive operation if there are lots of tabs. For better performance it's recommended to manually set `populate` to `false` if you don't need tab details.
             */
            populate?: boolean,
            /**
             * `array` of integer values specifying one or more tab indices to highlight. Previously highlighted tabs not included in `tabs` will stop being highlighted. The first tab in `tabs` will become active.
             */
            tabs: number[]
        }
    ): Promise<any>,
    /**
     * Injects CSS into a page.
     * 
     * To use this API you must have the permission for the page's URL, either explicitly as a [host permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), or using the [activeTab permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
     * 
     * You can only inject CSS into pages whose URL can be expressed using a [match pattern](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns): meaning, its scheme must be one of "http", "https", or "file". This means that you can't inject CSS into any of the browser's built-in pages, such as about:debugging, about:addons, or the page that opens when you open a new empty tab.
     * 
     * 🅘 Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.
     * 
     * The inserted CSS may be removed again by calling [`tabs.removeCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS).
     * @returns A Promise that will be fulfilled with no arguments when all the CSS has been inserted. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
     */
    insertCSS(
        /**
         * `integer`
         * 
         * The ID of the tab in which to insert the CSS. Defaults to the active tab of the current window.
         */
        tabId: number,
        /**
         * An object describing the CSS to insert.
         */
        details: {
            /**
             * If `true`, the CSS will be injected into all frames of the current page. If it is `false`, CSS is only injected into the top frame. Defaults to `false`.
             */
            allFrames?: boolean,
            /**
             * Code to inject, as a text string.
             */
            code?: string,
            /**
             * This can take one of two values: "user", to add the CSS as a user stylesheet or "author" to add it as an author stylesheet. If this option is omitted, the CSS is added as an author stylesheet.
             * 
             * - "user" enables you to prevent websites from overriding the CSS you insert: see [Cascading order](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#cascading_order).
             * - "author" stylesheets behave as if they appear after all author rules specified by the web page. This behavior includes any author stylesheets added dynamically by the page's scripts, even if that addition happens after the `insertCSS` call completes.
             */
            cssOrigin?: string,
            /**
             * Path to a file containing the code to inject. In Firefox, relative URLs are resolved relative to the current page URL. In Chrome, these URLs are resolved relative to the extension's base URL. To work cross-browser, you can specify the path as an absolute URL, starting at the extension's root, like this: `"/path/to/stylesheet.css"`.
             */
            file?: string,
            /**
             * `integer`
             * 
             * The frame where the CSS should be injected. Defaults to `0` (the top-level frame).
             */
            frameid?: number,
            /**
             * If `true`, the code will be injected into embedded "about:blank" and "about:srcdoc" frames if your extension has access to their parent document. The code cannot be inserted in top-level about: frames. Defaults to `false`.
             */
            matchAboutBlank?: boolean,
            /**
             * The soonest that the code will be injected into the tab. Defaults to "document_idle".
             */
            runAt: "document_start"|"document_end"|"document_idle"
        }
    ): Promise<void>,
    /**
     * Moves one or more tabs to a new position in the same window or to a different window.
     * 
     * You can only move tabs to and from windows whose [`WindowType`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/WindowType) is `"normal"`.
     * @returns A Promise that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object or an `array` of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) objects, containing details about the moved tabs. If no tabs were moved (for example, because you tried to move an unpinned tab before a pinned tab) this will be an empty array. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/move)
     */
    move(
        /**
         * `integer` or `Array<integer>`
         * 
         * ID of the [`tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) to move, or an array of tab IDs.
         */
        tabIds: number,
        /**
         * An object that specifies where to move the tab(s).
         */
        moveProperties: {
            /**
             * `integer`
             * 
             * The ID of the window to which you want to move the tab(s). If you omit this, then each tab in `tabIds` will be moved to `index` in its current window. If you include this, and `tabIds` contains more than one tab, then the first tab in `tabIds` will be moved to `index`, and the other tabs will follow it in the order given in `tabIds`.
             */
            windowId?: number
            /**
             * `integer`
             * 
             * The index position to move the tab to, starting at 0. A value of -1 will place the tab at the end of the window.
             * 
             * If you pass a value less than -1, the function will throw an error.
             * 
             * Note that you can't move pinned tabs to a position after any unpinned tabs in a window, or move any unpinned tabs to a position before any pinned tabs. For example, if you have one or more pinned tabs in the target window and `tabIds` refers to an unpinned tab, then you can't pass 0 here. If you try to do this, the function will silently fail (it will not throw an error).
             */
            index: number
        }
    ): Promise<Tab | Tab[]>,
    /**
     * Modifies the succession relationship for a group of tabs.
     * 
     * Using the [`tabs`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs) API, a tab can be assigned a successor tab in the same window. If tab B is the successor of tab A, and tab A is closed while it is the active tab, tab B will be activated next. If tab A doesn't have a successor, then the browser is free to determine which tab to activate next. If tab B is the successor of tab A, then tab A is called a predecessor of tab B. A tab can have at most one successor, but it can have any number of predecessors. A tab cannot take itself or a tab in a different window as a successor.
     * 
     * All tabs start out with no successor; tabs only get a successor if assigned one by a WebExtension. However, the browser must not orphan a tab in a succession relationship with other tabs, if possible: if tab B is the successor of tab A, and tab C is the successor of tab B, and B is closed (or moved to another window), then tab A will take tab C as its successor. Preventing C from being orphaned in this way is called moving a tab (B) from its line of succession.
     * 
     * `tabs.moveInSuccession()` takes an array of tab IDs, and moves all of those tabs from their lines of succession. It then makes each tab the successor of the previous tab in the array, forming a chain. It can optionally set the successor of the last tab in the chain to an anchor tab, which is not moved from its line of succession. Additional options can control whether the tab chain is "prepended" or "appended" to the anchor tab, and whether the operation acts like a linked-list insert.
     * 
     * While the successor tab can be assigned with [`tabs.update()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update), it is often desirable to use `tabs.moveInSuccession()` to change successors, even if only a single tab is having its successor assigned. The difference is that `browser.tabs.moveInSuccession([a], b)` moves tab `a` from its line of succession, so any predecessors of `a` will adopt `a`'s previous successor; whereas if `browser.tabs.update(a, {successorTabId: b})` is used instead, tab `a` may continue to be the successor of other tabs, which could be unexpected. Another advantage of `tabs.moveInSuccession()` is that all of the succession changes happen atomically, without having to worry about races between calls to [`tabs.update()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update) and [`tabs.get()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/get) and other operations like the user closing a tab.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession)
     */
    moveInSuccession(
        /**
         * `Array<integer>`
         * 
         * An array of tab `ID`s. The order of the elements in the array defines the relationship of the tabs. Any invalid tab `ID`s, or tab `ID`s corresponding to tabs not in the same window as `tabId` (or the first tab in the array, if `tabId` is omitted), will be ignored—they will keep their current successors and predecessors.
         */
        tabIds: number[],
        /**
         * `integer`
         * 
         * The `ID` of the tab that will be the successor of the last tab in the `tabIds` array. If this `ID` is invalid or [`tabs.TAB_ID_NONE`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/TAB_ID_NONE), the last tab will not have a successor. Defaults to [`tabs.TAB_ID_NONE`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/TAB_ID_NONE).
         */
        tabId: number,
        options: {
            /**
             * Determines whether to move the tabs in `tabIds` before or after `tabId` in the succession. If `false`, the tabs are moved before `tabId`, if `true`, the tabs are moved after `tabId`. Defaults to `false`.
             */
            append?: boolean,
            /**
             * Determines whether to link up the current predecessors or successor (depending on `options.append`) of `tabId` to the other side of the chain after it is prepended or appended. If true, one of the following happens: if `options.append` is `false`, the first tab in the array is set as the successor of any current predecessors of `tabId`; if `options.append` is `true`, the current successor of tabId is set as the successor of the last tab in the array. Defaults to `false`.
             */
            insert?: boolean
        }
    ): void,
    /**
     * Call this function to print the contents of the active tab. If this function is called, the user will be presented with the print dialog from the underlying platform, and will have the chance to change the print settings and then print the currently active tab.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/print)
     */
    print(): void,
    /**
     * Opens print preview for the active tab.
     * 
     * An extension can detect when print preview has been closed by listening to the [afterprint](https://developer.mozilla.org/en-US/docs/Web/API/Window/afterprint_event) event
     * @returns A Promise that will be fulfilled with no arguments when the preview page has opened.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/printPreview)
     */
    printPreview(): Promise<void>,
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @returns A Promise that will be fulfilled with an `array` of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) objects, containing information about each matching tab. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
     */
    query(
        /**
         * The `query()` function will only get tabs whose properties match the properties included here.
         * 
         * See the [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) documentation to learn more about these properties.
         */
        queryObj: {
            /**
             * Whether the tabs are active in their windows.
             */
            active?: boolean,
            /**
             * Whether the tabs are audible.
             */
            audible?: boolean,
            /**
             * Whether the tabs can be discarded automatically by the browser when resources are low.
             */
            autoDiscardable?: boolean,
            /**
             * Use this to return tabs whose `tab.cookieStoreId` matches any of the `cookieStoreId` strings. This option is only available if the add-on has the `"cookies"` [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
             */
            cookieStoreId?: string | string[],
            /**
             * Whether the tabs are in the current window.
             */
            currentWindow?: boolean,
            /**
             * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
             */
            discarded?: boolean,
            /**
             * Whether the tabs are hidden.
             */
            hidden?: boolean,
            /**
             * Whether the tabs are highlighted.
             */
            highlighted?: boolean,
            /**
             * `integer`
             * 
             * The position of the tabs within their windows.
             */
            index?: number,
            /**
             * Whether the tabs are muted.
             */
            muted?: boolean,
            /**
             * Whether the tabs are in the last focused window.
             */
            lastFocusedWindow?: boolean,
            /**
             * Whether the tabs are pinned.
             */
            pinned?: boolean,
            /**
             * Whether the tabs have completed loading.
             */
            status?: "loading"|"complete",
            /**
             * Match page titles against a pattern. Requires the "tabs" permission or [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab to match.
             */
            title?: string,
            /**
             * Match tabs against one or more [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Note that fragment identifiers are not matched. Requires the "tabs" permission or [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the tab to match.
             */
            url?: MatchPatterns | MatchPatterns[],
            /**
             * `integer`
             * 
             * The `id` of the parent window, or [`windows.WINDOW_ID_CURRENT`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/WINDOW_ID_CURRENT) for the current window.
             */
            windowId?: number,
            /**
             * The type of window the tabs are in.
             */
            windowType?: WindowType
        }
    ): Promise<Tab[]>,
    /**
     * Reload a tab, optionally bypassing the local web cache.
     * @returns A Promise that will be fulfilled with no arguments when the tab has been reloaded. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/reload)
     */
    reload(
        /**
         * `integer`
         * 
         * The ID of the tab to reload. Defaults to the selected tab of the current window.
         */
        tabId: number,
        reloadProperties: {
            /**
             * Bypass the local web cache. Default is `false`.
             */
            bypassCache: boolean
        }
    ): Promise<void>,
    /**
     * Closes one or more tabs.
     * @returns A Promise that will be fulfilled with no arguments when all the specified tabs have been removed or their `beforeunload` prompts have been handled. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/remove)
     */
    remove(
        /**
         * `integer` or `Array<integer>`
         * 
         * The ids of the tab or tabs to close.
         */
        tabIds: number | Array<number>
    ): Promise<void>,
    /**
     * Removes from a page CSS which was previously injected by a call to [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).
     * @returns A Promise that will be fulfilled with no arguments when all the CSS has been removed. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS)
     */
    removeCSS(
        /**
         * `integer`
         * 
         * The ID of the tab from which to remove the CSS. Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * An object describing the CSS to remove from the page.
         */
        details: {
            /**
             * If `true`, the code will be removed from all frames of the current page. If it is `false`, code is only removed from the top frame. Defaults to `false`.
             */
            allFrames?: boolean,
            /**
             * CSS to remove, as a text string. This must exactly match a CSS string previously inserted into the page using [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).
             */
            code?: string,
            /**
             * This can take one of two values: "user", for CSS added as a user stylesheet, or "author" for CSS added as an author stylesheet. If this option was set previously by [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS), then it must exactly match.
             */
            cssOrigin?: "user"|"author",
            /**
             * Path to a file containing the CSS to remove. This must exactly match a CSS file previously inserted into the page using [`tabs.insertCSS()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS).
             */
            file?: string,
            /**
             * `integer`
             * 
             * The frame from which to remove the CSS. Defaults to `0` (the top-level frame).
             */
            frameId?: number,
            /**
             * If `true`, the CSS will be removed from embedded "about:blank" and "about:srcdoc" frames if your extension has access to their parent document. Defaults to `false`.
             */
            matchAboutBlank?: boolean
        }
    ): Promise<void>,
    /**
     * Saves the current page as a PDF file. This will open a dialog, supplied by the underlying operating system, asking the user where they want to save the PDF file.
     * @returns A Promise that will be fulfilled with a status string when the dialog has closed. The string may be any of: "saved", "replaced", "canceled", "not_saved", "not_replaced"
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAdPDF)
     */
    saveAsPDF(
        /**
         * Settings for the saved page, as a [`tabs.PageSettings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings) object. This object must be given, but all its properties are optional. Any properties not specified here will get the default values listed in the [`PageSettings`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings) documentation.
         */
        pageSettings: PageSettings
    ): Promise<"saved"|"replaced"|"canceled"|"not_saved"|"not_replaced">,
    /**
     * Sends a single message from the extension's background scripts (or other privileged scripts, such as popup scripts or options page scripts) to any [content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) or extension pages/iframes that belong to the extension and are running in the specified tab.
     * 
     * The message will be received in the extension context by any listeners to the [`runtime.onMessage`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event. Listeners may then optionally return something as a response back to the sender.
     * @returns A Promise that will be fulfilled with the response object sent by the handler of the message in the content script, or with no arguments if the content script did not send a response. If an error occurs while connecting to the specified tab or any other error occurs, the promise will be rejected with an error message. If several frames respond to the message, the promise is resolved to one of answers.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
     */
    sendMessage(
        /**
         * `integer`
         * 
         * ID of the tab whose content scripts we want to send a message to.
         */
        tabId: number,
        /**
         * An object that can be serialized (see [Data cloning algorithm](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
         */
        message: any,
        options?: {
            /**
             * `integer`
             * 
             * Sends the message to a specific frame identified by `frameId` instead of all frames in the tab. Whether the content script is executed in all frames depends on the `all_frames` setting in the [`content_scripts`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) section of `manifest.json`.
             */
            frameId?: number
        }
    ): Promise<Object>,
    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The [`extension.onRequest`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension/onRequest) event is fired in each content script running in the specified tab for the current extension.
     * @deprecated This method has been deprecated. Use [`tabs.sendMessage()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) instead.
     * @returns A Promise that will be fulfilled with the JSON response object sent by the handler of the message in the content script, or with no arguments if the content script did not send a response. If an error occurs while connecting to the specified tab or any other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendRequest)
     */
    sendRequest(
        /**
         * `integer`
         */
        tabId: number,
        request: any
    ): Promise<Object>,
    /**
     * Zooms the specified tab.
     * @returns A Promise that will be fulfilled with no arguments after the zoom factor has been changed. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * 
     */
    setZoom(
        /**
         * `integer`
         * 
         * The ID of the tab to zoom. Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Otherwise, this must be a number between 0.3 and 5, specifying a zoom factor.
         */
        zoomFactor: number
    ): Promise<void>,
    /**
     * Sets zoom settings for the specified tab. These settings are reset to the default settings upon navigating the tab.
     * @returns A Promise that will be fulfilled with no arguments after the zoom settings have been changed. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.getZoom
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings)
     */
    setZoomSettings(
        /**
         * `integer`
         * 
         * The ID of the tab to change the zoom settings for. Defaults to the active tab of the current window.
         */
        tabId?: number,
        /**
         * Defines how zoom changes are handled and at what scope.
         */
        zoomSettings: ZoomSettings
    ): Promise<void>,
    /**
     * Shows one or more tabs that were previously hidden by a call to [`tabs.hide`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide).
     * @experimental
     * @returns A Promise that will be fulfilled with no arguments. If any error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/show)
     */
    show(
        /**
         * `integer` or `Array<integer>`
         * 
         * The IDs of the tab or tabs to show.
         */
        tabIds: number | number[]
    ): Promise<void>,
    /**
     * Toggles Reader Mode for the given tab.
     * 
     * This function toggles Reader Mode for the given tab. It takes a tab ID as a parameter: if this is omitted, the currently active tab is toggled.
     * 
     * Reader Mode, also known as Reader View, is a browser feature that makes it easier for the user to focus on an article by:
     * 
     * - hiding non-essential page elements like sidebars, footers, and ads
     * - changing the page's text size, contrast and layout for better readability.
     * 
     * Reader Mode is useful specifically for articles: meaning, pages that have a body of text content as their main feature. Pages that don't have an identifiable article are not eligible for display in Reader Mode. To find out whether a page is an article, check the `isArticle` property of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab).
     * 
     * To find out whether a tab is already in Reader Mode, check the `isInReaderMode` property of [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab). To track tabs changing into or out of Reader Mode, you'll need to keep track of the current state of all tabs, and check when `isInReaderMode` changes:
     * ```
     * function handleUpdated(tabId, changeInfo, tabInfo) {
     *   if (changeInfo.status === "complete") {
     *     console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
     *   }
     * }
     * 
     * browser.tabs.onUpdated.addListener(handleUpdated);
     * ```
     * @returns A Promise that will be fulfilled with no arguments when the tab has been updated. If any error occurs (for example, because the page was not an article), the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)
     */
    toggleReaderMode(
        /**
         * `integer`
         * 
         * The ID of the tab to display in Reader Mode. Defaults to the selected tab of the current window.
         */
        tabId?: number
    ): Promise<void>,
    /**
     * Navigate the tab to a new URL, or modify other properties of the tab.
     * 
     * To use this function, pass the ID of the tab to update, and an `updateProperties` object containing the properties you want to update. Properties that are not specified in `updateProperties` are not modified.
     * @returns A Promise that will be fulfilled with a [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object containing details about the updated tab. The [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object doesn't contain `url`, `title` and `favIconUrl` unless matching [host permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) or the `"tabs"` permission has been requested. If the tab could not be found or some other error occurs, the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
     */
    update(
        /**
         * `integer`
         * 
         * Defaults to the selected tab of the current window.
         */
        tabId: number,
        /**
         * The set of properties to update for this tab. To learn more about these properties, see the [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) documentation.
         */
        updateProperties: {
            /**
             * Whether the tab should become active. Does not affect whether the window is focused (see [`windows.update`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/update)). If `true`, non-active highlighted tabs will stop being highlighted. If `false`, does nothing.
             */
            active?: boolean,
            /**
             * Whether the tab should be discarded automatically by the browser when resources are low.
             */
            autoDiscardable?: boolean,
            /**
             * Adds or removes the tab from the current selection. If `true` and the tab is not highlighted, it will become active by default.
             * 
             * If you only want to highlight the tab without activating it, Firefox accepts setting `highlighted` to `true` and `active` to `false`. Other browsers may activate the tab even in this case.
             */
            highlighted?: boolean,
            /**
             * Whether the new URL should replace the old URL in the tab's navigation history, as accessed via the "Back" button.
             * 
             * For example, suppose the user creates a new tab using Ctrl+T. By default, in Firefox, this would load "about:newtab". If your extension then updates this page using [`tabs.update`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update), without `loadReplace`, the "Back" button will be enabled and will take the user back to "about:newtab". If the extension sets `loadReplace`, then the "Back" button will be disabled and it will be just as if the URL supplied by the extension was the first page visited in that tab.
             * 
             * Note though that the original URL will still appear in the browser's global history.
             */
            loadReplace?: boolean,
            /**
             * Whether the tab should be muted.
             */
            muted?: boolean;
            /**
             * `integer`
             * 
             * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
             */
            openerTabId?: number,
            /**
             * Whether the tab should be pinned.
             */
            pinned?: boolean,
            /**
             * Whether the tab should be selected. This property has been replaced by `active` and `highlighted`.
             * @deprecated
             */
            selected?: boolean,
            /**
             * `integer`
             * 
             * The id of the ID of the tab's successor.
             */
            successorTabId?: number,
            /**
             * A URL to navigate the tab to.
             * 
             * For security reasons, in Firefox, this may not be a privileged URL. So passing any of the following URLs will fail:
             * 
             * - `chrome:` URLs
             * - `javascript:` URLs
             * - `data:` URLs
             * - `file:` URLs (i.e., files on the filesystem. However, to use a file packaged inside the extension, see below)
             * - privileged `about:` URLs (for example, `about:config`, `about:addons`, `about:debugging`). Non-privileged URLs (e.g., `about:blank`) are allowed.
             * - The New Tab page (`about:newtab`) can be opened if no value for URL is provided.
             * 
             * To load a page that's packaged with your extension, specify an absolute URL starting at the extension's manifest.json file. For example: '/path/to/my-page.html'. If you omit the leading '/', the URL is treated as a relative URL, and different browsers may construct different absolute URLs.
             */
            url?: string
        }
    ): Promise<Tab>,
    /**
     * To optimize system resource usage, browsers may drop GPU resources associated with tabs that the user has not accessed for a certain amount of time. If a browser has done this for a tab, then reactivating the tab (for example, when the user switches to it) may take longer than it normally would.
     * 
     * The `tabs.warmup()` API enables an extension to start the process of rendering the resources for an inactive tab, if the extension expects that the user might switch to the tab soon. This then makes the actual tab switch faster than it would be otherwise.
     * 
     * Note this API does not work on discarded tabs and does not need to be called immediately prior to switching tabs. It is merely a performance improvement when the tab switch can be anticipated, such as when hovering over a button that when clicked would switch to the tab.
     * 
     * It is expected that this API would mostly be useful to tab management extensions.
     * @returns A Promise that will be fulfilled with no arguments if the tab identified by `tabId` is successfully warmed up. If `tabId` does not identify an open tab, or if warming up fails for some other reason, then the promise will be rejected with an error message.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/warmup)
     */
    warmup(
        /**
         * `integer`
         * 
         * ID of the tab to warm up. If the argument passed here is not an integer (in particular, if it is `null` or `undefined`) then `warmup()` will throw an exception synchronously.
         */
        tabId: number
    ): Promise<void>

    /**
     * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to [`tabs.onUpdated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) events to be notified when a URL is set.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated)
     */
    onActivated: BrowserEvent<(activeInfo: {
        /**
         * `integer`
         * 
         * The ID of the previous activated tab, if that tab is still open.
         */
        previousTabId: number,
        /**
         * `integer`
         * 
         * The ID of the tab that has become active.
         */
        tabId: number,
        /**
         * `integer`
         * 
         * The ID of the tab's window.
         */
        windowId: number
    }) => void>,
    /**
     * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to [`tabs.onUpdated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) events to be notified when a URL is set.
     * @deprecated This event is deprecated. Use [`tabs.onActivated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated) instead.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated)
     */
    onActiveChanged: BrowserEvent<(
        /**
         * `integer`
         * 
         * The ID of the tab that has become active.
         */
        tabId: number,
        selectInfo: {
            /**
             * `integer`
             * 
             * The ID of the window containing the selected tab.
             */
            windowId: number
        }
    ) => void>,
    /**
     * Fired when a tab is attached to a window, for example because it was moved between windows.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onAttached)
     */
    onAttached: BrowserEvent<(
        /**
         * `integer`
         * 
         * The ID of the tab that was attached to a new window.
         */
        tabId: number,
        /**
         * ID of the new window, and index of the tab within it.
         */
        attachInfo: {
            /**
             * `integer`
             * 
             * ID of the new window.
             */
            newWindowId: number,
            /**
             * `integer`
             * 
             * Index position that the tab has in the new window.
             */
            newPosition: number
        }
    ) => void>,
    /**
     * Fired when a tab is created.
     * 
     * Note that the tab's URL may not be given its final value at the time this event fired. In particular, Firefox opens a new tab with the URL "about:blank" before loading the new page into it. You can listen to [`tabs.onUpdated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) events to be notified when a URL is set.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onCreated)
     */
    onCreated: BrowserEvent<(
        /**
         * Details of the tab that was created.
         */
        tab: Tab
    ) => void>,
    /**
     * Fired when a tab is detached from a window, for example because it is being moved between windows.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onDetached)
     */
    onDetached: BrowserEvent<(
        /**
         * `integer`
         * 
         * ID of the tab that was detached.
         */
        tabId: number,
        /**
         * ID of the previous window, and index of the tab within it.
         */
        detachInfo: {
            /**
             * `integer`
             * 
             * ID of the previous window.
             */
            oldWindowId: number,
            /**
             * `integer`
             * 
             * Index position that the tab had in the old window.
             */
            oldPosition: number
        }
    ) => void>,
    /**
     * Fired when the highlighted or selected tabs in a window changes.
     * @deprecated This event is deprecated. Use [`tabs.onHighlighted`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onHighlighted) instead.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onHighlightChanged)
     */
    onHighlightChanged: BrowserEvent<(
        selectInfo: {
            /**
             * `integer`
             * 
             * The window whose tabs changed.
             */
            windowId: number,
            /**
             * `Array<integer>`
             * 
             * All highlighted tabs in the window.
             */
            tabIds: Array<number>
        }
    ) => void>,
    /**
     * Fired when the set of highlighted tabs in a window changes.
     * 
     * Note that before version 63, Firefox didn't have the concept of highlighting multiple tabs, so this event was just an alias for [`tabs.onActivated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onHighlighted)
     */
    onHighlighted: BrowserEvent<(
        /**
         * ID(s) of the highlighted tabs, and ID of their window.
         */
        highlightInfo: {
            /**
             * `integer`
             * 
             * ID of the window whose tabs changed.
             */
            windowId: number,
             /**
              * `Array<integer>`
              * 
              * IDs of the highlighted tabs in the window.
              */
            tabIds: Array<number>
        }
    ) => void>,
    /**
     * Fired when a tab is moved within a window.
     * 
     * Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see [`tabs.onDetached`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onDetached).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onMoved)
     */
    onMoved: BrowserEvent<(
        /**
         * `integer`
         * 
         * ID of the tab the user moved.
         */
        tabId: number,
        /**
         * Information about the move.
         */
        moveInfo: {
            /**
             * `integer`
             * 
             * ID of this tab's window.
             */
            windowId: number,
            /**
             * `integer`
             * 
             * Initial index of this tab in the window.
             */
            fromIndex: number,
            /**
             * `integer`
             * 
             * Final index of this tab in the window.
             */
            toIndex: number
        }
    ) => void>,
    /**
     * Fired when a tab is closed.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onRemoved)
     */
    onRemoved: BrowserEvent<(
        /**
         * `integer`
         * 
         * ID of the tab that closed.
         */
        tabId: number,
        /**
         * The tab's window ID, and a boolean indicating whether the window is also being closed.
         */
        removeInfo: {
            /**
             * `integer`
             * 
             * The window whose tab is closed.
             */
            windowId: number,
            /**
             * `true` if the tab is being closed because its window is being closed.
             */
            isWindowClosing: boolean
        }
    ) => void>,
    /**
     * Fired when a tab is replaced with another tab due to prerendering or instant.
     * 
     * This event may not be relevant for or supported by browsers other than Chrome.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onReplaced)
     */
    onReplaced: BrowserEvent<(
        /**
         * `integer`
         * 
         * ID of the replacement tab.
         */
         addedTabId: number,
        /**
         * `integer`
         * 
         * ID of the tab that was replaced
         */
        removedTabId: number
    ) => void>,
    /**
     * Fires when the selected tab in a window changes.
     * @deprecatedThis event is deprecated. Use [`tabs.onActivated`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated) instead.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onSelectionChanged)
     */
    onSelectionChanged: BrowserEvent<(
        /**
         * `integer`
         * 
         * The ID of the tab that has become active.
         */
        tabId: number,
        selectInfo: {
            /**
             * `integer`
             * 
             * The ID of the window the selected tab changed inside of.
             */
            windowId: number
        }
    ) => void>,
    /**
     * Fired when a tab is updated.
     * 
     * When the user navigates to a new URL in a tab, this will typically generate several `onUpdated` events as various properties of the [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object are updated. This includes the `url`, but also potentially the `title` and `favIconUrl` properties. The `status` property will cycle through `"loading"` and `"complete"`.
     * 
     * This event will also be fired for changes to a tab's properties that don't involve navigation, like pinning and unpinning (which updates the `pinned` property) and muting or unmuting (which updates the `audible` and `mutedInfo` properties).
     * 
     * You can filter this event, making it only fire for tabs whose URLs match specific [patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), or for changes to specific properties, or for changes to a specific tab or window, or any combinations of these restrictions.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated)
     */
    onUpdated: BrowserEvent<(
        /**
         * `integer`
         * 
         * ID of the tab that was updated.
         */
        tabId: number,
        /**
         * Contains properties for the tab properties that have changed.
         */
        changeInfo: {
            /**
             * Indicates whether the tab is drawing attention. For example, when the tab displays a modal dialog, `attention` will be `true`.
             */
            attention?: boolean,
            /**
             * The tab's new audible state.
             */
            audible?: boolean,
            /**
             * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
             */
            discarded?: boolean,
            /**
             * The tab's new favicon URL.
             */
            favIconUrl?: string,
            /**
             * True if the tab is [`hidden`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/hide).
             */
            hidden?: boolean,
            /**
             * True if the tab is an article and is therefore eligible for display in [`Reader Mode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode).
             */
            isArticle?: boolean,
            /**
             * The tab's new muted state and the reason for the change.
             */
            mutedInfo?: MutedInfo,
            /**
             * The tab's new pinned state.
             */
            pinned?: boolean,
            /**
             * The status of the tab. Can be either *loading* or *complete*.
             */
            status?: "loading"|"complete",
            /**
             * The tab's new title.
             */
            title?: string,
            /**
             * The tab's URL if it has changed.
             */
            url?: string
        },
        /**
         * The new state of the tab.
         */
        tab: Tab,
        /**
         * A set of filters that restricts the events that will be sent to this listener. This is an object which may have one or more of the following properties. Events will only be sent if they satisfy all the filters given.
         */
        extraParameters?: {
            /**
             * An array of [match patterns](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Fire the event only for tabs whose current `url` property matches any one of the patterns.
             */
            urls: Array<MatchPatterns>,
            /**
             * An array of strings, which are the names of properties of the [`tabs.Tab`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab) object. Fire this event only for changes to one of the properties named in this array.
             */
            properties: Array<"attention"|"audible"|"discarded"|"favIconUrl"|"hidden"|"isArticle"|"mutedInfo"|"pinned"|"sharingState"|"status"|"title"|"url">,
            /**
             * `integer`
             * 
             * Fire this event only for the tab identified by this ID.
             */
            tabId: number,
            /**
             * `integer`
             * 
             * Fire this event only for tabs which are currently in the window identified by this ID.
             */
            windowId: number
        }
    ) => void>,
    /**
     * Fired when a tab is zoomed.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onZoomChange)
     */
    onZoomChange: BrowserEvent<(
        /**
         * Information about the zoom event.
         */
        zoomChangeInfo: {
            /**
             * `integer`
             * 
             * ID of the tab that was zoomed.
             */
            tabId: number,
            /**
             * The previous zoom factor.
             */
            oldZoomFactor: number,
            /**
             * The new zoom factor.
             */
            newZoomFactor: number,
            /**
             * Zoom settings for the tab.
             */
            zoomSettings: ZoomSettings
        }
    ) => void>
}
