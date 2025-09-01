📃 To-Do List Application

📌 Project Overview
A sleek full-stack To-Do List web application built with Spring Boot (Java 21, Spring 6, Tomcat 11, MySQL) for the backend and React for the frontend. 
The app features CRUD operations, task filters, due dates, priority tags, completion checkboxes, and a polished custom UI with a background image.

✨ Features
- Create, Read, Update, and Delete tasks
- Mark tasks as complete with checkboxes
- Filter tasks: All, Completed, Incomplete
- Set due dates and priorities for tasks
- Modern, responsive React frontend with a custom background image
- Backend with Spring Boot, secured REST API, and MySQL storage
  
🛠️ Technologies Used
• Java 21, Spring Boot 6, Tomcat 11
• MySQL Database
• React.js with CSS for frontend styling
• RESTful API integration

⚙️ Backend Setup
1. Clone the repository and open the backend folder in your IDE (e.g., IntelliJ or Eclipse).
2. Update `application.properties` with your MySQL credentials.
3. Create a MySQL database named `todo_db`.
4. Run `mvn spring-boot:run` to start the backend server on `http://localhost:8080`.
   
💻 Frontend Setup
1. Navigate to the `todo-frontend` folder.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the React frontend on `http://localhost:3000`.

🗄️ MySQL Database Setup
1. Install MySQL and create a database named `todo_db`.
2. Update username and password in `application.properties`.
3. Tables will be auto-created by Spring Boot JPA.
   
🚀 Running the Application
1. Start the Spring Boot backend server.
2. Start the React frontend.
3. Open `http://localhost:3000` in your browser to use the app.
