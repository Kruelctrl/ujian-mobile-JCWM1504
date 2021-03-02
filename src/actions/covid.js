import Axios from 'axios';
// import { URL, GET_SUMMARY, GET_COUNTRY } from './helpers';

export const GetCovidGlobalSummary = () => {
    return async (dispatch)=> {
        try{
            const { data } = await Axios.get('https://api.jsonbin.io/b/603deef49342196a6a6b6e4d',
            headers:
            {
                'secret-key': '$2b$10$XVA6uIeILpiXpxqgFYx8n.IklrVk1TdSlHLc8EaCP9AI89VcehrCS'
            }
        });
        console.log(data)
        dispatch({type: GET_SUMMARY, payload: data});
    }catch (err) {
        console.log(err.response ? err.response.data :err);
    }
}