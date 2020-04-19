import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import 'swiper/css/swiper.css';

render((
<BrowserRouter basename="/">
   <App />
</BrowserRouter>
), document.getElementById('root'));
serviceWorker.unregister();
