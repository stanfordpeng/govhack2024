The API allows clients to request livability data based on various factors (e.g., infrastructure, healthcare, education, etc.) for a specific suburb and year.

## API Specification: Livability Index Query

### 1. **API Endpoint**
   **URL**: `/api/v1/livability`

   **Method**: `GEThe API allows clients to request livability data based on various factors (e.g., infrastructure, healthcare, education, etc.) for a specific suburb and year.

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
T`

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
    - **`infrastructure`**: Score for infrastructThe API allows clients to request livability data based on various factors (e.g., infrastructure, healthcare, education, etc.) for a specific suburb and year.

## API Specification: Livability Index Query

### 1. **API Endpoint**
   **URL**: `/api/v1/livability`

   **Method**: `GEThe API allows clients to request livability data based on various factors (e.g., infrastructure, healthcare, education, etc.) for a specific suburb and year.

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
T`

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
ure.
      - **Type**: `float`
      - **Example**: `9.0`
    - **Other categories** as per the query.
