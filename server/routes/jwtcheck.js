const jwt = require('jsonwebtoken');
const config = require("../config/config.json");

const SECRET_Key = config['Secret-key'];

const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookie.JWT;
        const decoded = jwt.verify(clientToken, SECRET_Key);

        if (decoded) {
            res.locals.userId = decoded.user_id;
            next();
        } else {
            res.status(401).json({ error: '쒯' });
        }
        } catch (err) {
        res.status(401).json({ error: 'token 없어' });
        console.log(err);
        }
};


exports.verifyToken = verifyToken

