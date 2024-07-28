import p1 from "@/assets/HomePage/p1.png";
import p2 from "@/assets/HomePage/p2.png";
import p3 from "@/assets/HomePage/p3.png";
import p4 from "@/assets/HomePage/p4.png";
import p5 from "@/assets/HomePage/p5.png";
import p6 from "@/assets/HomePage/p6.png";

export type ProductType = {
  item: {
    icon: any;
    rating: string;
    title: string;
    description: string;
    price: string;
    status: string;
  };
};

export const Products = [
  {
    icon: p1,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
  {
    icon: p2,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
  {
    icon: p3,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
  {
    icon: p4,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
  {
    icon: p5,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
  {
    icon: p6,
    rating: "2",
    title: "Fabric Chair",
    description: "Al Karam",
    price: "$95.50",
    status: "Almost Sold Out",
  },
];
