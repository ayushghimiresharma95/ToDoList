

import { useState } from 'react'
import ToDOTable from './ToDOTable'

function ToDoList() {

    const [description, setDescription] = useState(null)
    const [date, setDate] = useState(null)
    const[lists, setLists] = useState([])
    const handleDescription = (e) => {
        e.preventDefault();
        const newItem = {description,date}
        setLists([...lists, newItem])
        console.log(lists)
    }
    return (
        <div>
            <div className='div01'>
                <h1 className='simpletodo'>Simple ToDoList</h1>
            </div>
            <div>
                <form onSubmit={handleDescription}>
                    <label>Description</label>
                    <input className='text' name='dexcription' value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label>Date:</label>
                    <input type='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <button  type='submit'>Add</button>
                </form>
                <ToDOTable items={lists}/>
            </div>
           

        </div>
    )
}

export default ToDoList;
