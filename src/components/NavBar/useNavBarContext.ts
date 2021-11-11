import { createContext, useContext } from "react";

interface ITNavBarContext {
  activeItem: string;
  setActiveItem: (name: string) => void;
}

export const NavBarContext = createContext<ITNavBarContext | null>(null);

export default function useNavBarContext(): ITNavBarContext {
  const context = useContext(NavBarContext);

  if (!context) {
    throw new Error("NavBarContext used outside Nav Bar Component");
  }
  return context;
}
