import { Router } from "express";
import { getOrders, createOrder } from "../controllers/orders";
import { recolectarErrores } from "../middlewares/recolectErrors";
import validarJWT from "../middlewares/validateJWT";
import { isVerified } from "../middlewares/validateVerificado";
import { check } from "express-validator";

const router = Router();

router.get("/", [validarJWT, recolectarErrores], getOrders);

router.post("/", [
    validarJWT,
    isVerified,
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("shippingCost", "El costo de envío es obligatorio").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorio").not().isEmpty(),
    check("items", "El array de productos es obligatorio").not().isEmpty(),
    recolectarErrores,
  ],
  createOrder
);

export default router;
