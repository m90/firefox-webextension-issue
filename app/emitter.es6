const makeUid = () => Math.random().toString(35).substr(2, 16);

class Emitter{
	send(messageKey, payload){
		return new Promise((resolve) => {
			const conversationId = makeUid();
			const handleResponse = ({ message, payload, response_to }) => {
				if (response_to !== conversationId || message !== 'RESPONSE') return;
				resolve(payload);
				chrome.runtime.onMessage.removeListener(handleResponse);
			};
			chrome.runtime.sendMessage({
				message: messageKey
				, payload
				, respond_as: conversationId
			});
			chrome.runtime.onMessage.addListener(handleResponse);
		});
	}
}
export default new Emitter();
