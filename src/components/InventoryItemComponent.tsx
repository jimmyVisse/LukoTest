import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export default function InventoryItemComponent(props: {
    imageUrl?: string; 
    name: string;
    price: number | string;
}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.imageUrl}} />
            <View style={styles.textContainer}>
                <Text style={[styles.name, styles.text]} numberOfLines={2}>{props.name}</Text>
                <Text style={[styles.text, styles.price]}>€{props.price.toString()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
    },
    image: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        margin: 16,
        gap: 8,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 20,
    },
    name: {
        flex: 1,
    },
    price: {
        color: colors.mainGrey,
        fontSize: 16,
    }
});