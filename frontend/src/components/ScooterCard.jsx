import { Link, useParams } from "react-router-dom"; // useParams felesleges

const ScooterCard = ({ scooter /* , onDelete */ }) => {
  const { id } = useParams(); // a scooter propból kitudod nyerni az ._id -t ezért ez nem kell.

  // Ezzel a megoldással most valóban törlöd az adatbázisból a scootert de mivel nem változtatsz state-t az oldal nem rendereli újra a home-paget a törölt scooter nélkül.
  // Ha a handleDelete a HomePage componensben lenne kidolgozva akkor tudnád benne használni a scooters state setterjét
  // és ezt át tudnád adni a Card-nak propként. Ezzel a megoldással a delete változtatná a scooters statet és újrarenderelődne a componens.
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/scooters/delete/${id}`,
        {
          method: "DELETE",
        }
      );
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
      <img
        className="w-40 h-40 border-2 border-blue-200"
        src={scooter.img}
        alt={scooter.model}
      />
      <p>Max Speed: {scooter.maxSpeed}</p>
      <p>Price/Hour: {scooter.pricePerHour}</p>
      <p>Electric: {scooter.isElectric}</p>
      <p>Available: {scooter.isAvalable}</p>{" "}
      {/*a mongoose Schemaban  available-nek nevezted el*/}
      <div className="flex justify-between">
        <Link
          className="border-2 p-1 cursor-pointer hover:bg-blue-500"
          to={`/scooter/${scooter._id}`}
        >
          Details
        </Link>
        <button
          onClick={handleDelete}
          /* onClick={()=>onDelete(scooter._id)} */
          className="border-2 p-1 cursor-pointer hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ScooterCard;
