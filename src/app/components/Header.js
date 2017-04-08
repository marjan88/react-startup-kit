import React from "react";
import {Link} from "react-router";
// stateles component or "dumb component"
export const Header = (props) => {            
            
            let renderLinks = () => {
                if(!props.auth) {
                    return [
                        <li key={1}><Link to="/signin">Signin</Link></li>,
                        <li key={2}><Link to="/singup">Singup</Link></li>
                        ]
                } else {
                    return (<li><Link to="/logout">Logout</Link></li>);
                }
            }            
            return (
                <nav class="navbar navbar-default navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">React Advanced</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="active"><Link to="/">Home</Link></li>
                                <li><Link to="/resources">Resources</Link></li>            
                                <li><Link to="/users">Users</Link></li>            
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                               {renderLinks()}
                            </ul>
                        </div>
                    </div>
                </nav>
                    );
        };