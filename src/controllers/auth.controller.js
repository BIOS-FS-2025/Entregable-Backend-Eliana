import  sendEmail from '../service/email.service.js';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

        try {
            await sendEmail({
                to: user.email,
                subject: "Bienvenido a nuestro servicio",
                message: `Hello ${user.name}, bienvenido a nuestro servicio!`,
                html: `<h1>Hello ${user.name}</h1><p>bienvenido a nuestro servicio!</p>`
            })
        } catch (emailError) {
            console.error("Error sending welcome email:", emailError);
        }

        delete user.password;

        res.status(201).json({
            data: user,
            message: "Usuario registrado correctamente"
        });
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ message: "El usuario esta en uso" });
    }
    console.error("Error registering user:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};