import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstans } from "../../api/api";
import FoodItem from "./foodItem/foodItem";

export default function FoodList() {
  const { data, isLoading } = useQuery({
    queryKey: ["foodList"],
    queryFn: async () => await axiosInstans.get("/food"),
  });
  console.log(data);
  return (
    <>
      <header>
        <p>Food list</p>
      </header>
      <main>
        <div className="grid grid-cols-3 gap-5 p-5">
          {data.data &&
            data.data.map((food) => <FoodItem food={food} key={food.id} />)}
        </div>
      </main>
    </>
  );
}
