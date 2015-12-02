import emitter from './../shared/emitter.es6';

emitter
	.send('ping')
	.then((response) => {
		document.querySelector('#response').innerHTML = response;
	});