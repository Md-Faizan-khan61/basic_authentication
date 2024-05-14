# basic_authentication
The Login/signup application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application first signup users via name, email and password(hashed) , further when we hit login api then it checks the user is present or not in mongodb , after that if the user authentication successfull then it grant the access to home page .

# End-point
<ul>
  end-point:post/signup
  description:to registered new user credentials

  end-point:post/login
  description:to login to home page
 
</ul>

# Data model
<ul>
 name:string
 email:string
 password:string 
</ul>
<h3>example</h3>
![Snapshot](![image](https://github.com/Md-Faizan-khan61/basic_authentication/assets/120436681/cf145353-44f2-49f1-9b64-5fb071b1d27f)
)
# usage
<h2>1.install dependencies</h2>
npm i express mongoose bcrypt





