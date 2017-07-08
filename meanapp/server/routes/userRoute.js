var express = require('express');
var router = express.Router();
var User = require('../model/user');
router.get('/GetUser', function(req, res){
  User.find({},function(err, data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  });
});

router.delete('/DeleteUser/:id', function(req, res){
  User.remove({_id:req.params.id}, function(err, docs){
    if(err){
      throw err;
    }else{
      console.log('User Removed Successfully');
      res.send('User Removed Successfully');
    }
  });
});



router.post('/SaveUser', function(req,res){
	myUser = new User();
	myUser.FirstName=req.body.FirstName;
	myUser.LastName=req.body.LastName;
	myUser.Email=req.body.Email;
	myUser.Contact=req.body.Contact;
	myUser.Age=req.body.Age;
	myUser.Country=req.body.Country;
	myUser.save(function(err, docs){
		if(err){
			throw err;
		}else{
			console.log('suceess.......');
			res.send('Data Inserted......')
		}
	});
});
module.exports = router;