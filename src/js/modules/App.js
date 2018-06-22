import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormContainer from "../components/container/FormContainer";

class App extends Component {
    constructor() {
        super();

        this.state = {

        };
    }

    render() {
        const { seo_title } = this.state;
        return (
            <FormContainer/>
        );
    }
}
export default App;
