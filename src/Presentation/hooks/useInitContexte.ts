import { useEffect } from "react";
import { Loadable } from "../commons/Loadable";

export default function useInitContexte(controller: Loadable) {
  useEffect(() => controller.onLoad(), [controller]);
}
