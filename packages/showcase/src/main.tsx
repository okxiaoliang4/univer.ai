import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Sandpack } from './sandpack'

import demoCSSRaw from './showcase/demo/style.css?raw'
import demoRaw from './showcase/demo?raw'

function App() {
  return (
    <Sandpack
      files={{
        'index.js': demoRaw,
        'style.css': demoCSSRaw,
      }}
    />
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
