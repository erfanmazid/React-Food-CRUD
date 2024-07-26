import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstans } from "../../api/api";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

const foodSchema = z.object({
  name: z.string().min(3, "name shoud more than 3 char"),
  price: z.number().min(10, "minimum price is 10$"),
  categori: z.string().min(3, "categori shoud more than 3 char"),
  description: z
    .string()
    .min(5, "description shoud more than 3 char")
    .max(150, "description shoud less than 150 char"),
});

export default function FoodForm({ item }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(foodSchema),
    defaultValues: {
      name: "",
      price: 0,
      categori: "",
      description: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => await axiosInstans.post("/food", data),
    onError: (err) => console.log(err),
  });

  const onSubmit = (values) => {
    mutate({ ...values, id: crypto.randomUUID() });
  };

  useEffect(() => {
    if (item) {
      reset({
        ...item,
      });
    }
  }, [item, reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border border-gray-300 rounded-lg w-[430px] mx-auto mt-5"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Categori
          </label>
          <input
            type="text"
            {...register("categori")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.categori && (
            <p className="text-red-500 text-sm">{errors.categori.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {item ? "Update" : "Add"} Item
        </button>
      </form>
    </>
  );
}
