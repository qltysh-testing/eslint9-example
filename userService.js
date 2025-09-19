// User service module for managing user data

class UserService {
    constructor() {
        this.users = [
            { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
            { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
            { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
        ];
    }

    async getCurrentUser() {
        // Simulating async operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.users[0]);
            }, 100);
        });
    }

    getUserById(id) {
        return this.users.find(user => user.id === id);
    }

    getAllUsers() {
        return this.users;
    }

    addUser(name, email) {
        const newUser = {
            id: this.users.length + 1,
            name,
            email
        };
        this.users.push(newUser);
        return newUser;
    }
}

module.exports = new UserService();