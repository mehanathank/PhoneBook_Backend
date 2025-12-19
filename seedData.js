const mongoose = require("mongoose");
const connectDB = require("./config/database");
const User = require("./models/User");
const Contact = require("./models/Contact");

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await User.deleteMany({});
    await Contact.deleteMany({});
    
    // Insert users
    const users = [
      {
        id: "u1",
        name: "Meha Nathan",
        email: "meha@gmail.com",
        password: "12345",
        profilePic: "Images/phone.png"
      },
      {
        id: "u2",
        name: "Arun Kumar",
        email: "arun@gmail.com",
        password: "arun123",
        profilePic: "Images/fahath.png"
      }
    ];
    
    // Insert contacts
    const contacts = [
      {
        id: "1",
        userId: "u1",
        name: "Arjun Kumar",
        phone: "9876543210",
        email: "arjun@example.com",
        category: "friends",
        favorite: false,
        trash: false,
        createdAt: "2025-01-01",
        profilePic: "Images/arjun.jpg"
      },
      {
        id: "2",
        userId: "u1",
        name: "Priya Sharma",
        phone: "9123456780",
        email: "priya@gmail.com",
        category: "business",
        favorite: true,
        trash: false,
        createdAt: "2025-01-03",
        profilePic: "Images/priya.jpg"
      },
      {
        id: "3",
        userId: "u1",
        name: "Karan Singh",
        phone: "9000001111",
        email: "karan@example.com",
        category: "favorites",
        favorite: true,
        trash: false,
        createdAt: "2025-01-05",
        profilePic: "Images/karan.png"
      },
      {
        id: "4",
        userId: "u1",
        name: "Latha Devi",
        phone: "9876501234",
        email: "latha@example.com",
        category: "friends",
        favorite: false,
        trash: false,
        createdAt: "2025-01-10",
        profilePic: "Images/lali.png"
      },
      {
        id: "5",
        userId: "u1",
        name: "Raj Patel",
        phone: "9988776655",
        email: "raj@business.com",
        category: "business",
        favorite: false,
        trash: false,
        createdAt: "2025-01-12",
        profilePic: "Images/raj.png"
      },
      {
        id: "6",
        userId: "u1",
        name: "Sneha Reddy",
        phone: "9445566778",
        email: "sneha@friends.com",
        category: "favorites",
        favorite: true,
        trash: false,
        createdAt: "2025-01-15",
        profilePic: "Images/snehareddy.png"
      }
    ];
    
    await User.insertMany(users);
    await Contact.insertMany(contacts);
    
    console.log("Data seeded successfully!");
    console.log(`Inserted ${users.length} users and ${contacts.length} contacts`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();