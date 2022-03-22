

export const fetchQuiz =  () => {
    // const res = await fetch('https://tawsifhye.github.io/data/quizes.json')
    // const data = await res.json()
    // return data

    return  async (dispatch) =>{
        await fetch ('https://tawsifhye.github.io/data/quizes.json')
                .then(res => res.json())
                .then(data => {
                    dispatch({type: "FETCH_QUIZ", payload: data})
                })
    }
}