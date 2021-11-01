import React from 'react'
import "./about.css"
import "bootstrap/dist/css/bootstrap.css"

export default function About() {
    return (
        <div className="about">
            <div class="jumbotron text-center p-5">
            <h1>Publication</h1>
            <p>We offer the best updates</p>
            </div>
            <div className="m-5">
            <div class="container-fluid ">
            <div class="row">
                <div class="col-sm-8">
                <h2>About The Publication</h2>
                <h4>Lorem ipsum..</h4>
                <p>Lorem ipsum..</p>
                <button class="btn btn-warning text-white btn-lg">Get in Touch</button>
                </div>
                <div class="col-sm-4">
                <span class="iconx"><i class="fas fa-signal"></i></span>
                </div>
            </div>
            </div>

            <div class="container-fluid bg-grey ml-5">
            <div class="row">
                <div class="col-sm-4">
                <span class="iconx2"><i class="fas fa-globe-asia"></i></span>
                </div>
                <div class="col-sm-8">
                <h2>Our Values</h2>
                <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>
                <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
                </div>
            </div>
            </div>
            </div>
            <div class="cont container-fluid text-center">
            <h2>SERVICES</h2>
            <h4>What we offer</h4>
            <br/>
            <div class="row">
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-off"></span>
                <h4>POWER</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-heart"></span>
                <h4>LOVE</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-lock"></span>
                <h4>JOB DONE</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                </div>
                <br/><br/>
            <div class="row">
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-leaf"></span>
                <h4>GREEN</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-certificate"></span>
                <h4>CERTIFIED</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-wrench"></span>
                <h4>HARD WORK</h4>
                <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div>
            </div>
        </div>
        
    )
}
