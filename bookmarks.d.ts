/**
 * An object of type `bookmarks.BookmarkTreeNode` represents a node in the bookmark tree, where each node is a bookmark, a bookmark folder, or a separator. Child nodes are ordered by an `index` within their respective parent folders.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode)
 */
declare type BookmarkTreeNode = {
    /**
     * An [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) objects which represent the node's children. The list is ordered in the list in which the children appear in the user interface. This field is omitted if the node isn't a folder.
     */
    children?: BookmarkTreeNode[],
    /**
     * A number representing the creation date of the node in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
     */
    dateAdded?: number,
    /**
     * A number representing the date and time the contents of this folder last changed, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
     */
    dateGroupModified?: number,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which uniquely identifies the node. Each ID is unique within the user's profile and remains unchanged across browser restarts.
     */
    id: string,
    /**
     * A number which represents the zero-based position of this node within its parent folder, where zero represents the first entry.
     */
    index?: number,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which specifies the ID of the parent folder. This property is not present in the root node.
     */
    parentId?: number,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which contains the text displayed for the node in menus and lists of bookmarks.
     */
    title: string,
    /**
     * A [`bookmarks.BookmarkTreeNodeType`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType) object indicating whether this is a bookmark, a folder, or a separator. Defaults to `"bookmark"` unless `url` is omitted, in which case it defaults to `"folder"`.
     */
    type?: BookmarkTreeNodeType,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) as described by the type [`bookmarks.BookmarkTreeNodeUnmodifiable`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable). Represents the reason that the node can't be changed. If the node can be changed, this is omitted.
     */
    unmodifiable?: string,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which represents the URL for the bookmark. If the node represents a folder, this property is omitted.
     */
    url?: string
}

/**
 * The `bookmarks.BookmarkTreeNodeType` type is used to describe whether a node in the bookmark tree is a bookmark, a folder, or a separator.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)
 */
declare type BookmarkTreeNodeType = "bookmark" | "folder" | "separator";

/**
 * The `bookmarks.BookmarkTreeNodeUnmodifiable` type is used to indicate the reason that a node in the bookmark tree (where each node is either a bookmark or a bookmark folder) cannot be changed. This is used as the value of the [`bookmarks.BookmarkTreeNode.unmodifiable.unmodifiable`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode#unmodifiable) field on bookmark nodes.
 * 
 * @type `bookmarks.BookmarkTreeNodeUnmodifiable` is a [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which can currently have only one value: `"managed"`. This indicates that the bookmark node was configured by an administrator or by the custodian of a supervised user (such as a parent, in the case of parental controls).
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable)
 */
declare type BookmarkTreeNodeUnmodifiable = "managed";

/**
 * The `CreateDetails` type is used to describe the properties of a new, bookmark, bookmark folder, or separator when calling the [`bookmarks.create()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/create) method.
 * @link [MDN Reference](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails)
 */
declare type CreateDetails = {
    /**
     * An integer [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) which specifies the position at which to place the new bookmark under its parent. A value of 0 will put it at the top of the list.
     */
    index?: number;
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which indicates the ID of the parent folder into which to place the new bookmark or bookmark folder. On Chrome and Firefox, the default is the "Other Bookmarks" folder on the Bookmarks menu.
     */
    parentId?: string,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which specifies the title for the bookmark or the name of the folder to be created. If this isn't specified, the title is `""`.
     */
    title?: string
    /**
     * A [`bookmarks.BookmarkTreeNodeType`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType) object indicating whether this is a bookmark, a folder, or a separator. Defaults to `"bookmark"` unless `url` is omitted, in which case it defaults to `"folder"`.
     */
    type?: BookmarkTreeNodeType,
    /**
     * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which specifies the URL of the page to bookmark. If this is omitted or is `null`, a folder is created instead of a bookmark.
     */
    url?: string
}

/**
 * The [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) [`bookmarks`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) API lets an extension interact with and manipulate the browser's bookmarking system. You can use it to bookmark pages, retrieve existing bookmarks, and edit, remove, and organize bookmarks.
 * 
 * To use this API, an extension must request the "bookmarks" [permission](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.
 * 
 * Extensions cannot create, modify, or delete bookmarks in the root node of the bookmarks tree. Doing so causes an error with the message: "The bookmark root cannot be modified"
 */
export declare interface bookmarks {
    /**
     * Creates a bookmark or folder as a child of the [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) with the specified `parentId`. To create a folder, omit or leave empty the [`CreateDetails.url`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails#url) parameter.
     * ▲ If your extension tries to create a new bookmark in the bookmark tree's root node, it raises an error: "The bookmark root cannot be modified" and the bookmark won't be created.
     * @returns A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) that describes the new bookmark node.
     * 
     */
    create(
        bookmark: CreateDetails
    ): Promise<BookmarkTreeNode>,
    /**
     * Given the ID of a [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) or an array of such IDs, the `bookmarks.get()` method retrieves the matching nodes.
     * @returns A Promise that will be fulfilled with an array of [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode), one for each matching node. Separators are not included in the results. If no nodes could be found, the promise will be rejected with an error message.
     * 
     */
    get(
        /**
         * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of strings specifying the IDs of one or more [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) objects to retrieve.
         */
        idOrIdList: string | string[]
    ): Promise<BookmarkTreeNode>,
    /**
     * `bookmarks.getChildren()` retrieves all the immediate children of a given bookmark folder, identified as a [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) ID.
     * @returns A Promise that will be fulfilled with an array of [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) objects. Each entry represents a single child node. The list is ordered in the same order in which the bookmarks appear in the user interface. Separators are currently not included in the results. The list includes subfolders, but does not include any children contained in subfolders. If the specified node has no children, the array is empty. If the node identified by id is not found, the promise is rejected with an error message.
     * 
     */
    getChildren(
        /**
         * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which specifies the ID of the folder whose children are to be retrieved.
         */
        id: string
    ): Promise<BookmarkTreeNode>,
    /**
     * The `bookmarks.getRecent()` method retrieves a specified number of the most recently added bookmarks as an array of [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) objects.
     * @returns A Promise that will be fulfilled with an array of [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) objects.
     * 
     */
    getRecent(
        /**
         * `integer`
         * 
         * A number representing the maximum number of items to return. The returned list will contain up to this many of the most recently added items. The minimum allowed value here is 1. If you pass 0 or less, the function will throw an error.
         */
        numberOfItems: number
    ): Promise<BookmarkTreeNode[]>,
    /**
     * The `bookmarks.getSubTree()` method asynchronously retrieves a [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode), given its ID.
     * 
     * If the item is a folder, you can access all its descendants recursively using its `children` property and the `children` property of its descendants, if they are themselves folders.
     * @returns A Promise that will be fulfilled with an array containing a single object, a [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object, representing the item with the given ID. If a node corresponding to `id` could not be found, the promise will be rejected with an error message.
     * 
     */
    getSubTree(
        /**
         * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) specifying the ID of the root of the subtree to retrieve.
         */
        id: string
    ): Promise<[BookmarkTreeNode]>,
    /**
     * `bookmarks.getTree()` returns an array containing the root of the bookmarks tree as a [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object.
     * 
     * You can access the entire tree recursively using its `children` property and the `children` property of its descendants, if they are themselves folders.
     * @returns A Promise that will be fulfilled with an array containing one object, a [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object representing the root node.
     * 
     */
    getTree(): Promise<[BookmarkTreeNode]>,
    /**
     * The `bookmarks.move()` method moves the specified [`BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) to the specified destination within the tree of bookmarks. This lets you move a bookmark to a new folder and/or position within the folder.
     * 
     * ▲ If your extension attempts to move a bookmark into the bookmarks tree root node, the call will raise an error with the message: "The bookmark root cannot be modified" and the move won't be completed.
     * @returns A Promise that will be fulfilled with a single [`bookmarks.BookmarkTreeNode`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) object, describing the moved node. If the node corresponding to the id parameter can't be found, the promise is rejected with an error message.
     * 
     */
    move(
        /**
         * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) containing the ID of the bookmark or folder to move.
         */
        id: string,
        /**
         * An [`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which specifies the destination for the bookmark.
         */
        destination: {
            /**
             * A [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) which specifies the ID of the destination folder. If this value is left out, the bookmark is moved to a new location within its current folder.
             */
            parentId?: string,
            /**
             * `integer`
             * 
             * A 0-based index specifying the position within the folder to which to move the bookmark. A value of 0 moves the bookmark to the top of the folder. If this value is omitted, the bookmark is placed at the end of the new parent folder.
             */
            index?: number
        }
    ): Promise<BookmarkTreeNode>
}