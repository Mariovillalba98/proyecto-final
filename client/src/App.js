import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';import {ThemeProvider} from '@mui/material/styles';
import theme from './components/Theme/Theme';
import { createTheme } from '@mui/material/styles';
import {useState} from "react"
import {ColorContextProvider} from './components/Theme/Theme';
import axios from 'axios';
axios.defaults.baseURL="https://proyecto-final-production-13d6.up.railway.app";


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