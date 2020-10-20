# [Resillience](https//resillience.in/)

## About
Resillience is a team of IIT graduate mentors, and dedicated professionals with a single goal to provide personalized 1-on-1 coaching for IIT/NEET preparation.
We believe: “Everyone can learn and excel but the ways will be different”


## Key Features ✨
1. Platform for teachers to conduct live online classes with students
2. Online Examination System for teachers to upload subject/chapter-wise questions
3. Interactive test platform for students and corresponding result generation with analysis
4. Allowing parents to book free counselling session based on different services
4. Dynamically allowing admin to create blogs for website


## What's included 👀
```
Resillience/
├── client/
|   ├── public/
|   ├── src/
|   |   ├── components/
|   |   |     ├── AboutUs/
|   |   |     ├── Blogs/
|   |   |     ├── Career/
|   |   |     ├── ContactUs/
|   |   |     ├── Features/
|   |   |     ├── Home/
|   |   |     ├── NavBar/
|   |   |     ├── Tests/
|   |   |     ├── Title/
|   |   |     ├── Error.js
|   |   |     └── Faqs.js
|   |   ├── compressed/
|   |   ├── App.css
|   |   ├── App.js
|   |   ├── Rubik-Bold.ttf
|   |   ├── ScrollToTop.js
|   |   ├── index.css
|   |   ├── index.js
|   |   └── theme.js
|   ├── .gitignore
|   ├── package-lock.json
|   └── package.json
├── server/
|   ├── config/
|   ├── middleware/
|   ├── models/
|   ├── public/
|   ├── routes/
|   ├── views/
|   ├── routes
|   ├── app.js
|   ├── package,json
|   └── package-lock.json
├── .gitignore
├── README.md
├── ecosystem.json
├── package-lock.json
├── package.html  
└── prod-ecosystem.json
```


## How to get started 🚀
1. Clone this repository https://github.com/covalentbond/Resillience.git
2. Inside the server/config, create a development.js and add credentials in the format below
```
module.exports = {
  MONGOURI: "",

  //Jwt verifications
  JWT_ADMIN: "",
  JWT_USER: "",
  JWT_STUDENT: "",

  //Twilio Services 	
  serviceID: "",
  accountSID: "",
  authToken: "",

  //Nodemailer EmailID from where the email needs to be sent
  EMAIL: "",
  PASS: ""
};
```
