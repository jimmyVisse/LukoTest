import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/colors";

export default function InputText(props: {
    name: string;
    placeholder: string;
    onChangeText(text: string): void
    suffix?: string;
    multiLine?: boolean;
    keyboardType?: "default" | "number-pad" | "decimal-pad"
    errorMessage?: string;
}) {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <View style={[styles.inputContainer, {borderColor: props.errorMessage !== undefined ? "#FF0000" : colors.mainGrey}]}>
                <TextInput 
                    style={[styles.input, {height: props.multiLine !== undefined && props.multiLine ? 100 : 20}]}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    multiline={props.multiLine !== undefined && props.multiLine}
                    keyboardType={props.keyboardType}
                />
                {props.suffix && (
                    <Text>{props.suffix}</Text>
                )}
            </View>
            {props.errorMessage && (
                <Text style={styles.error}>{props.errorMessage}</Text>
            )}
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
    },
    error: {
        color: "#FF0000",
    }
})