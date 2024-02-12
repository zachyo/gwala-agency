import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/tailwind.output.css'
import App from './App'
import { SidebarProvider } from './context/SidebarContext'
// import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import * as serviceWorker from './serviceWorker'
import { Toaster } from "react-hot-toast";
import { AuthProvider } from './context/authContext'
import ProgressBar from './components/ProgressBar'


// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
  <AuthProvider>
    <SidebarProvider>
      <Suspense fallback={<ProgressBar/>}>
        <Windmill usePreferences>
          <App />
          <Toaster />
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
