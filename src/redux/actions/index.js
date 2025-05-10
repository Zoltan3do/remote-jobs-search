export const REMOVE = "REMOVE";
export const ADD = "ADD";
export const FETCH = "FETCH"


export const removeAction = (data) => {
    return {
        type: REMOVE,
        payload: data.company_name
    }
}

export const addAction = (data) => {
    return {
        type: ADD,
        payload: data.company_name
    }
}

export const fetchAction = async (baseEndpoint, params) => {
    return async (dispatch, getState) => {
        let data = []
        try {
            const response = await fetch(baseEndpoint + params.company);
            if (response.ok) {
                data = await response.json();
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: FETCH,
            payload: data
        })
    }
}