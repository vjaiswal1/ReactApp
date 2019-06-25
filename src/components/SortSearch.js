import React from 'react'
import Button from './common/Button'
const SortSearch = (props) => {

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            SEARCH BY 
            <Button className="btn btn-sort_toggle" onClick={props.sortTitles} text="Title"></Button>
            <Button className="btn btn-sort_toggle" onClick={props.sortGenres} text="Gengre"></Button>
        </div>
    )
}
export default SortSearch;


