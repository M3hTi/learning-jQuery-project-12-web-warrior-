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

## Handling Events with jQuery

jQuery uses the same syntax for managing events as it does for applying methods to selected elements. The general format is:

```javascript
$(selector).event(handler)
```

![](C:\Users\asus\Desktop\downloads\codesImage\Common jQuery event methods.png)

As with the JavaScript event model, jQuery supports an event object that is passed as an object of the handler function. Figure 12-10 describes some of the properties associated with the jQuery event object.

![](C:\Users\asus\Desktop\downloads\codesImage\Properties and methods of the jQuery event object.png)

The following code demonstrates how to apply the click() event to every h1 element in the document to dis- play the text of the element that follows the heading. In this handler function, the heading clicked by the user is stored in the e.target property. The next() method selects the next sibling element in the DOM, and the text() method displays the text stored within that sibling.

```javascript
$("h1").click(e => { console.log($(e.target).next().text()); });
```

**Notice that the event object property, e.target, has to be placed within the jQuery selector, $(), so that jQuery handles the methods associated with the event target.**

In jQuery, the method **`$("h1").click()`** attaches a click event handler to all matched elements (all `h1` elements) automatically, without requiring explicit iteration as in vanilla JavaScript.

------

### **Comparison**

#### **Vanilla JavaScript**

You must manually iterate through each element to add an event listener to every `h1` tag:

```javascript
const headings = document.querySelectorAll('h1');
headings.forEach(heading => {
    heading.addEventListener('click', e => {
        console.log(e.target.textContent);
    });
});
```

#### **jQuery**

In jQuery, you can attach the click event to all `h1` elements in a single step:

```javascript
$("h1").click(e => {
    console.log($(e.target).next().text());
});
```

- The **`$("h1")`** selector applies the event handler to all `h1` elements at once.
- There is no need for an explicit loop like `each()`, unless additional operations are required beyond attaching the event.

------

### **Conclusion**

jQuery simplifies event handling with **chaining and implicit iteration**, making code more concise and readable compared to vanilla JavaScript.



Not quite! While both `.html()` and `.wrapInner()` are used to manipulate the content of elements in jQuery, their purposes and behavior are **different**. Here's an explanation of how each works:

------

#### **1. `.html()`**

- **Purpose**: Sets or gets the **HTML content** of an element.
- **Behavior**: Replaces the entire inner HTML of the selected element(s) with the new content.

##### Example:

```javascript
// Set HTML content
$("div").html("<p>New Content</p>");
```

- If the 

  ```
  div
  ```

   originally had:

  ```html
  <div>
      <span>Old Content</span>
  </div>
  ```

- After 

  ```
  .html("<p>New Content</p>")
  ```

  , it becomes:

  ```html
  <div>
      <p>New Content</p>
  </div>
  ```

------

#### **2. `.wrapInner()`**

- **Purpose**: Wraps each element’s inner content in a **new container** (an element or HTML structure).
- **Behavior**: Keeps the existing content but wraps it in the specified element.

##### Example:

```javascript
// Wrap inner content with a new element
$("div").wrapInner("<span class='wrapper'></span>");
```

- If the 

  ```
  div
  ```

   originally had:

  ```html
  <div>
      <p>Old Content</p>
  </div>
  ```

- After 

  ```
  .wrapInner("<span class='wrapper'></span>")
  ```

  , it becomes:

  ```html
  <div>
      <span class='wrapper'>
          <p>Old Content</p>
      </span>
  </div>
  ```

------

#### **Key Differences**:

| Feature              | `.html()`                           | `.wrapInner()`                          |
| -------------------- | ----------------------------------- | --------------------------------------- |
| **Functionality**    | Replaces inner HTML entirely        | Wraps existing content                  |
| **Original Content** | Overwritten                         | Preserved (inside the wrapper)          |
| **Use Case**         | For setting or getting HTML content | For wrapping content inside a container |

------

Use `.html()` when you want to **replace content** and `.wrapInner()` when you want to **encapsulate existing content** within a new wrapper.

Yes, your understanding is mostly correct. Here's a step-by-step explanation of how `.wrapInner()` works in this case:

#### Code:

```javascript
$("div").wrapInner("<span class='wrapper'></span>");
```

#### What Happens:

1. **Traversal**:
   - jQuery traverses the DOM and finds all `<div>` elements in the document.
2. **Reading Content**:
   - For each `<div>`, jQuery retrieves the existing content inside the `<div>` (its inner content).
3. **Wrapping**:
   - The content of each `<div>` is wrapped inside a `<span>` element with the class `wrapper`.
4. **Inserting Back**:
   - The newly created `<span>` (with the content inside it) is reinserted as the inner content of the `<div>`.

------

##### Example:

#### Original HTML:

```html
<div>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>
```

#### After Applying `.wrapInner()`:

```html
<div>
    <span class="wrapper">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </span>
</div>
```

------

#### Key Points:

- `.wrapInner()` does **not replace** the original content; it encapsulates it inside the specified wrapper element.
- It is **applied individually** to each `<div>` found in the DOM tree.

So, your interpretation is accurate, but note that `.wrapInner()` doesn't just insert the content into the new `<span>` element. It **wraps** the existing content with the new `<span>` element and places it back in the DOM.

## Working with Effects and Animations

The show() and hide() methods are examples of a jQuery effect, which is a method that applies a visual effect to an element selection. The complete syntax of the two methods is as follows:

```javascript
show(speed, easing, callback)
hide(speed, easing, callback)
```

where speed is slow, fast, or the length of the effect in milliseconds, easing specifies the speed of the effect at different points in the animation, and callback is a callback function that is run after the effect is completed. The easing parameter has two possible values:

- swing The default easing in which the changes are slower at the beginning and at the end, but faster in the middle
- linear An easing in which the changes occur at a constant rate

![](C:\Users\asus\Desktop\downloads\codesImage\jQuery effect methods.png)

#### **1. `fadeIn()`**

- **Description:** Gradually changes the opacity of the selected elements from 0 to 1, making them fade into view.

- Example:

  ```javascript
  // Fade in a <div> element over 1000 milliseconds
  $("div").fadeIn(1000);
  ```

------

#### **2. `fadeOut()`**

- **Description:** Gradually changes the opacity of the selected elements from 1 to 0, making them fade out of view.

- Example:

  ```javascript
  // Fade out a <div> element over 500 milliseconds
  $("div").fadeOut(500);
  ```

------

#### **3. `fadeTo()`**

- **Description:** Fades the selected elements to a specified opacity value.

- Example:

  ```javascript
  // Fade a <div> to 50% opacity over 800 milliseconds
  $("div").fadeTo(800, 0.5);
  ```

------

#### **4. `fadeToggle()`**

- **Description:** Toggles between fading in and fading out based on the current visibility state of the selected elements.

- Example:

  ```javascript
  // Toggle fade in and out for a <div> over 600 milliseconds
  $("div").fadeToggle(600);
  ```

------

#### **5. `hide()`**

- **Description:** Hides the selected elements by reducing their size and opacity to zero.

- Example:

  ```javascript
  // Hide a <p> element immediately
  $("p").hide();
  
  // Hide a <p> element over 400 milliseconds
  $("p").hide(400);
  ```

------

#### **6. `show()`**

- **Description:** Reveals the selected elements by increasing their size and opacity from zero.

- Example:

  ```javascript
  // Show a hidden <p> element over 400 milliseconds
  $("p").show(400);
  ```

------

#### **7. `slideDown()`**

- **Description:** Reveals the selected elements with a vertical sliding motion.

- Example:

  ```javascript
  // Slide down a hidden <div> over 700 milliseconds
  $("div").slideDown(700);
  ```

------

#### **8. `slideToggle()`**

- **Description:** Toggles between sliding down and sliding up based on the current state of the selected elements.

- Example:

  ```javascript
  // Slide up or down a <div> depending on its current state
  $("div").slideToggle(500);
  ```

------

#### **9. `slideUp()`**

- **Description:** Hides the selected elements with a vertical sliding motion.

- Example:

  ```javascript
  // Slide up a visible <div> over 600 milliseconds
  $("div").slideUp(600);
  ```

------

#### **10. `toggle()`**

- **Description:** Toggles between the `hide()` and `show()` methods depending on the current state of the selected elements.

- Example:

  ```javascript
  // Toggle visibility of a <p> element
  $("p").toggle(400);
  ```

------

#### Summary

These methods provide smooth animations and transitions, enhancing user interaction in web applications. You can specify durations (in milliseconds) for how long the effect should take, and you can even pass callback functions to execute code after the effect completes.

**Each of the methods described in Figure 12-16 also support the speed, easing, and callback parameters.**

### Chaining effects

jQuery effects can be chained in a queue so that one effect quickly follows another. The following code creates a queue in which the selected elements are initially revealed with the slideDown() effect over a 0.5-second interval, followed by several fade-ins and fade-outs over 0.1-second intervals.

```javascript
$(selector).slideDown(500) .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
```

#### Code:

```javascript
$(selector)
  .slideDown(500)
  .fadeOut(100)
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100);
```

------

#### Explanation:

1. DOM Traversal:
   - `$(selector)` selects the DOM elements that match the given `selector`. For example, if `selector` is `"div"`, it selects all `<div>` elements on the page.
   - Once selected, the effects will be applied sequentially to these elements.

------

1. Chaining of Effects (Queue Behavior):

   - **jQuery automatically queues** effects when chained. That means one effect finishes before the next starts.

   - **Step-by-Step Execution:**

     1. `slideDown(500)`

        :

        - The selected elements slide into view over a 0.5-second (500ms) interval.

     2. `fadeOut(100)`

        :

        - After `slideDown` completes, the elements fade out over 0.1 seconds (100ms).

     3. `fadeIn(100)`

        :

        - The elements fade back in over 0.1 seconds.

     4. This sequence of `fadeOut` and `fadeIn` repeats **4 more times**, creating a total of **8 blinks**.

------

1. Final State:
   - After all effects in the chain are executed, the elements will be visible (`fadeIn(100)` is the last effect).

------

#### **Behavior in Simple Terms:**

1. The content is initially hidden.
2. Over 500ms, the content slides into view (revealed).
3. The content blinks (disappears and reappears) 8 times quickly, with each blink taking 0.2 seconds (100ms for fade out + 100ms for fade in).
4. After the entire sequence, the content is visible and no further effects occur.

------

#### Additional Notes:

- **Chaining:**
  The use of chaining (`.effect1().effect2()...`) ensures that the effects are executed one after the other in the specified order. jQuery handles this internally using an **effects queue**.
- **Example Use Case:**
  This effect might be used to grab attention to a specific element (e.g., a blinking notification or alert) after it appears on the page.

Callback functions can be interspersed within a chain of effects so that the function is run as soon as one effect in the chain concludes but before the next effect begins. With this approach you can time actions to occur within the middle of an effects queue. The following code applies a 1-second fadeout to the div#caption element and then changes the text to “New caption”. After the callback function is finished, the next effect that fades in the element is run.

```javascript
$("div#caption") .fadeOut(1000, () => { $("div#caption").text("New caption"); }) .fadeIn(1000);
```

#### Code:

```javascript
$("div#caption")
  .fadeOut(1000, () => { 
    $("div#caption").text("New caption"); 
  })
  .fadeIn(1000);
```

------

#### **Explanation:**

1. DOM Traversal:
   - The `$("div#caption")` selects the `<div>` element with the `id="caption"`.

------

1. First Effect (`fadeOut(1000)`):
   - The selected element is gradually hidden with a **fade-out effect** over a 1-second (1000ms) interval.
   - This means the element's opacity decreases smoothly until it is completely invisible.

------

1. Callback Function (Inside `fadeOut`):

   - After the `fadeOut` effect finishes, the callback function is executed.

   - In this case, the callback function changes the text content of the element to 

     ```
     "New caption"
     ```

      using:

     ```javascript
     $("div#caption").text("New caption");
     ```

   - At this point, the element is still invisible (because it has been faded out), but its content is updated in the DOM.

------

1. Second Effect (`fadeIn(1000)`):
   - After the callback function finishes, the next effect in the chain, `fadeIn(1000)`, starts.
   - This effect makes the element gradually visible again over a 1-second (1000ms) interval.

------

#### **Sequence Summary:**

1. Find the `<div>` with `id="caption"`.
2. Apply a 1-second fade-out to hide the element.
3. Once the fade-out finishes, execute the callback function to update the text of the element to `"New caption"`.
4. After the text is updated, the element fades back in over 1 second, becoming fully visible again with the new text.

------

#### **Key Features:**

1. **Chained Effects with a Callback:**
   - The `fadeOut()` method accepts a callback function as its second argument. This function runs **only after the fade-out is complete**, ensuring proper timing.
2. **Chaining Mechanism:**
   - By chaining `.fadeIn(1000)` after `.fadeOut()`, jQuery ensures the fade-in effect starts **only after the callback function finishes**.

------

This is a practical way to create smooth, timed transitions in the DOM, such as updating captions, rotating text, or displaying alerts.

### Creating Custom effects with animate

In addition to the jQuery effect methods, you can create custom effects using animations. A jQuery animation is a visual effect accomplished by gradually changing the values of a collection of CSS properties over a specified time interval. Animations are created using the following animate() method:

```javascript
$(selector).animate({properties}, duration, callback)
```

where properties is an object literal of CSS properties and their values, duration is slow, fast, or the time interval in milliseconds, and callback is a function that is run once the animation is concluded.

Every animation needs to have a starting condition to build upon, entered either in the style sheet or within the jQuery code. The following example application applies an animation to the h1.caption elements. Each heading starts within an initial font size, width, and opacity of 0. Over a span of 0.5 seconds, the font size increases to 2em, the width to 800 pixels, and the opacity to 1.

```javascript
$("h1.caption").css({ 
    fontSize: 0, 
    width: 0, 
    opacity: 0 }) .animate({ 
    fontSize: "2em", 
    width: "800px", 
    opacity: 1 }, 500)
```

**The effect will be a heading that appears to grow with increasing font size, width, and opacity. Notice that property values that include units such as the “px” unit for length, need to be quoted. Property values that are numeric do not need quotes.**

A CSS property can be changed relative to its current value using the += and –= operators. In the following code, the font size of the h1.caption elements is increased by 1em relative to their initial font size when the animation starts:

```javascript
$("h1.caption").animate({ 
    fontSize: "+=1em" 
}, 500);
```

Finally, property values can be entered using the following keywords:

- hide Changes the CSS property value to zero.
- show Restores the CSS property value to its initial condition.
- toggle Switches the CSS property value between zero and its initial condition.

For example, the following code toggles the font size and opacity of the h1.caption elements between zero and their initial conditions. The effect alternately hides and reveals the headings each time the animation is applied.

```javascript
$("h1").animate({ 
    fontSize: "toggle" 
    opacity: "toggle" 
}, 500);
```

### Controlling the animation Queue

Animation effects placed within a queue are run in order with each animation starting as soon as the preceding anima- tion finishes. Once an animation has started, it will continue to the end of its duration value. jQuery provides methods to control the queue by delaying an animation, halting a current animation, or removing animations from the queue.

![](C:\Users\asus\Desktop\downloads\codesImage\Methods to control the animation queue.png)

#### Explanation of the Methods to Control the Animation Queue

The image explains several methods in jQuery to manage animation queues. Here's an explanation with examples for each method:

------

##### **1. `clearQueue(queue)`**

- **Description:**
   Removes all items from the animation queue that have not yet been executed. The `queue` parameter specifies the name of the animation queue (default is `"fx"` for animations).

- **Example:**

  ```javascript
  $("#box").animate({ left: "100px" }, 1000)
           .animate({ top: "100px" }, 1000);
  $("#box").clearQueue(); // Removes remaining animations from the queue
  ```

  - The second animation (`top: "100px"`) will not run because the queue is cleared.

------

##### **2. `delay(duration, queue)`**

- **Description:**
   Adds a delay to the animation queue. The `duration` specifies the delay time in milliseconds, and `queue` specifies the queue name (default is `"fx"`).

- **Example:**

  ```javascript
  $("#box").slideDown(500)
           .delay(1000) // Wait 1 second before the next effect
           .fadeOut(500);
  ```

  - The box slides down, pauses for 1 second, and then fades out.

------

##### **3. `dequeue(queue)`**

- **Description:**
   Executes the next function in the queue and removes it. The `queue` parameter specifies the name of the queue.

- **Example:**

  ```javascript
  $("#box").queue(function(next) {
      $(this).css("background-color", "red");
      next(); // Call next() to proceed to the next function in the queue
  });
  $("#box").dequeue(); // Executes the next function in the queue
  ```

------

##### **4. `finish(queue)`**

- **Description:**
   Immediately completes the current animation and all queued animations for the specified queue. It sets the elements to their end state.

- **Example:**

  ```javascript
  $("#box").animate({ left: "100px" }, 2000)
           .animate({ top: "100px" }, 2000);
  $("#box").finish(); // Immediately sets `left: 100px` and `top: 100px`
  ```

  - All animations are stopped and completed instantly.

------

##### **5. `queue(queue)`**

- **Description:**
   Retrieves the list of queued functions for the specified queue or adds new functions to the queue. If `queue` is omitted, it defaults to `"fx"`.

- **Example (Retrieve Queue):**

  ```javascript
  $("#box").queue(function(next) {
      console.log("First function");
      next();
  });
  var queue = $("#box").queue(); // Returns the current queue array
  console.log(queue);
  ```

- **Example (Add to Queue):**

  ```javascript
  $("#box").queue(function(next) {
      $(this).css("background-color", "blue");
      next();
  });
  ```

------

##### **6. `stop(clearQueue, jumpToEnd)`**

- **Description:**
   Stops the current animation.

  - `clearQueue`: If `true`, clears the remaining animations in the queue.
  - `jumpToEnd`: If `true`, immediately finishes the current animation and sets elements to their end state.

- **Example (Stop without Clearing Queue):**

  ```javascript
  $("#box").animate({ left: "100px" }, 2000)
           .animate({ top: "100px" }, 2000);
  $("#box").stop(); // Stops the current animation, but the queue remains
  ```

- **Example (Stop and Clear Queue):**

  ```javascript
  $("#box").animate({ left: "100px" }, 2000)
           .animate({ top: "100px" }, 2000);
  $("#box").stop(true); // Stops the animation and clears the queue
  ```

- **Example (Stop and Jump to End):**

  ```javascript
  $("#box").animate({ left: "100px" }, 2000)
           .animate({ top: "100px" }, 2000);
  $("#box").stop(false, true); // Stops animation and sets it to the final state
  ```

------

##### Summary Table of Use Cases:

| **Method**     | **Use Case**                                                 |
| -------------- | ------------------------------------------------------------ |
| `clearQueue()` | Remove all remaining animations or effects in the queue.     |
| `delay()`      | Add a timed pause before the next animation in the queue.    |
| `dequeue()`    | Execute the next function in the queue immediately.          |
| `finish()`     | Instantly complete all animations in the queue, setting elements to the end state. |
| `queue()`      | Inspect or modify the queue of functions for selected elements. |
| `stop()`       | Halt the current animation, optionally clear the queue, or jump to the end state. |



