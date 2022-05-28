import React, { Component } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const msgs = [
    { id: 1, msg: "hello" },
    { id: 2, msg: "react" },
    { id: 3, msg: "jave" }
]

export default function MessageSearch() {

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id") + ":" + searchParams.get("title"));
    const id = searchParams.get("id");
    const title = searchParams.get("title");
    const target = msgs.find(msg => {
        return msg.id == id;
    });

    const navigate = useNavigate();

    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>msg:{target.msg}</li>
            <li><button onClick={() => navigate(`message?id=${id}&title=${title}`)}>go</button></li>
        </ul>
    )
}

