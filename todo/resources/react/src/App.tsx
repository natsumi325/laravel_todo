import { Top } from "./components/pages/Top";
import { MantineBasicProvider } from "./Providers/MantineBasicProvider";

export const App = () => {

  return (
    <MantineBasicProvider>
      <Top />
    </MantineBasicProvider>
  )
};
