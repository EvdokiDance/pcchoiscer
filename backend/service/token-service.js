import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';


const prisma = new PrismaClient();


class TokenService {

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken,
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await prisma.token.findUnique({
            where: {
                userId: userId
            }
        })

        if (tokenData) {
            const tokenData = await prisma.token.update({
                where: {
                    userId: userId
                },
                data: {
                    refreshToken: refreshToken
                }
            })

            return tokenData;
        }

        const token = await prisma.token.create({
            data: {
                userId: userId,
                refreshToken: refreshToken
            }
        })

        return token;
    }

    async removeToken(refreshToken) {
       const token = await prisma.token.delete({
            where: {
                refreshToken: refreshToken
            }
        })
        return token;
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return  userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return  userData;
        } catch (e) {
            return null;
        }
    }
    


    async findToken(refreshToken) {
        const tokenData = await prisma.token.findUnique({
            where: {
                refreshToken: refreshToken
            }
        })
        return tokenData;
    }
}


const tokenService = new TokenService();

export default tokenService;