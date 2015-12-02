class Listener{
	on(key, cb){
		chrome.runtime.onMessage.addListener((transmission, sender, messageResponseFn) => {
			if (transmission.message === key){
				cb(transmission.payload).then(messageResponseFn);
				return true;
			}
		});
		return this;
	}
}

export default new Listener();
