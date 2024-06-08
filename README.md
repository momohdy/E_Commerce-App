## ElMAHDY Store - ECommerce Application

![PHOTO](/image.png)

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


3 ) open server folder

- run { npm init } to initialize your Node environment
- run { npm i } to install important dependencies 

4 )  - run { npm run dev } to launch


## Set [.env] Variables 

NODE_ENV  = development 

PORT = Your PORT

MONGO_URL = Your MONGO_DB_URL

JWT_SECRET_KEY = Your JWT_SECRET_KEY

PAYPAL_CLIENT_ID = Your PAYPAL_CLIENT_ID


# How to Use the Project ?

 => [ PROJECT DEMO ](https://drive.google.com/file/d/12tfATKvguU7ed3vaVq9Sahdv4oibXH4Z/view?usp=sharing)

# License

- This project is licensed under the ([GPL License](https://choosealicense.com/licenses/gpl-3.0/)) - see the [LICENSE](LICENSE) file for details.
