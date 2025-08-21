"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";

export const HeroParallax = ({
  products,
}: {
  products: { title: string; link: string; thumbnail: string }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]), // was -700 → 500
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[200vh] py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] "
    >
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-16 mb-15"
          style={{ willChange: "transform" }}
        >
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-row mb-12 space-x-16 "
          style={{ willChange: "transform" }}
        >
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-20"
          style={{ willChange: "transform" }}
        >
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1 className="text-2xl font-bold md:text-7xl">
        Apps that speak <br /> your language
      </h1>
      <p className="mt-8 max-w-2xl text-base md:text-xl text-muted-foreground">
        We're crafting intelligent applications with elegant design that
        understand context, anticipate needs, and solve problems while pushing
        the boundaries of what AI can accomplish.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate, willChange: "transform" }}
      whileHover={{ y: -20 }}
      className="group/product relative h-[700px] w-[320px] shrink-0" // Taller and narrower for mobile screens
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gray-100 shadow-lg">
          <img
            src={product.thumbnail}
            className="h-full w-full object-contain" // Changed to object-contain to show full image
            alt={product.title}
          />
          {/* Optional: Phone frame overlay */}
          <div className="absolute inset-0 pointer-events-none border-[0px] border-gray-200 rounded-[20px]"></div>
        </div>
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-60 rounded-[20px] transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 text-white group-hover/product:opacity-100 text-sm font-medium transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
