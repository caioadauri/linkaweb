export default function ProjectCard() {
  return (
    <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
        <img 
        src="https://www.shutterstock.com/image-photo/project-manager-works-updates-tasks-260nw-2508630707.jpg" 
        alt="Projeto" 
        className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 Cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-content-body text-sm">Projeto para automatizar o seu dia a dia com IA</span>
        </div>
      </div>
    </div>
  )
}