import listener from './../shared/listener.es6';

listener
	.on('back', () => {
		return Promise.resolve('forth');
	});
