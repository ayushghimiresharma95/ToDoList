
import { Container, CssBaseline } from '@mui/material'
import './App.css'
import ToDoList from './assets/ToDoList.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Container>
      <CssBaseline>
        <ToDoList />
      </CssBaseline>
    </Container>
    </LocalizationProvider>
  )
}

export default App
