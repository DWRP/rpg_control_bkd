require('dotenv').config();

const crypto = require("crypto");

function passwordGenerate(password){
    const cipher = crypto.createCipher(process.env.CRIPTO_ALG,process.env.CRIPTO_KEY);
    cipher.update(password);
    return cipher.final(process.env.CRIPTO_TP);
}

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const {username,email} = req.body;
        const password = await passwordGenerate(req.body.password);
        
        let user = await User.findOne({email});
        
        if (!user){
            user = await User.create({
                username,
                email,
                password});
        }else{
            if (password != user.password){
                return res.json({erro:"Senha errada!!"});
            }
        }
        return res.json(user);
        
    }

};