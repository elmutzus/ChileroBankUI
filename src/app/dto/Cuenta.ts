import { TipoCuenta } from "./TipoCuenta";
import { Cliente } from "./Cliente";
import { Transaccion } from "./Transaccion";

export class Cuenta {
    id: number;
    moneda: string;
    fechaApertura: string;
    estado: boolean;
    monto: number;
    tipoCuenta: TipoCuenta;
    cliente: Cliente;
    transacciones: Transaccion[];
}