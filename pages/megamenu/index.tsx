import { Button, Data, DynamicIcon, Megamenu } from "legion-ui";
import React from "react";
import styles from "../../styles/Megamenu.module.css";

const datas: Data[] = [
  {
    title: "Arts & Craft",
    icon: "PenTool",
    items: [ 
      {
        title: "Antiques & Collectibles",
        item: [
          { label: "Antique Furniture", url: "" },
          { label: "Architectural & Garden Antiques", url: "" },
          { label: "Antique Rugs & Carpets", url: "" },
          { label: "Decorative Collectibles", url: "" },
          { label: "Kitchen & Home Collectibles", url: "" },
        ],
      },
      {
        title: "Art & Craft Supplies",
        item: [
          { label: "Sewing Tools & Supplies", url: "" },
          { label: "Yarn & Sewing Supplies", url: "" },
          { label: "Scrapbooking & Paper Supplies", url: "" },
          { label: "Art Supplies", url: "" },
          { label: "Multi-Purpose Craft Supplies", url: "" },
        ],
      },
    ],
  },
  {
    title: "Automotive",
    icon: "Truck",
    items: [
      {
        title: "Multi-Purpose Craft Supplies",
        item: [
          { label: "Car, Truck Parts & Accessories", url: "" },
          { label: "Motorcycle Parts & Accessories", url: "" },
          { label: "Personal Watercraft Parts", url: "" },
          { label: "Aviation Parts & Accessories", url: "" },
          { label: "Vehicle Security", url: "" },
        ],
      },
      {
        title: "Automotive Tools & Supplies",
        item: [
          { label: "Automotive Hand Tools", url: "" },
          { label: "Automotive Air Tools", url: "" },
          { label: "Automotive Tools & Supplies", url: "" },
          { label: "Automotive Power Tools", url: "" },
          { label: "Automotive Air Compressors", url: "" },
        ],
      },
    ],
  },
  {
    title: "Electronics",
    icon: "Camera",
    items: [
      {
        title: "Cameras & Photo",
        item: [
          { label: "Digital Cameras & Photo", url: "" },
          { label: "Camera Lenses & Filters", url: "" },
          { label: "Film Photography Equipment", url: "" },
          { label: "Camcorders & Accessories", url: "" },
          { label: "Camera Drones & Accessories", url: "" },
        ],
      },
      {
        title: "Computers & Hardware",
        item: [
          { label: "Computer Parts", url: "" },
          { label: "Printer & Scanners", url: "" },
          { label: "Laptop & Netbooks", url: "" },
          { label: "Dekstops & Monitor", url: "" },
          { label: "Tablet & Accessories", url: "" },
        ],
      },
    ],
  },
  {
    title: "Home & Furniture",
    icon: "Home",
    items: [
      {
        title: "Title",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
      {
        title: "Title2",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
    ],
  },
  {
    title: "Men's Fashion",
    icon: "User",
    items: [
      {
        title: "Title",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
      {
        title: "Title2",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
    ],
  },
  {
    title: "Women's Fashion",
    icon: "User",
    items: [
      {
        title: "Title",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
      {
        title: "Title2",
        item: [
          { label: "label 1", url: "" },
          { label: "label 2", url: "" },
          { label: "label 3", url: "" },
        ],
      },
    ],
  },
];

export default function MegamenuExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClick = () => setIsOpen((prev) => !prev);
  const onClose = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Megamenu Component</div>
      <Megamenu
        data={datas}
        width={900}
        trigger={
          <Button
            size="sm"
            onClick={onClick}
            iconRight={<DynamicIcon name="ChevronDown" />}
          >
            Category
          </Button>
        }
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
}
