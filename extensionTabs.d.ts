/**
 * The format of an image.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageFormat)
 */
declare type ImageFormat = "jpeg" | "png";

/**
 * Details about the format, quality, area and scale of a captured image.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails)
 */
export declare type ImageDetails = {
    /**
     * [`ImageFormat`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageFormat)
     * 
     * The format of the resulting image. Default is `"png"`.
     */
    format?: ImageFormat,
    /**
     * `integer`
     * 
     * When format is `"jpeg"`, this controls the quality of the resulting image. It is a number between 0 and 100, which is converted to a value between 0 and 1 and then used as the `encoderOptions` argument to [`HTMLCanvasElement.toDataURL()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL). If it is omitted, 92 is used. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease. This value is ignored for PNG images.
     */
    quality?: number
    /**
     * An `object` specifying the area of the document to capture, in CSS pixels, relative to the page. All properties default to `0`. The properties are:
     * 
     * - `x`: The coordinate of the left side of the rectangle.
     * - `y`: The coordinate of the top side of the rectangle.
     * - `width`: The width of the rectangle.
     * - `height`: The height of the rectangle.
     * 
     * This option was introduced in Firefox 82. If omitted, the currently visible viewport is captured.
     */
    rect?: {
        /** The coordinate of the left side of the rectangle. */
        x: number,
        /** The coordinate of the top side of the rectangle. */
        y: number,
        /** The width of the rectangle. */
        width: number,
        /** The height of the rectangle. */
        height: number
    }
    /**
     * The scale to render at, defaults to [`devicePixelRatio`](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio). This option was introduced in Firefox 82.
     */
    scale?: number
}