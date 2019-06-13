import React from "react";
import './searchInput.scss'

const SearchInput = props => {
  return (
    <React.Fragment>
       {
           props.showTextarea ? 
                <textarea
                    className="search-input"
                    name={props.name}
                    onChange={props.onChange}
                    style={props.style}
                    rows="4"
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    value={props.value}
                />
                :
                <input 
                    type="text" 
                    className="search-input" 
                    onChange={props.onChange}
                    style={props.style} 
                    maxLength={props.maxLength}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    value={props.value}
                />
       }
    </React.Fragment>
  );
};

export default SearchInput;
