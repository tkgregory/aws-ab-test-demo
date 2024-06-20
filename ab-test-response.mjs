'use strict';

export const handler = async (event, _context, callback) => {
    const request = event.Records[0].cf.request;
    const response = event.Records[0].cf.response;

    if (request.headers['create-cookie-value']) {
        let cookieValue = "Experiment-Variant=" + request.headers["create-cookie-value"][0].value + "; path=/code-like-leonardo/";
        response.headers['set-cookie'] = [{ value: cookieValue }]
    }

    callback(null, response);
};