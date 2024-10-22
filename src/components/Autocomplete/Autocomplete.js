import React, { useCallback, useEffect, useState } from "react";
import Suggestionslist from "./Suggestionslist";
import useCache from "./use-cache";

const Autocomplete = ({
  placeholder = "",
  fetchSuggestions,
  dataKey = "",
  customeLoading = "Loading...",
  onSelect = () => {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  customStyles = {},
  staticData = null,
  cache = true
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { getCache, setCache } = useCache('autocomplete', 3600);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const getSuggestions = async (query) => {
    const cachedSuggestions = getCache(query);

    if (cachedSuggestions && cache) {
        setSuggestions(cachedSuggestions);
    }
    else {
        setLoading(true);
        setError(null);
        try {
            let results;
            if (staticData) {
              results = staticData.toLowerCase().includes(query.toLowerCase());
            } else {
              results = await fetchSuggestions(query);
              setCache(query, results)
            }
            setSuggestions(results);
          } catch (err) {
            setError("Something went wrong");
            setSuggestions([]);
          } finally {
            setLoading(false);
          }
    }
  };

  const debounce = (fn, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const getDebounceSuggestions = useCallback(debounce(getSuggestions, 1000), []);

  useEffect(() => {
    if (inputValue.length > 1) {
      getDebounceSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey ? suggestion[dataKey] : dataKey);
    setSuggestions([]);
    onSelect(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        className="px-2 py-2 border border-2 border-blue-400 rounded-md w-full"
        value={inputValue}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputValue}
      />

      {(suggestions.length > 0 || loading || error) && (
        <ul className="max-h-40 shadow-md overflow-scroll border border-grey-300 p-3">
          {error && <div>{error}</div>}
          {loading && <div>{customeLoading}</div>}
          <Suggestionslist
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
