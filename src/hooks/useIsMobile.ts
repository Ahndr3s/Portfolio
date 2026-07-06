import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    // consulta si el ancho maximo de pantalla corresponde a un mobil
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    setisMobile(mediaQuery.matches);
    // Escuchamos cambios de la pantalla
    const handler = (e: MediaQueryListEvent) => setisMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};
