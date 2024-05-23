"use client";
import { SetCurrentPage } from "@/redux/state/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { TodoEditAlert } from "./TodoEditAlert";
import { TodoDeleteAlert } from "./TodoDeleteAlert";
import { useEffect, useState } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const { value: todoItems, currentPage, itemsPerPage } = useSelector((state) => state.todo);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = todoItems.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todoItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    dispatch(SetCurrentPage(pageNumber));
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentTodos.map((item, i) => (
            <tr key={i.toString()}>
              <td className="px-6 py-4 whitespace-nowrap">{indexOfFirstTodo + i + 1}</td>
              <td className="px-6 py-4 whitespace-wrap max-w-xs overflow-hidden overflow-ellipsis">{item.title}</td>
              <td className="px-6 py-4 whitespace-wrap max-w-xs overflow-hidden overflow-ellipsis">{item.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => TodoEditAlert(indexOfFirstTodo + i, item)}
                  className="text-sm bg-gray-800 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => TodoDeleteAlert(indexOfFirstTodo + i)}
                  className="text-sm bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;