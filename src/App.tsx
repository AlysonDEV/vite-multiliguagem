import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// interface iLanguage {
//   language: string
// }

// const iLanguage = (
//   language: 'pt'|'en'
// )

function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState<'pt'|'en'>('pt')


  const lang_new = {
    'pt': {
      'app':{
        'div-card': {
          'button': `Contador atual ${count}`,
          'p': `Edite <code>src/App.tsx</code> e salve para testar HMR`
        },
        'p': 'Clique no logo do Vite and React para apreender mais',
        'button-change-language': 'Trocar o idioma para o inglês'
      }
    }, 
    'en': {
      'app':{
        'div-card': {
          'button': `count is ${count}`,
          'p': `Edit <code>src/App.tsx</code> and save to test HMR`
        },
        'p': 'Click on the Vite and React logos to learn more',
        'button-change-language': 'Change the language to Brazilian Portuguese'
      }
    }
  }

  console.log(lang_new)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is {count} */}
          {lang_new[language].app['div-card'].button}
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
          {lang_new[language].app['div-card'].p}
        </p>
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
        {lang_new[language].app['p']}
      </p>

      <button onClick={()=> {setLanguage( language == 'pt' ? 'en' : 'pt' )} }>
        {lang_new[language].app['button-change-language']}
      </button>
    </>
  )
}

export default App
