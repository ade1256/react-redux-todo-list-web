import moment from "moment";
import { useCallback, useMemo, useState } from "react";
import { TodoButton, TodoInput, TodoItem } from "..";
import useTodos from "../../utility/useTodo";
import { Button, TodoFooter, TodoItemList } from "./style";
const initialTodo = [
  {
    id: "c6411e9a-ac4b-4368-855c-9ca633961355",
    title: "Mengerjakan PR",
    description: "PR nya matematika halaman 10",
    status: 0,
    date: moment().format("DD/MM/YYYY HH:mm"),
  },
];
const TodoComponent = () => {
  const [editing, setEditing] = useState(null);

  const {
    todos,
    setTodos,
    filterValue,
    setFilterValue,
    handleAddTodo,
    handleUpdateTodo,
    handleChangeDoneTodo,
    handleDeleteTodo,
    filterTodos,
  } = useTodos(initialTodo);

  const handleInputAdd = useCallback(
    (value) => (editing ? alert("Selesaikan edit anda") : handleAddTodo(value)),
    [editing, handleAddTodo]
  );
  const handleClearTodo = () => {
    if (!todos.length) return alert("data sudah kosong!");
    if (window.confirm("yakin mau hapus semua?")) {
      setTodos([]);
      setEditing(null);
    }
  };

  const filterTodosLen = useMemo(() => filterTodos.length, [filterTodos]);

  return (
    <>
      <TodoInput addTodo={handleInputAdd} />
      <TodoButton filterValue={filterValue} setFilter={setFilterValue} />
      <TodoItemList>
        {filterTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editing={editing}
            setEditing={setEditing}
            updateTodo={handleUpdateTodo}
            changeDoneTodo={handleChangeDoneTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))}
      </TodoItemList>
      <TodoFooter>
        total: {filterTodosLen}
        <Button onClick={handleClearTodo}>Clear all</Button>
      </TodoFooter>
    </>
  );
};

export default TodoComponent;
