import React,{createContext} from 'react';
import A from './A';

const data1=createContext();
const data2=createContext();

const UseContext = () => {
    const name="simmi";
    const gender="female";

  return (
    <div>
        <data1.Provider value={name}>
            <data2.Provider value={gender}>
            <h3>use of UseContext </h3> 
            <A/>
            </data2.Provider>
        </data1.Provider>
      
        </div>
  )
}

export default UseContext;
export {data1,data2};