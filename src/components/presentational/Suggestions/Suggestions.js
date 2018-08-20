import React from 'react';
//import css file for styling
import './Suggestions.css';

export const Suggestions = (props) => {
    let options = props.suggestions.map((sugg, i) => sugg.name.toLowerCase().includes(props.suggestion) &&
    <li className='suggestion' key={i} onClick={() => props.clickSuggestion(sugg.name)}>{sugg.name}</li>).filter(s => s);
    console.log(options);
    return (
        <div className='suggestions' style={{display: props.showSuggestion ? 'inline-block': 'none'}}>{options}</div>
    );
};

export default Suggestions;