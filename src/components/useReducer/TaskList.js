import { useState } from 'react';

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
        <ul>
           {tasks.map(item => {
              return (
                <li key={item.id}>
                    <TaskItem task={item} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask}/>  
                </li>
            )
           })}
        </ul>
    )
}


function TaskItem({task, onChangeTask, onDeleteTask}) {
    const [text, setText] = useState(task.text);
    const [editStatus, setEditStatus] = useState(false);
    return (
        <div >
           {
            !editStatus ?
            <>  
                {task.text}
                <button onClick={() => {
                    setEditStatus(!editStatus)
                }}>编辑</button>
             </>  :
            <>
                <input value={text} onChange={e => setText(e.target.value)}/> 
                <button onClick={()=> {
                    onChangeTask({
                        ...task,
                        text: text
                    })
                    setEditStatus(!editStatus)
                }}>保存</button>
            </>
           }
            <button onClick={()=> {
                onDeleteTask(task.id)
            }}>删除</button>
        </div>
    )
}