import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChatPage from './containers/chat/ChatPage';
import TodoPage from './containers/TodoPage';
import Layout from './containers/Layout';

declare global {
  interface Window {
    Scaledrone: any;
    drone: any;
    room: any;
  }
}

window.drone = new window.Scaledrone('API_KEY');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/chat",
        element: <ChatPage />,
      },

      {
        path: "/todo",
        element: <TodoPage />,
      },
    ]
  },

]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
