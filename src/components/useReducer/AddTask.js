import { useState } from 'react';

export default function AddTask({onAddTask}) {
    const [text, setText] = useState('');
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)}/> 
            <button onClick={() => onAddTask(text)} > 添加 </button>
        </>
    )
}