import { Link, useParams } from "react-router-dom";

const ScooterCard = ({ scooter }) => {
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/scooters/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete scooter");
      }
    } catch (error) {
      alert("Error happened please check console");
      console.error("Failed to delete scooter", error);
    }
  };

  return (
    <div className="border-2 border-gray-500 w-fit">
      <p>Model: {scooter.model}</p>
      <p>Brand: {scooter.brand}</p>
      <img className="w-40 h-40 border-2 border-blue-200" src={scooter.img} alt={scooter.model} />
      <p>Max Speed: {scooter.maxSpeed}</p>
      <p>Price/Hour: {scooter.pricePerHour}</p>
      <p>Electric: {scooter.isElectric}</p>
      <p>Available: {scooter.isAvalable}</p>
      <div className="flex justify-between">
        <Link
          className="border-2 p-1 cursor-pointer hover:bg-blue-500"
          to={`/scooter/${scooter._id}`}
        >
          Details
        </Link>
        <button onClick={handleDelete} className="border-2 p-1 cursor-pointer hover:bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ScooterCard;
