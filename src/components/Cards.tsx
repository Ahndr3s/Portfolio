import { ItemData } from "../../assets/data/data";

interface CardProps {
  item: ItemData;
}

export const Cards = ({ item }: CardProps) => {
  return (
    <div className="card-container my-4 max-w-sm rounded-2xl overflow-hidden shadow-lg bg-trasnparent hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full bg-gray-200">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://unsplash.com"
          alt="Tenis deportivos naranjas"
        />
      </div>

      <div className="p-5">
        <div className="project-type">
          {item.projectType.map((pType: string) => (
            <span
              key={pType}
              className="inline-block px-4 py-1 text-xs font-semibold text-[#102172] bg-[#e595f9] rounded-full mb-5"
            >
              {pType}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {item.name}
          <span className="cursor">_</span>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="techstack">
          {item.techStack.map((tech: string) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#102172] rounded-full mb-3"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="py-2">
          <a className="text-xl font-semibold px-2" href={item.liveUrl}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};
