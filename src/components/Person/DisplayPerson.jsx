import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayPerson() {

    let {persons} = useSelector(state => state.person_reducer);

    console.log("persons result:",persons);

  return (
      
    <div>
        <h2>Persons:</h2>
        <ol>
        {
            // 使用array.map来遍历操作数组
            persons.map(
                (person, index) => {
                    return (
                        <div key={index}>
                            <li>name: {person.name} age: {person.age}</li>
                        </div>
                    )

                }

            )
        }
        </ol>
    </div>
  )
}
