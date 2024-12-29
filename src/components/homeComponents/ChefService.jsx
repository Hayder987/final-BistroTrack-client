import bgBanner from "../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      style={{
        background: `url(${bgBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed"
      }}
      className="min-h-[40vh] p-6 md:p-12 lg:p-16 py-20 lg:py-32 flex justify-center items-center"
    >
      <div className="lg:max-w-[1024] lg:py-20 mx-auto w-full bg-white p-12">
        <h1 className="text-4xl text-center mb-6">BistroTrack</h1>
        <p className="text-center text-gray-600">
          The platform covers every aspect of restaurant management, from table
          reservations and order tracking to inventory management and staff
          scheduling. With a user-friendly interface, BistroTrack makes it easy
          to manage orders in real-time, track ingredient usage, and ensure the
          kitchen and front-of-house teams are always synchronized.
        </p>
      </div>
    </div>
  );
};

export default ChefService;
