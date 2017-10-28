import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <i className="search-icon" />
            <input
                placeholder="Search..."
                autoFocus
                value={props.filter}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
            <i className="cancel-icon" onClick={props.clear} />
        </div>
    )
};

export default Search;