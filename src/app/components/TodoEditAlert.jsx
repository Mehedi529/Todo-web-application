import { EditTodo } from "@/redux/state/todoSlice";
import store from "@/redux/store/store";
import Swal from "sweetalert2";


export function TodoEditAlert(i,item){
    Swal.fire({
        title: 'Update Task',
        html: `
          <input id="swal-input1" class="swal2-input" placeholder="Title" value="${item.title}">
          <input id="swal-input2" class="swal2-input" placeholder="Description" value="${item.description}">
        `,
        focusConfirm: false,
        preConfirm: () => {
          const title = document.getElementById('swal-input1').value;
          const description = document.getElementById('swal-input2').value;
          if (title && description) {
            store.dispatch(EditTodo({
              index: i,
              title,
              description
            }));
        }
      }
    });
}