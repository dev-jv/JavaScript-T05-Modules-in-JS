  // ============================================== 1
/*
//----------------------------- * IIFE
// console.log(nombreCliente);

//--------------------------- import
import {nombreCliente, ahorro} from './cliente.js'

console.log(nombreCliente);
console.log(ahorro);

//---------------------------- Import en Vue/React
// import Vue from 'Vue';
// import React from 'react';

*/
// ============================================== 2
/*
import {nombreCliente, ahorro, mostrarInformacion, tieneSaldo} from './cliente.js'

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro); 
*/
// ============================================== 3
/*
import {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro); 

const cliente = new Cliente(nombreCliente, ahorro);

// console.log(cliente);
console.log(cliente.mostrarInformacion());
*/
// ============================================== 4
/*
import {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import {Empresa} from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro); 

const cliente = new Cliente(nombreCliente, ahorro);

// console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en Linea');
console.log(empresa);

console.log(empresa.mostrarInformacion());
*/
// ============================================== 5

import {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import nuevaFuncion, {Empresa} from './empresa.js';


console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro); 

const cliente = new Cliente(nombreCliente, ahorro);

// console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en Linea');
console.log(empresa);

console.log(empresa.mostrarInformacion());

nuevaFuncion();




/*
    > import nuevaFuncion, {Empresa} from './empresa.js';
un export default por archivo
un export default se importa fuera de los {}
un export default se importa con un alias
un export default puede no tener nombre y ser importado con uno cualquiera

los export normales tambien pueden asumir un alias:
    > import {nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'


Al importar se debe tener cuidado con las rutas ./, ../

*/
