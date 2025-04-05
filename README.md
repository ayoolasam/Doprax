# 🌩️ Cloud Service Deployment Wizard

A multi-step cloud service deployment wizard built with **Vue.js**, **Tailwind CSS**, **Maz UI**, and **Pinia**. This project simulates deploying a cloud service by collecting configuration details across multiple steps and interacting with a mock API.

---

## 🔧 Tech Stack

- **Vue 3 + Vite**
- **Pinia** for state management
- **Tailwind CSS** for styling
- **Maz UI** for additional UI components
- **Axios** for HTTP requests

---

## 📸 Features

- Multi-step wizard interface:

  1. **Service Basics** – Name, description, region, instance type
  2. **Resources** – vCPU, memory, storage
  3. **Network** – VPC, subnet, public IP, security groups
  4. **Review & Deploy** – Final summary and submission

- Submit form data to:

  ```http
  POST https://reqres.in/api/users
  ```

- Display deployment result on a confirmation screen

- Enable **Edit** (PUT) and **Delete** (DELETE) functionality:

  ```http
  PUT https://reqres.in/api/users/{id}
  DELETE https://reqres.in/api/users/{id}
  ```

- State is maintained using Pinia throughout steps and after API interactions

---

## 🚀 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/ayoolasam/Doprax

# Navigate into the project directory
cd Doprax

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🧪 Testing the Wizard

1. Fill out each step of the wizard.
2. At Step 4, click **Deploy** – your data is submitted via POST.
3. The deployed view shows the returned response.
4. Use the **Edit** button to update fields (PUT).
5. Use the **Delete** button to simulate service deletion (DELETE).

> 💡 Note: The [Reqres API](https://reqres.in/) used is a fake API for testing. It does not persist submitted data, so all changes are managed locally via Pinia.

---

## 📱 Responsiveness

This app is fully responsive and optimized for both desktop and mobile screens, matching the provided design spec.

---

## 📁 Folder Structure

```plaintext
src/
│
├── components/
│
├── stores/              # Pinia store (deployment state)
│
├── pages/               # Page-level views
│
├── router/              # Vue Router setup (optional)
│
├── App.vue
└── main.js
```

---

## 📝 Notes

- This project is structured for maintainability and scalability.
- State is handled in a centralized store to ensure smooth navigation across steps.
- All API calls (POST, PUT, DELETE) are implemented using `axios`.

---

## 🔗 Live Demo

[https://doprax-orcin.vercel.app/](https://doprax-orcin.vercel.app/)

---

## 📬 Submission Info

Submitted by: **Obayomi Samuel**  
For: **Doprax Frontend Assessment**  
Date: **April 5, 2025**

---

## 🤝 Acknowledgements

- [Reqres API](https://reqres.in/) – for fake API endpoints
- Vue + Tailwind + Pinia + Maz UI community

---

## 💻 Doprax Project Vite Setup

This template helps get you started developing with Vue 3 and Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

### Customize Configuration

See [Vite Configuration Reference](https://vite.dev/config/)

### Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Compile and Minify for Production

```bash
npm run build
```
