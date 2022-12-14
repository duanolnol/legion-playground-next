import React from "react";
import { Card, Carousel } from "legion-ui";
import styles from "../../styles/Carousel.module.css";

const data = [
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "1",
    title: "Sub title",
    desc: "Mauris, turpis augue mauris tellus massa, lacus. Id quam adipiscing tincidunt at feugiat arcu in",
  },
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "2",
    title: "Sub title",
    desc: "Mauris, turpis augue mauris tellus massa, lacus. Id quam adipiscing tincidunt at feugiat arcu in",
  },
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "3",
    title: "Sub title",
    desc: "Mauris, turpis augue mauris tellus massa, lacus. Id quam adipiscing tincidunt at feugiat arcu in",
  },
];

const data2 = [
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "1",
  },
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "2",
  },
  {
    imageURL: "https://legion-dev.vercel.app/images/apple.png",
    alt: "3",
  },
];

const CarouselExample = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Carousel Component</div>
      <div className={styles.wrapper}>
        <Card sx={{ borderRadius: 0 }}>
          <Carousel
            showIndicator
            showControl
            data={data}
            titleSize="14px"
            descSize="7px"
            ratio={7 / 3}
          />
        </Card>
        <Card sx={{ borderRadius: 0 }}>
          <Carousel data={data2} ratio={7 / 3} showIndicator showControl />
        </Card>
        <Card sx={{ borderRadius: 0 }}>
          <Carousel
            autoPlay
            data={data2}
            titleSize="14px"
            descSize="7px"
            ratio={7 / 3}
          />
        </Card>
      </div>
    </div>
  );
};

export default CarouselExample;
