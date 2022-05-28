import React, { Component } from 'react';
import { Button, DatePicker, version, Pagination } from "antd";
import { GithubFilled,getTwoToneColor,setTwoToneColor } from '@ant-design/icons'
import "antd/dist/antd.css";
import "./antd-demo.css"

class AntdDemo extends Component {

    click = () =>{
        console.log("clicked...");
    }

    render() {
        return (
            <div>
                <h1>hello antd!</h1>
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
                <br />
                <Button type="primary" loading style={{ marginLeft: 8 }}>
                    Loading
                </Button>
                <br />
                <GithubFilled className="icon" style={{ fontSize: '300%' }} onClick={this.click} fill="#464655"/>
                <br />
                <Pagination defaultCurrent={1} total={100} defaultPageSize={10} showSizeChanger={false} />
                
                
                
            </div>
        );
    }
}

export default AntdDemo;