# Todo-web-application

This project is a simple To-do web application build with Next.js, Redux, and Tailwind CSS. It allows users to create, edit, delete, and view the list of to-do items with pagination support. The application state is persisted in browser local storage to retain the to-do items even after a page refresh.

# Table of Contents
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Installation](#Installation)
- [Live Demo](#Live-Demo)
- [Usage](#Usage)
- [Components](#Components)
- [Redux](#Redux)
- [Utility](#Utility)
- [Pagination Behavior](#Pagination-Behavior)
<!-- - [](#) -->

## Features
- Add new to-do items with a title and description.
- Edit existing to-do items.
- Delete to-do items with confirmation.
- Pagination through the list of to-do items.
- Persist application state in browser local storage.

## Technologies Used
- Database: Browser Local Storage
- Designing: HTML, CSS, TailwindCSS
- State Management: Redux
- Development: Next.js

## Installation
- Clone the repository:
  - `git clone https://github.com/Mehedi529/Todo-web-application.git`
- Install dependencies:
  - `npm install`
- Start the development server:
  - `npm run dev`

## Live Demo
- You can view a live demo of the application here
  - `https://todowebapplication-mehedihasan49265gmailcoms-projects.vercel.app/`

## Usage
- Open the application in your browser at `http://localhost:3000`.
- Use the input fields to add new to-do items.
- Edit or delete existing to-do items using the provided buttons.
- Navigate through the to-do list using pagination controls.


## Components
- `CreateTodo` Component
  - The `CreateTodo` component allows users to add new to-do items. It uses `useRef` to get the values of the input fields and dispatch the `AddTodo` action to the Redux store.

- `TodoDeleteAlert` Component
  - The `TodoDeleteAlert` function is a helper that shows a confirmation dialog using `SweetAlert2` when the user attempts to delete a to-do item. If the user confirms the deletion, it dispatches the `RemoveTodo` action to remove the item from the Redux store.

- `TodoEditAlert` Component
  - The `TodoEditAlert` function is a helper that shows a prompt dialog using `SweetAlert2` when the user attempts to edit a to-do item. It allows the user to update the title and description of the to-do item. If the user confirms the change, it despatches the `EditTodo` action to update the item in the Redux store.

- `TodoList` Component
  - The `TodoList` component displays the list of to-do items with pagination.

## Redux
- Store
  - The `store` is configured using Redux Toolkit's configureStore function. It loads the initial state from local storage if available, and subscribes to save the state to local storage on every state update. The store is passed to the `Provider` component to make the Redux state available throughout the application.

- State
  - The `todoSlice` is a slice of the Redux state created using Redux Toolkit's createSlice function. It contains the state for the to-do items, current page, and items per page. It also includes the following reducers:
  - AddTodo: Adds a new to-do item to the state.
  - RemoveTodo: Removes a to-do item from the state based on the provided index and adjusts the current page if necessary.
  - EditTodo: Edits an existing to-do item based on the provided index, title, and description.
  - SetCurrentPage: Sets the current page for pagination.
  - SetItemsPerPage: Sets the number of items to display per page.

## Utility
- Local Storage
  - The local storage utility provides functions to save and load the application's state to and from the browser's local storage. This ensures that the to-do items persist even after a page refresh or when the browser is closed and reopened.

## Pagination Behavior
- The application includes functionality to automatically navigate to the previous page if all items on the current page are deleted. This ensures a smooth user experience by preventing the display of an empty page.