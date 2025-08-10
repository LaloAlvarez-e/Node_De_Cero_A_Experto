class User {
    constructor(name, email) {
        this.id = User.incrementId();
        this.name = name;
        this.email = email;
    }

    static incrementId() {
        if (!this.currentId) {
            this.currentId = 1;
        } else {
            this.currentId++;
        }
        return this.currentId;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }

    printData() {
        setTimeout(() => {
            this.printInfo();
        }, 1000);
    }

    updateDataWithCallback(callback) {
        setTimeout(() => {
            callback();
        }, 2000);
    }
}

function updateDataInternal(user, newName, newEmail) {
    console.log("Updating user data...");
    user.name = newName;
    user.email = newEmail;
    user.printData();
}

const myUser = new User("John Doe", "john.doe@example.com");

console.log("\n\n------ STARTING PROCESS -----");
myUser.printData();
myUser.updateDataWithCallback(() => updateDataInternal(myUser, "Jane Doe Updated", "jane.doe.different@example.com"));