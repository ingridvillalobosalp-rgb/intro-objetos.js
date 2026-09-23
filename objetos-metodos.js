//ejemplo de objeto con metodos

//datos del producto
const producto = {
    id:'p-07', 
    nombre:'agua de jamaica',
    precio:15,
    categoria:'bebida', 
    disponible:true,

    //metodos
    resume( {
        return this.nombre + ' - $'+ this.precio + '( ' + this.categoria +' )';

    },
    estadisponible(){
        returm this.disponible;
    }
    


}