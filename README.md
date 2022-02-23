## Smart Invoice Application

### About Project
This project is an easy-to-use fullstack Online Invoicing application for creating and Sending invoices to customers, suiteable for Startups, Business Owners and Freelancers. 

## Application Features
-Add Customers or clients.
- Create a new invoice
- Compose and quote invoice.
-Authentication using jsonwebtoken
- Send invoice to customer via Email
- Download invoice as PDF.
-Record Payment
-Using Signup and Login
-

## Application Functionalities
- You firstly add a customer you would want to send an invoice to. 
Create an invoice to send to the customer. Add the billing information, item description, amount, quantity and discount if any. 

You can also add more items, edit or delete item from your invoice.
By clicking on the Send Invoice button, you can send invoice via email to the customer. You can also download the invoice as PDF.


#### Live view of the application Demo can be found here- [Smart Invoice Landing Page](https://smart-invoice-bc1fb.web.app)

### Login Credentials: 
##### Username: admin@gmail.com, 
##### Password: admin123


### Pictorial View of the Application

Landing page display.

![landing](https://user-images.githubusercontent.com/26815113/154503533-9f7cca66-08fc-48af-b0f3-75ee30821009.PNG)


Dashboard View
![dashboard](https://user-images.githubusercontent.com/26815113/154504072-20652d51-6e73-4915-9f7f-92b476244f01.PNG)


Sample Invoice Display:
![Sample-Invoice](https://user-images.githubusercontent.com/26815113/154504540-56b34474-50b5-445f-a493-c1eddfec010b.PNG)


Create An Invoice:
![Create-An-Invoice](https://user-images.githubusercontent.com/26815113/154504951-2743bb4d-cfec-47b0-92f7-6f25ca01bc9d.PNG)

## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

#### Dependencies
##### Client Side

The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
* [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
* [React-router](https://reactrouter.com) - Enables the to implementation of dynamic routing in a web app.
* [Material UI](https://mui.com) -  A library that allows the import and use of different components to create a user interface in React applications.
* [Apex Charts](https://apexcharts.com/) - An open-source modern charting library that helps to create beautiful and interactive visualizations for web pages.


##### Server Side
* [Express JS](https://expressjs.com/) - flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Bcrypt JS](https://www.npmjs.com/package/bcrypt) - This module enables storing of passwords as hashed passwords instead of plaintext.
* [HTML-PDF](https://www.npmjs.com/package/html-pdf?activeTab=readme) - HTML to PDF converter that uses phantomjs
* [Mongoose](https://mongoosejs.com) - Provides a straight-forward, schema-based solution to model application data 
* [Nodemailer](https://nodemailer.com/about) - A module for Node.js applications to allow easy as cake email sending.

* [Node.js](https://nodejs.org/en)- Cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

##### Database
* [Node.js](https://nodejs.org/en)- Source-available cross-platform document-oriented database program.

 
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone https://github.com/jamesoyanna/smart-invoice.git
OR clicking on the code button ontop to clone the application.

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, to run the client application locally, you will have to install all the dependencies and packages. 
Open your terminal and navigate into the client folder using the command:
cd client

Create a .env file in the root of your client folder and add this:
REACT_APP_API = http://localhost:4000

 Run yarn or npm install from the root of the client folder.

### Development server

#### Running the client App

  ``` 
Run yarn start or npm start from the root of the client folder to start the development server. 
Go to http://localhost:3000 on your browser. Your app should be running.
The app will automatically reload if you make changes to any of the source files.
  ```

#### Running the Server
Open the project folder you cloned. 
Create a .env file in the root folder
Fill in the following credentials:
DB_URL = 
PORT =
SECRET = 
SMTP_HOST = 
SMTP_PORT = 
SMTP_USER = 
SMTP_PASS = 

Run npm install from your terminal.
Then run npm start. 
Your server should start running on  port 4000.

## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


