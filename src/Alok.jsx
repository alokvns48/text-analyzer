import React, { useState, useEffect, useRef } from "react";

const Alok = () => {
  const [text, setText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [occurrences, setOccurrences] = useState(0);
  const textareaRef = useRef(null);

  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    setUniqueWords(new Set(words).size);
    setCharCount(text.replace(/[^a-zA-Z0-9]/g, "").length);
  }, [text]);

  const handleTextChange = () => {
    if (textareaRef.current) {
      setText(textareaRef.current.innerText);
    }
  };

  const highlightText = (content, search, replace, replaceAll = false) => {
    if (!search) return content;
    const regex = new RegExp(search, replaceAll ? "gi" : "i");
    return content.replace(
      regex,
      <span class="bg-yellow-200">${replace}</span>
    );
  };

  const handleReplace = (replaceAll = false) => {
    if (searchString && replaceString && textareaRef.current) {
      const currentContent = textareaRef.current.innerHTML;
      const newContent = highlightText(
        currentContent,
        searchString,
        replaceString,
        replaceAll
      );

      if (newContent !== currentContent) {
        textareaRef.current.innerHTML = newContent;
        setText(textareaRef.current.innerText);

        setTimeout(() => {
          const clearedContent = newContent.replace(
            /<span class="bg-yellow-200">(.*?)<\/span>/g,
            "$1"
          );
          textareaRef.current.innerHTML = clearedContent;
          setText(textareaRef.current.innerText);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    if (searchString) {
      const regex = new RegExp(searchString, "gi");
      const matches = text.match(regex) || [];
      setOccurrences(matches.length);
    } else {
      setOccurrences(0);
    }
  }, [searchString, text]);

  const handleHighlight = () => {
    if (searchString && textareaRef.current) {
      const currentContent = textareaRef.current.innerHTML;
      const newContent = highlightText(
        currentContent,
        searchString,
        searchString,
        true
      );

      if (newContent !== currentContent) {
        textareaRef.current.innerHTML = newContent;
        setText(textareaRef.current.innerText);

        setTimeout(() => {
          const clearedContent = currentContent.replace(
            /<span class="bg-yellow-200">(.*?)<\/span>/g,
            "$1"
          );
          textareaRef.current.innerHTML = clearedContent;
          setText(textareaRef.current.innerText);
        }, 2000);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Text Analysis and Replacement
        </h1>

        <div
          ref={textareaRef}
          contentEditable
          className="w-full h-60 p-4 mb-6 border rounded-lg resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap bg-gray-50 shadow-inner"
          onInput={handleTextChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-blue-800">Unique Words</p>
            <p className="text-3xl font-bold text-blue-600">{uniqueWords}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-green-800">
              Character Count
            </p>
            <p className="text-3xl font-bold text-green-600">{charCount}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <p className="text-lg font-semibold text-yellow-800">Occurrences</p>
            <p className="text-3xl font-bold text-yellow-600">{occurrences}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search string"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Replace string"
              value={replaceString}
              onChange={(e) => setReplaceString(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => handleReplace(false)}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Replace One
            </button>
            <button
              onClick={() => handleReplace(true)}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Replace All
            </button>
            <button
              onClick={handleHighlight}
              className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alok;
