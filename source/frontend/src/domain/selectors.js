export const getApi = state => state.api || {};

export const getCities = state => getApi(state).cities ? getApi(state).cities.data : [];

export const getCompetitors = state => getApi(state).competitors ? getApi(state).competitors.data : [];

export const getFormattedCities = state => getCities(state).reduce( (obj, {code, name}) => {
    obj[code] = name;
    return obj;
}, {});