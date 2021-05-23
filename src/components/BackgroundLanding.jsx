import image from '../assets/bg.jpg';

const BackgroundLanding = () => {
  return (
    <>
      <div>
        <div className="bg-fixed bg-no-repeat bg-center relative">
          <img src={image} alt="background" className="opacity-8 w-full h-1/3 max-h-72 filter blur-xs" />
        <p className="font-semibold text-4xl lg:text-5xl absolute right-1/4 top-1/2 text-white" style={{textShadow: "1px 1px 4px #4e4e4ece"}}>پیلوت</p>
        </div>
      </div>
    </>
  );
};

export default BackgroundLanding;
