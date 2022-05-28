import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { createRef } from 'react/cjs/react.production.min'
import axios from 'axios';

export default class Search extends Component {

    input = createRef();

    search = () => {
        // 发布消息
        PubSub.publish("Search", {"isFirst":false, "isSearching":true});
        let value = this.input.current.value;
        if(value == null || value.length == 0){
            // 异步访问后台（通过proxy跨域访问后台）
            axios.get('http://localhost:3000/api1/react/student/all').then(
                response => {
                    console.log(response.data);
                    // 发布消息
                    PubSub.publish("Search", {"isSearching":false, "status":"success", "students":response.data});
                },
                error => {
                    console.log(error);
                    PubSub.publish("Search", {"isSearching":false, "status":"failure", "error":error});
                }
            );
        }else{
            axios.get(`http://localhost:3000/api1/react/student/${value}`).then(
                response => {
                    console.log(response.data);
                    PubSub.publish("Search", {"isSearching":false, "status":"success", "students":[response.data]});
                },
                error => {
                    console.log(error);
                    PubSub.publish("Search", {"isSearching":false, "status":"failure", "error":error});
                }
            );
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span>Search: </span>
                    <input type="text" placeholder="anything..." ref={this.input} />
                    <button onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}
