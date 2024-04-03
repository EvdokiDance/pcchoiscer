import userService from "../service/user-service.js";

import {validationResult} from 'express-validator';

class UserController {
     async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
               return res.status(400).json({message: 'Ошибка при валидации', errors: errors.array()});
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
           return res.status(400).json({name: e.name, message: e.message});
        }
    }
    async login(req, res, next) {

        try {
            const {email, password} = req.body;
            console.log(email, password);
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(userData);
        } catch (e) {
            res.status(400).json({name: e.name, message: e.message});
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            res.status(400).json({name: e.name, message: e.message});
        }
    }
    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(userData);

        } catch (e) {
            res.status(400).json({name: e.name, message: e.message});
        }
    }
}

export default new UserController;