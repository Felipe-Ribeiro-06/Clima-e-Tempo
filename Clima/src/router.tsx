import {createBrowserRouter} from 'react-router-dom'
import {Home} from './pages/home'
import {Detalhes} from './pages/detalhes'
import { NotFound } from './pages/notFund'
import { Layout } from './componentes/layout'

const router = createBrowserRouter([
    {
        element:<Layout/>,
        children :[
            {
                 path: "/",
                 element:<Home/>
            },
            {
                path:"/detalhes/:cidade",
                element:<Detalhes/>
            },
             {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
])

export {router}