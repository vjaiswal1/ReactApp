import React from 'react'
import Button from './common/Button'
const Search = ({ resultsQuery, onKeyHandle }) => 
        <form className="navbar-form navbar-left" role="search">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter movie's name" onChange={onKeyHandle} />
                <div className="input-group-append">
                    <Button className="searchBtn" onClick={resultsQuery} children="Search"></Button>
                </div>
            </div>
        </form>

export default Search;



 