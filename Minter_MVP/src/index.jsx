import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/app";
import { Provider } from "react-redux";
import store from './store';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const rootEl = document.getElementById('root');

const theme = createMuiTheme({
    typography: {
        button: {
            textTransform: 'none',
            fontFamily: 'SourceSansPro'
        }
    },
    palette: {
        primary: {
            main: '#4527A0' //4527A0 give 800 from this url: https://material.io/design/color/the-color-system.html#tools-for-picking-colors
        },
        secondary: {
            main: '#AD1457'
        }
    }
});

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </HashRouter>
        </Provider>, rootEl
    );
};

renderApp();

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}