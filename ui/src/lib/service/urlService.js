import api from ".."

export const createShort = async url => await api.post('/url',{site:url});