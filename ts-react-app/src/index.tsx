import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals'

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC'
// import HelloHooks from './components/demo/HelloHooks'
import router from './routers'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        {/* <HelloClass name="TypeScript" /> */}
        {/* <HelloHOC name="TypeScript" loading={true} /> */}
        {/* <HelloHooks name='TypeScript' /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
