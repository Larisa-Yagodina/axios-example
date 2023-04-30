import React, {useState} from 'react';

const Task = (props) => {

    const [openEditMode, setOpenEditMode] = useState(false)
    const [name, setName] = useState(props.task.name)

    const toggle = () => {
        setOpenEditMode(!openEditMode)
    }


    const saveButtonHandler = () => {
        props.editTask(props.task._id, name)
        toggle()
    }

    return (
        <div>
            {props.task.name}
            {' '}
            {!openEditMode ?
                <>
                    <button onClick={toggle}>edit</button>
                    <button onClick={() => props.deleteTask(props.task._id)}>delete</button>
                </>
                :
                <>
                    <input value={name} onChange={e => setName(e.target.value)}/>
                    <button onClick={saveButtonHandler} >save</button>
                    <button onClick={toggle}>cancel</button>
                </>
            }

        </div>
    );
};

export default Task;