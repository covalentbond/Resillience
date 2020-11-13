<a href="https://resillience.in/">
  <img alt="Resillience Logo" width="150px" src="https://res.cloudinary.com/rweb1/image/upload/v1600243274/Assets/images/resillience-Logo-Small_tslub5.png" />
</a>

# [Resillience](https://resillience.in/)

<a href="https://twitter.com/resillience_in">
  <img align="left" alt="Resillience Twitter" width="24px" src="https://res.cloudinary.com/rweb1/image/upload/v1605272935/Assets/images/twitter-readme_l2qajw.png" />
</a>
<a href="https://www.instagram.com/resillience.in/">
  <img align="left" alt="Resillience Instagram" width="24px" src="https://res.cloudinary.com/rweb1/image/upload/v1605273215/Assets/images/instagram-readme_w3quvj.png" />
</a>
<a href="https://www.linkedin.com/company/resillience/">
  <img align="left" alt="Resillience Linkedin" width="24px" src="https://res.cloudinary.com/rweb1/image/upload/v1605273211/Assets/images/linkedin-readme_sv23ud.png" />
</a>
<a href="https://www.youtube.com/channel/UCLAs5bDSPA6e3EyWZ8bZsyg">
  <img align="left" alt="Resillience Youtube" width="24px" src="https://res.cloudinary.com/rweb1/image/upload/v1605273213/Assets/images/youtube-readme_xtdfke.png" />
</a>
<a href="https://www.facebook.com/resillience.in">
  <img align="left" alt="Resillience Facebook" width="24px" src="https://res.cloudinary.com/rweb1/image/upload/v1605273217/Assets/images/facebook-readme_xvfafg.png" />
</a>

## About
Resillience is a team of IIT graduate mentors, and dedicated professionals with a single goal to provide personalized 1-on-1 coaching for IIT/NEET/MHC-CET Engineering Entrance Exam preparation.
We believe: “Everyone can learn and excel but the ways will be different”


## Key Features ✨
1. Platform for teachers to conduct live online classes with students
2. Online Examination System for teachers to upload subject/chapter-wise questions
3. Interactive test platform for students and corresponding result generation with analysis
4. Allowing parents to book free counselling session based on different services provided
4. Dynamically allowing admin to create blogs for website


## How to get started 🚀
1. Clone this repository `https://github.com/covalentbond/Resillience.git`
2. Run `npm install && npm run install-all` to install all the necessary dependencies in the root directory and the dependencies needed in subsequent client and server folder.
3. Inside the server/config, create a development.js and add credentials in the format below
```
module.exports = {
  MONGOURI: "",  //

  //Jwt verifications
  JWT_ADMIN: "",
  JWT_USER: "",
  JWT_STUDENT: "",

  //Twilio Services 	
  serviceID: "",
  accountSID: "",
  authToken: "",

  //Nodemailer Credentials
  EMAIL: "",    //EmailID from where the email needs to be sent
  PASS: ""      //Password of the email-id
};
```
4. Run `npm start` to spin up the client application at port 3000 and the server at port 5000


## What's included 👀

### Project Structure
```
.
├── client/
├── server/
├── ...
```

### Client Structure
```
.
├── public/
├── src                       # Source files
|   ├── components/           # Pages/Components
|   |     ├── AboutUs/
|   |     ├── Blogs/
|   |     ├── Career/
|   |     ├── ContactUs/
|   |     ├── Features/
|   |     ├── Home/
|   |     ├── NavBar/
|   |     ├── Tests/
|   |     ├── Title/
|   |     ├── Miscellaneous/
|   |     ├── Error.js
|   |     └── Faqs.js
|   ├── App.js
|   ├── index.js              # React app starting point
|   └── ...
└── ...
```

### Server Structure
```
├── ...
|   ├── config/
|   ├── middleware/
|   ├── models/
|   ├── public/
|   ├── routes/
|   ├── views/
|   ├── routes
|   └── app.js                # Nodejs starting point
├── ...
```