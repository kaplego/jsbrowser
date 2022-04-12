export declare type Port = {
    /**
     * The port's name, defined in the [`runtime.connect()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) or [`tabs.connect()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/connect) call that created it. If this port is connected to a native application, its name is the name of the native application.
     */
    name: string,
    /**
     * Disconnects a port. Either end can call this when they have finished with the port. It will cause `onDisconnect` to be fired at the other end. This is useful if the other end is maintaining some state relating to this port, which can be cleaned up on disconnect. If this port is connected to a native application, this function will close the native application.
     */
    disconnect: Function,
    /**
     * If the port was disconnected due to an error, this will be set to an object with a string property `message`, giving you more information about the error. See `onDisconnect`.
     */
    error: {message: string},
    /**
     * This contains the `addListener()` and `removeListener()` functions common to all events for extensions built using WebExtension APIs. Listener functions will be called when the other end has called `Port.disconnect()`. This event will only be fired once for each port. The listener function will be passed the `Port` object. If the port was disconnected due to an error, then the `Port` argument will contain an `error` property giving more information about the error:
     * ```
     * port.onDisconnect.addListener((p) => {
     *     if (p.error) {
     *         console.log(`Disconnected due to an error: ${p.error.message}`);
     *     }
     * });
     * ```
     * Note that in Google Chrome `port.error` is not supported: instead, use [`runtime.lastError`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/lastError) to get the error message.
     */
    onDisconnect: {
        addListener(fn: (port: Port) => void): void,
        removeListener(fn: (port: Port) => void): void
    },
    /**
     * This contains the `addListener()` and `removeListener()` functions common to all events for extensions built using WebExtension APIs. Listener functions will be called when the other end has sent this port a message. The listener will be passed the value that the other end sent.
     */
    onMessage: {
        addListener(fn: (port: Port) => void): void,
        removeListener(fn: (port: Port) => void): void
    },
    /**
     * Send a message to the other end. This takes one argument, which is a serializable value (see [Data cloning algorithm](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)) representing the message to send. It will be delivered to any script listening to the port's `onMessage` event, or to the native application if this port is connected to a native application.
     */
    postMessage: (message: any) => void,
    /**
     * [`runtime.MessageSender`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender)
     * 
     * Contains information about the sender of the message. This property will only be present on ports passed to `onConnect`/`onConnectExternal` listeners.
     */
    sender?: Object
}