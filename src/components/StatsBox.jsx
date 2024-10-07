const StatsBox = ({ label, value, bgColor }) => {
  const bgClass = `bg-${bgColor}-100`;
  const textColorClass = `text-${bgColor}-800`;
  const valueColorClass = `text-${bgColor}-600`;

  return (
    <div className={`${bgClass} p-4 rounded-lg shadow`}>
      <p className={`text-lg font-semibold ${textColorClass}`}>{label}</p>
      <p className={`text-3xl font-bold ${valueColorClass}`}>{value}</p>
    </div>
  );
};

export default StatsBox;
