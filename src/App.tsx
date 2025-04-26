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
      </div>
    </AnimatedBackground>
  );
}

export default App;
