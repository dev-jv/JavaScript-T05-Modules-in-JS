// ============================================== 4
/*
import {Cliente} from './cliente.js ';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}
*/
// ============================================== 5

import {Cliente} from './cliente.js ';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}

export default function nuevaFuncion() { // El único!
    console.log('Este es el export default');
}














