
Certainly! Here's a basic README file that summarizes the process of setting up your Electronic Medical Record System with Node.js, Express, and MongoDB.

UGMCS EMR - Electronic Medical Record System
This project implements an Electronic Medical Record (EMR) System for the University of Ghana Medical Center (UGMC). It uses Node.js with the Express framework for building REST APIs and MongoDB for data persistence.

Setup Instructions
1. Prerequisites
Node.js installed
MongoDB installed and running
2. Project Initialization
bash
Copy code
# Clone the repository
git clone https://github.com/your-username/ugmcs-emr.git

# Navigate to the project directory
cd ugmcs-emr

# Install dependencies
npm install
3. MongoDB Configuration
Create a MongoDB Database:

Ensure MongoDB is installed and running.
Create a new MongoDB database (e.g., ugmcs-emr).
Configure .env file:

In the project root, create a .env file.

Set the MongoDB URI in the .env file:

bash
Copy code
MONGODB_URI=mongodb://localhost:27017/ugmcs-emr
4. Database Connection
The database connection is managed in the db.js file. Make sure it reads the MongoDB URI from the .env file.
5. Run the Application
bash
Copy code
# Start the application
node app.js
The server will be running on http://localhost:3000 (or a different port if specified).

Implemented Functionality
Register Patients:

Endpoint: POST /api/patients
Example Payload:
json
Copy code
{
  "patientId": "123",
  "surname": "Doe",
  "otherNames": "John",
  "gender": "Male",
  "phoneNumber": "123456789",
  "residentialAddress": "123 Main St",
  "emergencyName": "Emergency Contact",
  "emergencyContact": "987654321",
  "emergencyRelationship": "Spouse"
}
Start an Encounter:

Endpoint: POST /api/encounters
Example Payload:
json
Copy code
{
  "patientId": "123",
  "encounterType": "Emergency"
}
Submit Patient Vitals:

Endpoint: POST /api/vitals
Example Payload:
json
Copy code
{
  "patientId": "123",
  "bloodPressure": "120/80",
  "temperature": "98.6",
  "pulse": "72",
  "spO2": "98"
}
View List of Patients:

Endpoint: GET /api/patients
View Details of a Specific Patient:

Endpoint: GET /api/patients/:patientId