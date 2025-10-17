import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0ea5e9' },
    secondary: { main: '#8b5cf6' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
    ].join(','),
    button: { textTransform: 'none', fontWeight: 600 },
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
  },
  shape: { borderRadius: 12 },
  props: {
    MuiButton: { disableElevation: true },
  },
  overrides: {
    MuiButton: {
      root: { borderRadius: 12 },
      containedPrimary: { color: '#fff' },
      outlined: { borderWidth: 2, '&:hover': { borderWidth: 2 } },
    },
    MuiAppBar: { colorPrimary: { backgroundColor: '#0f172a' } },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
