import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import Service from './components/Servise'
import { SecurityScanOutlined } from '@ant-design/icons'
import SEO from './components/SEO'
import PageById from './components/PageById'
import Todo from './components/Todo'

export default function App() {
	const router =	createBrowserRouter([
		{
			path: "/",
			element: <HomePage/>,
		},
		{
			path: "/services",
			element: <Service/>	
		},
		{
			path: "/services/search_engine_optimization",
			element: <SEO/>
		},
		{
			path: "case/:id",
			element: <PageById></PageById>,
		},
		{
			path: "/ToDo",
			element: <Todo/>
		},
		{
			path: "*",
			element: <HomePage/>
		}
	])
	return(<RouterProvider router={router}></RouterProvider>)
}