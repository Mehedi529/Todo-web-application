"use client";

import store from "@/redux/store/store";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <main className="min-screen flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <div className="bg-white shadow-md rounded-lg">
          <div className="bg-gray-100 p-4 rounded-t-lg">
            <h5 className="text-lg font-bold">Todo web application</h5>
          </div>
          <div className="p-4">
            <Provider store={store}>
              <CreateTodo />
              <TodoList />
            </Provider>
          </div>
        </div>
      </div>
    </main>
  );
}
