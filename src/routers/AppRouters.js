import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
const AppRouter = () => {
  const About = React.lazy(() => import('../components/About'))
  const Contacto = React.lazy(() => import('../components/Contacto'))
  const Home = React.lazy(() => import('../components/Home'))
  const Proyectos = React.lazy(() => import('../components/Proyectos'))
  const NotFound = React.lazy(() => import('../components/NotFound'))
  const NavbarMenu = React.lazy(() => import('./../components/Navbar'))
  return (
    <Router>
      <div>
        <NavbarMenu />
        <Suspense fallback={<Skeleton count={5} />}>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/proyectos' component={Proyectos} />
            <Route exact path='/contacto' component={Contacto} />
            <Route exact path='/' component={Home} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
export default AppRouter
