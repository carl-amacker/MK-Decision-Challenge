# MK-Decision-Challenge
This is a static web application created for MK Decision as part of their application process.

I had little to no experience with a lot of the amazon products used for this challenge, so this was a great learning oportunity for me. I probably spent more time reading documentation and tutorials than actually coding, but I think it came together pretty nicely. I had just done a website project using React so getting the static webpage together wasn't too terribly challenging, and the guide linked with the challenge doc got me through getting it hosted in an s3 bucket without much trouble. My first major snag came with the lambda functions. I think I was trying to do too much at once, configuring that Gateway API, Lambda function, and DynamoDB in the way I needed it to the first try, but after taking a step back and reading through a bunch of tutorials (I'll try to link the ones I used, if I can find them again), I got them working pieve by piece, and eventually in the format that I wanted. The SES setup felt like it wasn't as bad, most likely because I had already gotten a hang of Lambdas, but I'm still waiting for Amazon to upgrade my account out of sandbox mode, so you will only get an email if you have an SES verified email address.

You'll also notice that you'll be emailed from cmamacker@gmail.com rathaer than my outlook. I had a lot of trouble getting SES verification working with outlook for some reason, but I'll switch it if I can get the account verified.


Resources used (besides those linked in the Challenge Doc):
  https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html
  https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
