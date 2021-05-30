const Loader = () => {
  let circleCommonClasses = 'h-5 w-5 bg-yellow rounded-full mx-auto mt-5';

  return (
    <div className="flex flex-row justify-center w-40 mx-auto">
      <div className={`${circleCommonClasses} m-auto animate-bounce `}></div>
      <div className={`${circleCommonClasses} m-auto animate-bounce200`}></div>
      <div className={`${circleCommonClasses} m-auto animate-bounce400`}></div>
    </div>
  );
};

export default Loader;
