import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IQMzTLvsxe0kS8lHhp3syHn7pEb4XakvZPi2ytAltP3XwRZoHoTnHR8Q1fQTTNHKJLBf2E6T4Lxx2tKLsgydBWE00B7um62Um";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert("Payment successful");
			})
			.catch((error) => {
				console.log("Payment error: ", JSON.parse(error));
				alert(
					"There was an issue with your payment.  Please make sure you use the provided credit card."
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
