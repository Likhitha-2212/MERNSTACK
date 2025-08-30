import React from 'react';
import { memo } from 'react'; 
const Child = React.memo(()=>{
    console.log("I am child component");
    return<div>This is a child component</div>
});
export default Child;