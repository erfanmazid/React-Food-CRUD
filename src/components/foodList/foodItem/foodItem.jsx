export default function FoodItem({ food }) {
  const { name, price, categori, description } = food;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between ">
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{categori}
            </span>
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
              ${price}
            </span>
          </div>
          <div className="flex gap-4">
            <button className="bg-yellow-500 rounded-2xl py-2 px-4 bg-opacity-30">
              Edit
            </button>
            <button className="bg-red-500 rounded-2xl py-2 px-4 bg-opacity-30">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
