import { InventoryData } from "../src/data/InventoryData"
import { InventoryItem } from "../src/navigation/types";

it("Test get items in inventory", () => {
    const items = InventoryData.getInstance().getItems();

    expect(items.length).toBe(2);
});

it("Test successful item add in inventory", () => {
    const itemToAdd: InventoryItem = {
        id: "3",
        name: "Test item",
        value: 407,
        photo: "test_url.jpg",
    }
    const addSuccess = InventoryData.getInstance().addItem(itemToAdd);
    const items = InventoryData.getInstance().getItems();

    expect(addSuccess).toBeTruthy();
    expect(items.length).toBe(3);
});

it("Test bad item add in inventory", () => {
    const itemToAdd: InventoryItem = {
        id: "4",
        name: "Test item to expensive",
        value: 4078906,
        photo: "test_url2.jpg",
    }
    const addSuccess = InventoryData.getInstance().addItem(itemToAdd);
    const items = InventoryData.getInstance().getItems();

    expect(addSuccess).toBeFalsy();
    expect(items.length).toBe(3);
});