import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import { InventoryItem, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import InputText from "../components/InputText";
import { useEffect, useState } from "react";
import ImagePickerButton from "../components/ImagePickerButton";
import { ImagePicker, ImagePickerResult } from "../sdk/ImagePicker";
import { InventoryData } from "../data/InventoryData";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const [errorName, setErrorName] = useState<string | undefined>(undefined);
  const [errorPrice, setErrorPrice] = useState<string | undefined>(undefined);
  const [addDisabled, setAddDisabled] = useState(true);
  const [itemName, setItemName] = useState<string | undefined>(undefined);
  const [itemPrice, setItemPrice] = useState<string | undefined>(undefined);
  const [itemDescription, setItemDescription] = useState<string | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  const checkFormDisabled = () => {
    if (
      itemName !== undefined &&
      itemPrice !== undefined &&
      imageUrl !== undefined &&
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
  }, [itemName, itemPrice, imageUrl])

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

    const itemToAdd: InventoryItem = {
      name: itemName,
      value: parseFloat(itemPrice),
      description: itemDescription,
    };
    const addResult = InventoryData.getInstance().addItem(itemToAdd);
    if (addResult) {
      navigation.goBack();
    } else {
      setErrorPrice("This item value exceeds total amount");
    }
  }

  const clearError = () => {
    setErrorName(undefined);
    setErrorPrice(undefined);
  }

  const tapOnAddImage = () => {
    ImagePicker.pickImage().then((image: ImagePickerResult) => {
      if (!image !== undefined && !image?.cancelled) {
        setImageUrl(image?.uri);
      }
    });
  };

  const tapOnTrashImage = () => {
    setImageUrl(undefined);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled={addDisabled} onPress={tapOnAddButton} />
      </View>
      <View style={styles.content}>
        <View style={styles.imagePickerContainer}>
          <ImagePickerButton onPress={tapOnAddImage} imageUrl={imageUrl} onPressTrash={tapOnTrashImage} />
        </View>
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
  },
  imagePickerContainer: {
    alignItems: "center",
  }
});
