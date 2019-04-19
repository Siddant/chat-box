class Auth {
    static setToken(token) {
        localStorage.setItem('token', token)
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    // get payload from token
    static getPayload() {
        const token = this.getToken()
        if (!token) return false
        const parts = token.split('.')
        if (parts.length < 3) return false
        try {
            return JSON.parse(atob(parts[1]))
        } catch {
            return false
        }
    }


    // get users id from the payload, to be used when checking if able to delete comments
    static getUserID() {
        return this.getPayload().sub
    }

    static isAuthenticated() {
        const payload = this.getPayload()
        if (!payload) return false
        const now = Math.round(Date.now() / 1000)
        return now < payload.exp
    }

    static removeToken() {
        localStorage.removeItem('token')
    }
}


export default Auth
