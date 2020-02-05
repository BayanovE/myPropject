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
        isSiteApi = true,
    } }) {
        //const { username, password } = action.user
        if(isSiteApi){
            url = new URL(urljoin(config.backendUrl, `api${url}`));
        }

        if(method.toLowerCase() === 'get'){

            Object.keys(body).forEach(key => url.searchParams.append(key, body[key]));

            return fetch(url);
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