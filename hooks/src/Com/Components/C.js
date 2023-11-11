import React, { useContext } from 'react';
import { data } from './ContextApi';
import {data1,data2} from "./UseContext";

const C = () => {
  const  firstname=useContext(data1);
  const  gender=useContext(data2);
  return (
    <div>
        <h3>This is C component</h3>
        {/* <data.Consumer>
            {
                (name)=>{
                    return (
                        <h3>My name is coming from Context Api: {name}</h3>
                    )
                }
            }
        </data.Consumer> */}


        <h3>My name is {firstname} and my gender is {gender}</h3>
    </div>
  )
}

export default C