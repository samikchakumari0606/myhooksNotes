import React,{createContext} from 'react';
import A from './A';


const data=createContext();

const ContextApi = () => {
    const name="simmi"
  return (
    <div>
        <data.Provider value={name}>
        <h3>use of contextApi</h3>
        <A/>
        </data.Provider>
        
    </div>
  )
}

export default ContextApi;
export {data};