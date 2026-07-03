import { ItemData } from "../../assets/data/data";

interface CardProps {
  item: ItemData
}

export const Cards = ({item}: CardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-trasnparent hover:shadow-xl transition-shadow duration-300 ">
      {/* <!-- Contenedor de la Imagen --> */}
      <div className="relative h-48 w-full bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://unsplash.com"
          alt="Tenis deportivos naranjas"
        />
      </div>

      {/* <!-- Contenido de la Tarjeta --> */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#102172] bg-[#e595f9] rounded-full mb-3">
          {item.projectType}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {item.name}<span className="cursor">_</span>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {item.description}
        </p>
        {
          item.techStack.map((tech: string) => (
        <span key={tech} className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#102172] rounded-full mb-3">
          {tech}
        </span>
          ))
        }

        <div className="py-2">
          <a className="text-xl font-semibold" href="">
            Code
          </a>
          <a className="text-xl font-semibold px-5" href="">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};
