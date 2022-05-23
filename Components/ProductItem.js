import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                </View>
                <View>
                    <Text style={styles.details}>
                        brandname: {item.brandname}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;