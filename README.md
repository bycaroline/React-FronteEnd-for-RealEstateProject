# Frontend for Real Estate Project in SpringBoot that was deployed on AWS

The frontend is built in React. 

The backend is found here: 
https://github.com/bycaroline/ArchitectureCloudIntegration

### Endpoints

#### Company Endpoints

* **GET /company**: Fetches all construction companies. No parameters required. Expected response: `200 OK`.
* **GET /company/{id}**: Fetches a specific construction company by ID. Requires an `id` as a path parameter. Expected response: `200 OK`.
* **POST /company**: Creates a new construction company. Expects a JSON object with `name` and `location`. Expected response: `200 OK`.

```json
{
  "name": "Construction Company AB",
  "location": "Building Street 1"
}
```

* **PATCH /company/{id}**: Updates a construction company by ID. Requires an `id` as a path parameter and a JSON object with `name` and `location`. Expected response: `200 OK`.
* **DELETE /company/{id}**: Deletes a construction company by ID. Requires an `id` as a path parameter. Expected response: `200 OK`.

#### House Endpoints

* **GET /house**: Fetches all houses. No parameters required. Expected response: `200 OK`.
* **GET /house/{id}**: Fetches a specific house by ID. Requires an `id` as a path parameter. Expected response: `200 OK`.
* **POST /house**: Creates a new house. Expects a JSON object with `name`, `type`, `size`, `cost`, `readyMade`, and `companyId`. Expected response: `200 OK`.

```json
{
  "name": "Archipelago Villa",
  "type": "Attefall",
  "size": 30,
  "cost": 2000000,
  "readyMade": true,
  "company": {
    "id": 1
  }
}
```

* **PATCH /house/{id}**: Updates a house by ID.
* **DELETE /house/{id}**: Deletes a house by ID.
