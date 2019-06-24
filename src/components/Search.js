import React from 'react'
function Search (props) {
    return ( 
        <form className="navbar-form navbar-left" role="search">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter movie's name" onChange={props.onkeyHandle} />
            <div className="input-group-append">
                <button className="btn searchBtn" type="button" onClick={props.resultsQuery}>Search</button>
            </div>
        </div>
        </form>
    )
}

export default Search;



 