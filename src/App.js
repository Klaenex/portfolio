import React from "react"
import { Redirect, Route, Switch, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Project from "./components/ProjectPage"

import { AnimatePresence } from "framer-motion"

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route exact path='/' component={Home} />
      <Route exact path='/project' component={Project} />
        <Redirect to='/' />
      </Switch>
    </AnimatePresence>
  )
}
