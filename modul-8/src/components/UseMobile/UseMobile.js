import { useEffect, useState } from "react";

const UseMobile = () => {
  const [width, setWidth] = useState({width: window.innerWidth});
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const handleResize = () =>
      setWidth({
        width: window.innerWidth
      })
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [setWidth])

  useEffect(() => {
    (width?.width > 1024 ? setIsMobile(false) : setIsMobile(true));
  }, [width]);

  return isMobile;

}

export default UseMobile;