import { usersModel } from "../models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model = usersModel;
    };

    async save(user) {
        try {
            // Verificar si el usuario proporcionó un rol, si no, usar "usuario" por defecto
            if (!user.rol) {
                user.rol = "usuario";
            }

            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            throw error;
        }
    };

    async getById(userId){
        try {
            const user = await this.model.findById(userId);
            if(user){
                return user;
            } else{
                throw new Error("El usuario no existe");
            }
        } catch (error) {
            throw error;
        }
    };

    async getByEmail(userEmail){
        try {
            const user = await this.model.findOne({email:userEmail});
            if(user){
                return user;
            } else{
                return null;
            }
        } catch (error) {
            throw error;
        }
    };

    async update(userId,newUserInfo){
        try {
            const userUpdated = await this.model.findByIdAndUpdate(userId,newUserInfo,{new:true})
            return userUpdated;
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };

    async getInactiveUsers(inactiveThreshold) {
        try {
            // Lógica para obtener usuarios inactivos
            return await this.model.find({ lastConnection: { $lt: inactiveThreshold } });
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            // Lógica para eliminar un usuario
            return await this.model.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    };
}