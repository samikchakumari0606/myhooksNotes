import React from 'react';
import C from './C';

const B = ({name}) => {
  return (
    <div>B
        {/* <h3>name is coming from Prop drilling :{name}</h3>*/
        
    }
        <C/>
    </div>
  )
}

export default B