import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

    token;

    state = {
        students:[],
        isFirst:true,
        isSearching:false,
        status:"",
        error:""
    }

    componentDidMount() {
        // 订阅消息，指定消息名称。当有该消息发布的时候就会自动获取数据
        this.token = PubSub.subscribe("Search", (msg, data) => {
            console.log("msg:"+msg+", data:"+data);
            // 将订阅的消息中的数据自动封装到state中
            this.setState(data)
        });
    }

    componentWillUnmount(){
        // 取消消息的订阅
        PubSub.unsubscribe(this.token);
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>age</td>
                            <td>gender</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((student) => {
                                return (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
