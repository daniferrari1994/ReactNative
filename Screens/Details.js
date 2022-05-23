import React, { useContext } from "react";
import { Text, StyleSheet, View, Image, Button } from 'react-native';
import { Shop } from "../Context/ShopProvider";

const Details = ({ navigation, route }) => {
    const { addCart } = useContext(Shop);

    const item = route.params.detail;
    
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.name}>
                    {item.name}
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        url: item.image,
                    }}
                />
                <Text style={styles.detail}>
                    Brandname: {item.brandname}
                </Text>
                <Text style={styles.detail}>
                    Stock: {item.stock}
                </Text>
                <Text style={styles.detail}>
                    Precio: {item.price.toFixed(2)}
                </Text>

            </View>
            <View style={styles.cart}>
                <Button color="#61dafb" title="Volver" onPress={() => navigation.goBack()}></Button>
                <Button color="#61dafb" title="Agregar al carrito" onPress={() => addCart(item, 1)}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#eaeaea"
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        fontSize: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 30
    },
    image: {
        width: 250,
        height: 150,
        marginBottom: 20
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 70
    }

});

export default Details;