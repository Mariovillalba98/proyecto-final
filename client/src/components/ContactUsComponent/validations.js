export default function validation(input) {
	// const errors = {
	// }

	// const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

	// const phoneRegEx = /^[0-9]+$/

	// if(!input.email) {
	// 	errors.emailFormat = 'El email es requerido'
	// }

	// if(!emailRegEx.test(input.email)) {
	// 	errors.emailFormat = 'Debe tener formato de email'
	// }

	// if(!input.fullName){
	// 	errors.name = "debes escribir un nombre"
	// }
	// if(!phoneRegEx.test(input.phone)){
	// 	errors.phoneFormat = "debes escribir un numero telefonico"
	// }

	// return errors

	const phoneRegEx = /^[0-9]+$/
	const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

	const errors = {}
	if(!input.fullName){
		errors.fullName = "El campo nombre es requerido"
	}else if((!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(input.fullName))){
		errors.fullName = "El campo nombre solo acepta letras"
	}

	if(!input.email){
		errors.email = "El campo email es requerido"
	}else if(!emailRegEx.test(input.email)){
		errors.email = "Debe tener formato de email"
	}

	if(!input.phone){
		errors.phone = "El campo phone es requerido"
	}else if(!phoneRegEx.test(input.phone)){
		errors.phone = "El campo nombre solo acepta numeros"
	}
	

	
	return errors



}


