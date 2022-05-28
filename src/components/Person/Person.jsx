import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storePerson } from '../redux/actions/person_action'
import {removePersonAction} from '../redux/actions/person_action'

export default function Person() {

    let [name, setName] = useState(""); 
    let [age, setAge] = useState(0); 

    const dispath = useDispatch();
    let {persons} = useSelector(state => state.person_reducer);
    
    const submitPerson = () =>{
        console.log("name:",name,"age:",age);
        dispath(storePerson({name, age}));
        setName("");
        setAge(0);
    }

    const removePerson = () => {
        console.log(persons);
        for(let i = 0; i < persons.length; i++){
            if(name === persons[i].name){
                persons.splice(i,1);
                console.log("new persons:",persons);
                dispath(removePersonAction(persons));
                break;
            }
        }
    }

    const saveName = (event) => {
        console.log("check name:",event.target.value);
        setName(event.target.value);
    }

    const saveAge = (event) => {
        console.log("check age:",event.target.value);
        setAge(event.target.value);
    }

  return (
      
    <div>
        <hr />
        <div>
            {/* 从HTML element上获取数据的时候可以用默认的event作为参数来传递 */}
            name: <input type="text" name="name" onChange={event => saveName(event)} value={name}/>
            age: <input type="text" name="age" onChange={event => saveAge(event)} value={age}/>
        </div>
        <div>
            <button onClick={submitPerson}>submit</button>
            <button onClick={removePerson}>remove</button>
        </div>
    </div>
  )
}
