import React, { useCallback, useMemo } from 'react'
import useInput from '../../utility/useInput'
import { TodoItemAction, TodoItemContent, TodoItemWrapper } from './style'

const TodoItemComponent = ({ todo, editing, setEditing, updateTodo, changeDoneTodo, deleteTodo }) => {
  const isEditing = useMemo(()=> editing === todo.id, [editing, todo])
  const TodoEditing = () => {
    const { value, setValue, handleChange } = useInput(todo.content)

    const update = useCallback(() => {
      if (!value.trim()) return alert('must be have input value')
      if (!window.confirm('sure update todo ?')) return
  
      updateTodo(todo.id, value)
      setValue('')
      setEditing(null)
    }, [setValue, value])
    const handleCancel = useCallback(() =>  window.confirm('sure give editing ?') && setEditing(null), [])

    const handleInputKeyUp = (e) => {
      if (e.key === 'Enter') return update()
      if (e.key === 'Escape') return handleCancel()
    }

    return (
      <>
        <TodoItemContent>
          <input type="text" value={ value } onChange={ handleChange } onKeyUp={ handleInputKeyUp } />
        </TodoItemContent>
        <TodoItemAction>
          <button onClick={ update }><i className="fa fa-check"></i></button>
          <button onClick={ handleCancel }><i className="fa fa-close"></i></button>
        </TodoItemAction>
      </>
    )
  }
  
  const handleSetEdit = () => (!editing || (!isEditing && window.confirm('give up editing ?'))) && setEditing(todo.id)
  const handleDeleteTodo = () => (window.confirm(`sure delete this todo: ${todo.content}`) && deleteTodo(todo.id))
  const handleChangeDone = () => changeDoneTodo(todo.id)

  return(
    <TodoItemWrapper>
      {  
        isEditing ?
        <TodoEditing/> :
        <>
          <TodoItemContent  isDone={todo.isDone}>
            <h3>{ todo.content }</h3>
          </TodoItemContent>
          <TodoItemAction>
            <button onClick={ handleSetEdit }><i className="fa fa-edit"></i></button>
            <button onClick={ handleChangeDone }>
              <i className={`fa ${todo.isDone ? 'fa-check-square' : 'fa-square'}`}></i>
            </button>
            <button onClick={ handleDeleteTodo }><i className="fa fa-trash"></i></button>
          </TodoItemAction>
        </>
      }
    </TodoItemWrapper>
  )
}

export default TodoItemComponent
