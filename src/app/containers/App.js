import React from "react";
import {connect} from "react-redux";

import { Header } from "../components/Header";

class App extends React.Component {  
    
    render() {
        return (
                <div>
                    <Header auth={this.props.authenticated}/>
                    <div class="container">
                        {this.props.children}
                    </div>
                </div>
                )
    }
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(App);