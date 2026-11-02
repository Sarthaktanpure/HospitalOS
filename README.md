 <div align="center">

# 🏥 HospitalOS

### One Platform. Every Hospital Workflow.

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=23&duration=2800&pause=900&color=38D9E8&center=true&vCenter=true&width=900&lines=Modern+Hospital+Management+System;Connected+Clinical+Workflows;Real-Time+Healthcare+Operations;Built+for+Smarter+Hospital+Management" alt="HospitalOS typing animation" />

<p>
  <strong>A full-stack hospital management platform connecting patients, doctors, administrators, and hospital departments through a unified digital workspace.</strong>
</p>

<p>
  <a href="https://github.com/Sarthaktanpure/HospitalOS">
    <img src="https://img.shields.io/badge/SOURCE-GitHub-111827?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://hospital-os-black.vercel.app/">
    <img src="https://img.shields.io/badge/LIVE%20APPLICATION-Open%20HospitalOS-0F766E?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/PROJECT-Full%20Stack-0891B2?style=for-the-badge" />
</p>

<p>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-Backend-FFFFFF?style=flat-square&logo=express&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-Realtime-010101?style=flat-square&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-Media-3448C5?style=flat-square&logo=cloudinary&logoColor=white" />
</p>

</div>

---

## `~/mission-control`

**HospitalOS** is a full-stack Hospital Management System (HMS) built to bring essential hospital operations into one connected platform.

Hospitals handle multiple workflows simultaneously: patient registration, appointment scheduling, consultations, prescriptions, laboratory reports, pharmacy inventory, billing, and administration.

When these workflows operate independently, information becomes fragmented and coordination becomes difficult.

HospitalOS addresses this challenge through a centralized application with dedicated interfaces and permissions for different hospital roles.

### The platform brings together

- **Clinical operations** — patient records, medical history, prescriptions and treatment notes.
- **Hospital administration** — staff, doctors, departments, permissions and analytics.
- **Patient services** — registration, appointments, medical records and reports.
- **Pharmacy operations** — medicine inventory, prescription verification and billing.
- **Laboratory workflows** — test bookings, sample tracking and report management.
- **Financial operations** — invoices, payments, receipts and revenue reporting.

<blockquote>
  <strong>Engineering objective:</strong> Build a unified healthcare operations platform where each role accesses the information and workflows relevant to its responsibilities.
</blockquote>

---

## `~/platform-at-a-glance`

<details>
<summary><strong>Explore the platform's functional modules</strong></summary>

| Module | Primary responsibility |
|---|---|
| Admin | Hospital configuration, staff, doctors, departments and analytics |
| Doctor | Appointments, medical history, prescriptions and treatment notes |
| Patient | Registration, appointments, medical records and reports |
| Reception | Patient registration, walk-in appointments and queue management |
| Pharmacy | Medicine inventory, stock management and prescription verification |
| Laboratory | Test booking, sample tracking and report uploads |
| Billing | Invoices, payment history and receipt management |
| Analytics | Revenue, patient activity, appointments and department performance |

</details>

---

## `~/architecture`

### 01. High-level system architecture

HospitalOS follows a separated frontend-backend architecture. The React application communicates with the Express API, which handles authentication, application logic, database operations and supporting services.

```mermaid
flowchart TB
    subgraph CLIENT["PRESENTATION LAYER"]
        UI["React Application"]
        ROUTER["React Router"]
        STATE["Redux Toolkit"]
        COMPONENTS["Reusable UI Components"]
        UI --> ROUTER
        UI --> STATE
        UI --> COMPONENTS
    end

    subgraph API["APPLICATION LAYER"]
        EXPRESS["Node.js + Express"]
        AUTH["Authentication & Authorization"]
        CONTROLLERS["Controllers"]
        ROUTES["REST API Routes"]
        MIDDLEWARE["Validation & Middleware"]
        EXPRESS --> ROUTES
        ROUTES --> MIDDLEWARE
        MIDDLEWARE --> AUTH
        AUTH --> CONTROLLERS
    end

    subgraph DATA["DATA & MEDIA LAYER"]
        MONGO[("MongoDB")]
        MONGOOSE["Mongoose ODM"]
        CLOUD["Cloudinary"]
    end

    subgraph REALTIME["REAL-TIME SERVICES"]
        REDIS["Redis"]
        EVENTS["Real-Time Notifications"]
    end

    UI <-->|HTTP / JSON| EXPRESS
    CONTROLLERS --> MONGOOSE
    MONGOOSE <--> MONGO
    CONTROLLERS --> CLOUD
    EXPRESS <--> REDIS
    REDIS --> EVENTS
    EVENTS --> UI

    style CLIENT fill:#102B3D,stroke:#22D3EE,color:#FFFFFF
    style API fill:#132C45,stroke:#38BDF8,color:#FFFFFF
    style DATA fill:#123B35,stroke:#2DD4BF,color:#FFFFFF
    style REALTIME fill:#292449,stroke:#A78BFA,color:#FFFFFF
```

### 02. Role-based workflow architecture

Different hospital users need different interfaces and capabilities. HospitalOS organizes workflows around the responsibilities of each role.

```mermaid
flowchart TD
    A([HospitalOS]) --> B[Authentication]
    B --> C{User Role}

    C --> D[Administrator]
    C --> E[Doctor]
    C --> F[Patient]
    C --> G[Receptionist]
    C --> H[Pharmacist]
    C --> I[Laboratory Staff]

    D --> D1[Staff and Department Management]
    D --> D2[Hospital Analytics]
    D --> D3[Revenue Reports]

    E --> E1[Appointments]
    E --> E2[Patient History]
    E --> E3[Prescriptions and Notes]

    F --> F1[Appointments]
    F --> F2[Medical Records]
    F --> F3[Reports and Payments]

    G --> G1[Patient Registration]
    G --> G2[OPD and Queue Management]

    H --> H1[Medicine Inventory]
    H --> H2[Prescription Verification]

    I --> I1[Test Management]
    I --> I2[Sample Tracking]
    I --> I3[Lab Reports]

    style A fill:#0F766E,color:#FFFFFF,stroke:#2DD4BF
    style C fill:#164E63,color:#FFFFFF,stroke:#22D3EE
    style D fill:#1E3A8A,color:#FFFFFF,stroke:#60A5FA
    style E fill:#134E4A,color:#FFFFFF,stroke:#2DD4BF
    style F fill:#312E81,color:#FFFFFF,stroke:#A78BFA
```

### 03. Patient journey

```mermaid
flowchart LR
    A["Patient Registration"] --> B["Appointment Booking"]
    B --> C["Reception / Queue"]
    C --> D["Doctor Consultation"]
    D --> E["Prescription"]
    E --> F["Pharmacy"]
    D --> G["Laboratory Tests"]
    G --> H["Lab Reports"]
    F --> I["Billing"]
    H --> I
    I --> J["Patient Records"]

    style A fill:#164E63,color:#FFFFFF,stroke:#22D3EE
    style D fill:#0F766E,color:#FFFFFF,stroke:#2DD4BF
    style G fill:#312E81,color:#FFFFFF,stroke:#A78BFA
    style I fill:#78350F,color:#FFFFFF,stroke:#FBBF24
    style J fill:#134E4A,color:#FFFFFF,stroke:#2DD4BF
```

---

## `~/feature-engineering`

### 01 — Doctor workspace

Designed around day-to-day clinical workflows.

- Doctor dashboard.
- Today's appointment overview.
- Patient medical history.
- Digital prescriptions.
- Treatment notes.
- Medical report uploads.
- Appointment scheduling.
- Emergency patient alerts.

### 02 — Administration workspace

Centralized management of hospital resources and personnel.

- Hospital dashboard.
- Doctor and staff management.
- Department management.
- User roles and permissions.
- Analytics dashboard.
- Revenue reports.
- Hospital settings.

### 03 — Patient portal

A dedicated space for patients to access their healthcare information.

- Online registration.
- Appointment booking.
- Medical record access.
- Prescription downloads.
- Laboratory report access.
- Payment history.
- Profile management.

### 04 — Pharmacy management

Digital medicine and prescription workflows.

- Medicine inventory.
- Stock management.
- Prescription verification.
- Medicine billing.
- Expiry tracking.

### 05 — Laboratory management

Organized laboratory operations.

- Test booking.
- Report uploads.
- Test history.
- Sample tracking.
- Report downloads.

### 06 — Reception and OPD

Front-desk workflows for patient intake and appointment coordination.

- Patient registration.
- Walk-in appointment booking.
- Queue management.
- OPD management.
- Patient search.

### 07 — Billing and finance

Financial workflows integrated with hospital operations.

- Invoice generation.
- Online payment workflows.
- Payment history.
- Insurance support.
- Receipt downloads.

### 08 — Appointment management

- Appointment booking.
- Rescheduling and cancellation.
- Calendar view.
- Doctor availability.

### 09 — Analytics and reporting

- Revenue statistics.
- Daily patient activity.
- Appointment trends.
- Department performance.
- Doctor performance.
- Occupancy reports.

---

## `~/real-time-operations`

Hospital workflows benefit from timely updates. HospitalOS incorporates Redis-backed real-time notification functionality to support communication between application components.

### Notification workflow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant Backend
    participant Redis
    participant Receiver

    User->>Frontend: Perform an operation
    Frontend->>Backend: Send application request
    Backend->>Backend: Validate and process
    Backend->>Redis: Publish notification event
    Redis-->>Backend: Event available
    Backend-->>Receiver: Deliver real-time update
    Receiver-->>Frontend: Update notification interface
```

*The sequence illustrates the real-time notification concept; exact event names and transport implementation should be documented from the current source code.*

---

## `~/security`

Healthcare applications handle sensitive user and patient information. Access control and secure request handling are therefore important architectural concerns.

| Security layer | Implementation |
|---|---|
| Authentication | JWT-based authentication |
| Password security | bcrypt password hashing |
| Authorization | Role-based access control |
| Route protection | Protected application routes |
| Request validation | Input validation |
| Database protection | MongoDB injection protection |
| Web security | XSS protection |
| Media management | Cloudinary integration |

### Authentication lifecycle

```mermaid
flowchart TD
    A([User Login]) --> B[Submit Credentials]
    B --> C[Backend Validation]
    C --> D{Credentials Valid?}
    D -->|No| E[Return Authentication Error]
    D -->|Yes| F[Verify Password]
    F --> G[Generate JWT]
    G --> H[Return Authentication Result]
    H --> I[Access Protected Route]
    I --> J[Verify Token]
    J --> K{Authorized Role?}
    K -->|No| L[Access Denied]
    K -->|Yes| M[Allow Request]

    style A fill:#164E63,color:#FFFFFF,stroke:#22D3EE
    style G fill:#134E4A,color:#FFFFFF,stroke:#2DD4BF
    style M fill:#166534,color:#FFFFFF,stroke:#4ADE80
    style L fill:#7F1D1D,color:#FFFFFF,stroke:#F87171
```

---

## `~/technology-stack`

### Frontend engineering

| Technology | Role |
|---|---|
| React.js | Component-based frontend |
| Tailwind CSS | Responsive styling |
| React Router | Client-side navigation |
| Redux Toolkit | Application state management |
| Axios | HTTP communication |
| React Hook Form | Form handling |
| Framer Motion | UI animations |

### Backend engineering

| Technology | Role |
|---|---|
| Node.js | Server-side JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | Database modelling and queries |
| JWT | Authentication |
| bcrypt | Password hashing |
| Multer | File upload handling |
| Cloudinary | Cloud-based media management |
| Redis | Real-time notification support |

### Development tools

| Tool | Purpose |
|---|---|
| Vite | Frontend development and build tooling |
| Git | Version control |
| GitHub | Source code hosting |
| Postman | API testing |
| VS Code | Development environment |

---

## `~/data-flow`

A typical application request moves through the frontend, API layer, business logic and persistence layer.

```mermaid
flowchart TD
    A["User Interaction"] --> B["React Component"]
    B --> C["Axios Request"]
    C --> D["Express Route"]
    D --> E["Authentication Middleware"]
    E --> F["Controller"]
    F --> G["Mongoose Model"]
    G --> H[("MongoDB")]
    H --> I["Response"]
    I --> J["Redux State Update"]
    J --> K["UI Refresh"]

    style A fill:#164E63,color:#FFFFFF,stroke:#22D3EE
    style F fill:#1E3A8A,color:#FFFFFF,stroke:#60A5FA
    style H fill:#134E4A,color:#FFFFFF,stroke:#2DD4BF
    style K fill:#0F766E,color:#FFFFFF,stroke:#2DD4BF
```

---

## `~/repository-structure`

```text
HospitalOS/
│
├── ai-services/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── hooks/
│       ├── context/
│       ├── services/
│       ├── utils/
│       └── App.jsx
│
└── README.md
```

---

## `~/local-development`

### Prerequisites

- Node.js and npm.
- MongoDB connection string.
- Cloudinary account for media uploads.
- Git.

### 01 — Clone the repository

```bash
git clone https://github.com/Sarthaktanpure/HospitalOS.git

cd HospitalOS
```

### 02 — Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend:

```bash
npm run dev
```

### 03 — Configure the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

### 04 — Open the application

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

*The ports above are the documented local setup defaults. Check the actual Vite and backend configuration if your local environment uses different ports.*

---

## `~/environment-configuration`

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT signing secret |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

**Important:** Never commit `.env` files, database credentials, JWT secrets or Cloudinary credentials to GitHub.

---

## `~/engineering-decisions`

| Engineering decision | Why it matters |
|---|---|
| Separate frontend and backend | Keeps presentation and server responsibilities independent |
| Role-based access | Provides dedicated workflows for different hospital users |
| Redux Toolkit | Centralizes shared frontend application state |
| MongoDB and Mongoose | Provides flexible data modelling and persistence |
| JWT authentication | Supports authenticated API access |
| Cloudinary | Separates uploaded media from application code |
| Redis-backed notifications | Supports timely application updates |
| Modular feature organization | Makes individual hospital workflows easier to maintain |

### Why build a multi-module hospital platform?

A hospital management application is not just a patient registration form.

Its real complexity comes from connecting different operational areas while ensuring that each user sees the right information and can perform the right actions.

HospitalOS approaches this as an integrated application rather than a collection of disconnected CRUD screens.

---

## `~/future-engineering`

Potential directions for extending the platform:

- [ ] AI-assisted disease prediction.
- [ ] Medical chatbot.
- [ ] Telemedicine and video consultations.
- [ ] SMS and email notifications.
- [ ] QR-based patient identification.
- [ ] Hospital bed management.
- [ ] Ambulance tracking.
- [ ] Expanded electronic health record workflows.
- [ ] AI-assisted medical report summarization.
- [ ] Voice-based prescription entry.
- [ ] Face-recognition authentication.
- [ ] Enhanced accessibility and dark-mode support.

---

## `~/screenshots`

A strong project README should show the actual product—not just describe it.

Add real application screenshots in the following structure:

```text
docs/
└── screenshots/
    ├── login.png
    ├── admin-dashboard.png
    ├── doctor-dashboard.png
    ├── patient-portal.png
    ├── appointment-management.png
    ├── pharmacy-management.png
    ├── laboratory-dashboard.png
    └── analytics-dashboard.png
```

Suggested presentation:

| Screenshot | What it demonstrates |
|---|---|
| Admin Dashboard | Hospital overview and administration |
| Doctor Dashboard | Clinical workflow |
| Patient Portal | Patient-facing features |
| Appointment Management | Scheduling workflow |
| Pharmacy | Inventory and prescription handling |
| Analytics | Hospital activity and reporting |

---

## `~/project-impact`

HospitalOS brings several engineering disciplines together in a single application.

| Engineering area | Concepts demonstrated |
|---|---|
| Full-stack development | React, Node.js and Express |
| Database engineering | MongoDB and Mongoose |
| Authentication | JWT and bcrypt |
| Authorization | Role-based access control |
| State management | Redux Toolkit |
| Real-time systems | Redis-backed notifications |
| File management | Multer and Cloudinary |
| Application architecture | Modular frontend and backend |
| Healthcare workflows | Clinical, administrative and patient modules |

The central challenge is connecting these components into a consistent application where different hospital roles can collaborate through shared workflows and data.

---

## `~/contributing`

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement and test your changes.
4. Commit your work.
5. Push the branch.
6. Open a pull request.

```bash
git checkout -b feature/your-feature

git add .

git commit -m "Add: your feature"

git push origin feature/your-feature
```

---

## `~/developer`

<div align="center">

### Sarthak Tanpure

**Software Engineering | Full-Stack Development | Applied AI**

Building practical software systems with an interest in scalable backend architecture, modern web applications, and intelligent technology.

<a href="https://github.com/Sarthaktanpure">
  <img src="https://img.shields.io/badge/GitHub-Sarthaktanpure-181717?style=for-the-badge&logo=github" />
</a>

<a href="https://github.com/Sarthaktanpure/HospitalOS">
  <img src="https://img.shields.io/badge/Project-HospitalOS-0F766E?style=for-the-badge&logo=github" />
</a>

</div>

---

<div align="center">

### BUILT TO CONNECT. DESIGNED TO CARE.

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1F33,35:164E63,70:0F766E,100:0891B2&height=150&section=footer&text=HospitalOS&fontSize=36&fontColor=E0F2FE&fontAlignY=62&animation=fadeIn" width="100%" />

<sub>One connected platform for modern hospital operations.</sub>

</div>
