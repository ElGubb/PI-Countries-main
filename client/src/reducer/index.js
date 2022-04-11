const initialState = {
    countries: [],
    countries2: [],
    activities: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                countries2: action.payload
            }
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.countries2
            const continentFiltered = action.payload === 'All' ?
                allCountries :
                allCountries.filter((el) => el.region.includes(action.payload))
            return {
                ...state,
                countries: continentFiltered
            }
        case 'ORDER_BY_NAME':
            const sortedArrName = action.payload === 'asc' ?
                state.countries.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }) : state.countries.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            return {...state,
                countries: sortedArrName
            }

        case 'ORDER_BY_POPULATION':
            const sortedArrPopulation = action.payload === 'low' ?
                state.countries.sort(function(a, b) {
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (b.population > a.population) {
                        return -1;
                    }
                    return 0;
                }) : state.countries.sort(function(a, b) {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (b.population > a.population) {
                        return 1;
                    }
                    return 0;
                })
            return {...state,
                countries: sortedArrPopulation
            }
        case 'GET_COUNTRIES_DETAIL':

            return {
                ...state,
                detail: action.payload
            }
        case 'GET_COUNTRIES_NAME':
            return {
                ...state,
                countries: action.payload
            }
        case 'CLEAR_COUNTRIES_NAME':
            return {
                ...state,
                countries2: []
            }
        case 'FILTER_ACTIVITIES':
            const everyCountry = state.countries2;
            const filtAct = action.payload === 'Created' ?
                everyCountry.filter((e) => e.activities.length > 0) :
                everyCountry.filter((e) => e.activities.length === 0)

            return {
                ...state,
                countries: action.payload === 'All' ? everyCountry : filtAct
            }
        default:
            return state
    }

}

export default rootReducer;