
//  Instanciación de Vue
var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Calculadora Vue Js',
        display: 0,
        op1: 0,
        name: 'Andres',
        ver: false,
        productos: [
            { name: 'producto 1 ', price: 20 },
            { name: 'producto 2', price: 15 },
            { name: 'producto 3', price: 4 },
            { name: 'producto 4', price: 78 },
            { name: 'producto 5', price: 52 },

        ],
        message: 'hola',
        contador: 0,
    },
    methods: {

        operacion() {
            this.op1 = this.display;
            this.display = 0;
        },

        botones(numero) {
            //    console.log(numero);
            if (this.display == 0) {
                this.display = numero;
            } else {
                this.display = this.display + '' + numero;
            }

        },
        calculate() {
            this.display = this.op1 + this.display;
        },
        reversef() {
            //  console.log("variable mensage");
            this.message = this.message.split('').reverse().join('');
        },
        incremento() {
            this.contador = this.contador + 1;
        }
    },
})
