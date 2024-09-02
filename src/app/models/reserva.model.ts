// Definición de las horas predefinidas
export const HORAS_PREDEFINIDAS = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', 
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
];

// Interfaz para el detalle de la reserva
export interface ReservaDetalle {
    id: number;
    idProducto: number;
    cantidad: number;
}
  
// Interfaz para la cabecera de la reserva
export interface ReservaCabecera {
    id: number;
    fecha: string; // Considera usar una librería como moment.js o date-fns para el manejo de fechas
    horaInicioAgendamiento: string;
    horaFinAgendamiento: string;
    idProveedor: number;
    idJaula: number;
    horaInicioRecepcion: string;
    horaFinRecepcion: string;
}
  
// Interfaz principal para la reserva
export interface Reserva {
    id: number;
    cabecera: ReservaCabecera;
    detalles: ReservaDetalle[];
}
