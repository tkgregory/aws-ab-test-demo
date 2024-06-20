# AWS A/B Testing Demo

Deploy this project to AWS to run an A/B test which returns one of 2 web pages for a single HTTP request.

## Deployment

```
npm i serverless -g
npm i
serverless deploy --verbose
```

## Demo

Once deployed, look for `ABTestURL` in the output.

Now:

1. Hit the URL in a browser.
2. See one of two webpages, chosen randomly.
3. Refresh and always get the same web page.

If you delete your cookies, you'll get another randomly chosen web page.

Enjoy!