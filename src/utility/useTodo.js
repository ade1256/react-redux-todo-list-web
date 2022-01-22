import moment from "moment";
import { useState, useEffect, useMemo, useCallback } from "react";
import { v4 } from "uuid";

const useTodos = (initialValue = [], localStorageKey = "todos") => {
  const [filterValue, setFilterValue] = useState("Todo");
  const [todos, setTodos] = useState(() => {
    try {
      const item = window.localStorage.getItem(localStorageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() =>
    window.localStorage.setItem(localStorageKey, JSON.stringify(todos))
  );

  const handleAddTodo = useCallback(
    (todoContent) => {
      setTodos([
        {
          id: v4(),
          title: todoContent.title,
          description: todoContent.description,
          status: 0,
          date: moment().format("DD/MM/YYYY HH:mm"),
        },
        ...todos,
      ]);
    },
    [todos]
  );

  const handleUpdateTodo = useCallback(
    (id, newContent) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;
          return {
            ...todo,
            title: newContent.title,
            description: newContent.description,
            date: moment().format("DD/MM/YYYY HH:mm"),
          };
        })
      );
    },
    [todos]
  );

  const handleChangeDoneTodo = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;
          return {
            ...todo,
            status: todo.status === 0 ? 1 : 0
          };
        })
      );
    },
    [todos]
  );

  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const filterTodos = useMemo(() => {
    const options = {
      Done: (todo) => todo.status === 1,
      Todo: (todo) => todo.status === 0,
    };
    let ascending = todos.sort((a, b) => moment(a.date, 'DD/MM/YYYY HH:mm').diff(moment(b.date, 'DD/MM/YYYY HH:mm')))
    let descending = todos.sort((a, b) => moment(b.date, 'DD/MM/YYYY HH:mm').diff(moment(a.date, 'DD/MM/YYYY HH:mm')))

    if(filterValue === "Todo") {
      return ascending.filter(options[filterValue])
    }

    if(filterValue === "Done") {
      return descending.filter(options[filterValue])
    }
  }, [filterValue, todos]);

  return {
    todos,
    setTodos,
    filterValue,
    setFilterValue,
    handleAddTodo,
    handleUpdateTodo,
    handleChangeDoneTodo,
    handleDeleteTodo,
    filterTodos,
  };
};

export default useTodos;
