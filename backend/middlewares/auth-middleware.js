import tokenService from "../service/token-service.js";


export default (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            throw new Error('Пользователь не авторизован');
        }
        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            throw new Error('Пользователь не авторизован');
        }

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData) {
            throw new Error('Пользователь не авторизован');
        }

        req.user = userData;
        next();

    } catch(e) {
        res.status(401).json({name: e.name, message: e.message});
    }
}