#Överlämningsrapport:


# Repository
https://github.com/doctorbond2/hakims_livs_2304_g06x

 
# Environment variables
Backend ENV:
 MONGODB_URI
 PORT
 ADMIN_KEY
 JWT_ACCESS_KEY
 JWT_REFRESH_KEY

Frontend ENV:
 VITE_BaseUrl
 VITE_ADMIN_KEY
 Contact any of the previous developers for key values.
 
# Routes för requests
Requests marked with "*" are protected with verification through ADMIN_KEY middleware.
Request marked with "¤" are not implemented in the project on the frontend, 
and can be altered or removed from the codebase without any repercussions.

--------------------------
         PRODUCTS 
--------------------------
Beginning of all product endpoints:
 => /api/products


GET (3 requests)
 1. All products 
 => /
 2. Get one product with ID parameter 
 => /:id
 3. Get products in a category using ID parameter
 => /category/categoryId
 
POST (1 request)
 * 1. Create one new product
 => /create

PUT (1 request)
 * 1. Update one product using ID parameter
 => /update/:id

Delete (2 requests)
 * 1. Delete one product using ID parameter
 => /delete/:id

 ¤ * 2. Delete all the products (WARNING: this will delete all products, only use in a dev database. Disable if needed) 
 => /auth/complete/delete
 
--------------------------
         CATEGORY
--------------------------
Beginning of all category endpoints:
 => /api/category

GET (3 requests)
 1. Get all categories with populated product field for more detailed information, used as main GET for all categories.
 => /products/details
 ¤ 2. Get one category using its title.
 => /get-by-name/:id
 3. Get one category using ID parameter
 => /:id


PUT (1 request)
 * 1. Update category using ID parameter.
 => /update/:id

DELETE (1 request)
 * 1. Delete one category using ID parameter.
 => delete/:id

POST (1 request)
 * 1. Create a new category
 => /create

--------------------------
           AUTH
--------------------------
Beginning of all authentication endpoints:
 => /api/auth

GET (1 request)
 1. Simple test for connection. Not implemented, can be ignored/removed.
 => /test

POST (5 requests)
 1. Login request, returns token when successful.
 => /login
 2. Register request, register new user and returns tokens when successful.
 => /register
 3. Logout the user, removing tokens as well.
 => /logout
 ¤ 4. Simple two step test for generating tokens and refreshing them.
 => /test/test/test
 ¤ * 5. Request for register a new admin. Same functionability as regular register but with ADMIN_KEY auth.
 => /register/new/admin

--------------------------
           ORDER
--------------------------
Beginning of all order endpoints:
 => /api/order

GET (3 requests)
 * 1. Get full list of all orders.
 => /
 * 2. Get order by ID parameter.
 => /:id
 ¤ *3. Get order with extended details
 => /details

POST (1 request)
 1. Create a new order
 => /create

PUT (1 request)
 *2. Update an existing order using ID parameter
 => /update/:id

DELETE (1 request)
 *2. Delete an existing order using ID parameter
 => /delete/:id

--------------------------
       USER, SEARCH 
--------------------------

These routes are not implemented, and can be altered, expanded upon or deleted if necessary.

Endpoints: 
GET => /api/user/
GET => /api/user/auth/details
GET => /api/search/

# Guide for using the current version of the site.

1. Logging in
 Log into the site with username and password. To gain access as admin you need the admin permission checked
 in document you try to access inside the user collection of the database, and by logging in with an admin account
 will provide a unique admin tokens that gets saved alongside the other tokens in localstorage.

2. Registering a new account
 You can create an account using the client at the moment. Beware that the only response of
 successfully creating an account will be in the console, not on the page itself.
 It is also NOT possible to create an admin account using the page either. Use an existing account for admin,
 or create one using postman or something similar.

3. Admin panel
 There are three windows that display management for: CATEGORIES, PRODUCTS and ORDERS.

 3.1 Products management
  You can add a new product here by pressing the square "plus" button. To add an image to the product paste the link into the input area.
  The amount input area is a two-parter: First input how much it's weight/volume, then input the unit
  that it is measured in. This will then be calculated into the price comparison for the product.
  Use the update button to open a window with the current information about the product, and edit it right away.
  Pressing a update or a createbutton will trigger a refetch of the list of products. Updating the list.

 3.2 Category management
  Works the same as products management. You can also see all the related product in a list when editing a category. 
  BEWARE: If you delete a product from the list here the product will recieve category = NULL
  
 3.3 Order management
  Here it is only possible to either delete or edit exisiting orders placed by customers.
  Only editing possible is to update payment status and shipping status.

4. General page navigation and functionality

 4.1 Product information/main page
  Productcards are displayed in alphabetical order on the homepage. Clicking on a product image shows a modal with more information.
  It is possible to add product to the cart in both the card and in the modal. It is possible to filter the products by their respective category. This is a simple filter function.
  It is possible to search for a product in the header search input. This will show "cards" of the products that can be clicked to open the product modal.

 4.2 Cart
  Cart access through cards, modal and with button in the navbar header. At the moment it is only possible to completely clear the cart of items through a button press inside the cart.
  If customer wants to remove single items from the cart it has to be done through the cards or modal buttons.
  The cart is currently also the only way to navigate to the checkout page. A button will be visible if the cart contains over 1 product.
  The cart is updated and connected through localstorage.
  If the cart is empty a placeholder message will link to an empty page for special offers, this page is not finished.

 4.3 Checkout
  Field validated area for providing full details when placing an order. The products in cart are shown here as well.
  After placing a successful order, the cart/localstorage will be emptied. The order will be saved and visible in the adminpage.

 4.4 About page
  This is more of a joke, can be removed by Hakim if he feels like it. Needs proper implementation.
  
# Deploying to Vercel

 1. Setup
  Configuration exists in vercel.json files in project. They are separate and different for frontend and backend. 
  Both serverside and clientside are connected to vercel through the same repository and if the plan is to deploy in the same way it's important to deploy the frontend root and backend root
  as TWO SEPARATE PROJECTS on vercel.

 2. Environment variables
  Use the exact same name for ENV on vercel as the ones when working in your local environment.
  Key differences are the values for database connection and base url connection between frontend and backend: Use the vercel domains links as BaseUrls. This means replacing such things
  as "PORT" or "VITE_BaseUrl" on vercel with the domain links for the vercel projects. This will connect the frontend and backend together.
  
 3. Database integration
  Integrate vercel with MongoDB in your backend. This will generate MONGODB_URI automatically in your backend project. This meant vercel now should have it's own connection string to your
  mongodb atlas cluster.
 
 

