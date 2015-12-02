import listener from './../shared/listener.es6';

listener
	.on('ping', () => {
		return Promise.resolve('pong');
	});
