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