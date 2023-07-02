import './bootstrap';
import  React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App'
import { BrowserRouter } from 'react-router-dom';

//sweetalert2
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css'
window.swal = Swal
const toast =Swal.mixin({
    toast:true,
    position: 'top-end',
    showConfirmButton:false,
    timer: 3000,
    timeProgressBar: true,
})
window.toast = toast

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter >
    <App />
    </BrowserRouter>
)

