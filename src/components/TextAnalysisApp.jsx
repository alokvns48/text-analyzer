import { useState, useEffect, useRef } from "react";
import InputTextarea from "./InputTextarea";
import StatsBox from "./StatsBox";
import InputBox from "./InputBox";
import Button from "./Button";
import {
  highlightText,
  getWordAndCharCount,
  countOccurrences,
} from "../utils/textUtils";

const TextAnalysisApp = () => {
  const [text, setText] = useState("");
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  const [occurrences, setOccurrences] = useState(0);
  const textareaRef = useRef(null);

  // Get word count and character count
  useEffect(() => {
    const { wordCount, characterCount } = getWordAndCharCount(text);
    setUniqueWords(wordCount);
    setCharCount(characterCount);
  }, [text]);

  // Handle text change
  const handleTextChange = (newText) => {
    setText(newText);
  };

  // Handle search and replace
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

  // Handle highlight
  const handleHighlight = () => {
    if (searchString && textareaRef.current) {
      const currentContent = textareaRef.current.innerHTML;
      const highlightedContent = highlightText(
        currentContent,
        searchString,
        searchString,
        true
      );

      if (highlightedContent !== currentContent) {
        textareaRef.current.innerHTML = highlightedContent;
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

  // Handle occurrences
  useEffect(() => {
    setOccurrences(countOccurrences(text, searchString));
  }, [searchString, text]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Text Analyzer
        </h1>

        <InputTextarea ref={textareaRef} handleTextChange={handleTextChange} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatsBox label="Unique Words" value={uniqueWords} bgColor="blue" />
          <StatsBox label="Character Count" value={charCount} bgColor="green" />
          <StatsBox label="Occurrences" value={occurrences} bgColor="yellow" />
        </div>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <InputBox
              placeholder="Search string"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <InputBox
              placeholder="Replace string"
              value={replaceString}
              onChange={(e) => setReplaceString(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button
              onClick={() => handleReplace(false)}
              label="Replace One"
              color="blue"
            />
            <Button
              onClick={() => handleReplace(true)}
              label="Replace All"
              color="green"
            />
            <Button onClick={handleHighlight} label="Search" color="yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnalysisApp;
