import emitter from './../shared/emitter.es6';

emitter
	.send('back')
	.then((response) => {
		document.querySelector('#response').innerHTML = response;
	});