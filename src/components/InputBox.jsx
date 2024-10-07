const InputBox = ({ placeholder, value, onChange }) => (
  <input
    type="text"
    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputBox;
