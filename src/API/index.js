import call from '../common/call'

const api = {

    __url__: 'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0',

    retrieveAllEntries (){

        return (async () => {
            try {
                debugger
                const response = await call(`${this.__url__}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-musement-version': '3.4.0',
                        'accept-language': 'it',
                        'x-musement-currency': 'EUR'
                    },
                })
                debugger
                return response.data


            } catch (error) {
                return error.response
            }
        })()

    }

}

export default api