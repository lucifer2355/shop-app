import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductOverViewScreen = () => {
	const products = useSelector(state => state.products.availableProducts);

	return (
		<FlatList
			data={products}
			renderItem={itemData => <Text>{itemData.item.title}</Text>}
		/>
	);
};

const styles = StyleSheet.create({});

export default ProductOverViewScreen;
