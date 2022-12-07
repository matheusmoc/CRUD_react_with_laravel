import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


if (document.getElementById('deluxeRideApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("deluxeRideApp"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}