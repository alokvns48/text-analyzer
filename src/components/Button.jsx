const Button = ({ onClick, label, color }) => {
  const bgClass = `bg-${color}-500`;
  const hoverClass = `hover:bg-${color}-600`;

  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-2 ${bgClass} text-white rounded-lg ${hoverClass} focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default Button;
