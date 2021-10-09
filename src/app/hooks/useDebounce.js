import React, { useRef, useState } from "react"

export default function useDebounceState(defauldValue, delay) {
  const [value, setValue] = useState(defauldValue)
  const timeoutID = useRef(null)

  const setDebounceValue = (value) => {
    if (timeoutID.current) clearTimeout(timeoutID.current)
    timeoutID.current = setTimeout(() => {
      setValue(value)
    }, delay)
  }
  return [value, setDebounceValue.bind(this)]
}
