
import { useEffect, useState } from 'react'
import { runAnimation, runAnimationStar } from "../helpers/animations";
import { irregularVerbs, regularVerbs, BtnCustom, InputTextCustom, createTheme, ThemeProvider } from "../helpers";
import "./app-style.css";
import { SelectCustom } from './components/select-custom/SelectCustom';


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
  const [isCorrect, setIsCorrect] = useState({ "Present": 0, "Past": 0, "Past Participle": 0, "Spanish": 0 })



  //   Action after select verb type - set verbInput
  const getVerbs = ({ target }) => {
    setVerbType(target.value)
    let randomElement = {}
    if (target.value === 1) {
      randomElement = irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)]
    } else if (target.value === 2) {
      randomElement = regularVerbs[Math.floor(Math.random() * regularVerbs.length)]
    } else {
      const allVerbs = [...irregularVerbs, ...regularVerbs]
      randomElement = allVerbs[Math.floor(Math.random() * allVerbs.length)]
    }
    setVerbUI(randomElement)
  }
  const setVerbUI = (randomElement) => {
    setVerbInput({
      "Present": randomElement.Present.charAt(0).toUpperCase() + randomElement.Present.slice(1),
      "Past": "",
      "Past Participle": "",
      "Spanish": ""
    })
    setVerb(randomElement)
    setIsRead(false)
  }

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

  const dataInputText = {
    'verb':verb,
    'getValueInput': getValueInput,
    'isCorrect': isCorrect
  }


  return (
    <ThemeProvider theme={theme}>
      <div className='main-content-component'>
        <div className='header-content'>
          <div className='circle'></div>
          <div id="animationContent"></div>
          <p className='title-app'>Verbs</p>
        </div>


        <SelectCustom getVerbs={getVerbs} verbType={verbType} />


        <form className='inputs-form'>
          <InputTextCustom title='Present' text={verbInput.Present} read={true} {...dataInputText} />
          <InputTextCustom title='Past' text={verbInput.Past} read={isRead}  {...dataInputText} />
          <InputTextCustom title='Past Participle' text={verbInput['Past Participle']} read={isRead}  {...dataInputText} />
          <InputTextCustom title='Spanish' text={verbInput.Spanish} read={isRead} {...dataInputText} />

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
