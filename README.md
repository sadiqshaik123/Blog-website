# Blog-website

This code represents a basic HTML document that serves as the front-end for a Blog Platform web application. Let's break down the components and functionalities of this code:

Document Type Declaration (<!DOCTYPE html>): This is the HTML5 document type declaration, indicating that the document is written in HTML5.

HTML Structure: The HTML document starts with the <html> tag, which encloses all the content of the page. The lang attribute is set to "en" to specify that the primary language of the document is English.

Head Section: The <head> element contains metadata and links to external resources used in the document.

meta tags: These specify the character set (UTF-8) and the viewport settings to control the page's dimensions on different devices.

title tag: This sets the title of the web page, which appears in the browser's title bar or tab.

link tag: This is used to link an external CSS file (style.css) to apply styles to the HTML elements.

Body Section: The <body> element contains the visible content of the web page.

header: This is the header section of the page, containing a logo image (img/logo.png) and a heading with the text "Blog Platform."

section with id="blog-section": This section is the main content area of the page where users can create and read blogs.

Blog Creation Form (<form>):

It contains input fields for the blog title, blog content (textarea), and an image upload input field (type="file").
The "Upload Image" button allows users to select an image file to be associated with the blog.
The "Publish" button is a submit button that is used to publish the blog after filling out the required fields.
Blog Display (<div id="blogs-container">):

This container will be populated with blogs loaded from a JSON file ("blogs.json").
There's also a "Show More" button (<button id="show-more">) that allows users to load more blogs dynamically.
JavaScript: The code includes two <script> tags:

The first script uses the Fetch API to load data from the "blogs.json" file. It converts the response data into a JavaScript object and then calls the initializeBlogDisplay function, passing the loaded data as an argument.

The second script links an external JavaScript file ("scripts.js") that presumably contains the implementation for handling blog display and other interactive functionalities.

Live on: http://blogger.sadiqmagbul.host20.uk/
