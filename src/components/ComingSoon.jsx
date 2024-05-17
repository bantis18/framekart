import React from "react";
import product_launch from ".././assets/product_launch.png";
import framekart_icon from ".././assets/framekart-icon.png";
function ComingSoon() {
  return (
    <div class="flex justify-center">
      <img src={product_launch} alt="Coming Soon" class="h-screen" />
      {/* <img src={framekart_icon} alt="icon" class="h-screen" /> */}
    </div>
  );
}

export default ComingSoon;
