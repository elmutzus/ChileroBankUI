import { Operacion } from "./Operacion";

export class Transaccion {
    id: number;
    fechaMovimiento: string;
    monto: number;
    montoFinal: number;
    operacion: Operacion;
}