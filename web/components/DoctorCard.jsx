import Image from "next/image";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <Image
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-40 object-cover rounded-md mb-4"
        width={4}
        height={4}
      />
      <div className="text-green-500 text-sm font-semibold mb-2">
        {doctor.available ? "Available" : "Not Available"}
      </div>
      <h2 className="text-lg font-semibold">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.speciality}</p>
    </div>
  );
};

export default DoctorCard;