import React from 'react'
import './contact.css'
import {AxiosInstance} from "../../config";
import 'bootstrap/dist/css/bootstrap.css'

export default function Contact() {
    return (
        <div className="contact">
        <div class="container contact-form">
            <div class="contact-image">
            <i class="message fas fa-comments"></i>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
                <h4>@publication@mail.com</h4>
           </form>          
        </div>
        </div>
    )
}
