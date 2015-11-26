var digestedMessages = {};

class Listener{
	on(key, cb){
		chrome.runtime.onMessage.addListener(({ message, payload, respond_as }) => {
			if (message === key && !(respond_as in digestedMessages)){
				digestedMessages[respond_as] = true;
				cb(payload)
					.then((responsePayload) => {
						chrome.runtime.sendMessage({
							message: 'RESPONSE'
							, response_to: respond_as
							, payload: responsePayload
						});
					});
				return true;
			}
		});
		return this;
	}
}

export default new Listener();
