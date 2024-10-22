import React from 'react'

const Suggestionslist = ({suggestions, onSuggestionClick, highlight, dataKey}) => {
    const suggestionHighlight = (text, highlight) => {
       const parts = text.split(new RegExp(`(${highlight})`, "gi"));
       return (
        <span>
            {parts.map((part, index) => {
                return part.toLowerCase() === highlight.toLowerCase() ?
                (<b key={index}>{part}</b>) : (part)
            })}
        </span>
       );
    }
  return (
    <>{suggestions?.map((suggestion, index) => {
        const currentSuggestion = dataKey ? suggestion[dataKey] : suggestion

        return <li key={suggestion.id} className='cursor-pointer hover:bg-gray-100 py-2' onClick={() => onSuggestionClick(suggestion)}>{suggestionHighlight(currentSuggestion, highlight)}</li>
    })}</>
  )
}

export default Suggestionslist