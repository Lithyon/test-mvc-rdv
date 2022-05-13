import { useEffect } from "react";
import { IsLoadable } from "../commons/IsLoadable";

export default function useInitContexte(controller: IsLoadable) {
  useEffect(() => controller.onLoad(), [controller]);
}
