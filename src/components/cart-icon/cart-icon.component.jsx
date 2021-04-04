import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selecCartItemsCount } from "../../redux/cart/cart.selectors";
import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
	</CartContainer>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selecCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
