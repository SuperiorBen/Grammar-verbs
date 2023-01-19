import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import animation from '../assets/cat'
import starAnimation from '../assets/star'
import irregularVerbs from '../assets/irregular-verbs'
import regularVerbs from '../assets/regular-verbs'
import { BtnCustom } from './components/btn-custom/BtnCustom'
import { InputTextCustom } from './components/input-custom/InputTextCustom'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const GuessVerbApp = () => {
  // Custom color for the outline
  const theme = createTheme({
    palette: {
      outlineCustom: {
        main: '#b5906b'
      },
    },
  });

  const [verbType, setVerbType] = useState('')
  const [verb, setVerb] = useState({})
  const [verbInput, setVerbInput] = useState({})
  const [isRead, setIsRead] = useState(true)

  const runAnimation = () => {
    // Lotti script for run animation
    bodymovin.loadAnimation({
      animationData: animation,
      container: document.getElementById('animationContent'),
      path: 'nombre_animacion.json',
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: 'cat' // Name for future reference. Optional.
    })
  }

  const runAnimationStar = () => {
    // Lotti script for run animation
    bodymovin.loadAnimation({
      animationData: starAnimation,
      container: document.getElementById('animationContentStar'),
      path: 'nombre_animacion.json',
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: 'star' // Name for future reference. Optional.
    })
  }

  //   Action after select verb type - set verbInput
  const getVerbs = ({ target }) => {
    setVerbType(target.value)
    const randomElement = irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)]

    setVerbInput({
      "Present": randomElement.Present.charAt(0).toUpperCase() + randomElement.Present.slice(1),
      "Past": "",
      "PastParticiple": "",
      "Spanish": ""
    })
    setVerb(randomElement)
    setIsRead(false)
  }

  //   Run Animation
  useEffect(() => {
    document.getElementById('animationContent').innerHTML = ''
    document.getElementById('animationContentStar').innerHTML = ''
    runAnimation()
    runAnimationStar()
  }, [])

  const getValueInput = ({ val, mode }) => {
    const verbNew = { ...verbInput }
    verbNew[mode] = val
    setVerbInput(verbNew)
  }


  return (
    <ThemeProvider theme={theme}>
    <div className='main-content-component'>
      <div className='header-content'>
      <div className='circle'></div>
        <div id="animationContent"></div>
        <p className='title-app'>Verbs</p>
      </div>


      <FormControl className='select-verb' color="outlineCustom">
        <InputLabel id="demo-simple-select-label">Verb type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={getVerbs}
          value={verbType}
        >
          <MenuItem value={1}>Irregular verbs</MenuItem>
          <MenuItem value={2}>Regular verbs</MenuItem>
          <MenuItem value={3}>Both types</MenuItem>
        </Select>
      </FormControl>


      <form className='inputs-form'>
        <InputTextCustom title='Present' text={verbInput.Present} getValueInput={getValueInput} read={true} />
        <InputTextCustom title='Past' text={verbInput.Past} getValueInput={getValueInput} read={isRead} />
        <InputTextCustom title='Past participle' text={verbInput.PastParticiple} getValueInput={getValueInput} read={isRead} />
        <InputTextCustom title='Spanish' text={verbInput.Spanish} getValueInput={getValueInput} read={isRead} />

      </form>

      <div className='btn-check'>
        <div id="animationContentStar"></div>
        <p className='btn-title'>Check result</p>
      </div>

      <div className='btn-actions'>
        <BtnCustom title='Reveal all' />
        <BtnCustom title='Try again' />
      </div>


    </div>
    </ThemeProvider>
  )
}
