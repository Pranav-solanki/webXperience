const HeroImage = () => {
  return (
    <div className="flex justify-center">
      <div className="relative group">
        <img
          src="https://img.freepik.com/free-photo/protein-gym_23-2151980072.jpg?semt=ais_user_personalization&w=740&q=80"
          alt="Protein Bottle"
          className="w-80 md:w-96 object-contain rounded-3xl 
                     border-4 border-orange-500 
                     shadow-[0_0_40px_rgba(255,115,0,0.6)] 
                     animate-float transition duration-500 
                     group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroImage;
