import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/main/routes/router'
import Navigation from '@/presentation/layout/navigation/navigation'

ReactDOM.render(
  <>
     <Navigation />
    <Router />
  </>,
  document.getElementById('main')
)
