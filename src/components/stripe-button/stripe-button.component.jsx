import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IQMzTLvsxe0kS8lHhp3syHn7pEb4XakvZPi2ytAltP3XwRZoHoTnHR8Q1fQTTNHKJLBf2E6T4Lxx2tKLsgydBWE00B7um62Um";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
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
