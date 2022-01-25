
//  Instanciación de Vue
var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Calculadora Vue Js',
        display: 0,
        op1: 0,
        name: 'Andres',
        ver: false,
        type: null,
        historial: [
        ],
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

        operacion(operador) {
            if (operador == '+') {
                this.type = '+';
            }
            if (operador == '-') {
                this.type = '-';
            }
            if (operador == '*') {
                this.type = '*';
            }
            if (operador == '/') {
                this.type = '/';
            }
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
            //      {tipo: '+', op1: 10, op2: 20, resultado: 50 },
            num2 = this.display;
            if (this.type == '+') {
                this.display = parseInt(this.op1) + parseInt(num2);
                this.historial.push({ tipo: '+', op1: parseInt(this.op1), op2: num2, resultado: this.display });
            }
            if (this.type == '-') {
                this.display = parseInt(this.op1) - parseInt(num2);
                this.historial.push({ tipo: '-', op1: parseInt(this.op1), op2: num2, resultado: this.display });
            }
            if (this.type == '*') {
                this.display = parseInt(this.op1) * parseInt(num2);
                this.historial.push({ tipo: '*', op1: parseInt(this.op1), op2: num2, resultado: this.display });
            }
            if (this.type == '/') {
                this.display = parseInt(this.op1) / parseInt(num2);
                this.historial.push({ tipo: '/', op1: parseInt(this.op1), op2: num2, resultado: this.display });
            }

        },
        clean(){
            this.display = 0;
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
