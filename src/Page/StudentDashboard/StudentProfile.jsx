import useWhoAreYou from "../../Hooks/useWhoAreYou";

const StudentProfile = () => {
  const [whoareyou] = useWhoAreYou();
  return (
    <div>
      <h2 className="text-4xl">Student Profile</h2>
      <div className="p-5 border flex items-center gap-5">
        <img
          src={whoareyou?.image}
          alt=""
          className="w-44 p-2 border rounded-md"
        />
        <div>
          <h2 className="text-xl font-bold text-green-600">
            {whoareyou?.name}
          </h2>
          <p className="text-sm">{whoareyou?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
