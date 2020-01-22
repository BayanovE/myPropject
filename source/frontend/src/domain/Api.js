import config from 'config'
import urljoin from 'url-join'

export default {
    httpRequest ({method, request: {
        url, 
        mode = 'get', 
        body = [], 
        headers = {'Content-Type': 'application/json'},
        cache = 'no-cache', 
        credentials = 'same-origin', 
        redirect = 'follow', 
        referrer = 'no-referrer',
    } }) {
        //const { username, password } = action.user

        if(method.toLowerCase() === 'get'){
            url = new URL(urljoin(config.backendUrl, url));

            Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));

            return fetch(urljoin(config.backendUrl, '/api/competitors'));
        }
      
        return fetch(url, {
            method,
            mode,
            cache,
            credentials, 
            headers,
            redirect,
            referrer,
            body: JSON.stringify(body)
        })
    }
};