import React from 'react'

function SortSearch(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            SEARCH BY 
            <button type="button" className="btn btn-sort_toggle" onClick={props.sortTitles}>Title</button>
            <button type="button" className="btn btn-sort_toggle" onClick={props.sortGenres}>Gengre</button>
        </div>
    )
}

export default SortSearch;


