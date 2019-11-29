const express = require( 'express' );

/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".
 */
const router = express.Router();
const mongoose = require( 'mongoose' );
const Trip = require( '../models/trip' );

const Insta = require('instamojo-nodejs');
const url = require('url');


// /api/bid/pay
router.post( '/pay', async( req, res ) => {
	const trip = new Trip(req.body);
	
	try{
		await trip.save();
	}
	catch (e){
		console.log(e)
	}

	Insta.setKeys('test_1cae612c3a0dafc48ffaffdaf1d','test_814c03fd3fff0ff341ed5c3f5ff');

	const data = new Insta.PaymentData();
	Insta.isSandboxMode(true);

	data.purpose =  req.body.purpose;
	data.amount = req.body.amount;
	data.buyer_name =  req.body.buyer_name;
	data.redirect_url =  req.body.redirect_url;
	data.email =  req.body.email;
	data.phone =  req.body.phone;
	data.send_email =  false;
	data.webhook= 'http://www.example.com/webhook/';
	data.send_sms= false;
	data.allow_repeated_payments =  false;

	Insta.createPayment(data, function(error, response) {
		if (error) {
			// some error
		} else {
			// Payment redirection link at response.payment_request.longurl
            const responseData = JSON.parse( response );
			const redirectUrl = responseData.payment_request.longurl;
			res.status( 200 ).json( redirectUrl );
		}
    });
})

module.exports = router;
