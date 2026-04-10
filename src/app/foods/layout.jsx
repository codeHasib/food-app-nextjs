import CartIcon from "@/components/CartIcon";
import Footer from "@/components/Footer";
import Tab from "@/components/Tab";

const FoodLayout = ({ children }) => {
  return (
    <>
      <div className="my-10 space-y-5 text-center">
        <p className="font-semibold text-[#883039]">SEASONAL SELECTIONS</p>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Have a break <br /> Have a Chicken from The Chicken World
        </h1>
        <p className="font-light text-[#883039]">
          Explore Our Curated menu of artisanal Creations, where each plate
          tells a Story Of heritage, <br /> technique, anc locally-sourced
          ingredients
        </p>
      </div>
      <Tab></Tab>
      {children}
      <CartIcon></CartIcon>
      <Footer></Footer>
    </>
  );
};

export default FoodLayout;
