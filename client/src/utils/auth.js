import decode from 'jwt-decode'

class AuthService {
    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/portfolio');
    }
}

export default new AuthService()