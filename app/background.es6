import listener from './listener.es6';

listener
	.on('ping', () => {
		return Promise.resolve('pong');
	});
