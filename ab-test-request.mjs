'use strict';

export const handler = async (event, _context, callback) => {
	const request = event.Records[0].cf.request;

	if (request.uri !== '/code-like-leonardo/') {
		callback(null, request);
		return;
	}

	let abChoice;
	const headers = request.headers;
	if (headers.cookie) {
		for (let i = 0; i < headers.cookie.length; i++) {
			if (headers.cookie[i].value.indexOf('Experiment-Variant=A') >= 0) {
				abChoice = "A"
				break;
			} else if (headers.cookie[i].value.indexOf('Experiment-Variant=B') >= 0) {
				abChoice = "B"
				break;
			}
		}
	}

	if (!abChoice) {
		if (Math.random() < 0.5) {
			abChoice = "A";
		} else {
			abChoice = "B";
		}
		headers['create-cookie-value'] = [{ value: abChoice }]
	}


	request.uri = abChoice === "A" ? '/code-like-leonardo/' : '/code-like-leonardo-v2/';
	callback(null, request);
};