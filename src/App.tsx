import { GrGithub } from "react-icons/gr";
import { AnimatedBackground } from "./animated-gradient-background";
import { ThemeSwitcher } from "./theme-switcher";

function App() {
  return (
    <AnimatedBackground>
      <div className=' flex justify-center items-center gap-x-4 dark:text-white h-full '>
        <div className='font-funnel text-5xl'>
          <span className='mr-4'>
            Hello cuttiee potutiie
          </span>
          <ThemeSwitcher />
        </div>
        <a href="https://github.com/dharmeshwr/grainy-bg" className="absolute bottom-7 right-7" target="_blank">
          <GrGithub size={25} />
        </a>
      </div>
    </AnimatedBackground>
  );
}

export default App;
