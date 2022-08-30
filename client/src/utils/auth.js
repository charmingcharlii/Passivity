import decode from 'jwt-decode'

class AuthService {
    // grabs currently logged in user info
    getProfile(){
        return decode(this.getToken())
    }
    // create jwt
    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/portfolio');
    }
    // destroy jwt
    logout() {
        localStorage.removeItem('id_token');

        window.location.assign('/')
    }
    // checks if browser has login token
    loggedIn() {
        const token = this.getToken();

        return !!token && !this.isExpired(token)
    }
    // grab current token
    getToken() {
        return localStorage.getItem('id_token')
    }
    // check expiration
    isExpired(token) {
        try {
            const decoded = decode(token)
            if(decoded.exp < Date.now() / 1000){
                return true
            } else return false
        }
        catch (err) {
            console.error(err)
        }
    }
}

export default new AuthService()