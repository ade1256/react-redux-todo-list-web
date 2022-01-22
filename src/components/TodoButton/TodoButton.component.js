import { useRef } from "react"
import { Button, FilterBtnWrapper } from "./style"

const TodoButtonComponent = ({ filterValue, setFilter }) => {
  const btnList = useRef(['All', 'Done', 'Todo'])

  return (
    <FilterBtnWrapper>
      { 
        btnList.current.map((btn) => (
          <Button 
            key={btn} 
            active={filterValue === btn} 
            onClick={() => setFilter(btn)}>
            { btn }
          </Button>
        ))
      }
    </FilterBtnWrapper>
  )
}

export default TodoButtonComponent
