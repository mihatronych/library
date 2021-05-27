require('dotenv').config()
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Author} = require('../models/models')

const generateJwt = (id,name, email) => {
    return jwt.sign(
        {id: id, name, email},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AuthorController{
    async registration(req, res, next) {
        const {name, email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Author.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const author = await Author.create({name, email, password: hashPassword})
        const token = generateJwt(author.id, name, email)

        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const author = await Author.findOne({where: {email}})
        if(!author){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, author.password)
        if(!comparePassword){
            return next(ApiError.internal('Пользователь не найден'))
        }
        const token = generateJwt(author.id, author.name, author.email)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.author.id,req.author.name, req.author.email)
        return res.json({token})
    }
    async getAll(req, res){
        let {limit, page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let authors;
        authors = await Author.findAndCountAll({limit, offset})
        return res.json(authors)
    }
    async getOne(req, res){
        const {id} = req.params
        const author = await Author.findOne(
            {where:{id}}
        )
        return res.json(author)
    }
    async update(req, res, next){
        let {name, email, password} = req.body
        const id = req.author.id;
        const cur_author = await Author.findOne({where:{id}})

        if(email === undefined){
            email = cur_author.email;
        }else{
            const candidate1 = await Author.findOne({where: {email}})
            if(candidate1){
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
        }
        if(!name){
            name = cur_author.name;
        }
        if(!password){
            password = cur_author.password;
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const author = await ( await (Author.findOne(
            {where: {id}},
        ))).update({name:name, email: email, password:hashPassword},)
        const token = generateJwt(id, name, email)
        return res.json({token})
    }
    async delete(req, res){
        const {id} = req.params
        const author = await Author.destroy(
            {where: {id}},
        )
        return res.json(author)
    }
}

module.exports = new AuthorController()