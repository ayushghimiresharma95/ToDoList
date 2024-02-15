

import { useState } from 'react'
import ToDOTable from './ToDOTable'

function ToDoList() {

    const [description, setDescription] = useState(null)
    const [date, setDate] = useState(null)
    const[lists, setLists] = useState([])
    const handleDescription = (e) => {
        e.preventDefault();
        const newItem = {description:description,date:date}
        setLists([...lists, newItem])
        setDescription('');
        setDate('');
       
    }
    return (
        <div>
            <div className='div01'>
                <h1 className='simpletodo '>Simple ToDoList</h1>
            </div>
            <div>
            <div className='list_input01' >Add ToDo: </div>
                <form onSubmit={handleDescription} className='list_input' >
                    <label>Description</label>
                    <input className='text' name='dexcription' value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label>Date:</label>
                    <input type='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <button  type='submit'>Add</button>
                </form>
                <ToDOTable items={lists} setLists={setLists}/>
            </div>
           

        </div>
    )
}

export default ToDoList;
