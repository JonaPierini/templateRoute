import {
  NavigateOptions,
  useNavigate as useNavigateHook,
} from "react-router-dom";

const parseRoute = (route: string | string[], datas?: string) => {
  // const { data } = useParams();
  if (typeof route === "string") return route;
  if (datas !== undefined) return route + `/${datas}`;
  return route.join("/");
};

export const useNavigate = () => {
  const navigate = useNavigateHook();
  // const { data } = useParams();

  return (route: string | string[] | number, options?: NavigateOptions) => {
    if (typeof route === "number") return navigate(route);
    navigate(parseRoute(route), options);
  };
};
