import { TaskProvider } from "@/hooks/TaskContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <TaskProvider>
      <Head>
        <title>TaskManager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        limit={2}
        autoClose={1000}
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
        newestOnTop
        theme="dark"
      />
      <Component {...pageProps} />
    </TaskProvider>

  )
}

export default MyApp

/* 
    Modal para agregar una tarea.
    Funcionalidad: Permite ingresar la descripción de una tarea para agregarla.
*/