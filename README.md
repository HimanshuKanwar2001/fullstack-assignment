Abstract Help Center
Overview
This project is a simple Help Center application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to view help cards, and admins can add new cards to the system.

Features
Help Center: A list of help cards that users can browse.
Card Form: A component that allows admins to add new cards to the database.
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v12 or later)
npm (v6 or later)
MongoDB (Ensure it's running on your system or use a cloud-based MongoDB service like MongoDB Atlas)
Installation
Clone the repository

bash
Copy code
git clone https://github.com/yourusername/help-center.git
cd help-center
Install server dependencies

Navigate to the server directory and install the required packages:

bash
Copy code
cd server
npm install
Install client dependencies

Navigate to the client directory and install the required packages:

bash
Copy code
cd ../client
npm install
Set up MongoDB

Ensure MongoDB is running on your local machine.
You can also use a cloud MongoDB service by updating the connection string in server/config/mongoose.js.
Run the server

Navigate to the server directory and start the server:

bash
Copy code
cd ../server
node index.js
Run the client

Navigate to the client directory and start the React app:

bash
Copy code
cd ../client
npm start
The application should now be running on http://localhost:3000 for the client and http://localhost:8000 for the server.

Adding Cards to the Database
To add cards to the database, you need to use the CardForm component. However, by default, this component is not added to the main page. Follow these steps to include the CardForm:

Open the client/src/App.js file.
Add a route for the CardForm component.
js
Copy code
<Route path="/add-card" element={<CardForm />} />
Now, navigate to http://localhost:3000/add-card to access the form and add data to the database.
CardForm Component
The CardForm component allows you to add new help cards by submitting a form. Each card includes the following fields:

Title: The title of the card (required)
Description: A brief description of the card (required)
Link: An optional link related to the card
To use the CardForm:

Navigate to the /add-card route in your browser.
Fill out the form with the card details and click "Submit."
The card will be added to the database and can be viewed on the Help Center page.
Project Structure
server/: Contains the backend code, including the API routes, controllers, and models.
client/: Contains the frontend React code.
models/: Contains the MongoDB models (e.g., Card schema).
controllers/: Handles the logic for each route.
routes/: Contains the Express routes.


Conclusion
You have successfully installed and set up the Help Center application. You can now view existing help cards and add new ones using the CardForm component.

If you encounter any issues, feel free to reach out!