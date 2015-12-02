class Emitter{
	send(message, payload){
		return new Promise((resolve) => {
			chrome.runtime.sendMessage({ message, payload }, resolve);
		});
	}
}
export default new Emitter();
