# MK-Decision-Challenge
This is a static web application created for MK Decision as part of their application process.

Try it here: http://mkd-challenge-test.s3-website.us-west-1.amazonaws.com/

I had little to no experience with a lot of the amazon products used for this challenge, so this was a great learning oportunity for me. I probably spent more time reading documentation and tutorials than actually coding, but I think it came together pretty nicely. I had just done a website project using React so getting the static webpage together wasn't too terribly challenging, and the guide linked with the challenge doc got me through getting it hosted in an s3 bucket without much trouble. My first major snag came with the lambda functions. I think I was trying to do too much at once, configuring that Gateway API, Lambda function, and DynamoDB in the way I needed it to the first try, but after taking a step back and reading through a bunch of tutorials (I'll try to link the ones I used at the bottom, if I can find them again), I got them working pieve by piece, and eventually in the format that I wanted. The SES setup felt like it wasn't as bad, most likely because I had already gotten a hang of Lambdas, but I'm still waiting for Amazon to upgrade my account out of sandbox mode, so you will only get an email if you have an SES verified email address.

Worth Noting:
 - My form does validate (checks for a name, message, and valid email), but the only indication of this is that you cannot click submit until all three fields are satisfied. I chose against adding text to clarify this, as I'm admitedly not the greatest at css and chose to focus on the bonus objects (more on that below)

 - I'm not sure if you can see this if you're not logged in as me, but some of my AWS services are on different regions. I spent hald my time working on this in Los Angeles and the other half in Chicago (visiting family), and didn't notice the regions automatically swapped. Don't think this should affect anything.

 - I'm also using a personal email (cmamacker@gmail.com) for SES. For some reason amazon really does not like my outlook, and everything I did with it would take significantly longer than my gmail or just flat out not work.

 - I planned on doing the bonus objectives, however I've been having trouble getting Amazon to give me a certificate for my website, which is preventing me from adding SSL and using Cognito (since it appears that you need an https callback url). It also seems like adding Google Authentication can be done through the Cognito setup, so I was going to do that first. I may be underestimating the challenge setting these up could provide, but here are some guides that make it seem pretter straightforward:

  https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html
  
  https://medium.com/@channaly/how-to-host-static-website-with-https-using-amazon-s3-251434490c59


Resources used (besides those linked in the Challenge Doc):
  https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway-tutorial.html
  
  https://aws.amazon.com/premiumsupport/knowledge-center/lambda-send-email-ses/
  
  https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac
