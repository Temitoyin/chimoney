## Project Title

Chimoney Front End Test

## Url

https://chimoneystore.netlify.app/

## Description

A fully mobile responsive ecommerce Application, titled chimoney, it simulates an ecommerce experience, using localStorage as the store of data, this application allows you to perfrom a couple of funcions:

Add an item to cart
Remove an item from the cart
View product details

## Development Environment

### Setup

Ensure you have the following softwares installed:

- [Node](https://nodejs.org)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

#### Starting the App

From within the app run the following commands

```sh
yarn

```

to install the dependencies

```sh
yarn dev

```

to start the project Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

The root folder is the src
This contains:
assets
Assets contain folder like images, styles or fonts, in this case it only contains styles, the styles are built in a modular way to separate order of concerns and then exported together as a single stylesheet

components
Components are the various react components created in the project

context
Context holds the context logic used in creating this project

pages
Pages are the various pages that display on accessing each route

utils
This contains helper functions

## Features

Add To Cart
A user can add a product to cart from either the product listing page or the product details page

Remove Item From Cart
A user can remove an item that has been added to cart from the cart page

Increment Product Quantity
A user can increment the product quantity of a product added to cart

Decrement ProductQuantity
A user can decrement the product quantity of a product added to cart

Notification
A user is notified when a either a product is added to or removed from the cart

Minimum Quanity
A user cannot go below one when setting the quantity

Cart Icon
The quantity in the local storage is synced to the cart icon on the navigation

Hover States
Subtle animations are added to componets to show user activity

## Approach

Framework
-I chose next js because of it's routing and image optimization

Sate Management
-I chose context because the requirements did not need a complex state manager like redux

Structure
The application is wrapped in an "AppContextProvider" a higher other function created based on the context api, that allows you to have access
to the global state, and various functions needed in the children components. The initial state has an "updating" value. This value is used to
signal to various functions that have to do with information in the cart that a change has been made. Using the useEffect in children components listening to any change in the "updating" value, the calls are refired to refetch data. This ensures a sync in the application.

## Tradeoffs

One of the instructions required the cart to only have information of the item ids and thier quantities, I went against this
because it affected the user experience, and the sync of the application. The shopping cart page needs the product information,
having multiple sources of data for the cart, item ids and thier quanitites and also the cart product data, was causing issues. So I stored
each product added to cart marked with the item id in the cart, this gave me a single data point to manipulate.

## Improvements

A couple of optimisations can be added to improve performance, depending on the scale of the application.

As state management becomes more complex, switching to redux would improve maintainability, debugging and performance as the redux state is treated as immutable.

Improve site performance by moving some of the api calls from the client side to the server side.

As more products are added to the listing page pagination would improve the user experience to allow ease of navigation

Adding a filter componet to the listing to filter through various products

Loading state animations for when a button is clicked and an api call is being made to when a page is loading and an api call is being made

End to end tests should be written to reduce error rate

-Implement search to allow users search for products

-Create Mixins to modularize generrally used styles

-Upload images to cloudinary to enable image transforms and optimizations

## Styles

Styles are built in a modular way. Each folder houses the styles needed for it to render. The project uses camelCase naming convention.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
