import React from 'react'
import Button from './common/Button'
const SortSearch = ({titleActive, genresActive, sortTitles, sortGenres}) => 
    <div className="btn-group" role="group" aria-label="Basic example">
    SEARCH BY    
    <Button className={`${titleActive === true ? "active": "inactive"}`} onClick={sortTitles} children="Title"></Button>
    <Button className={`${genresActive === true ? "active": "inactive"}`} onClick={sortGenres} children="Gengre"></Button>
</div>
export default SortSearch;


