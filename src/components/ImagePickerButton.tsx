import { Image, Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fonts } from "../theme/fonts";

export default function ImagePickerButton({onPress, imageUrl, onPressTrash}: PressableProps & {imageUrl?: string, onPressTrash(): void}) {
    return (
        <Pressable onPress={onPress}>
            {imageUrl !== undefined ? (
                <View>
                    <Image style={styles.size} source={{uri: imageUrl}} />
                    <Pressable onPress={onPressTrash}>
                        <View style={styles.trash}>
                            <MaterialCommunityIcons name="trash-can-outline" size={20} color={colors.white} />
                        </View>
                    </Pressable>
                </View>
            ) : (
                <View style={[styles.container, styles.size]}>
                    <View style={styles.content}>
                        <MaterialCommunityIcons name="camera" size={50} color={colors.mainBlue} />
                        <Text style={styles.text}>Add photo</Text>
                    </View>
                </View>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderStyle: "dashed",
        borderColor: colors.mainGrey,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: fonts.regular,
        marginTop: 8,
    },
    content: {
        alignItems: "center",
    },
    size: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    trash: {
        height: 30,
        width: 30,
        borderRadius: 25,
        backgroundColor: colors.error,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
    }
});