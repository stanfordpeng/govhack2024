The API allows clients to request livability data based on various factors (e.g., infrastructure, healthcare, education, etc.) for a specific suburb and year.

## API Specification: Livability Index Query

### 1. **API Endpoint**
   **URL**: `/api/v1/livability`

   **Method**: `GET`

   **Description**: Retrieves the livability index for a specified suburb in a given year.

---

### 2. **Request Parameters**

#### 2.1 **Query Parameters**:
   - **`suburb`**: *(required)* - Name of the suburb for which the livability index is being queried.
     - **Type**: `string`
     - **Example**: `"Melbourne"`

   - **`year`**: *(required)* - The year for which the livability index is being requested.
     - **Type**: `integer`
     - **Example**: `2023`

   - **`categories`**: *(optional)* - Specific categories of livability data to filter the results (e.g., healthcare, infrastructure, education).
     - **Type**: `array[string]`
     - **Valid Values**: `["healthcare", "education", "infrastructure", "safety", "transport", "environment"]`
     - **Example**: `["education", "healthcare"]`

   - **`unit`**: *(optional)* - Unit in which to return the livability index (e.g., scale from 1 to 10, percentage).
     - **Type**: `string`
     - **Valid Values**: `["score", "percentage"]`
     - **Default**: `score`
     - **Example**: `"percentage"`

   - **`format`**: *(optional)* - The format of the returned data.
     - **Type**: `string`
     - **Valid Values**: `["json", "xml"]`
     - **Default**: `json`

---

### 3. **Request Example**

#### 3.1 **Basic Request**:
```http
GET /api/v1/livability?suburb=Melbourne&year=2023 HTTP/1.1
Host: api.livability.com
```

#### 3.2 **With Optional Parameters**:
```http
GET /api/v1/livability?suburb=Melbourne&year=2023&categories=education,healthcare&unit=percentage&format=xml HTTP/1.1
Host: api.livability.com
```

---

### 4. **Response**

#### 4.1 **Response Parameters**:

- **`suburb`**: The name of the suburb.
  - **Type**: `string`
  - **Example**: `"Melbourne"`

- **`year`**: The year for which the livability index is provided.
  - **Type**: `integer`
  - **Example**: `2023`

- **`index`**: Overall livability score.
  - **Type**: `float`
  - **Example**: `8.7`

- **`categories`**: A breakdown of scores in each livability category (optional if `categories` is provided in the request).
  - **Type**: `object`
  - **Properties**:
    - **`healthcare`**: Score for healthcare.
      - **Type**: `float`
      - **Example**: `8.9`
    - **`education`**: Score for education.
      - **Type**: `float`
      - **Example**: `7.5`
    - **`infrastructure`**: Score for infrastructure.
      - **Type**: `float`
      - **Example**: `9.0`
    - **Other categories** as per the query.

#### 4.2 **Response Example (JSON)**:
```json
{
  "suburb": "Melbourne",
  "year": 2023,
  "index": 8.7,
  "categories": {
    "healthcare": 8.9,
    "education": 7.5,
    "infrastructure": 9.0
  }
}
```

#### 4.3 **Response Example (XML)**:
```xml
<response>
  <suburb>Melbourne</suburb>
  <year>2023</year>
  <index>8.7</index>
  <categories>
    <healthcare>8.9</healthcare>
    <education>7.5</education>
    <infrastructure>9.0</infrastructure>
  </categories>
</response>
```

---

### 5. **Error Handling**

#### 5.1 **Error Responses**:

- **400 Bad Request**: If required parameters (e.g., `suburb` or `year`) are missing or invalid.
  - **Response**:
    ```json
    {
      "error": "Bad Request",
      "message": "Required parameter 'suburb' is missing or invalid"
    }
    ```

- **404 Not Found**: If no data is found for the given suburb or year.
  - **Response**:
    ```json
    {
      "error": "Not Found",
      "message": "No data found for the suburb 'UnknownSuburb' in year 2023"
    }
    ```

- **500 Internal Server Error**: If an internal server error occurs.
  - **Response**:
    ```json
    {
      "error": "Internal Server Error",
      "message": "An unexpected error occurred. Please try again later."
    }
    ```

---

### 6. **Authentication**

This API may require **API key authentication** or **OAuth 2.0** for accessing protected data.

- **API Key**: Send the API key in the header.
  - **Header**: `Authorization: Bearer {API_KEY}`

---

### 7. **Rate Limiting**

There may be rate limiting to control the number of requests per minute.

- **Limit**: `100 requests per minute`
- **Header**: `X-RateLimit-Remaining` will show how many requests you can still make in the current window.

---

### 8. **Caching**

Response data may be cached to reduce load on the server.

- **Cache Duration**: `10 minutes`
- **Cache-Control Header**: `Cache-Control: public, max-age=600`

---

This specification allows developers to query the livability index of a suburb for a specific year with flexibility around data filtering, response formats, and optional parameters.
