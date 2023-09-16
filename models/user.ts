import { Model, Schema, model } from "mongoose";
import { ROLES } from "../helpers/constants";

export interface IUser {
  nombre: string;
  email: string;
  password: string;
  rol?: string;
  code?: string;
  verified?: boolean;
}

const UserSchema = new Schema<IUser>({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    required: [true, "El mail es requerido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  rol: {
    type: String,
    default: ROLES.user,
  },
  code: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});


UserSchema.methods.toJSON = function(){
    const { __v, password, _id, code, ...usuario } = this.toObject()
    return usuario
}

const Usuario: Model<IUser> = model<IUser>("Usuario", UserSchema)

export default Usuario
