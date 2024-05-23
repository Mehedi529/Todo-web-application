# Todo-web-application

This project is a simple To-do web application build with Next.js, Redux, and Tailwind CSS. It allows users to create, edit, delete, and view the list of to-do items with pagination support. The application state is persisted in browser local storage to retain the to-do items even after a page refresh.

# Table of Contents
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Installation](#Installation)
- [Live Demo](#Live-Demo)
- [Usage](#Usage)
- [Components](#Components)
- [Redux](#)
- [Utility](#)
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


## Comonents
- `CreateTodo` Component
  - The `CreateTodo` component allows users to add new to-do items. It uses `useRef` to get the values of the input fields and dispatch the `AddTodo` action to the Redux store.
  "use client";

import { AddTodo } from "@/redux/state/todoSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux"

const CreateTodo = () => {

  const dispatch = useDispatch();
  const titleInput = useRef();
  const descriptionInput = useRef();

  const handleAddTodo = () =>{
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
    if(title && description) {
        dispatch(AddTodo({title, description}));
        titleInput.current.value = '';
        descriptionInput.current.value = '';
    }  
  }


  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        <div className="w-full md:w-10/12 mb-4 md:mb-0">
          <input
            ref={titleInput}
            placeholder="Title"
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full md:w-10/12 mb-4 md:mb-0">
          <input
            ref={descriptionInput}
            placeholder="Description"
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-full md:w-2/12">
          <button
            onClick={handleAddTodo}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Add To Do
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateTodo

- `TodoDeleteAlert` Component
- `TodoEditAlert` Component
- `TodoList` Component
