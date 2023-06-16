import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/colors";

export default function InputText(props: {
    name: string;
    placeholder: string;
    onChangeText(text: string): void
    suffix?: string;
    multiLine?: boolean;
}) {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={[styles.input, {height: props.multiLine !== undefined && props.multiLine ? 100 : 20}]}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    multiline={props.multiLine !== undefined && props.multiLine}
                />
                {props.suffix && (
                    <Text>{props.suffix}</Text>
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
    },
    inputContainer: {
        marginTop: 8,
        borderColor: colors.mainGrey,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        backgroundColor: "white",
    },
    input: {
        flex: 1,
        fontSize: 16,
    }
})