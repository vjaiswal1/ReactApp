import React from 'react'
import Button from './common/Button'
const SortByCategory = (props) => {
    return (
        <div className="clearfix moviesubheadingSection"> 
            <div className="float-left float-md-left"> <strong>{props.count}</strong> movie found</div>
            <div className="float-right float-md-right">SORT BY                          
                <Button className="btn btn-sm btn-sort_toggle ml-1" onClick={props.sortRelease} text="RELEASE DATE"></Button>
                <Button className="btn btn-sm btn-sort_toggle ml-1" onClick={props.sortRating} text="RATING"></Button>
            </div>
        </div>
    )
}

export default SortByCategory;
