// ============================================== 1
/*
//------------------------------------ * IIFE
// // const nombreCliente = 'Juan'; 

// (function(){ //Función que se ejecuta inmediatamente
//     console.log('Desde un IIFE');

//     // const nombreCliente = 'Juan'; 
//     window.nombreCliente = 'Juan'; // Asigna nombreCliente a la ventana global
// })();


//----------------------------------- export
export const nombreCliente = 'Juan'; 

export const ahorro = 200;

*/
// ================================================== 2
/*
export const nombreCliente = 'Juan'; 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('El cliente si tiene saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}
*/
// ============================================== 3
/*
export const nombreCliente = 'Juan'; 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('El cliente no tiene saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}
*/
// ============================================== 4
/*

export const nombreCliente = 'Juan'; 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('El cliente no tiene saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}
*/
// ============================================== 5

export const nombreCliente = 'Juan'; 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('El cliente no tiene saldo');
    } else {
        console.log('El cliente no tiene saldo')
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}









