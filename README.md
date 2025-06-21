# Travlr Getaways – Full Stack Application

> CS 465 – Full Stack Development

> Author: Jeba Singh Emmanuel

> Version: 1.0

> Last Updated: June 21, 2025


## Overview

Travlr Getaways is a full stack travel booking platform built using the MEAN stack: MongoDB, Express.js, Angular, and Node.js. It features two main interfaces—one for customers to browse and book trips, and another for internal staff to manage content and user roles. The system emphasizes modularity, scalability, and performance.

## Architecture

In this project, I worked with multiple types of frontend development approaches. Initially, the application used traditional server-side rendering with Express and Handlebars to deliver pages like /travel, /meals, and /rooms. These pages were rendered on the server and reloaded entirely with each navigation action. Later, I implemented Angular-based Single Page Applications (SPA) for both the customer-facing site and the admin dashboard. Angular allowed for component-based design and client-side routing, which provided a smoother user experience and better performance for authenticated users.

The backend used MongoDB, a NoSQL database, because of its flexibility with unstructured data. Travel bookings and trip data often have nested structures (e.g., itineraries, accommodation options), which are well-suited to JSON-style documents in MongoDB. Additionally, MongoDB integrates well with Node.js using Mongoose, making the stack fully JavaScript-based and easier to manage.

## Functionality

JSON (JavaScript Object Notation) is a lightweight data format that, while derived from JavaScript, is language-independent and structured as key-value pairs. JSON serves as the common format for data interchange between the frontend (Angular) and backend (Express). When a user selects a trip on the frontend, that selection is serialized as JSON and sent to the server via HTTP requests. The server processes the request, accesses or modifies data in MongoDB, and returns the result in JSON format back to the client for display.

During the development process, I refactored several parts of the codebase to improve functionality and efficiency. One example is the trip-card component in Angular. Instead of duplicating markup across pages, I created a reusable component that accepted input properties and rendered trip information consistently across views. This reduced duplication and improved maintainability. Another improvement was converting service methods into injectable Angular services to ensure all HTTP requests were centralized and consistent.

## Testing

Testing API endpoints required both manual and automated methods. I used Postman to validate API routes like /api/trips and /api/trips/:tripCode by sending requests with different headers and payloads. Compass was used to verify changes in the MongoDB database. Angular testing was more complex due to JWT-based security. For authenticated routes, I had to simulate login and token handling before testing data flows.

Each API endpoint followed RESTful conventions and returned JSON data. Secure routes were protected with middleware that validated tokens. I logged all incoming requests and errors using middleware functions, which helped me debug and ensure the Express server was handling routing and authentication as expected. These layers made testing more challenging but also more realistic and secure.

## Reflection

This course has strengthened both my technical and architectural understanding of full stack development. I’ve learned how to integrate frontend and backend systems using a unified tech stack and how to manage real-world constraints like security, performance, and code reusability. Building and debugging SPAs gave me insight into client-side state management and routing. At the same time, working with MongoDB and Express deepened my understanding of APIs, data modeling, and authentication.

Most importantly, I now feel confident in planning, implementing, and documenting full stack applications that are production-ready. These skills—especially in API design, component reuse, and testing—make me a more competitive candidate for full stack or frontend engineering roles in the job market.
