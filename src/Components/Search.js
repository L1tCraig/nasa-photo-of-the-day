import React from 'react'

const Search = (props) => {
    return(
        <nav>
            <form onSubmit={props.dateHandler}>

                <input
                type='date'
                //placeholder='YYYY-MM-DD'
                value={props.ymd}
                onChange={props.ymdHandler} />
                <button type='submit'>Submit</button>
            </form>
        </nav>
    )
}

export default Search