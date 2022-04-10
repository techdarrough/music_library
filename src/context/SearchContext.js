import {createContext} from 'react'

export const SearchContext = createContext({
    term: '',
    handleSearch: (search) => {
        useEffect(() => {
            if (search) {
                const fetchData = async () => {
                    document.title = `${search} Music`
                    const response = await fetch(API_URL + search)
                    const resData = await response.json()
                    if(resData.results.length > 0) {
                        return setData(resData.results)
                    } else {
                        return setMessage('Not Found.')
                    }
                }
                fetchData()
            }
        }, [search])
    }
})



