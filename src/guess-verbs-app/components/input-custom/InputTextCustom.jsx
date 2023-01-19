import React, { useEffect, useState } from 'react'
import { TextField  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./style-input.css"

const isShow = true
const isNotShow = false

export const InputTextCustom = ({title, text, getValueInput, read}) => {
    // Custom color for the outline
    const theme = createTheme({
        palette: {
          outlineCustom: {
            main: '#b5906b'
          },
        },
      });


    const [ isShrink, setIsShrink ] = useState(false)
    

    useEffect(() => {
        if ( title === 'Present' && text !== '') {setIsShrink(true)}
    }, [text])

    const onTyping = ({target})=>{
        
        const mode =  title === 'Past participle' ? 'PastParticiple' : title
        const input = {
            'val':target.value,
            mode
        }
        getValueInput(input)
        target.value.length > 0 ? setIsShrink(true) : setIsShrink(false) 
    }
    

    return (
        <ThemeProvider theme={theme}>
        <div className='input-content'>
            {isNotShow && <i className="fa-solid fa-check"></i>}
            {isShow && <i className="fa-solid fa-xmark"></i>}

            <TextField id="standard-basic" label={title} 
            color="outlineCustom"
            value={text}
            inputProps={{ readOnly: read}}
            InputLabelProps={{shrink: isShrink}}
            onChange={onTyping}
              />
        </div>
        </ThemeProvider>
    )
}

InputTextCustom.defaultProps = {
    text: ''
  }
