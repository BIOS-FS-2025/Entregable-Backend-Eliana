import jwt from 'jsonwebtoken';

/**
 * Genera un token de acceso JWT
 * @param {Object} payload Datos a incluir en el token
 * @param {String} payload.userId ID del usuario
 * @param {String} payload.email Email del usuario
 * @param {String} payload.name Nombre del usuario
 * @returns {String} JWT token
 */

export const generateAccessToken = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { 
            expiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
            issuer: 'entregable-backend',
            audience: 'entregable-backend-users' 
        }
    );
}

export const generateRefreshToken = (payload) => {
    return jwt.sign(
        {userId: payload.userId},
        process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
        { 
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '1d',
            issuer: 'entregable-backend',
            audience: 'entregable-backend-users' 
        }
    );
}

export const extractTokenFromHeader = (authHeader) => {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    return authHeader.split(' ')[1];
}