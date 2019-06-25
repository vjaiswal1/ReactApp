import React from 'react'
import Button from './common/Button'
const SortSearch = (props) => 
        <div className="btn-group" role="group" aria-label="Basic example">
            SEARCH BY 
            <Button className="btn-sort_toggle" onClick={props.sortTitles} children="Title"></Button>
            <Button className="btn-sort_toggle" onClick={props.sortGenres} children="Gengre"></Button>
        </div>
export default SortSearch;


