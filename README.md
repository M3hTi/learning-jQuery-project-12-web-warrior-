# jQuery



## Working with jQuery Selectors

**All jQuery commands begin with a $ symbol indicating any code following should be interpreted as part of the jQuery library. jQuery commands follow the general syntax:**

$(selector).action(parameters)

**where selector references a selection of elements from the web page document, action is an action performed on that object, and parameters are parameter values associated within that action. Parameters can be values, but they can also reference callback functions that are run in response to the action.**

For example, the following statement applies the ready() action to the web document, telling the browser to wait until the web document is completely loaded, and once it is loaded and read, the anonymous callback function will be run in response:

```javascript
$(document).ready(function() { jQuery statements })
```

Later versions of jQuery also support the following more concise command to accomplish the same task:

```javascript
$(function() {
    jQuery statements
}); 
```

This code can also be written even more concisely in arrow function syntax as:

```javascript
$( () => {
    jQuery statements
}); 
```

### Selecting elements from the DOM

jQuery's `$(selector)` expression is used to select elements from the DOM based on CSS selector patterns:

- **CSS Selector Support**: Any valid CSS selector can be used.

- Examples

  :

  - Select all `<p>` elements directly inside `<dd>`: `$("dd > p")`.
  - Select `<p>` elements directly inside `<dd>` or `<dt>`: `$("dd > p, dt > p")`.
  - Select all `<p>` elements inside `<article>` elements with the `story` class: `$("article.story p")`.

- **Array-Like Behavior**: Selected elements behave like an array, accessible using zero-based indexing, e.g., `$("article.story p")[0]`.

- **Saving Selections**: Selections can be stored in variables, e.g., `let mainPara = $("h1#main p");`.

  Once a selector has been stored as a variable, the array of selected elements generated by that expression is available to the JavaScript parser without requiring a rescan of the DOM.

Always enclose CSS selector patterns in quotation marks when using jQuery expressions.

To optimize jQuery selectors and improve performance, especially in large documents:

- **Use IDs**: The `id` attribute is unique, making it the fastest way to retrieve a specific element.
- **Be Specific**: Use specific selectors to narrow the search scope, e.g., `$("article.news")` instead of `$("article")`.
- **Set Context**: Limit the node tree search by specifying context, e.g., `$("article.news > p")` instead of `$("p")`.
- **Cache Selectors**: Store selectors in variables to avoid rescanning the DOM, e.g., `let cachedSelector = $("article.news");`.
- **Avoid Pseudo-Selectors**: Pseudo-selectors like `$("div:first")` are slower because they require parsing the entire node tree. Use `id` attributes for precise targeting instead.

Efficient and specific selectors enhance the speed and performance of jQuery applications.

### traversing the DOM with jQuery

**jQuery can traverse the node tree in any direction and includes optional filters to narrow the search.**

![](C:\Users\asus\Downloads\jQuery methods to traverse the node tree.png)

Here's a detailed explanation of the jQuery methods shown in your image, with examples:

------

#### 1. **`children(filter)`**

**Description:** Returns all direct child elements of the selected elements. The `filter` parameter is optional and narrows down the search.

**Example:**

```javascript
$("ul").children("li"); // Selects all <li> elements that are direct children of <ul>
```

------

#### 2. **`closest(filter)`**

**Description:** Returns the closest ancestor of the selected elements that matches the filter.

**Example:**

```javascript
$(".item").closest("div"); // Finds the closest <div> ancestor of elements with class "item"
```

------

#### 3. **`contents()`**

**Description:** Returns all child nodes (including text and comment nodes) of the selected elements.

**Example:**

```javascript
$("div").contents(); // Retrieves all child nodes (text and elements) of <div>
```

------

#### 4. **`find(filter)`**

**Description:** Returns all descendant elements of the selected elements that match the filter.

**Example:**

```javascript
$("ul").find("li"); // Finds all <li> elements inside <ul>, including nested ones
```

------

#### 5. **`first()`**

**Description:** Returns the first element from the selection.

**Example:**

```javascript
$("li").first(); // Selects the first <li> element in a list
```

------

#### 6. **`has(element)`**

**Description:** Filters the set of elements to include only those that contain a specified element.

**Example:**

```javascript
$("div").has("p"); // Selects <div> elements that contain a <p>
```

------

#### 7. **`last()`**

**Description:** Returns the last element from the selection.

**Example:**

```javascript
$("li").last(); // Selects the last <li> element in a list
```

------

#### 8. **`next(filter)`**

**Description:** Returns the next sibling of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$(".current").next(); // Selects the next sibling of the element with class "current"
```

------

#### 9. **`nextAll(filter)`**

**Description:** Returns all next siblings of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$(".current").nextAll(); // Selects all next siblings of the element with class "current"
```

------

#### 10. **`parent(filter)`**

**Description:** Returns the immediate parent of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$("span").parent(); // Selects the parent element of all <span> elements
```

------

#### 11. **`parents(filter)`**

**Description:** Returns all ancestors of the selected elements, optionally filtered by the parameter.

**Example:**

```javascript
$(".item").parents("div"); // Selects all <div> ancestors of elements with class "item"
```

------

#### 12. **`prev(filter)`**

**Description:** Returns the previous sibling of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$(".current").prev(); // Selects the previous sibling of the element with class "current"
```

------

#### 13. **`prevAll(filter)`**

**Description:** Returns all previous siblings of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$(".current").prevAll(); // Selects all previous siblings of the element with class "current"
```

------

#### 14. **`siblings(filter)`**

**Description:** Returns all siblings of the selected elements. The `filter` parameter is optional.

**Example:**

```javascript
$(".current").siblings(); // Selects all siblings of the element with class "current"
```

------

### Working with attributes and CSS properties

jQuery also provides methods to work with element attributes and CSS properties. Using these methods, **you can narrow a search based on element or CSS property values or you can create new attributes and CSS properties.**

![](C:\Users\asus\Downloads\jQuery methods for classes and attributes.png)

Here’s an explanation of the methods listed in your image, along with examples for each one:

------

#### **1. `addClass(class)`**

- **Description:** Adds one or more class names to the selected elements.

- Example:

  ```javascript
  // Add the "highlight" class to all <p> elements
  $("p").addClass("highlight");
  
  // Add multiple classes ("highlight", "bold") to all <div> elements
  $("div").addClass("highlight bold");
  ```

------

#### **2. `attr(att, value)`**

- **Description:** Returns or sets attribute values to selected elements.

- Examples:

  - Get the value of an attribute:

    ```javascript
    // Get the "src" attribute of an image
    let srcValue = $("img").attr("src");
    console.log(srcValue);
    ```

  - Set the value of an attribute:

    ```javascript
    // Set the "src" attribute of an image
    $("img").attr("src", "new-image.jpg");
    ```

------

#### **3. `css(prop)`**

- **Description:** Returns or sets CSS properties for the selected elements.

- Examples:

  - Get a CSS property:

    ```javascript
    // Get the color of the first <p> element
    let color = $("p").css("color");
    console.log(color);
    ```

  - Set a CSS property:

    ```javascript
    // Set the background color of all <div> elements
    $("div").css("background-color", "yellow");
    ```

------

#### **4. `hasClass(class)`**

- **Description:** Returns a Boolean value indicating whether the selected elements have a specified class attribute.

- Example:

  ```javascript
  // Check if a <div> has the "active" class
  if ($("div").hasClass("active")) {
    console.log("The div has the 'active' class.");
  } else {
    console.log("The div does not have the 'active' class.");
  }
  ```

------

#### **5. `prop(prop)`**

- **Description:** Returns or sets properties of the selected elements.

- Examples:

  - Get a property:

    ```javascript
    // Check if a checkbox is checked
    let isChecked = $("#checkbox").prop("checked");
    console.log(isChecked);
    ```

  - Set a property:

    ```javascript
    // Set a checkbox to be checked
    $("#checkbox").prop("checked", true);
    ```

------

#### **6. `removeAttr(attr)`**

- **Description:** Removes one or more attributes from the selected elements.

- Example:

  ```javascript
  // Remove the "disabled" attribute from a button
  $("button").removeAttr("disabled");
  ```

------

#### **7. `removeClass(class)`**

- **Description:** Removes one or more class names from the selected elements.

- Example:

  ```javascript
  // Remove the "highlight" class from all <p> elements
  $("p").removeClass("highlight");
  
  // Remove multiple classes ("highlight", "bold") from all <div> elements
  $("div").removeClass("highlight bold");
  ```

------

#### **8. `removeProp(prop)`**

- **Description:** Removes a property set by the `prop()` method.

- Example:

  ```javascript
  // Remove the "checked" property of a checkbox
  $("#checkbox").removeProp("checked");
  ```

------

#### **9. `toggleClass(class)`**

- **Description:** Toggles between adding and removing one or more classes from the selected elements.

- Example:

  ```javascript
  // Toggle the "highlight" class on all <p> elements
  $("p").toggleClass("highlight");
  
  // Toggle multiple classes ("highlight", "bold") on all <div> elements
  $("div").toggleClass("highlight bold");
  ```

------

#### Summary

These methods are incredibly powerful in jQuery for dynamically manipulating the attributes, classes, and styles of DOM elements in your HTML. They simplify the process of creating interactive and responsive web applications. Let me know if you need further clarification!

**NOTE: If several items are returned by the jQuery selector, the css() and attr() methods will return values for the first matched element in the array.**

**jQuery returns the computed values of CSS styles, which is not necessarily the value defined in the style sheet.** For example, the following style rule defines the font size and color of article text in an em unit and a color name:

```css
article { 
	font-size: 2em; 
	color: green; 
}
```

The value of those properties returned by jQuery would be expressed in pixels and the rgb color value.

```javascript
$("article").css("fontSize") // 32px
$("article").css("color")    // rgb(0, 128, 0)
```

### Changing the DOM Structure

![](C:\Users\asus\Downloads\jQuery method for changing structure of DOM.png)

#### 1) add(selector)` method:

 which **adds elements to the current selection** (it doesn't modify the DOM). For example:

```javascript
$("p").add(".extra"); // Combines all <p> elements and elements with the class "extra" into one selection
```

#### 2) **`after(content)`**:

Inserts new content **immediately after the selected element** in the DOM (outside it).

```javascript
$("p").after("<span>After content</span>"); // Adds <span> as a sibling after each <p>
```

#### 3) **`append(content)`**

**Description:** Appends new content at the end of the selected elements.

```javascript
$("div").append("<p>Appended content</p>"); // Adds a <p> to the end of each <div>
```

#### 4)**`before(content)`**

**Description:** Inserts new content before the selected elements.

```javascript
$("p").before("<span>Before content</span>"); // Inserts a <span> before each <p>
```

#### 5)**`clone()`**

**Description:** Makes a copy of the selected elements, including their event handlers.

```javascript
let copy = $("#myElement").clone(); // Clones the element with ID "myElement"
```

#### 6)**`detach(elems)`**:

Detaches elements from the DOM but keeps them in memory, so they can be reinserted later.

```javascript
let detached = $("p").detach(); // Removes <p> elements but keeps their data and events in memory
$("body").append(detached); // Reinserts the <p> elements
```

#### 7)**`empty()`**

**Description:** Removes all child nodes and content from the selected elements.

```javascript
$("div").empty(); // Clears the content of all <div> elements
```

#### 8) html(content)

1) **Clears** the current content (including child elements) of the selected elements.

2) **Inserts the new content** (HTML structure or plain text).

```javascript
$("div").html("<p>New content</p>"); 
// Removes all content inside <div> and replaces it with a new <p>
```

#### 9) prepend(content)

 Inserts new content **at the beginning of the selected element's content** (inside it).

```javascript
$("p").prepend("<span>Prepended content</span>"); // Adds <span> inside each <p>, at the start of its content
```

**Key Difference Between after and prepend:**

- `after(content)` adds content as a sibling (outside the selected element).
- `prepend(content)` adds content as a child (inside the selected element, at the beginning).

#### 10) remove(elems)

Permanently removes elements from the DOM, **including their event handlers and data**.

```javascript
$("p").remove(); // Removes <p> elements from the DOM permanently
```

**Key Difference Between detach and remove:**

- `detach` keeps the removed elements and their data in memory.
- `remove` permanently deletes the elements and their associated data.

#### 11) replaceWith(html)

Replaces the selected elements themselves with the provided HTML.

```javascript
$("#myDiv").replaceWith("<p>Replaced content</p>");
// The element with ID "myDiv" is replaced by the new <p> element
```

#### 12) replaceAll(selector)

Similar, but instead of being called on the element to replace, it is called on the **replacement content**. It replaces all elements matching the selector.

```javascript
$("<p>Replaced content</p>").replaceAll("div");
// All <div> elements are replaced by the new <p> element
```

**Key Difference:**

- `replaceWith` is called on the element you want to replace
- `replaceAll` is called on the new content, which replaces the targeted selector

#### 13) text(str)

**Description:** Replaces the selected elements with the provided HTML content.

```javascript
$("p").text(); // Gets the text content of the first <p>
$("p").text("New text"); // Sets the text of all <p> elements
```

#### 14) **`val(value)`**

**Description:** Gets or sets the value of selected form elements.

```javascript
$("input").val(); // Gets the value of the first <input>
$("input").val("New value"); // Sets the value of all <input> elements
```

The wrap() method encloses elements within a specified HTML structure, creating a new parent for the elements. To enclose the following h1 headings:

```html
<h1 class="story">Main Heading</h1> 
<h1 class="story">Second Heading</h1>
```

within the following article elements:

```html
<article> 
    <h1 class="story">Main Heading</h1> 
</article>
<article> 
    <h1 class="story">Second Heading</h1> 
</article>
```

and apply the jQuery wrap() method to the selected elements:

```javascript
$("h1.story").wrap("<article></article>")
```

To remove the article elements but keep the h1 headings within the DOM, apply the unwrap() method:

```javascript
$("h1.story").unwrap()
```



