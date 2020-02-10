import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
	const productId = props.navigation.getParam('productId');

	const selectedproduct = useSelector(state =>
		state.products.availableProducts.find(prod => prod.id === productId)
	);

	return (
		<View>
			<Text>{selectedproduct.title}</Text>
		</View>
	);
};

ProductDetailScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	};
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
