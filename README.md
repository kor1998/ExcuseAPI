# **ExcuseAPI**

## A simple React application that generates random excuses from different categories like party, office, and family using an external API.


## Table of Contents
*  Overview
*  Features
*  Installation
*  Usage
*  API Endpoint
*  Technologies Used
*  Contributing


## Overview

ExcuseAPI is a React-based application that fetches random excuses from a public excuse API. By clicking a button, you can generate excuses based on different categories like party, office, and family.


## Features
* Generate random excuses based on categories.
* Clean and simple UI.
* Fetches data from an external API using Axios.


## Installation

To get started with the project, follow these steps:

1. Clone the repository:

`git clone https://github.com/kor1998/ExcuseAPI.git`

2. Navigate to the project directory:

`cd excuseAPI`

3. Install dependencies:

Make sure you have Node.js installed, then run:

`npm install`

4. Start the development server:

`npm start`

This will open the application in your default browser at `http://localhost:3000`.

## Usage
Once the application is running, you will see three buttons for different excuse categories:

* Party: Generates a random excuse related to parties.
* Office: Generates a random excuse for the office.
* Family: Generates a random excuse related to family matters.

Clicking on any of these buttons will fetch a random excuse from the relevant category and display it on the screen.

## Code Example

Here is a code example for fetching excuses based on different categories using Axios in React:

```javascript
import "./styles.css";
import Axios from "axios";
import { useState } from "react";

export default function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenerateExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h3>Generate Excuse</h3>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <p>{generateExcuse}</p>
    </div>
  );
}
```
## API Endpoint

The application fetches excuses from the following endpoint:


```https://excuser-three.vercel.app/v1/excuse/{category}/```

Where `{category}` can be one of the following:

*  party
*  Office
*  Family

## Technologies Used

*  React: For building the user interface.
*  Axios: For making HTTP requests to the API.
*  CSS: For styling the application.

## Contributing
Feel free to contribute by submitting a pull request. Ensure that you follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: git checkout -b feature-branch
3. Commit your changes: git commit -m "Add some feature"
4. Push to the branch: git push origin feature-branch
5. Submit a pull request.

