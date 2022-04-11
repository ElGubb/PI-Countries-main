import axios from 'axios';

export function getCountries() {
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function filterCountriesByContinent(payload) {
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

export function getCountriesDetail(id) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries/' + id);

            return dispatch({
                type: 'GET_COUNTRIES_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getCountriesName(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries?name=' + name);
            return dispatch({
                type: 'GET_COUNTRIES_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getCountriesNameForm(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries?name=' + name);
            return dispatch({
                type: 'GET_COUNTRIES_NAME_FORM',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function clearCountriesName() {
    return async function(dispatch) {
        return dispatch({
            type: 'CLEAR_COUNTRIES_NAME'
        })
    }
}

export function postActivity(input) {
    return async function(dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/activities/post',
                input
            );
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export function getActivity(state) {
    return {
        type: 'GET_ACTIVITY',
        payload: state
    }
}

export function filterActivities(payload) {
    return {
        type: 'FILTER_ACTIVITIES',
        payload
    }
}