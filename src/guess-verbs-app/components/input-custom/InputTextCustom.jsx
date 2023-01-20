import React, { useEffect, useState } from 'react'
import { TextField, createTheme, ThemeProvider } from "../../../helpers";
import "./style-input.css"



export const InputTextCustom = ({ title, text, getValueInput, read, isCorrect, verb }) => {
  // Custom color for the outline
  const theme = createTheme({
    palette: {
      outlineCustom: {
        main: '#b5906b'
      },
    },
  });

  const [isShrink, setIsShrink] = useState(false)
  const [isShow, setIsShow] = useState({})

  const showIconAnswer = () => {
    if (isCorrect[title] == 0) {
      setIsShow({ 'check': false, 'xmark': false })
    } else if (isCorrect[title] == 1) {
      setIsShow({ 'check': true, 'xmark': false })
    } else {
      setIsShow({ 'check': false, 'xmark': true })
    }
  }

  useEffect(() => {
    showIconAnswer()
  }, [isCorrect])


  useEffect(() => {
    if (title === 'Present' && text !== '') { setIsShrink(true) }
  }, [text])

  const onTyping = ({ target }) => {
    const typingText = target.value.length > verb[title].length ?   target.value.substring(0,verb[title].length)  : target.value
    const input = {
      'val': typingText.charAt(0).toUpperCase() + typingText.slice(1),
      'mode':title
    }
    getValueInput(input)
    target.value.length > 0 ? setIsShrink(true) : setIsShrink(false)
  }


  return (
    <ThemeProvider theme={theme}>
      <div className='input-content'>
        {isShow.check && <i className="fa-solid fa-check"></i>}
        {isShow.xmark && <i className="fa-solid fa-xmark"></i>}

        <TextField id="standard-basic" label={title}
          color="outlineCustom"
          value={text}
          inputProps={{ readOnly: read }}
          InputLabelProps={{ shrink: isShrink }}
          onChange={onTyping}
        />
      </div>
    </ThemeProvider>
  )
}

InputTextCustom.defaultProps = {
  text: ''
}
