const { users } = require("../json");

const Authorize = (req, res, next) => {
    const { user } = req.query
    const Auth_users = users.find((_user)=>_user.name === user)
    if (!Auth_users) {
        res.status(401).send('Unauthorized')
        return 
    }
    console.log("Authorized ", Auth_users);
    next();
};

module.exports = Authorize 
