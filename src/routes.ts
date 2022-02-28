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
    path: "/ethre-frontend/",
    component: Home,
  },
  {
    path: "/ethre-frontend/roadmap",
    component: Roadmap,
  },
  {
    path: "/ethre-frontend/audit",
    component: Audit,
  },
  {
    path: "/ethre-frontend/bonds",
    component: Bonds,
  },
  {
    path: "/ethre-frontend/swap",
    component: Swap,
  },
  {
    path: "/ethre-frontend/mint",
    component: Mint,
  },
];

export default routes;
