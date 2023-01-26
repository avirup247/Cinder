import './subject.css';
import React from "react";

const Subject = (props)=> {

    return (
        <div className='window'>
            <div className='title'> {props.name}...</div>
            <div className='icon'></div>
            <div className='description'>{props.description}</div>
        </div>
    )


}
export default Subject;