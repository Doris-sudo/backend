
import express from "express";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to API",
  });
});

app.get("/contact", (req, res) => {
    res.json({
        status: "success",
        message: "Contact page",
    })
})
app.get("/home", (req, res) => {
    res.json({
        status: "success",
        message: "Home page",
    })
})
app.get("/about", (req, res) => {
    res.json({
        status: "success",
        message: "About page",
    })
})

export default app;

