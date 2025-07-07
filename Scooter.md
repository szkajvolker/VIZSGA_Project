# 🛴 Scooter Rental App — Rent & Manage Scooters

**Description:**
A scooter rental application where scooters can be added to the database, displayed on the frontend, and managed by users.

---

## 1⃣️ Backend

- Create a new project and a cluster on the [MongoDB website](https://cloud.mongodb.com/).
- Set up the **MVC** folder structure within the backend.
- Store the MongoDB connection string and port number in a `.env` file.
- Create a `Scooter` model with the following fields:
  `model`, `brand`, `img`, `maxSpeed` (km/h), `range` (km), `pricePerHour` (EUR), `isElectric`, `available`, `createdAt`(Date), `updatedAt`(Date).
- Connect the backend to MongoDB.

---

## 2⃣️ CRUD & Postman

- Following the **MVC structure**, create routes and corresponding logic for **Create, Read, Update, Delete** operations.
- Test the CRUD operations using **Postman**. If tests are successful, delete all documents.
- Add the following 8 new documents:

```json
[
  {
    "model": "City Glide",
    "brand": "UrbanMove",
    "img": "https://images.unsplash.com/photo-1597260491651-ee327fc487b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjb290ZXJ8ZW58MHx8MHx8fDA%3D",
    "maxSpeed": 25,
    "range": 20,
    "pricePerHour": 5.99,
    "isElectric": true,
    "available": true
  },
  {
    "model": "Commuter X2",
    "brand": "SpeedGo",
    "img": "https://images.unsplash.com/photo-1597260491619-bab87197869f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
    "maxSpeed": 30,
    "range": 25,
    "pricePerHour": 7.49,
    "isElectric": true,
    "available": true
  },
  {
    "model": "Cruiser Classic",
    "brand": "RideOn",
    "img": "https://plus.unsplash.com/premium_photo-1715697682205-e033c9ec5efa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjb290ZXJ8ZW58MHx8MHx8fDA%3D",
    "maxSpeed": 20,
    "range": 15,
    "pricePerHour": 4.99,
    "isElectric": false,
    "available": true
  },
  {
    "model": "EcoRide 500",
    "brand": "GreenWay",
    "img": "https://images.unsplash.com/photo-1675980892208-7b6ba39120ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "maxSpeed": 22,
    "range": 18,
    "pricePerHour": 5.49,
    "isElectric": true,
    "available": false
  },
  {
    "model": "Speedster Pro",
    "brand": "Velocity",
    "img": "https://images.unsplash.com/photo-1660617639989-ce8cc1d5741e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "maxSpeed": 35,
    "range": 30,
    "pricePerHour": 8.99,
    "isElectric": true,
    "available": true
  },
  {
    "model": "Mini Scooter",
    "brand": "FunRide",
    "img": "https://images.unsplash.com/photo-1686189673515-7b9680f52fa4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "maxSpeed": 15,
    "range": 10,
    "pricePerHour": 3.99,
    "isElectric": false,
    "available": true
  },
  {
    "model": "Explorer X",
    "brand": "AdventureCo",
    "img": "https://images.unsplash.com/photo-1600613826719-56be220a17bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "maxSpeed": 28,
    "range": 22,
    "pricePerHour": 6.49,
    "isElectric": true,
    "available": true
  },
  {
    "model": "Urban Swift",
    "brand": "CityRider",
    "img": "https://images.unsplash.com/photo-1614226170075-d338afcd9c53?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "maxSpeed": 26,
    "range": 21,
    "pricePerHour": 6.99,
    "isElectric": true,
    "available": false
  }
]
```

---

## 3⃣️ Frontend

- Create your React app using **Vite**, remove unnecessary starter code.
- Install **TailwindCSS**, or use minimal plain CSS (for card layout and form structure).
- Create **3 routes**: `CreatePage`, `HomePage`, `ScooterPage`.
- Create a `ScooterCard` component to display scooter details.
- Create a **Navbar** with buttons to navigate between `HomePage` and `CreatePage`.

---

## 4⃣️ HomePage

- Display a centered **Available Scooters** title at the top.
- Show only the `available` scooters, displayed in cards.
- In a separate section show every Scooter sorted by **pricePerHour**.
- Find the scooter with the highest (maxSpeed + range) average, and display its details.

---

## 5⃣️ CreatePage

- Create a form that adds a new scooter to the database on submit.
- After a successful creation the app navigates the user to the `HomePage`

---

## 6⃣️ ScooterPage & Card Updates

- Add a button to each `ScooterCard` to navigate to the `ScooterPage` showing detailed information.
- Add a button to each `ScooterCard` to **delete** the scooter from the database and update the `HomePage`.

---

## 7⃣️ Test the Application

✔️ There are **3 pages**:

- Two accessible via Navbar buttons (`HomePage`, `CreatePage`).
- One via scooter button (`ScooterPage`).

✔️ `HomePage` fetches and displays all scooters.
✔️ `CreatePage` form adds a new scooter, which appears on `HomePage`.
✔️ Clicking a `ScooterCard` button navigates to `ScooterPage` with details.
✔️ Delete button removes scooter and rerenders `HomePage`.
✔️ Navbar is visible on every page.

---

## 8⃣️ Optional Features

- Add an **Edit** button to `ScooterCard` that opens a modal with an update form.
- Add a search section on `HomePage` to filter scooters by brand:

  - Use a button or live filtering with input change listener.

- Enhance your project with CSS to improve its design and make it more visually appealing.

---

## 9⃣️ GitHub

- **Do not upload** `node_modules` or `.env` to your repository.
- Please make the repo public or add me as contributor and send the link on Discord.

**Thank you!** 🎉
