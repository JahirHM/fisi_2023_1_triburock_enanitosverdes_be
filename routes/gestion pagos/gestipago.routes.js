import { Router } from "express";
import { 
          getRealizarPago,
          getRealizarPagos 
        } from "../../controllers/gestion pagos/gestipago.controller.js";
const gestiPagoRouter = Router();

gestiPagoRouter.get("/realizar-pagos/:id_usuario", getRealizarPagos);
gestiPagoRouter.get("/realizar-pagos/:id_usuario/pago/:id_pago", getRealizarPago);

export default gestiPagoRouter;