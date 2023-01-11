const jwt = require('jsonwebtoken');
const JWT_SECRET = "IamAGoodBoyName$Yash";

const fetchuser = (req, res, next) => {
    // Get the user from jwt token and add id to req object.
    const token = req.header('auth-token')
    if (!token) {
        // Shows an error if it found invalid authtoken.
        res.status(401).send({ error: "Please authenticate a valid token" });
    }
    try {
        // check data as if token and JWT_SECRET are connected or not.
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        // Shows an error if it found invalid authtoken.
        res.status(401).send({ error: "Please authenticate a valid token" });
    }

}

module.exports = fetchuser;