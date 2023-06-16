import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import InputText from "../components/InputText";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
      <View style={styles.content}>
        <InputText name="Name" placeholder="Bracelet" onChangeText={() => {}}/>
        <InputText name="Value" placeholder="700" onChangeText={() => {}} suffix="€"/>
        <InputText name="Description" placeholder="Optionnal" onChangeText={() => {}} multiLine/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  content: {
    marginTop: 32,
  }
});
