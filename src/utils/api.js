const utils = {

    getResponse: (response) => {
        if (response.status >= 200 && response.status < 300) return response.data;
        const error = new Error(`HTTP Error`);
        error.status = response.statusText;
        error.response = response.data;
        throw error;
    },

    checkStatus: (response) => {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(`HTTP Error`);
        error.status = response.statusText;
        error.response = response.data;
        throw error;
    },

    parseJSON: (response) => {
        return response.data;
    },

    parseToken: (response) => {
        localStorage.setItem('sessionToken', response.data.id);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
        return response.data.id
    },

    parseLogout: (response) => {
        localStorage.clear()
        return response.data;
    },

};
export default utils