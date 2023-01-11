// initialize modules that'll be used in file
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = "IamAGoodBoyName$Yash";


// ROUTE 1: Create a new User Account by using: POST "/api/user/signup" | No login required.
router.post('/signup', [
  // Initializing values that'll be saved in database.
  body('name', 'Please enter a valid name').exists(),
  body('username', 'Please enter a valid username (it should be a string, can include numbers)').exists(),
  body('website', 'Website should be a correct url.').isURL(),
  body('email', 'Enter a valid email.').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // For Debugging the errors (400).
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user exists in database.
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "A User with this email already exist, you can login instead." });
    }
    // If no user exist then create a user and hide password through bcryptjs
    const salt = await bcrypt.genSalt(10);
    const securedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a user safely
    let newuser = await User.create({
      name: req.body.name,
      username: req.body.username,
      website: req.body.website,
      email: req.body.email,
      password: securedPassword,
    })

    // Attaching user ID to authtoken to get userdetails from JWT_SECRET.
    const data = {
      newuser: {
        id: newuser.id
      },
    }
    // Returns Authtoken after creating a user, it'll be used in fetching object ID through JWT_SECRET.
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken });
  } catch (error) {
    // Handle Errors
    res.status(500).send({ error: error.message });
  }
})

// ROUTE 2: Login a User by using: POST "/api/user/login" | No login required.
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Get email and password from request.
  const { email, password } = req.body;
  try {
    // Try to find user specified email in database.
    let user = await User.findOne({ email });
    if (!user) {
      // Show an error if email doesn't exists in database
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    // Check if the password matched or not.
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      // Shows an error if Password is wrong.
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    // Initialize user ID as data.user.id
    const data = {
      user: {
        id: user.id
      }
    }

    // Initialize a unique authtoken using data and JWT_SECRET and send it as response.
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ authtoken });

  } catch (error) {
    // Shows an error if any exists with respone status (500)
    console.error(error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
})


// ROUTE 3: Get details of logged in user: POST "/api/user/fetchuserdata". | No login required.
router.post('/fetchuserdata', fetchuser, async (req, res) => {
  try {
    // Get user through object ID in database
    const userId = req.user.id;
    // Removing password because it was hidden through JWT_SECRET, Finding User in db.
    const user = await User.findById(userId).select("-password");
    // Show user details.
    res.send(user);
  } catch (error) {
    // For Debugging the error, sends Internal Server Error (500)
    console.error(error.message);
    res.status(500).send({ "Error": "Internal Server Error" });
  }
});

// ROUTE 4: Get all users details saved in database by using: GET "/api/user/fetchusers" | Login required.
router.get('/fetchusers', fetchuser, async (req, res) => {
  try {
    const allusers = await User.find({ user: req.user.id }).select("-password");
    res.json(allusers)
  } catch (error) {
    // Handle Errors
    console.error(error.message);
    res.status(500).send({ "Error": "Something went Wrong!" });
  }

})

// ROUTE 5: Update details of a user by using: POST "/api/user/update/:id" | Login Requird.
router.put('/update/:id', fetchuser, async (req, res) => {
  try {
    const { name, username, website, email } = req.body;
    const updatedUser = {};
    if (name) { updatedUser.name = name };
    if (username) { updatedUser.username = username };
    if (website) { updatedUser.website = website };
    if (email) { updatedUser.email = email };
    // Find the User to be updated and update it.
    const user = await User.findById(req.params.id);
    if (user.id.toString() !== req.user.id) { return res.status(401).send("Access Denied") }
    const updateduser = await User.findByIdAndUpdate(req.params.id, { $set: updatedUser }, { new: true });
    res.json(updateduser)
  } catch (error) {
    // Handle Errors
    console.error(error.message);
    res.status(500).send({ "Error": "Something went Wrong!" });
  }
})

// ROUTE 6: Delete user by using: PUT "/api/user/delete/:id" | Login Requird.
router.delete('/delete/:id', fetchuser, async (req, res) => {
  try {
    // Find the User to be updated and update it.
    const user = await User.findById(req.params.id).select("-password");
    if (user.id.toString() !== req.user.id) { return res.status(401).send("Access Denied") }
    deleteduser = await User.findByIdAndDelete(req.params.id);
    res.json({ "Success": "User Account has been deleted", user: user })
  } catch (error) {
    // Handle Errors
    console.error(error.message);
    res.status(500).send({ "Error": "Something went wrong!" });
  }
})

module.exports = router;
