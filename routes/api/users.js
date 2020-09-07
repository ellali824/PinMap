//REGISTER NEW USER 
//no changes needed 
const express = require('express');
const router = express.Router(); 
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

//solves cors issue
var cors = require('cors');
router.use(cors()); 

// bring the user model in 
const User = require('../../models/User');

// @route POST api/users 
// @desc Register user 
// @access Public 

//registers a new user 
router.post('/',  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {

        //check if user exists 
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists!' }] });
      }

      // get user's gravatar 
      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

    //create instance of new user 
      user = new User({
        name,
        email,
        avatar,
        password
      });

      //encrypt password by hashing 
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      //save the user in database 
      await user.save();
    
      //return jsonwebtoken 
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' }, //should be 3600 in production 
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
  
 
module.exports = router; 