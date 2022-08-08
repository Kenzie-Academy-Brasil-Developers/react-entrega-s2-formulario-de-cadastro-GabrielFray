import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { ContentImage } from "./styles";

const ContentNotFound = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/not-found-page.json"),
    });
    return () => lottie.destroy();
  }, []);
  return <ContentImage ref={container}></ContentImage>;
};

export default ContentNotFound;
