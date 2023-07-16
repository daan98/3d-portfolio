import { BallCanvas } from "./canvas";
import { technologies } from "../constants//constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas icon={technology.icon} name={technology.name}/>
        </div>
      ))}
    </div>
  )
}

export default Tech