import React from 'react'
import { Checkbox, IconButton, ListItem } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div style ={{ display: "flex" }}>
            <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
            <ListItem variant="body1" style={{ textDecoration: todo.completed ? "line-through" : null}}>
                {todo.task}
            </ListItem>
            <IconButton onClick={handleRemoveClick}><CloseIcon /></IconButton>
        </div>
    )
}

export default Todo
