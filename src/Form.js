import React, {useState} from 'react'

export default function Form() {
  const [inputText, setInputText] = useState("");

  const handleOnChange = evt => {
    setInputText(evt.target.value);
  }

  return (
    <div>
      <h2>You entered the text: {inputText}</h2>

      <form>
        <input type="text" placeholder="write something" value={inputText} onChange={handleOnChange} />
      </form>
    </div>
  )
}
