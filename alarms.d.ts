/**
 * Information about a single alarm. This object is returned from [`alarms.get()`](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms/get) and [`alarms.getAll()`](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms/getAll), and is passed into the [`alarms.onAlarm`](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) listener.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm)
 */
 declare type Alarm = {
    /**
     * Name of this alarm. This is the name that was passed into the [`alarms.create()`](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms/create) call that created this alarm.
     */
    name: string;
    /**
     * `double`
     * 
     * Time at which the alarm is scheduled to fire next, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
     */
    scheduledTime: number;
    /**
     * `double`
     * 
     * If this is not `null`, then the alarm is periodic, and this represents its period in minutes.
     */
    periodInMinutes?: number;
}

declare type alarmInfo = {
    /**
     * `double`
     * 
     * The time the alarm will fire first, given as [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time). To get the number of milliseconds between the epoch and the current time, use [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now). If you specify `when`, don't specify `delayInMinutes`.
     */
    when?: number;
    /**
     * `double`
     * 
     * The time the alarm will fire first, given as minutes from the time the alarm is set. If you specify `delayInMinutes`, don't specify `when`.
     */
    delayInMinutes?: number;
    /**
     * `double`
     * 
     * If this is specified, the alarm will fire again every `periodInMinutes` after its initial firing. If you specify this value you may omit both `when` and `delayInMinutes`, and the alarm will then fire initially after `periodInMinutes`. If `periodInMinutes` is not specified, the alarm will only fire once.
     */
    periodInMinutes?: number;
};

export declare interface alarms {
    /**
     * Cancels an alarm, given its name.
     * 
     * This is an asynchronous function that returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean. This will be `true` if the alarm was cleared, `false` otherwise.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/clear)
     */
    clear(
        /**
         * The name of the alarm to clear. If you don't supply this, the empty string "" will be used.
         */
        name: string
    ): Promise<boolean>;

    /**
     * Cancels all active alarms.
     * 
     * This is an asynchronous function that returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean. This will be `true` if any alarms were cleared, `false` otherwise. Note that Chrome always passes `true` here.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/clearAll)
     */
    clearAll(): Promise<boolean>;

    /**
     * Creates a new alarm for the current browser session. An alarm may fire once or multiple times. An alarm is cleared after it fires for the last time.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/create)
     */
    create(
        /**
         * A name for the alarm. Defaults to the empty string.
         *
         * This can be used to refer to a particular alarm in [`alarms.get()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/get) and [`alarms.clear()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/clear). It will also be available in [`alarms.onAlarm`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/onAlarm) as the `name` property of the [`alarms.Alarm`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm) object passed into the listener function.
         * 
         * Alarm names are unique within the scope of a single extension. If an alarm with an identical name exists, the existing alarm will be cleared and the alarm being created will replace it.
         */
        name?: string,
        /**
         * `object`
         * 
         * You can use this to specify when the alarm will initially fire, either as an absolute value (`when`), or as a delay from the time the alarm is set (`delayInMinutes`). To make the alarm recur, specify `periodInMinutes`.
         * 
         * On Chrome, unless the extension is loaded unpackaged, alarms it creates are not allowed to fire more than once per minute. If an extension tries to set `delayInMinutes` to a value < 1, or `when` to a value < 1 minute in the future, then the alarm will fire after 1 minute. If an extension tries to set `periodInMinutes` to a value < 1, then the alarm will fire every minute.
         */
        alarmInfo?: alarmInfo
    ): void;

    /**
     * Gets an alarm, given its name.
     * 
     * This is an asynchronous function that returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/get)
     */
    get(
        /**
         * The name of the alarm to get. If you don't supply this, the empty string "" will be used.
         */
        name: string
    ): Promise<Alarm|undefined>;

    /**
     * Gets all active alarms for the extension.
     * 
     * This is an asynchronous function that returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of [`Alarm`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/Alarm) objects. Each of these represents an active alarm that belongs to the extension. If no alarms are active, the array will be empty.
     * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/getAll)
     */
    getAll(): Promise<Alarm[]>;
}