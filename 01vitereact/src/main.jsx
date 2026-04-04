import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime"
import React from 'react'


const anotherElement = (
    <a href="https:www.google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "Inshal";

const reactElement = React.createElement(
    'a',
    {href: 'https:www.google.com', target: '_blank'},
    'ClickME To Visit',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    reactElement
    // <App/>
)


