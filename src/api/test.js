import axios from 'axios'
import utils from '../utils/api'

class TestApi {

    static authHeaders() {
        return {
            Authorization: "Bearer 483972af0934398f13833f3e5dce402f16899347c6ab385f48ae6b2f659549da"
        }
    }

    static getTest(filter) {
        const url = "https://gorest.co.in/public-api/users"
        return axios(
            {
                headers: this.authHeaders(),
                method: 'get',
                url,
            })
            .then(utils.getResponse)
            .catch(error => {
                throw error
            });
    };

}

export default TestApi;