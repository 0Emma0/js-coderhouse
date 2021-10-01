//Arrays DB Habitaciones
let habitacion = [
	{ id: 1, categoria: "Standar", tv: "32", banio: "ducha", vista: "interna", precio: 1000, img: 'images/habitacion-standard1.jpg' },
	{ id: 2, categoria: "Superior", tv: "42", banio: "bañera", vista: "campo de golf", precio: 1500, img: 'images/habitacion-superior1.jpg' },
	{ id: 3, categoria: "Premium", tv: "50", banio: "jacuzzi", vista: "al mar", precio: 2000, img: 'images/habitacion-premium1.jpg' }
]

let tipohabitacion = parseInt(prompt("Seleccione el tipo de habitación:" + habitacion.map(habitacion => "\n" + habitacion.id + " para " + habitacion.categoria)))

console.log("Disponemos de habitaciones: ")

for (let i = 0; i < habitacion.length; i++) {
	console.log(habitacion[i].categoria + " por un precio de $ " + habitacion[i].precio + " la noche.")

}

//Seleccionar tipo de habitación 
while (isNaN(tipohabitacion) || tipohabitacion < 1 || tipohabitacion >= 4) {
	alert("Dato ingresado no es valido")
	tipohabitacion = parseInt(prompt("Seleccione el tipo de habitación:" + habitacion.map(habitacion => "\n" + habitacion.id + " para " + habitacion.categoria)))
}

//Obtengo del array la habitación seleccionada y sus propiedades, lo guardo en hab para calcular la estadia
hab = habitacion.find(habitacion => habitacion.id == tipohabitacion)

//Habitación seleccionada
alert("Seleccionó habitación:" + " " + hab.categoria)

//Ingresar cantidad de noches que desea quedarse en el Hotel
let noches = parseInt(prompt("Ingrese la cantidad noches que desea alojarse en Hotel Ipanema Beach"))

while (isNaN(noches)) {
	alert("Dato ingresado no es valido")
	noches = parseInt(prompt("Ingrese la cantidad noches que desea alojarse en Hotel Ipanema Beach"))
}
alert("Ha indicado que se alojará " + noches + " noches en Hotel Ipanema Beach")


//Calcular estadia
function estadia(tipohabitacion, noches) {
	console.log("Seleccionó habitación " + hab.categoria)
	console.log("El valor para habitación " + hab.categoria + " por día desde las 12:00 pm hasta las 12:00 pm del día siguiente")
	valorestadia = hab.precio * noches
	console.log("El valor de su estadia para " + noches + " noches es = $" + valorestadia)
	alert("El valor de su estadia para " + noches + " noches es = $" + valorestadia)
}

estadia(tipohabitacion, noches)

//Integración con ejemplo After Class
function plancuotas() {
	//Ingresar plan de pagos para su estadia en el Hotel
	alert("A continuación podrá ingresar en cuantas cuotas desea pagar")
	console.log("A continuación obtendrá detalles del plan de pagos solicitado")

	let credito = valorestadia
	let meses = parseInt(prompt("Ingrese en cuantas cuotas desea pagar su estadía"))

	while (isNaN(meses) || meses < 1) {
		alert("Dato ingresado no es valido")
		meses = parseInt(prompt("Ingrese en cuantas cuotas desea pagar su estadía"))
	}
	alert("Ha indicado que pagará su estadia en " + meses + " cuotas")

	if (isNaN(meses)) {
		console.log('Los datos ingresados para la cantidad de cuotas son invalidos')
	} else {
		frances(meses, credito)
	}

	function intereses() {
		let interes = 27;

		let inteMen = (interes / 12) / 100;

		console.log("el interes es " + interes + "%");

		return inteMen;
	}

	function cuotas(credito, meses) {

		let cuotaInt = (credito * (1 + (intereses() * meses))) / meses

		console.log("su cuota es " + cuotaInt.toFixed(2));

		return cuotaInt;
	}


	function frances(meses, credito) {

		for (let i = 1; i <= meses; i++) {
			console.log("cuotas nro: " + i)

			cuotas(credito, meses);

		}

	}
}
plancuotas()

//Mensaje final

alert("Desde la consola del navegador podrá ver los detalles de su reserva")
alert("Muchas gracias por elegir Hotel Ipanema Beach")