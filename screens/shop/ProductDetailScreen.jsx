import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
	const productId = props.navigation.getParam('productId');

	const selectedproduct = useSelector(state =>
		state.products.availableProducts.find(prod => prod.id === productId)
	);

	const dispatch = useDispatch();

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedproduct.imageUrl }} />
			<View style={styles.action}>
				<Button
					color={Colors.primary}
					title="Add to Cart"
					onPress={() => {
						dispatch(cartActions.addToCart(selectedproduct));
					}}
				/>
			</View>
			<Text style={styles.price}>${selectedproduct.price}</Text>
			<Text style={styles.description}>{selectedproduct.description}</Text>
		</ScrollView>
	);
};

ProductDetailScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},

	action: {
		marginVertical: 10,
		alignItems: 'center'
	},

	price: {
		fontSize: 20,
		color: '#888',
		textAlign: 'center',
		marginVertical: 20,
		fontFamily: 'open-sans-bold'
	},

	description: {
		fontSize: 14,
		textAlign: 'center',
		marginHorizontal: 20
	}
});

export default ProductDetailScreen;
