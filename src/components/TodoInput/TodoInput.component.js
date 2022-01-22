import { useCallback, useState } from "react"
import { Button } from "../TodoButton/style"
import { Input, TodoInputWrapper } from "./style"

const TodoInputComponent = ({ addTodo }) => {
  const [value, setValue] = useState(
    {
      title: '',
      description: ''
    }
  )

  const handleChange = (name) => (e) => setValue({ ...value, [name]: e.currentTarget.value })

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    if (!value.title.trim() || !value.description.trim()) return alert('Tolong isi judul dan deskripsi')
    addTodo(value)
    setValue({
      title: '',
      description: ''
    })
  }, [addTodo, value, setValue])

  return (
    <TodoInputWrapper onSubmit={ handleSubmit }>
      <div className="input-wrapper">
        <label>Title</label>
        <Input 
          type="text" 
          value={value.title} 
          onChange={handleChange('title')} />
      </div>
      <div className="input-wrapper">
      <label>Description</label>
        <Input 
          type="text" 
          value={value.description} 
          onChange={handleChange('description')}  />
      </div>
      <Button>Add item</Button>
    </TodoInputWrapper>
  )
}

export default TodoInputComponent
