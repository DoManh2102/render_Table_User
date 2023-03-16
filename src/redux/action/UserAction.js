import axios from "axios";


export const getUserAction = (paginateNumber) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://randomuser.me/api/?page=${paginateNumber}&results=10`,
                method: 'GET'
            })
            await dispatch({
                type: 'GET_USER_CLIENT',
                users: result.data.results
            })
        } catch (error) {
            console.log(error);
        }
    }
}




