import axios from "axios"
import { GET_SEARCH } from "../constant/Constant"

export const fetchAPI = ({tags}) => {
    console.log("DATA IN FETCH API", tags);
    return (dispatch) => {
        return  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=beach&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            dispatch(searchData(res.data))
            // console.log("RES", res.data)
        })
        .catch(err => { console.log("ERR", err) })
    }
}

export const searchData = (data) => {
    return {
        type: GET_SEARCH,
        payload: data
    }
}