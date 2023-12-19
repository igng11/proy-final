import { userDao } from "../dao/index.js";
import { usersModel } from "../dao/managers/models/users.model.js";

export class UserService{
    static getUserByEmail = async(email)=>{
        return await userDao.getByEmail(email);
    };

    static saveUser = async(newUser)=>{
        return await userDao.save(newUser);
    };

    static getUserById = async(userId)=>{
        return await userDao.getById(userId);
    }

    static updateUser = async(userId,userInfo)=>{
        return await userDao.update(userId,userInfo);
    }
    static getInactiveUsers = async (inactiveThreshold) => {
        return await userDao.getInactiveUsers(inactiveThreshold);
    };

    static deleteUser = async (userId) => {
        return await userDao.deleteUser(userId);
    };

    static getAllUsers = async () => {
        try {
          // Lógica para obtener todos los usuarios
          const users = await usersModel.find(); // Asegúrate de tener el método correspondiente en tu userDao
          return users;
        } catch (error) {
          // Manejo de errores
          console.error(error);
          throw new Error('Error al obtener usuarios en UserService');
        }
      };
}