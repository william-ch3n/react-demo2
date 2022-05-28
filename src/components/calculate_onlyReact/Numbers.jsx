import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Numbers extends Component {

    state = {
        "options": [0,1,2,3,4,5,6,7,8,9]
    };

    select = (event) =>{
        console.log("selected number:"+event.target.value);
        PubSub.publish("number", {"number":Number(event.target.value)});
    }

  render() {
    return (
      <div>
          <select onChange={this.select}>
              {
                  this.state.options.map((data, index) => {
                    return(
                        <option value={data} key={index}>{data}</option>
                    )
                  })
              }
          </select>
      </div>
    )
  }
}
