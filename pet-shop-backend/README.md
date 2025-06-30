## 🇬🇧 English Version

# Pet Shop Backend

## Description

This is the backend part of a pet store e-commerce project. It implements a REST API for managing categories, products, and orders.

## Project Structure

- `/database`

  - `/models`

    - `category.js`: Category model
    - `product.js`: Product model

  - `database.js`: SQLite database connection configuration

- `/public`

  - `/category_img`: Category images
  - `/product_img`: Product images

- `/routes`

  - `categories.js`: Routes for category operations
  - `order.js`: Routes for order operations
  - `products.js`: Routes for product operations
  - `sale.js`: Routes for sale operations

- `index.js`: Main server file
- `database.sqlite`: SQLite database file
- `package.json` and `package-lock.json`: Project dependency files
- `README.md`: Project description

## Installation and Running

1. Clone the repository:

```bash
git clone <repository URL>
```

2. Navigate to the project folder:

```bash
cd <project folder name>
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

The server will start and listen on port 3333.

## API Testing

You can test the API using Postman or a browser.

### Example API Routes

- Get all categories: `GET /categories/all`
- Get products by category: `GET /categories/:id`
- Get all products: `GET /products/all`
- Get product by ID: `GET /products/:id`
- Place an order: `POST /order/send`
- Submit coupon request: `POST /sale/send`

### Example Request

#### Get All Categories

```bash
axios.get('https://petshop-backend-33od.onrender.comcategories/all')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

#### Place an Order

```bash
const orderData = {
  name: "John Doe",
  phone: "1234567890",
  email: "johndoe@example.com",
  products: [
    {
      id: 1,
      quantity: 2
    },
    {
      id: 2,
      quantity: 1
    }
  ]
};

axios.post('https://petshop-backend-33od.onrender.comorder/send', orderData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Technologies Used

- Node.js
- Express
- Sequelize
- SQLite
- Cors
- Axios

---

## 🇩🇪 Deutsche Version

# Pet Shop Backend

## Beschreibung

Dies ist der Backend-Teil eines E-Commerce-Projekts für ein Haustiergeschäft. Es stellt eine REST-API zur Verwaltung von Kategorien, Produkten und Bestellungen bereit.

## Projektstruktur

- `/database`

  - `/models`

    - `category.js`: Kategorie-Modell
    - `product.js`: Produkt-Modell

  - `database.js`: Konfiguration der SQLite-Datenbankverbindung

- `/public`

  - `/category_img`: Bilder der Kategorien
  - `/product_img`: Bilder der Produkte

- `/routes`

  - `categories.js`: Routen für Kategorien
  - `order.js`: Routen für Bestellungen
  - `products.js`: Routen für Produkte
  - `sale.js`: Routen für Verkäufe

- `index.js`: Hauptserverdatei
- `database.sqlite`: SQLite-Datenbankdatei
- `package.json` und `package-lock.json`: Abhängigkeitsdateien
- `README.md`: Projektbeschreibung

## Installation und Start

1. Repository klonen:

```bash
git clone <Repository-URL>
```

2. In das Projektverzeichnis wechseln:

```bash
cd <Projektordner-Name>
```

3. Abhängigkeiten installieren:

```bash
npm install
```

4. Server starten:

```bash
npm run dev
```

Der Server wird gestartet und hört auf Port 3333.

## API testen

Die API kann mit Postman oder einem Browser getestet werden.

### Beispielhafte API-Routen

- Alle Kategorien abrufen: `GET /categories/all`
- Produkte nach Kategorie abrufen: `GET /categories/:id`
- Alle Produkte abrufen: `GET /products/all`
- Produkt nach ID abrufen: `GET /products/:id`
- Bestellung aufgeben: `POST /order/send`
- Anfrage für Rabatt senden: `POST /sale/send`

### Beispielanfragen

#### Alle Kategorien abrufen

```bash
axios.get('https://petshop-backend-33od.onrender.comcategories/all')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

#### Bestellung aufgeben

```bash
const orderData = {
  name: "John Doe",
  phone: "1234567890",
  email: "johndoe@example.com",
  products: [
    {
      id: 1,
      quantity: 2
    },
    {
      id: 2,
      quantity: 1
    }
  ]
};

axios.post('https://petshop-backend-33od.onrender.comorder/send', orderData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Verwendete Technologien

- Node.js
- Express
- Sequelize
- SQLite
- Cors
- Axios
