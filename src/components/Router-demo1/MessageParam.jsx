import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

const msgs = [
    { id: 1, msg: "hello" },
    { id: 2, msg: "react" },
    { id: 3, msg: "jave" }
]

export default function MessageParam() {

    const { id, title } = useParams();
    console.log(id + ":" + title);
    const target = msgs.find(msg => {
        return msg.id == id;
    });
    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>msg:{target.msg}</li>
        </ul>
    )
}

