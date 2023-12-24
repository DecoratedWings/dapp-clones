import dynamic from "next/dynamic";
import React from "react";

interface hydrateProps {
    children:any
}

const NonSSRWrapper = (props:hydrateProps) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});