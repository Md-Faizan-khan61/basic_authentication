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
<!-- <h3>example</h3>
![Snapshot]( name:{
       type:String,
       required:true   
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    })
) -->
# usage
<h2>1.install dependencies</h2>
npm i express mongoose bcrypt





