import React, { Suspense } from 'react'
import './App.css'
import Skeleton from 'react-loading-skeleton'
function App() {
  const Footer = React.lazy(() => import('./components/Footer'))
  const AppRouter = React.lazy(() => import('./routers/AppRouters'))
  return (
    <>
      <Suspense fallback={<Skeleton count={5} />}>
        <AppRouter />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
