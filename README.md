# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Weather Monitoring Application - Frontend

## Project Overview
The frontend of the Weather Monitoring Application is built using React. It provides a user-friendly interface to display real-time weather data, daily summaries, and alerts based on user-defined temperature thresholds. The frontend communicates with the backend API to fetch and display data.

## Technologies Used
- **React**
- **Axios** (for API requests)
- **Material-UI** (for UI components)

## Installation

### Prerequisites
- **Node.js**

### Clone the Repository

git clone https://github.com/PratimaR6/Weather-Monitoring-Application.git
cd Weather-Monitoring-Application
Frontend Setup
Navigate to the Frontend Directory:


cd frontend
Install Dependencies:


npm install
Create a .env File: Set the backend URL:

plaintext

REACT_APP_BACKEND_URL=http://localhost:5000
Run the Frontend Application:


npm start
Usage
The application will be accessible at http://localhost:3000.
Users can view real-time weather data, daily summaries, and receive alerts based on temperature thresholds.
Features
Real-time weather data retrieval from the OpenWeatherMap API.
Daily weather summaries with average, maximum, and minimum temperatures.
Alerts for temperature thresholds.
Responsive design and user-friendly interface.
API Integration
The frontend interacts with the backend API to fetch weather data and manage alerts. Ensure the backend is running to successfully connect to the API.

API Endpoints
GET /weather: Retrieve weather data for specified coordinates.
POST /alerts: Set alerts based on user-defined temperature thresholds.
Styling
The application uses Material-UI for a modern and responsive design. You can customize styles based on your preferences by modifying the components.

Testing
To test the frontend:

Ensure your backend server is running and connected to the MySQL database.
Verify the functionality by checking data retrieval and alert features.
Future Enhancements
User authentication for personalized settings.
Search functionality for custom locations.
Historical data visualizations using charts.
Improved UI/UX with additional design libraries.
