# Request Header Parser Microservice

This is a simple microservice that parses request headers and returns information about the client's IP address, preferred language, and software (user agent).

## Features

- Returns the client's IP address.
- Parses and returns the `Accept-Language` header.
- Parses and returns the `User-Agent` header.

## Endpoints

### Base URL
`GET /`

Returns a welcome message.

#### Example Response:
```json
{
  "message": "Welcome to the Request Header Parser Microservice! Use the /api/whoami endpoint."
}
