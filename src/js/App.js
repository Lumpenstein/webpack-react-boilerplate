import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormContainer from "./components/forms/FormContainer";

class App extends Component {
    constructor() {
        super();

        this.state = {
            /*  appIsLoading
                isLoggedIn
                etc
             */
        };
    }

    render() {
        return (
            <FormContainer/>
        );
    }
}
export default App;
