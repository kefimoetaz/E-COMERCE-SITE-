# Coffee Shop Web Application ☕

A full-stack coffee shop web application with user authentication, admin dashboard, and order management system.

## Features

### User Features
- Browse coffee menu with ratings and reviews
- User registration and login
- Add items to cart and place orders
- Write reviews and rate coffee items
- View order history

### Admin Features
- Admin dashboard for coffee management
- Add, edit, and delete coffee items
- View and manage all orders
- User management system
- Order status updates

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome icons
- Responsive design
- Local storage for cart management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT authentication
- bcrypt for password hashing
- CORS enabled

## Project Structure

```
├── CSS/
│   ├── style.css          # Main stylesheet
│   └── style2.css         # Additional styles
├── HTML/
│   ├── index.html         # Main landing page
│   ├── login.html         # User login page
│   ├── create account.html # User registration
│   ├── dashboard.html     # Admin dashboard
│   ├── order.html         # Order management
│   └── Forgot Password.html
├── JAVASCRIPT/
│   ├── script.js          # Main JavaScript functionality
│   └── review-slider.js   # Review slider component
├── image/                 # Static images and assets
├── NODEjs/
│   ├── server.js          # Express server
│   ├── package.json       # Dependencies
│   └── .env              # Environment variables
└── dashboard.html         # Root dashboard file
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. Navigate to the NODEjs directory:
```bash
cd NODEjs
```

2. Install dependencies:
```bash
npm install express mongoose bcryptjs jsonwebtoken cors body-parser dotenv
```

3. Create a `.env` file with the following variables:
```env
MONGODB_URI=mongodb://localhost:27017/coffee_shop
JWT_SECRET=your-secret-key-here
PORT=5000
```

4. Start the server:
```bash
node server.js
```

### Frontend Setup

1. Open the project in a web server (you can use Live Server extension in VS Code)
2. Navigate to `HTML/index.html` or the root `dashboard.html`

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/forgot-password` - Password reset

### Coffee Management
- `GET /api/coffee` - Get all coffee items
- `POST /api/coffee` - Add new coffee (admin only)
- `DELETE /api/coffee/:id` - Delete coffee (admin only)

### Order Management
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders (admin only)
- `GET /api/orders/my-orders` - Get user's orders
- `PATCH /api/orders/:id` - Update order status (admin only)
- `DELETE /api/orders/:id` - Delete order (admin only)

### Reviews
- `GET /api/reviews/:coffeeId` - Get reviews for a coffee
- `POST /api/reviews` - Add new review
- `DELETE /api/reviews/:reviewId` - Delete review

### User Management
- `GET /api/users` - Get all users (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## Default Admin Account

For testing purposes, you can create an admin account using:
- Email: `admin@gmail.com`
- Password: `Kefi1234`

Use the `/api/create-admin` endpoint to create this account.

## Usage

1. **User Registration**: New users can register through the registration page
2. **Login**: Users can log in with their credentials
3. **Browse Menu**: View available coffee items with ratings and reviews
4. **Add to Cart**: Users can add items to their cart
5. **Place Orders**: Complete the checkout process
6. **Admin Access**: Admins can manage coffee items, orders, and users

## Database Schema

### User Model
- name, email, number, password
- role (user/admin)
- orderCount, loyaltyPoints, membershipLevel

### Coffee Model
- name, price, description, image
- averageRating, reviewCount

### Order Model
- userId, items[], total, status, date

### Review Model
- userId, coffeeId, rating, comment, userName, date

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created by **Kefi Moetaz** - All rights reserved.

## Contact

For support or inquiries:
- Email: kefiimoetaz@gmail.com
- Phone: +216 55 877 551 / +216 71 500 500
- Location: Tunis, Ben Arouss

---

*Enjoy your coffee experience! ☕*