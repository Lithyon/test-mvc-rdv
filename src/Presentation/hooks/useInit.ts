import { useEffect } from "react";

interface Initializable {
  init(): void;
}

export default function useInit(dataContext: Initializable) {
  useEffect(() => dataContext.init(), [dataContext]);
}
