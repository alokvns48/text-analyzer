import  { forwardRef } from "react";

const InputTextarea = forwardRef(({ handleTextChange }, ref) => (
  <div
    ref={ref}
    contentEditable
    className="w-full h-60 p-4 mb-6 border rounded-lg resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap bg-gray-50 shadow-inner"
    onInput={(e) => handleTextChange(e.target.innerText)}
  />
));

export default InputTextarea;
