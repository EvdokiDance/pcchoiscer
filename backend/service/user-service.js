import { PrismaClient } from '@prisma/client';
import tokenService from './token-service.js';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();


class UserService {

    async registration(email, password) {
        const candidate = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (candidate) {
            throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
        }


        const hashPassword = await bcrypt.hash(password, 3);
        const user = await prisma.user.create({data: {email: email, password: hashPassword}})

        const userDto = {id: user.id, email: user.email};
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            userDto,
        }
    }

    async login(email, password) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);

        if (!isPassEquals) {
            throw new Error('Неверный пароль');
        }

        const userDto = {id: user.id, email: user.email};
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            userDto,
        }

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new Error('Пользователь неавторизирован');
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        
        const tokenFromDb = tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw new Error('Пользователь неавторизован');
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userData.id
            }
        })

        const userDto = {id: user.id, email: user.email};
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        
        return {
            ...tokens,
            userDto,
        }
    }
}

const userService = new UserService();

export default userService;