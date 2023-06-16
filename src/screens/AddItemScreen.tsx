import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import InputText from "../components/InputText";
import { useEffect, useState } from "react";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [errorName, setErrorName] = useState<string | undefined>(undefined);
  const [errorPrice, setErrorPrice] = useState<string | undefined>(undefined);
  const [addDisabled, setAddDisabled] = useState(true);
  const [itemName, setItemName] = useState<string | undefined>(undefined)
  const [itemPrice, setItemPrice] = useState<string | undefined>(undefined)
  const [itemDescription, setItemDescription] = useState<string | undefined>(undefined)

  const checkFormDisabled = () => {
    if (
      itemName !== undefined &&
      itemPrice !== undefined &&
      itemName.length > 0 && 
      itemPrice.length > 0
    ) {
      setAddDisabled(false);
    } else {
      setAddDisabled(true);
    }
  }

  useEffect(() => {
    checkFormDisabled();
  }, [itemName, itemPrice])

  const onChangeName = (text: string) => {
    setItemName(text);
  };

  const onChangePrice = (text: string) => {
    setItemPrice(text);
  }

  const onChangeDescription = (text: string) => {
    setItemDescription(text);
  }

  const tapOnAddButton = () => {
    clearError();

    if (itemName === undefined) {
      setErrorName("Name is mandatory");
      return;
    }

    if (itemPrice === undefined) {
      setErrorPrice("Price is mandatory");
      return;
    }

    if (isNaN(parseFloat(itemPrice))) {
      setErrorPrice("Price must be a number");
      return;
    }

    console.log("Add item");
  }

  const clearError = () => {
    setErrorName(undefined);
    setErrorPrice(undefined);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled={addDisabled} onPress={tapOnAddButton} />
      </View>
      <View style={styles.content}>
        <InputText name="Name" placeholder="Bracelet" onChangeText={onChangeName} errorMessage={errorName}/>
        <InputText name="Value" placeholder="700" onChangeText={onChangePrice} suffix="€" keyboardType="decimal-pad" errorMessage={errorPrice}/>
        <InputText name="Description" placeholder="Optionnal" onChangeText={onChangeDescription} multiLine/>
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
