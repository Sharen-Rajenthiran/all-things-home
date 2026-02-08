
const base = "/all-things-home";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string | string[];
    size?: string | string[];
    stock?: number;
    color?: string | string[];
    design?: string | string[];
}

export type CartItem = Product & {
    quantity: number;
    selectedColor?: string;
    selectedSize?: string;
    selectedDesign?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Soft Thick Premium Men's Casual Outfit Black Variant (Medium)",
        description: "Upgrade your everyday style with our premium quality casual wear, designed for comfort and durability.",
        price: 19.99,
        imageUrl: [`${base}/products/clothes/1.jpg`, `${base}/products/clothes/1_2.jpg`, `${base}/products/clothes/size-chart-premium.png`],
        size: "Medium",
        stock: 1,
    },
    {
        id: 2,
        name: "Soft Thick Premium Men's Casual Outfit Light Green Variant (Medium)",
        description: "Upgrade your everyday style with our premium quality casual wear, designed for comfort and durability.",
        price: 24.99,
        imageUrl: [`${base}/products/clothes/4.jpg`, `${base}/products/clothes/4_2.jpg`, `${base}/products/clothes/size-chart-premium.png`],
        size: "Medium",
        stock: 1,
    },
    {
        id: 3,
        name: "Unisex T-shirts Blank Cotton Multicolor Mens Unisex Custom Tshirts",
        description: "Plain basic T-shirt is a must-have essential for everyday wear. Designed with a clean and minimalist look.",
        price: 29.99,
        imageUrl: [`${base}/products/clothes/6.jpg`, `${base}/products/clothes/3.jpg`, `${base}/products/clothes/5.jpg`, `${base}/products/clothes/size-chart-plain.png`],
        size: ["Medium", "Large", "Small"],
        stock: 10,
        color: ["Light Gray", "Purple", "Black"],
    },
    {
        id: 4,
        name: "Short Sleeve Free Size T-Shirt",
        description: "Experience ultimate comfort with our short sleeve free size T-shirt, designed to fit a variety of body types.",
        price: 22.99,
        imageUrl: [`${base}/products/clothes/8.jpg`, `${base}/products/clothes/9.jpg`],
        size: "Free Size",
        stock: 2,
        design: ["Japan Mountain", "Plain Black"]
    }
];