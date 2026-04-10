import RegularCard from "@/components/RegularCard";

const BurgerPage = async () => {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json();
  const allFoods = data.data;
  const foods = allFoods.filter((food) => food.category === "burger");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 my-10 container mx-auto px-2">
        {foods.map((food, ind) => (
          <RegularCard key={ind} currentFood={food}></RegularCard>
        ))}
      </div>
    </>
  );
};

export default BurgerPage;
