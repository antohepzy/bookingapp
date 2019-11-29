This project implements a booking App for the Airport Package

## To build project run
docker-compose build --no-cache

## To start
docker-compose up

## Page1:
Endpoint for homepage
http://192.168.99.100:3000/aq-index

Select Airport Package

## Page2: 
## Login Page 
User enters name, email and phone number
Click Login

## Page3:
## Select Driver
User can select driver based on the filter of language

## Endpoint to Add driver:
http://192.168.99.100:4000/driver
Once user selects driver navigates to the Booking Page.

## Page4:
Enter details for the ride and click pay.
Navigates to test payment gateway.

## TEST VALUES FOR SUCCESS PAYMENT
 credit card number: 4242 4242 4242 4242
 expiry date: Any future month and year
 CVV : 111
 password: 1221

Once it processes the details , app redirects to the Booking Success Page.
