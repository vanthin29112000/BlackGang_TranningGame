import React from "react";

const RenderImg = ({ image }) => {
   return <img src={image}></img>;
};
export default React.memo(RenderImg);
