export default (req, res, next) => {
    try {

        if (!res.locals.isAdmin) {
            throw new Error('Пользователь не администратор');
        }

        next();

    } catch(e) {

        res.status(403).json({name: e.name, message: e.message});
    }
}