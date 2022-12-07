import { useRef, useEffect } from "react";

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    if (!prevailOnUnmount) document.title = defaultTitle.current;
  }, [prevailOnUnmount]);

  useEffect(() => {
    const titlePrefix = "Chef Storm Signature 🥘️|| ";
    document.title = `${titlePrefix}${title}`;
  }, [title]);
}

export default useDocumentTitle;
