import Audit from "./pages/Audit";
import Bonds from "./pages/Bonds";
import Home from "./pages/Home";
import Mint from "./pages/Mint";
import Roadmap from "./pages/Roadmap";
import Swap from "./pages/Swap";

type TRoute = {
  path: string;
  component: React.FC;
};

const routes: TRoute[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/roadmap",
    component: Roadmap,
  },
  {
    path: "/audit",
    component: Audit,
  },
  {
    path: "/bonds",
    component: Bonds,
  },
  {
    path: "/swap",
    component: Swap,
  },
  {
    path: "/mint",
    component: Mint,
  },
];

export default routes;
