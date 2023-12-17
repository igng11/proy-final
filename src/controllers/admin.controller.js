import { UserService } from "../services/user.services.js";

export class AdminController {
    static viewUsers = async (req, res) => {
        try {
            // Lógica para obtener todos los usuarios (puedes reutilizar la función existente)
            const users = await UserService.getAllUsers();
            
            // Renderizar la vista de administrador con la lista de usuarios
            res.render('admin/viewUsers', { users });
        } catch (error) {
            // Manejo de errores
            console.error(error);
            res.status(500).json({ error: 'Error al obtener usuarios para la vista de administrador' });
        }
    };

    // Otras funciones para modificar y eliminar usuarios en la vista de administrador
}
