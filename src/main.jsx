import { createRoot } from 'react-dom/client'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import BaseProvider from './context/index'


createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <BaseProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </BaseProvider>
  </ErrorBoundary>
)
