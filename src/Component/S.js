//todo list 
import React, { useState } from 'react';


const S = () => {
    const [task, setTask] = useState('');
    let[todo,setTodo]= useState([])

    function adding(){
        datapass(task)
        setTask('')
    }
    
    function datapass(add){
        setTodo([...todo,add])
    }
    

    return (
        <div className="one">
            <h1>To-Do List</h1>
            <div className="two">
                <input 
                    type="text"
                    type1="number" 
                    value={task} 
                    onChange={(e)=>setTask(e.target.value)} 
                    
                />
                <button onClick={adding}>Add</button>
            </div>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index} className="ti">
                        {todo}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default S;
