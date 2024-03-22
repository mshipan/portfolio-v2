

const Button = ({ text, onClick, type, className, icon, loadingSpinner, loading  }) => {
 
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-[#55e6a5] hover:bg-[#141c27] text-[#141c27] hover:text-white text-sm font-medium px-6 py-3 transition-all ease-out duration-500 flex items-center gap-1 ${className}`}
    >
     {loading && loadingSpinner} {text} {icon && <span> {icon} </span>}
    </button>
  );
};

export default Button;
