# AWS A/B Testing Demo

Deploy this project to AWS to run an A/B test which returns one of 2 web pages for a single HTTP request.

## Deployment

```
npm i serverless@3.39.0 -g
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

## Cleaning up

You must first do some manual clean up for the automated deletion to succeed.

Log into the AWS CloudFront console and delete the Lambda function associations for the _default_ behaviour.
1. Select your CloudFront distribution
1. Go to _Behaviours_
1. Select *Default* then *Edit*
1. Scroll to the bottom and under *Function associations* change every *Function type* to *No association*
1. *Save changes*

Now on the command line run `serverless remove`.