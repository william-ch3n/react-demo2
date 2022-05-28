import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class Actions extends Component {

    state = {};

    componentDidMount(){
        PubSub.subscribe("currentState", (msg, data) => {this.setState(data)});
        PubSub.subscribe("number", (msg, data) => {this.setState(data)});
    }

    add = async() =>{
        if(this.state.number == undefined){
            alert("No selected number!");
        }else{
            let res = this.state.result + this.state.number;
            await this.setState({"result":res});
            PubSub.publish("result", {"result":this.state.result});
            console.log(`Actions -> after result:${this.state.result}, number:${this.state.number}`);
        }
    }

    sub = async() => {
        if(this.state.number == undefined){
            alert("No selected number!");
        }else{
            let res = this.state.result - this.state.number;
            await this.setState({"result":res});
            PubSub.publish("result", {"result":this.state.result});
            console.log(`Actions -> after result:${this.state.result}, number:${this.state.number}`);
        }
    }

    mul = async() => {
        if(this.state.number == undefined){
            alert("No selected number!");
        }else{
            let res = this.state.result * this.state.number;
            await this.setState({"result":res});
            PubSub.publish("result", {"result":this.state.result});
            console.log(`Actions -> after result:${this.state.result}, number:${this.state.number}`);
        }
    }

    div = async() => {
        if(this.state.number == undefined){
            alert("No selected number!");
        }else{
            let res = this.state.result / this.state.number;
            await this.setState({"result":res});
            PubSub.publish("result", {"result":this.state.result});
            console.log(`Actions -> after result:${this.state.result}, number:${this.state.number}`);
        }
    }



    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button> 
                <button onClick={this.mul}>*</button> 
                <button onClick={this.div}>/</button>
            </div>
        );
    }
}

export default Actions;