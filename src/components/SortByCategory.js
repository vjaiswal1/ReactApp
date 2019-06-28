import React from 'react'
import Button from './common/Button'
const SortByCategory = ({releaseActive, ratingActive, sortRelease, sortRating, count}) => {
    return <div className="clearfix moviesubheadingSection"> 
    <div className="float-left float-md-left"> <strong>{count}</strong> movie found</div>
    <div className="float-right float-md-right">SORT BY                          
        <Button className={`btn-sm ml-1 ${releaseActive === true ? "active": "inactive"}`} onClick={sortRelease} children="RELEASE DATE"></Button>
        <Button className={`btn-sm ml-1 ${ratingActive === true ? "active": "inactive"}`} onClick={sortRating} children="RATING"></Button>
    </div>
</div>
}
        

export default SortByCategory;
