# Authentication & Request Flow – Fitness App

## 1. High-Level Architecture

```
React Frontend
   |
   |  (JWT in Authorization Header)
   ↓
Spring Boot Backend (API)
   |
   |  (JWT validation)
   ↓
Keycloak (Auth Server)
```

**Roles**

* **Frontend**: Handles login UI, stores token, sends authenticated requests
* **Keycloak**: Authenticates users, issues JWTs
* **Backend**: Validates JWT, enforces access control, executes business logic

---

## 2. Login Flow 

```
1. User enters username & password on Login page
2. Frontend sends credentials to Keycloak
3. Keycloak returns:
   - access_token (JWT)
   - refresh_token
   - expires_in
4. Frontend stores:
   - access_token in localStorage
   - userId in localStorage
5. User is redirected to protected pages
```

**Important Notes**

* Access token is used for all API calls
* Token is attached via Axios interceptor
* Refresh token is currently NOT used

---

## 3. Authenticated Request Flow

### Example: Fetch activities

```
Frontend:
1. Reads access_token from localStorage
2. Axios interceptor adds:
   Authorization: Bearer <access_token>
   X-User-ID: <userId>

Backend:
3. Spring Security filter validates JWT
4. Extracts user identity
5. Controller executes business logic
6. Response returned to frontend
```

---

## 4. Token Handling (Critical Section)

### Current Behavior

* Token is stored in `localStorage`
* Token expiration is controlled by Keycloak
* No refresh-token handling implemented
* When token expires:

  * Backend returns 401
  * Frontend logs user out

### Suspected Issue

> User is logged out quickly due to short token lifespan or missing refresh logic

---

## 5. Recommendation Flow (AI Feature)

```
1. User selects an activity
2. Frontend calls:
   GET /api/recommendations/activity/{activityId}
3. Backend fetches AI recommendation
4. If not found:
   - Returns empty but valid Recommendation object
5. Frontend renders:
   - Analysis text
   - Improvements
   - Suggestions
   - Safety guidelines
```

---

## 6. Current Known Issues

```
Issues
- User session expires quickly
- No refresh-token usage
- No user registration UI
- Activity + Recommendation fetched separately

Planned Fixes
- Investigate Keycloak token lifespan
- Add refresh-token handling or longer token TTL
- Add Register page
- Clean API contract (DTO or separate calls)
```

---

## 7. Why This Design Was Chosen

* JWT-based auth is scalable and stateless
* Keycloak offloads authentication complexity
* Backend remains focused on business logic
* AI recommendation is decoupled from activity creation




