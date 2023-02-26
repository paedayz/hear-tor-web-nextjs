import React from "react";
import { Flexbox, Itembox, LineIcon, MessagerIcon } from "./floating.styled";

function FloatingIcon() {
  return (
    <>
      {" "}
      <div style={{ zIndex: "100", bottom: 20, right: 20, position: "fixed", display: "flex", justifyContent: "right" }}>
        <Itembox>
          <LineIcon onClick={() => window.open("https://line.me/R/ti/p/@600vdtpx", "_blank")?.focus()} />
        </Itembox>
        <Itembox>
          <MessagerIcon onClick={() => window.open("https://www.facebook.com/messages/t/109425300665485", "_blank")?.focus()} />
        </Itembox>
      </div>
    </>
  );
}

export default FloatingIcon;
