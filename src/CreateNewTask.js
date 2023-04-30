import React, {useState} from 'react';

const CreateNewTask = (props) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            Create new Task:
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={() => props.createTask(inputValue)}> save </button>
        </div>
    );
};

export default CreateNewTask;