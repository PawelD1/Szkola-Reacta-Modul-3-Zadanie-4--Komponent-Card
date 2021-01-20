import React from 'react';

import './Card.css';
import { User, FullContent, Photo} from "../components/Card/CardComponents";

function Card(props){
    const {firstLetter, title, intro, content, date}=props
    return (
        <div className="card">
          <User firstLetter={firstLetter} title={title} date={date}/>
          <Photo/>
          <FullContent intro={intro} content={content}/>
        </div>
    )
}

export default Card;