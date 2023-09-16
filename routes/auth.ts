import { Router } from "express";
import { check } from "express-validator";
import { recolectarErrores } from "../middlewares/recolectErrors";
import { register, verifyUser, login } from "../controllers/auth";
import { existeEmail } from "../helpers/validationsDB";

const router = Router();

router.post(
  "/register",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),

    check("email").custom(existeEmail),
    recolectarErrores,
  ],
  register
);

router.patch(
  "/verify",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("code", "El código de verificación es obligatorio").not().isEmpty(),
    recolectarErrores,
  ],
  verifyUser
);

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    recolectarErrores,
  ],
  login
);

export default router;
