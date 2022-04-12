export declare interface BrowserEvent<F> {
    addListener(
        callback: F
    ): void,
    removeListener(
        listener: F
    ): void,
    hasListener(
        listener: F
    ): boolean
}

/**
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
 */
export declare type MatchPatterns = `${"*"|"http"|"https"|"ws"|"wss"|"ftp"|"data"|"file"|"extension"|"chrome-extension"}://${"*"|string}/${string}`;