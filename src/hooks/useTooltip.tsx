import { useEffect, useState } from "preact/hooks";

const useTooltip = () => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const callback = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      const value = target.getAttribute("data-tooltip");
      setValue(value || "");
    }
    window.addEventListener("mousemove", callback);
    return () => window.removeEventListener("mousemove", callback);
  }, []);

  return {
    value,
    setValue,
  };
};

export default useTooltip;
