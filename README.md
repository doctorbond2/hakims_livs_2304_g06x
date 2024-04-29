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

1. Logging in:
 Log into the site with username and password. To gain access as admin you need the admin permission checked
 in document you try to access inside the user collection of the database, and by logging in with an admin account
 will provide a unique admin tokens that gets saved alongside the other tokens in localstorage.

2. Registering a new account:
 You can create an account using the client at the moment. Beware that the only response of
 successfully creating an account will be in the console, not on the page itself.
 It is also NOT possible to create an admin account using the page either. Use an existing account for admin,
 or create one using postman or something similar.

3. The admin panel:
 There are three windows that display: CATEGORIES, PRODUCTS and ORDERS.
 3.1 Admin products manager panel
 
 

