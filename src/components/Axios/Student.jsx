import React, { Component } from 'react';
import axios from 'axios'
import { createRef } from 'react/cjs/react.production.min';
import "./student.css";

export default class Student extends Component {

  state = { students: [] };

  getAllStudents = () => {
    axios.get('http://localhost:3000/api1/react/student/all').then(
      response => { console.log(response.data); this.setState({ students: response.data }) },
      error => { console.log("error") }
    )
  }

  id_ref = createRef();

  getOneStudent = () => {
    let id = this.id_ref.current.value;
    axios.get(`http://localhost:3000/api1/react/student/${id}`).then(
      response => { console.log(response.data); this.setState({ students: [response.data] })},
      error => { console.log("error") }
    )
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <button onClick={this.getAllStudents}>Get All</button><br />
        <span>id: </span>
        <input type="text" placeholder="enter id" ref={this.id_ref} />
        <button onClick={this.getOneStudent}>Get One</button><br />

        <div>
          <table className="table">
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>gender</td>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.gender === 0 ? "Male" : "Female"}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
