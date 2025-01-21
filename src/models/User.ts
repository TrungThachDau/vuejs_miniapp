export default class User {
    id: number;
    username: string | null;
    password: string | null;
    retypePassword: string | null;

    constructor(id: number , username: string | null, password: string | null, retypePassword: string | null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.retypePassword = retypePassword;
    }

    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getRetypePassword() {
        return this.retypePassword;
    }

    setId(id: number) {
        this.id = id;
    }

    setUsername(username: string | null) {
        this.username = username;
    }

    setPassword(password: string | null) {
        this.password = password;
    }

    setRetypePassword(retypePassword: string | null) {
        this.retypePassword = retypePassword;
    }
}