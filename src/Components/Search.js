import React from 'react'

const Search = (props) => {
    return(
        <nav>
            <input
            placeholder='YYYY-MM-DD'
            value={props.ymd}
            onChange={props.ymdHandler} />
        </nav>
    )
}

export default Search