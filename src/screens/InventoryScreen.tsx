import { FlatList, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { InventoryItem, Items, RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import InventoryItemComponent from "../components/InventoryItemComponent";
import { useEffect, useState } from "react";
import { InventoryData } from "../data/InventoryData";

export default function InventoryScreen({
  navigation,
  route
}: RootTabScreenProps<"Inventory">) {
  const handleAddButtonPress = () => navigation.navigate("AddItem");
  const [data, setData] = useState<Items>([]);

  useEffect(() => {
    setData(InventoryData.getInstance().getItems());
  }, InventoryData.getInstance().getItems());

  const renderItem = ({item, index}: {item: InventoryItem, index: number}) => {
    return (
      <InventoryItemComponent imageUrl={item.photo} name={item.name} price={item.value} />
    )
  }

  return (
    <View style={styles.container}>
        <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
        <FlatList data={data} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  emptyItem: {
    flex: 1,
  }
});
