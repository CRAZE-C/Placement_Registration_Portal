<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
---
# BIT Information Portal

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview
The BIT Information Portal is a web application for Bannari Amman Institute of Technology students and administrators. It allows users to log in, view dashboards, apply to companies, and view applications. The portal features distinct functionalities for both students and admins to ensure smooth and efficient interaction with the system.

## Features
- **Login Page**: Users can log in using their email and name.
- **Student Dashboard**:
  - View eligible companies.
  - Apply to companies.
  - View applied companies.
- **Admin Dashboard**:
  - Add companies and eligibility criteria.
  - View a list of students who have applied to companies.
- **Profile Management**: Manage profile picture and other details.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for routing in React applications.
- **CSS**: Styling of the application.
- **LocalStorage**: Storing application data locally in the browser.

## Setup Instructions
1. **Clone the repository**:
    ```bash
    git clone https://github.com/CRAZE-C/bit-information-portal.git
    cd bit-information-portal
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage
- **Login**: Enter email(user@gmail.com OR admin@gmail.com) and name on the login page to navigate to the appropriate dashboard.
- **Student Dashboard**: View and apply to companies. Applied companies will be listed under "Applied Companies".
- **Admin Dashboard**: Add new companies and eligibility criteria. View students who have applied to each company under "Registrations".

## Folder Structure
```
Placement-Registration/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── profileimage.jpg
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── CompanyForm.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProfileModal.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── StudentApplications.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── AdminDashboard.css
│   │   ├── CompanyForm.css
│   │   ├── Header.css
│   │   ├── HomePage.css
│   │   ├── ProfileModal.css
│   │   ├── RegistrationForm.css
│   │   ├── StudentApplications.css
│   │   └── StudentDashboard.css
│   ├── context/
│   │   └── CompaniesContext.jsx
│   ├── pages/
│   │   ├── Admin.jsx
│   │   ├── Student.jsx
│   ├── LoginPage.css
│   ├── LoginPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── README.md
└── ...

```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Contact
If you have any questions or feedback, please feel free to reach out:
- **Email**: dharanraj1010@gmail.com
- **GitHub**: [CRAZE-C](https://github.com/CRAZE-C)
>>>>>>> origin/main
