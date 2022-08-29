class User {
    constructor(name, email, password, homeAddress) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.homeAddress = homeAddress;
    }
}

class DatabaseManger {
    constructor (RootName, RootFolderChildren) {
        this.root = RootName
        this.rootChildren = RootFolderChildren

        for (const property in JSON.parse(localStorage.getItem(this.root))) {
            return
        }        
        localStorage.setItem(this.root, JSON.stringify(RootFolderChildren));
    }
    get() {
        let GetData = JSON.parse(localStorage.getItem(this.root));
        console.log(GetData);
        return GetData
    }
    post(data) {
        var initDataValue = JSON.parse(localStorage.getItem(this.root));
        initDataValue.push(data);
        var folder = [...initDataValue];
        localStorage.setItem(this.root, JSON.stringify(folder));
    }
}


// inited a fake database on local host💩
let FakeDatabase = new DatabaseManger("FakeUsers", []);

// handle User Info😁
const CreateUser = () => {
    let newUser = new User("ada", "b@gmail.com", "1234abs", "12 niger Km");
    return newUser
};


