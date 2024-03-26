import React, { useState, useRef } from 'react';
import ToDOTable from './ToDOTable';
import { Button, Stack, TextField } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';



function ToDoList() {
    const gridRef = useRef(null); // Reference for AgGridReact component

    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [priority, setPriority] = useState('');
    const [lists, setLists] = useState([]);

    const columns = [
        { field: "description", sortable: true, filter: true },
        {
            field: "priority", sortable: true, filter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: "date", sortable: true, filter: true }
    ];

    const handleDescription = (e) => {
        e.preventDefault();
        const newItem = { description: description, priority: priority, date: date };
        setLists([...lists, newItem]);
        setDescription('');
        setPriority('');
        setDate('');
    };



    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" width={"100%"} padding="30px">
                <div className='list_input01'>Add ToDo: </div>
                <form onSubmit={handleDescription} className='list_input'>
                    <TextField label="Description" className='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <TextField label="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
                    <TextField type="date" value={date}  onChange={(e) => setDate(e.target.value)} />
                    
                    <Button type='submit'>Add</Button>
                </form>




            </Stack>
            <div className="ag-theme-material" style={{ width: "100%", height: 500 }}>
                <AgGridReact

                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={lists}
                    columnDefs={columns}
                    rowSelection='single'

                />
            </div>

        </div>
    );
}

export default ToDoList;
