import { useEffect, useRef } from "react";

export default function useEffectAfterMount(
  cb = () => {},
  dependencies: Array<any> = []
) {
  const justMounted = useRef(true);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, dependencies);
}
