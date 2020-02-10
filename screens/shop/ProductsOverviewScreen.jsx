import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductOverViewScreen = () => {
	const products = useSelector(state => state.products.availableProducts);

	return (
		<FlatList
			data={products}
			renderItem={itemData => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {}}
					onAddToCart={() => {}}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

export default ProductOverViewScreen;
