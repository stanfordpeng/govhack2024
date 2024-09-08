# Insights AI
Governments and policymakers often face challenges in understanding the evolving needs of their communities, leading to inefficient resource allocation, delayed infrastructure upgrades, and slow responses to local developments. 

This AI-powered platform addresses these issues by integrating multi-dimensional data, including historical population growth, current geo amenities (such as police stations, hospitals, and schools), and future forecasts for the next 10 to 20 years. 

By analyzing these data points, the platform provides actionable insights and recommendations on critical infrastructure upgradesranging from roads , agecare facilities, parks to educational facilities like schools and universities, healthcare services such as hospitals and clinics, and other essential amenities like petrol stations and train stations. It identifies optimal locations and timelines for these developments, ensuring they meet the future demands of the growing community effectively and efficiently.

This Platform also provides APIs for Real time Livability Index per location and Also Forecasts Livability Index and Corresponding SubIndices for User Selected Duration. 

## Problems We identified
* Accurately predicting population growth using traditional methods that rely solely on birth and death rates proves to be increasingly challenging. For governments to allocate resources effectively and enhance overall quality of life, a more holistic and data-driven approach is crucial.
* Governments and policymakers often struggle to fully understand the changing needs of their communities, which can result in inefficient resource distribution, delayed infrastructure improvements, and slow responses to local developments.
* Without accurate insights and reliable forecasts, authorities are unable to identify areas that require attention within their jurisdictions, further complicating timely interventions.
* Additionally, the general public lacks access to real-time and forecasted information about livability factors in areas where they wish to live or work, making informed decisions difficult.

Addressing these gaps is crucial to building more resilient, thriving communities.


## How Insights AI solves these problems
 

### Overall SubSytem View

<img width="1182" alt="Systems View" src="https://github.com/user-attachments/assets/2a8c3377-8a58-4372-a04e-7bb1578f6036">


### Insights AI and Livability Index + Insights


## Example  Applications 

### CommunityInsights  

### AtlasAI

### Livability Index Feed to Real Estate Apps.

## Insights AI APIs

### Livability Index
 GET /api/v1/liveability

* Query Params
    * lga (required)
    * year (required)
    * categories (optional)
    * unit (optional)
* Response

{
    "lga": "Whitehorse",
    "year": 2023,
    "index": 8.7,
    "categories": {
        "healthcare": 8.9,
        "education": 7.5,
        "infrastructure": 9.0
    }
}                 

GET /api/v1/population-forecast
 
GET /api/v1/insights/{domain}

* domain = healthcare, education, infrastructure, environment, housing

GET /api/v1/generated-response


Data sources 
https://dbr.abs.gov.au/region.html?lyr=lga&rgn=25620
https://dbr.abs.gov.au/region.html?lyr=sa3&rgn=21305
https://dbr.abs.gov.au/region.html?lyr=lga&rgn=26170
https://dbr.abs.gov.au/region.html?lyr=sa4&rgn=204
https://dbr.abs.gov.au/region.html?lyr=lga&rgn=22750
https://dbr.abs.gov.au/region.html?lyr=lga&rgn=25710


#### Success Response

**Code** : `200 OK`

**Content example**

### Insights API
This API will provide the Admin View 



## Benefits 

## Video Demonstration
