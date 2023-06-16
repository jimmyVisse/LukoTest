import { FlatList, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import InventoryItem from "../components/InventoryItem";

interface InventoryData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  type: string;
}

export default function InventoryScreen({
  navigation,
  route
}: RootTabScreenProps<"Inventory">) {
  const handleAddButtonPress = () => navigation.navigate("AddItem");
  const data: Array<InventoryData> = [
    {
      id: 1,
      name: "Test",
      imageUrl: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
      price: 10,
      type: "Jewel",
      description: "Test"
    },
    {
      id: 2,
      name: "Test 2 avec un nom plus long pour voir ce que ça donne",
      imageUrl: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
      price: 132,
      type: "Jewel",
    }
  ]

  const renderItem = ({item}: {item: InventoryData}) => {
    return (
      <InventoryItem imageUrl={item.imageUrl} name={item.name} price={item.price} />
    )
  }

  const extractKey = (item: InventoryData): string => {
    return item.id.toString();
  }


  return (
    <View style={styles.container}>
        <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
        <FlatList data={data} renderItem={renderItem} keyExtractor={extractKey} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  }
});
