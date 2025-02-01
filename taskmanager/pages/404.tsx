import Link from "next/link"

export default function Pagina404() {
  return (

    <div className="text-center">
      <p className="mt-10 text-6xl text font-semibold mb-40">Página No Encontrada</p>
      <Link href='/' legacyBehavior>
        <a className="text-4xl hover:text-black">
          Ir a Inicio
        </a>
      </Link>
    </div>

  )
}

/* 
    Página de error.
    Funcionalidad: En caso de intentar acceder a una ruta no definida muestra una página de error personalizada.
*/