export const useUserAgent = () => {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  return {
    isMobile: userAgent.match(/iPhone|iPad|iPod|Android/i),
  };
};
