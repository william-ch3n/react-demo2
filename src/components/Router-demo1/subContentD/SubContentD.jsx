import React, { Component } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import MessageSearch from '../MessageSearch';

export default class SubContentD extends Component {

    state  = {
        messages:[
        {id:1, title:"msg1"},
        {id:2, title:"msg2"},
        {id:3, title:"msg3"}]
    }
    
  render() {
    const messages = this.state.messages;
    return (
      <div>
        <h2>SubContentD</h2>
        <ul>
            {
            messages.map((message)=>{
                return(
                    <li key={message.id}>
                        <Link to={`message?id=${message.id}&title=${message.title}`}>{message.title}</Link>
                    </li>
                );
            })
            }
        </ul>
        <hr />
        <Routes>
            <Route path="message" element={<MessageSearch />} />
        </Routes>
      </div>
    )
  }
}
