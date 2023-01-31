import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';import {ThemeProvider} from '@mui/material/styles';
import theme from './components/Theme/Theme';
import { createTheme } from '@mui/material/styles';
import {useState} from "react"
import {ColorContextProvider} from './components/Theme/Theme';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3001";


function App() {
	
	return (
		<ColorContextProvider >
			<BrowserRouter>
				<Routes />	
			</BrowserRouter>
		</ColorContextProvider>
	);
}

export default App;