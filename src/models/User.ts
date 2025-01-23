export default class User {
    id?: number;
    username: string | null;
    password: string | null;

    constructor(username: string | null, password: string | null, id?: number) {
        this.id = id;
        this.username = username;
        this.password = password;
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

    setId(id: number) {
        this.id = id;
    }

    setUsername(username: string | null) {
        this.username = username;
    }

    setPassword(password: string | null) {
        this.password = password;
    }
}