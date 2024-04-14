# README.md - HandyBuddy App with Vue.js
<br />

Hi there, thanks for reading README.md, please see below structure of the contents. <a name="home">HOME</a>

1. [Application introduction](#ch1)
2. [Installation guide](#ch2)
3. [Usage](#ch3)  
4. [Features](#ch4)
5. [Codebase and structure overview](#ch5)
6. [License](#ch6)
7. [Reference](#ref)

***
<br />

 
  
## <a name="ch1">Application Introduction</a>

<p>This demo application is developed using React front-end framework, and it is called "HandyBuddy", which is our revolutionary to-do list and note-taking hybrid app! Seamlessly switch between planning and capturing ideas. Stay organized with personalized features. Take control of your time and maximize productivity. Experience efficiency like never before. Welcome to the future of productivity!</p>

Please refer to here to find references if you want to learn about application [Features](#ch4).\
Please refer to here to find references if you want to learn about application [Codebase and structure overview](#ch5).\
\
<br />
## <a name="ch2">Installation Guide</a>

Let's get your machine and environment ready for running the app!

 1. **GitHub account**\
In order to clone this project to your local environment, you need to have your own GitHub account which has access to this project and has permission to take a copy of this project.


 2. **Git Desktop**
Install Git in your local environment. Please refer here to download the [latest Git](https://git-scm.com/downloads) [1].


 3. **Microsoft Visual Studio Code** - getting your Visual Studio Code ready. Please refer [Visual Studio Code Download page](https://code.visualstudio.com/download) [2], and install it in your machine.


 4. **Node.js** - is also essential for running the application, please install beforehand, you can refer [here](https://nodejs.org/en/download/current) [3] to download Node.js.


 5. **NPM** - Node Package Manager. After installing Node.js, open Visual Studio Code, NPM needs to be configured and installed using install `npm install -g npm` by running on the Bash console or command prompt [4].

 6. **Browser** - A browser is needed for running the application. This can be IE, Google Chrome or some others.

\
<br />
## <a name="ch3">Usage</a>

**1. Pull and Clone the Repo**
\
To clone this project, go to this repository's main branch page and copy this project's Clone HTTPS link.

![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/aed5a989-7782-4f92-8ead-1090fd0cfd39)

\
<br />

**2. Save Project**
\
Open Visual Studio Code, click on Command Palette from the left bottom corner. Type `Git: Clone`.\
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-KhilliamsChise/assets/114396691/1a90a095-7103-46bc-a33b-8fd06bf36256)

Paste your copied GitHub link to the search box and confirm.\
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-KhilliamsChise/assets/114396691/4c61f104-3f9e-4634-8f0b-c78141a76e07)

Store your cloned project to your named folder.

Please note it may have a prompt that needs your authorization through GitHub, and you can then authorize the permission.
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-KhilliamsChise/assets/114396691/a691bd29-ac96-4865-ac76-eadfc1691c24)

\
<br />

**3. Open Project**
\
Suggest opening the project folder by manually opening a new VS Code folder so that you will not run the incorrect folder path.
![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-KhilliamsChise/assets/114396691/eb6c5dfd-d093-474d-b19e-9cb31d81ea9a)


Click on 'Trust the author' option if it gives an alert.

![image](https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-KhilliamsChise/assets/114396691/9e4457a4-7edc-46a4-97e7-eb056acd5b4e)
\
<br />

**4. Run App**
\
After you can see all the project folders and files you can then run `npm i` to install all necessary dependent packages.

Once the installation is done, run `npm start` to run the application, you can then click on a prompted link starting with a local host name like this 'http://localhost:3000'.

Click on the link and press Ctrl on the keyboard at the same time to open the web app on your default browser. 
\
<br />
## <a name="ch4">Application Features</a>
<p>This application is called "HandyBuddy". There are three main functions in this application. </p>

#### a) Routing to different pages
In the application, there are several places which provide links and buttons where you are able to click on and go to the certain page. This is also called one-page application.
These places are the navigation bar on the heading, the footer, and the home page.

#### b) Note/ To-do list creating area

![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/abae5050-fc9d-4b7c-9ce6-316eb3b926f2)

This area in Jot Down page allows user input their note or to-do list information including titles, contents, dates, or list items.\
This button below lets users choose the paper input type, either note or to-do list.\
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/eb00ae8a-a12d-4bb9-8660-de9c856adb36)


Users also can refresh the area by using the below button if they want to re-enter the information again.\
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/14cec757-5de7-41db-9f48-dd5ff10efe34)


If users finish all the entries and are ready for publishing the paper then they can simply click the submit button.\
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/fb7cd7c3-90ca-4beb-8cec-107f81a96cfb)



#### c) Paper delete & done
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/c1bca0b4-0107-45b2-94f2-ed808316dd45)


Once the paper has been published, that paper will be shown in the paper display area along with the input information.\

In order to delete a piece of paper, simply click on the delete icon then the paper will be removed from the paper display area.<br />
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/3d6ba40b-45ba-459c-9f89-77622e38c7e0)


If a to-do list item is done and the user wants to mark it as done, the user can click on the targeted item and a line-through style will be added to the specific item.\
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/50f89cb6-0f5b-4e9e-92a3-771867ae3d80)

Click on once again, the line will be gone and go back to normal style.
\
<br />
## <a name="ch5">Codebase & Structure Overview</a>
This application is developed via React under version 18.2.0.
#### Codebase & Structure
The codebase can be found under the same repository folder as this README.md file.

They are constructed by the following files and components.\
![image](https://github.com/KhilliamsChise/ReactAPP-HandyBuddy/assets/114396691/38c548ac-c3c3-44d5-866b-b05eb020dac7)


#### Dependencies
Please refer to `package.json` file for application dependencies.

  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.15.14",
    "@mui/styled-engine": "^5.15.14",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
\
<br />

## <a name="ch6">License</a>
This project is licensed under the MIT License.
\
<br />
## <a name="ref">Reference</a>

[1] Git --local-branching-on-the-cheap - https://git-scm.com/downloads \
[2] Download Visual Studio Code - Free and built on open source. Integrated Git, debugging and extensions. https://code.visualstudio.com/download  \
[3] Download Node.js® - https://nodejs.org/en/download/current   \
[4] Downloading and installing Node.js and npm - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm  


[Home](#home)
