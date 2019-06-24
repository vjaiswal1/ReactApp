import React from 'react'

function SortByCategory (props) {
    return (
        <div className="clearfix moviesubheadingSection"> 
            <div className="float-left float-md-left"> <strong>{props.count}</strong> movie found</div>
            <div className="float-right float-md-right">SORT BY                          
                <button type="button" className="btn btn-sm btn-sort_toggle ml-1" onClick={props.sortRelease}>RELEASE DATE</button>
                <button type="button" className="btn btn-sm btn-sort_toggle ml-1" onClick={props.sortRating}>SORTING</button>
            </div>
        </div>
    )
}


export default SortByCategory;
