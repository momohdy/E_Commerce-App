## ElMAHDY Store - ECommerce Application

![PHOTO](F:\TA7T ELEN4A2\ELMAHDY Store\client\public\images\README.png)

# Description

## What my application does ?

my Application allow User to

1 ) Book Items from Store

2 ) Choose specific amount for each Product

3 ) Follow-Up with his shopping basket items

4 ) Pay money from his Paypal account

5 ) Get the Product

## Why i used the technologies i used ?

**Frontend**

- React : Handling UI Components in client-side

- Redux : Handling User States in application , Avoid props helling

- React Router : Handling routes of pages in application

**Backend**

- Node : Using run-time Environment that allow running Javasript in server-side

- Express : Make a server , handling requests and responses between client and server

- mongoDB : Save user data , user irems and product data in Database

- mongoose : Facilitate communication with Database

**Security**

- JWT ( Json Web Token ) : Protect user identifier from hacking

- bcrybt : encrypt users password

express-async-handler : Handling Asynchronous tasks

## Some of the challenges i faced and features i hope to implement in the future ?

- i faced Challenge in knowing where is my error exactly => i made Error Handling

- i faced Challenge in Paypal payment process => i read many documents about this tobic

# How to Install and Run the Project ?

## Local environment

1 ) Clone the Repository

2 ) open client folder

- run { npm install } to install node_modules

- run { npm install @fortawesome/fontawesome-svg-core 
@fortawesome/free-solid-svg-icons @paypal/react-paypal-js 
@reduxjs/toolkit @testing-library/jest-dom 
@testing-library/react @testing-library/user-event 
axios bootstrap 
font-awesome mdb-react-ui-kit 
mdbreact react 
react-bootstrap react-dom 
react-paypal-button-v2 react-redux 
react-router-bootstrap react-router-dom 
react-scripts redux 
redux-devtools-extension redux-thunk }   to install important dependencies

3 ) open server folder

- run { npm init } to initialize your Node environment
- run { npm install --save-dev concurrently } for running server side & client side simulattly
- run { npm i cors express bcryptjs
  dotenv
  express
  express-async-handler
  jsonwebtoken
  mongoose } to install important dependencies 

4 ) Keep in server folder  

- run { npm run dev } to launch


## Set [.env] Variables 

NODE_ENV  = development 

PORT = Your PORT

MONGO_URL = Your MONGO_URL

JWT_SECRET_KEY = Your JWT_SECRET_KEY

PAYPAL_CLIENT_ID = Your PAYPAL_CLIENT_ID


# How to Use the Project ?

 => [ PROJECT DEMO ](https://drive.google.com/file/d/12tfATKvguU7ed3vaVq9Sahdv4oibXH4Z/view?usp=sharing)

# License

- This project is licensed under the ([GPL License](https://choosealicense.com/licenses/gpl-3.0/)) - see the [LICENSE](LICENSE) file for details.
