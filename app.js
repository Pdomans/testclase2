//declaracion de una variable 

let comision= 70065
console.log(comision)
//alt + flechitas podes mover las lineas


//funciones 

function suma (a,b){
    return a+b  
}

console.log(suma(5,5))


//funcion flecha 


const restar=(a,b)=>a-b

console.log(restar(20,5))


//FUNCION anonima backticks 

const saludar =function (nombre){
    console.log(`hola  ${nombre}!`)
}

saludar("pablo");

//-----------------------------------------------
// clases: molde 
//atributos: caracteristicas
//metodos son: las acciones que puede llevar acabo 


//clase va en mayus
class persona {
    constructor (nombre,edad){
    this.nombre=nombre
    this.edad=edad
    }

    saludar (){
    console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
}

}

// con new hacemos una instancia nueva 
let persona1 =new persona ("juan ",30)
//console.log(persona1)

persona1.saludar()


class contador{
    static cuentaglobal=0
    constructor(responsable){
        this.responsable=responsable
        this.cuentaindividual=0
        
    }
    obtenerresponsable(){
        return this.responsable
    }

    obtenercuentaindividual(){
        return this.cuentaindividual
    }
 static obtenercuentaglobal(){
    return contador.cuentaglobal
 }

 contar(){
    this.cuentaindividual++
    contador.cuentaglobal++
 }
}

const contador1=new contador ("persona")
console.log(contador1.obtenerresponsable())

contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()





console.log(contador1.obtenercuentaindividual())



//https://es.javascript.info/