const unique = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (result.indexOf(arr[i]) === -1){
            result.push(arr[i])
        }
    }
    return result
}

const fetchCardList = () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=2feccb605e614978a2d3865075b01e0c'



    return (dispatch) => {
        dispatch({
            type: 'FETCH_CARDLIST_BEGIN',
        })

        const promise = new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url);
                const data = await response.json()
                console.log(`response:: `)
                
                var uniqueCards = unique(data.articles);
                console.log(uniqueCards)

                dispatch({
                    type: 'FETCH_CARDLIST_SUCCESS',
                    data: { cards: uniqueCards }
                })
                resolve(data)
            } catch(e){
                dispatch({
                    type: 'FETCH_CARDLIST_FAILURE',
                    data: { error: e }
                })
                reject(e)
            }
        })

        return promise
    }
}

export default fetchCardList