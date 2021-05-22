const ValidationError = ({ text }) => {
  return (
    <div className="text-red-500 text-xs font-medium mx-3 text-center">
      {text}
    </div>
  );
};

export default ValidationError;
