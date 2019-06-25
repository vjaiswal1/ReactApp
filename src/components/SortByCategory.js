import React from 'react'
import Button from './common/Button'
const SortByCategory = (props) => 
        <div className="clearfix moviesubheadingSection"> 
            <div className="float-left float-md-left"> <strong>{props.count}</strong> movie found</div>
            <div className="float-right float-md-right">SORT BY                          
                <Button className="btn-sm btn-sort_toggle ml-1" onClick={props.sortRelease} children="RELEASE DATE"></Button>
                <Button className="btn-sm btn-sort_toggle ml-1" onClick={props.sortRating} children="RATING"></Button>
            </div>
        </div>

export default SortByCategory;
