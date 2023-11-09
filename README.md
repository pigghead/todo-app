# MERN Stack To Do list application
Utilizes MongoDb as a database, Express & Node as the web server, and React for the front-end.

# How to use
Launch a terminal instance. Navigate to the "backend" folder inside of the terminal and execute the "node server.js" command to launch the web server.

Launch a second terminal instance. Navigate to the "frontend" folder inside of the terminal and execute the "npm run start" command to launch the frontend.

(Note: "npm install" command may be needed in both instances before running other commands to ensure package and package-lock are up to date and in sync)

Inside of a web browser, navigate to "localhost:3000" to begin using the application.

# Additional Information
- Axios was used for convenient communication between the front end and the back end
- Sass was used in the frontend for CSS
- nodemon was used in development to prevent needless restarts of the backend after a modification
- Backend structure follows a basic separation of concerns, including a controller and router file for building the routes within the application
- There is no login for individualized to do lists as there was no specification for one, however could be an easy addition due to the backend architecture (controller, routes, etc)
- Form validation implented in the form of alerts (there are node packages to make this pretty)
- A __test__ folder inside of components in the frontend is present for component testing, used to ensure frontend .env folder works properly
- Separate node_modules, package.json, etc, files for separation of concerns