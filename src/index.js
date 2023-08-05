import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App'

const app = ReactDOMClient.createRoot(document.getElementById("app"))//находим div с тегом app и помещаем в переменную
//новый способ для вывода информации
app.render(<App />) //помещаем во внутрь тега div компонент App