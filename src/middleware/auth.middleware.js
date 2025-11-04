import { extractTokenFromHeader } from "../service/jwt.service.js";

export const requireAuth = async (req, res, next) => {
    try {
        console.log("requireAuth");
        console.log("req.headers", req.headers);
        const authHeader = req.headers.authorization;
        const token = extractTokenFromHeader(authHeader);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'No autorizado',
                error: 'NO_AUTH_HEADER'
            });
        }
        next();

    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(500).json({
            success: false,
            message: 'No autorizado',
            error: 'SERVER_ERROR'
        });
    }
}
