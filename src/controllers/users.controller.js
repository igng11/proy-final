import { UserService } from "../services/user.services.js";

export class UsersController{
    static modifyRole = async(req,res)=>{
        try {
            const userId = req.params.uid;
            //verificar si el usuario en la db
            const user = await UserService.getUserById(userId);
            const userRole = user.role;
            //validacion del role actual y cambio
            if(userRole === "user"){
                user.role = "premium";
            } else if(userRole === "premium"){
                user.role = "user";
            } else {
                return res.json({status:"error", message:"No se puede cambiar el role de este usuario"});
            };
            await UserService.updateUser(user._id,user);
            return res.json({status:"success", message:`El nuevo rol del usuario es ${user.role}`});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    }
    
    static getAllUsers = async (req, res) => {
          try {
            // Lógica para obtener todos los usuarios con datos básicos
            const users = await UserService.getAllUsers();
            // Envía la respuesta al cliente
            res.json(users);
          } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Error al obtener usuarios' });
          }
        }

    static deleteInactiveUsers = async (req, res) => {
        try {
            const inactiveThreshold = new Date();
            // Configura la fecha límite para la inactividad (en este caso, 30 minutos atrás)
            inactiveThreshold.setMinutes(inactiveThreshold.getMinutes() - 30);

            // Obtiene usuarios inactivos
            const inactiveUsers = await UserService.getInactiveUsers(inactiveThreshold);

            // Elimina usuarios inactivos
            const deletedUsers = await Promise.all(
                inactiveUsers.map(async user => {
                    // Envía correo electrónico al usuario antes de eliminarlo
                    // sendEmail(user.email, 'Tu cuenta ha sido eliminada por inactividad');
                    return await UserService.deleteUser(user._id);
                })
            );

            // Envía la respuesta al cliente
            res.json({
                status: "success",
                message: `Usuarios inactivos eliminados correctamente`,
                deletedUsers,
            });
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.json({ status: "error", message: error.message });
        }
    };
}