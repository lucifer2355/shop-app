import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartAction from '../../store/actions/cart';

const ProductOverViewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
	const dispatch = useDispatch();

	return (
		<FlatList
			data={products}
			renderItem={itemData => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						props.navigation.navigate('ProductDetail', {
							productId: itemData.item.id,
							productTitle: itemData.item.title
						});
					}}
					onAddToCart={() => {
						dispatch(cartAction.addToCart(itemData.item));
					}}
				/>
			)}
		/>
	);
};

ProductOverViewScreen.navigationOptions = {
	headerTitle: 'All Product'
};

const styles = StyleSheet.create({});

export default ProductOverViewScreen;
