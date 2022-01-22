import React, { useCallback, useMemo, useState } from 'react'
import { TodoItemAction, TodoItemContent, TodoItemWrapper } from './style'

const TodoItemComponent = ({ todo, editing, setEditing, updateTodo, changeDoneTodo, deleteTodo }) => {
  const isEditing = useMemo(()=> editing === todo.id, [editing, todo])
  const TodoEditing = () => {
    const [value, setValue] = useState(
      {
        title: todo.title,
        description: todo.description
      }
    )
  
    const handleChange = (name) => (e) => setValue({ ...value, [name]: e.currentTarget.value })

    const update = useCallback(() => {
      if (!value.title.trim()) return alert('Isi sesuatu')
      if (!window.confirm('yakin mau mengubah ?')) return
  
      updateTodo(todo.id, value)
      setValue('')
      setEditing(null)
    }, [setValue, value])
    const handleCancel = useCallback(() =>  window.confirm('batal edit ?') && setEditing(null), [])

    return (
      <>
        <TodoItemContent>
          <input type="text" value={ value.title } onChange={ handleChange('title') } />
          <input type="text" value={ value.description } onChange={ handleChange('description') } />
        </TodoItemContent>
        <TodoItemAction>
          <button onClick={ update }><i className="fa fa-check"></i></button>
          <button onClick={ handleCancel }><i className="fa fa-close"></i></button>
        </TodoItemAction>
      </>
    )
  }
  
  const handleSetEdit = () => (!editing || (!isEditing && window.confirm('yakin ?'))) && setEditing(todo.id)
  const handleDeleteTodo = () => (window.confirm(`yakin mau menghapus : ${todo.title}`) && deleteTodo(todo.id))
  const handleChangeDone = () => changeDoneTodo(todo.id)

  return(
    <TodoItemWrapper>
      {  
        isEditing ?
        <TodoEditing/> :
        <>
          <TodoItemContent  isDone={todo.status === 1}>
            <h3>{ todo.title }</h3>
            <p>{ todo.description}</p>
          </TodoItemContent>
          <TodoItemAction>
            <button onClick={ handleSetEdit }><i className="fa fa-edit"></i></button>
            <button onClick={ handleChangeDone }>
              <i className={`fa ${todo.status === 1 ? 'fa-check-square' : 'fa-square'}`}></i>
            </button>
            <button onClick={ handleDeleteTodo }><i className="fa fa-trash"></i></button>
          </TodoItemAction>
        </>
      }
    </TodoItemWrapper>
  )
}

export default TodoItemComponent
