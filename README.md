# Nodemailer-Script
DESCRIPTION
A script I made for sending emails to myself or other people. It's surely useful somewhere

HOW IT WORKS
In script.ts file execute the function sendEmail("gmail", subject, text). It needs 3 arguments: email service being used to authorize sender, which is currently only "gmail", email's subject and email's text/body

PREPARATION AND SETUP
1) Install Typescript and basic types 
- npm install typescript --save-dev
- npm install @types/node --save-dev
2) Install Nodemailer package and its types
- npm install nodemailer 
- npm install @types/nodemailer --save-dev
3) Create .env file in root directory and install Dotenv package to access the variables inside
- npm install dotenv 
4) Install tsx package to run script.ts file and any other typescript files (just don't use ts-node, save yourself some time)
- npm install tsx
- npx tsx script.ts (runs the typescript file)

WHAT WORKS (ends up in inbox folder and not in spam) 
- Sending an email to yourself when using Gmail
- Sending an email to other person with who you already had contact

NEEDS TESTING (who knows maybe it will go into spam folder)
- Sending an email to person who you don't know 
- Sending an email to person with non-gmail account

