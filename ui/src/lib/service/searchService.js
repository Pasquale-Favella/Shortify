import api from ".."

export const searchSuggest = async url => await api.get('/search',{ params: { url } });

export const search = async q => await api.get('/search/term',{ params: { q } })