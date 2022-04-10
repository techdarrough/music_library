import { useState } from 'react'

function SearchBar(props) {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term)}>Submit</button>
        </form>
}

export default SearchBar