import PubSub from 'pubsub-js';
import React, { Component } from 'react';

class Result extends Component {
    state = {"result":0}

    getResult = () =>{
        PubSub.subscribe("result", (msg, data) => {
            this.setState(data);
        });
    }

    componentDidMount(){
        PubSub.publish("currentState", {"result":this.state.result});
        console.log(`Result -> result:${this.state.result}`);
        PubSub.subscribe("result", (msg, data) => {
            this.setState(data);
        });
    }

    render() {
        return (
            <div>
                Result: {this.state.result}
            </div>
        );
    }
}

export default Result;  