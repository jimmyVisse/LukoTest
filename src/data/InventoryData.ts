import { InventoryItem, Items } from "../navigation/types";

export class InventoryData {
    private static MAX_TOTAL_VALUE: number = 40000;
    private static instance: InventoryData | undefined = undefined;
    private inventoryItems: Items;

    private constructor() {
        // Populate with default items
        this.inventoryItems = [
            {
                id: "1",
                name: "Cartier ring",
                value: 5780,
                type: "JEWELRY",
                description: "Gift from my grandfather",
                photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
            },
            {
                id: "2",
                name: "Guitar",
                value: 850,
                type: "MUSIC_INSTRUMENT",
                photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
            }
        ]
    }

    public static getInstance(): InventoryData {
        if (this.instance === undefined) {
            this.instance = new InventoryData();
        }
        return this.instance;
    }

    public getItems(): Array<InventoryItem> {
        return this.inventoryItems;
    }

    public addItem(item: InventoryItem): boolean {
        let totalAmount = 0;
        if (typeof item.value === "string") {
            totalAmount = parseFloat(item.value as string);
        } else {
            totalAmount = item.value as number;
        }
        this.inventoryItems.forEach((inventoryItem: InventoryItem) => {
            if (typeof inventoryItem.value === "string") {
                totalAmount += parseFloat(inventoryItem.value as string);
            } else {
                totalAmount += inventoryItem.value as number;
            }
        });
        if (totalAmount > InventoryData.MAX_TOTAL_VALUE) {
            return false;
        }
        this.inventoryItems.push(item);
        return true;
    }
}