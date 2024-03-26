
import { Container, CssBaseline } from '@mui/material'
import './App.css'
import ToDoList from './assets/ToDoList.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      
      id={`tabpanel-${index}`}
      
     
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function App() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Container>
        <CssBaseline>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="Tabs">
                <Tab label="Home" />
                <Tab label="Todos" />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Typography variant="h4">Welcome to the Home Page</Typography>
              <Typography>
                This is where you can display any welcome message or content.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ToDoList />
            </TabPanel>
          </Box>
        </CssBaseline>
      </Container>
    </LocalizationProvider>
  )
}

export default App
