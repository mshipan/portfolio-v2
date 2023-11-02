const Button = ({ text, onClick, type, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[#55e6a5] hover:bg-[#141c27] text-[#141c27] hover:text-white text-sm lowercase font-medium px-6 py-3 transition-all ease-out duration-500 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
