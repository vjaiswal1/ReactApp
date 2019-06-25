import React from 'react'
const Search = ({ resultsQuery, onKeyHandle }) => {
    return ( 
        <form className="navbar-form navbar-left" role="search">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter movie's name" onChange={onKeyHandle} />
            <div className="input-group-append">
                <button className="btn searchBtn" type="button" onClick={resultsQuery}>Search</button>
            </div>
        </div>
        </form>
    )
}

export default Search;



 