# Fitness Microservices Platform - Frontend

A React-based frontend for a distributed fitness tracking system built
with Spring Boot microservices.\
This application handles secure authentication via Keycloak and
communicates with backend services using JWT-secured REST APIs.


## Overview

The frontend provides the user interface for:

-   Secure user login via Keycloak (OIDC)
-   Activity tracking and management
-   Viewing AI-based fitness recommendations
-   Protected routes using JWT authentication

It interacts with a Spring Boot microservices backend and follows a
clean, modular structure for maintainability.


## High-Level Architecture

    React Frontend
          |
          |  (JWT in Authorization Header)
          ↓
    Spring Boot Backend (REST APIs)
          |
          |  (JWT validation)
          ↓
    Keycloak (Authentication Server)

### Responsibilities

-   **Frontend**: Handles login UI, stores JWT, sends authenticated
    requests\
-   **Keycloak**: Authenticates users and issues access tokens\
-   **Backend**: Validates JWT, enforces access control, executes
    business logic


## Tech Stack

-   React
-   Axios
-   Context API
-   Keycloak (OIDC)
-   JWT Authentication
-   Spring Boot (Backend)
-   Docker (Containerized deployment)


## Authentication Flow

1.  User logs in via Keycloak
2.  Keycloak returns:
    -   `access_token` (JWT)
    -   `refresh_token`
3.  Frontend stores the `access_token`
4.  Axios interceptor automatically attaches:

```{=html}
<!-- -->
```
    Authorization: Bearer <access_token>

to all protected API requests.

The backend validates the token using Spring Security before processing
requests.


## Features

-   Secure login via Keycloak
-   Protected routes
-   JWT-based API authentication
-   Activity tracking UI
-   AI recommendation display
-   Clean client-server separation


## Screenshots

    ![Dashboard](screenshots/dashboard.png)


## ▶️ How To Run Locally

### 1️. Clone Repository

    git clone https://github.com/your-username/fitness-microservice-frontend.git
    cd fitness-microservice-frontend

### 2. Install Dependencies

    npm install

### 3️. Start Development Server

    npm start

Make sure the backend services and Keycloak server are running before
logging in.


## Notes

This frontend is part of a distributed microservices system designed to
demonstrate:

-   Secure JWT-based authentication
-   Service-to-service communication
-   Clean architecture principles
-   Scalable system design

