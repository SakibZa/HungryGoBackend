const jwt = require('jsonwebtoken');

module.exports.verifyAccessToken = (req, res, next)=>{

    const token = req.headers["authorization"]||req.body.token||req.query.token;
    
    if(!token){
        return res.status(403).send("A token is required for authentication");
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
    }
    catch(err){
        return res.status(401).send("Invalid Token");
    }
     next();
}