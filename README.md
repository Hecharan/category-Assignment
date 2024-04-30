

**HTML File (index.html):**
- This file defines the structure of the webpage.
- It includes meta tags for character set and viewport settings.
- The title of the webpage is set to "Product details".
- It links to an external CSS file (`styles.css`) for styling.
- The body of the HTML includes elements for displaying product categories, product cards, and a script tag for JavaScript functionality.

**CSS File (styles.css):**
- This file contains styling rules for various elements of the webpage.
- It styles the body, tabs, product containers, product cards, images, badges, add-to-cart buttons, and price containers.
- The styles are defined for responsiveness and visual appeal.

**JavaScript File (script.js):**
- This file contains JavaScript functions for fetching product data and rendering product cards.
- The `showTab()` function is triggered when a category tab is clicked. It fetches product data based on the selected category and displays the products accordingly.
- The `createProductCard()` function dynamically creates product cards based on the product data fetched from the server.
- Product details such as image, title, vendor, price, compare at price, and discount percentage are displayed on the product cards.
- The default category tab ('Men') is selected when the page loads.

**Overall:**
- The code creates a webpage for displaying product details organized by different categories (Men, Women, Kids).
- It fetches product data from a JSON file hosted on a server and dynamically generates product cards based on the fetched data.
- The webpage is styled using CSS to enhance its visual presentation and responsiveness.
- JavaScript is used to add interactivity to the webpage, allowing users to select different categories and view corresponding products without reloading the page.
