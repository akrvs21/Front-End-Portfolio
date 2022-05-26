import React from "react";
import logo from "../assets/test.jpg";
import "../styles/ProductItem.css";

const ProductItem = () => {
  return (
    <div className="outter-container">
      <div className="inner-container">
        <img src={logo} className="productImage" width="200" height="200" />
        <div className="product-info">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            facilis voluptate neque incidunt, illo earum repudiandae maxime
            fugiat commodi deserunt, quaerat eveniet quis dicta impedit,
            voluptates vel natus delectus unde. Lorem ? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatibus doloribus tenetur
            quos natus expedita impedit fuga quidem aliquam perferendis? Qui
            autem sint, maxime placeat fugiat incidunt ipsam minus magni officia
            voluptate libero iusto natus delectus ipsa voluptatum iste quo cum
            illum inventore dignissimos ex? Aut sit, amet adipisci id
            voluptates, voluptatem placeat facilis dolore necessitatibus saepe
            earum, reprehenderit itaque aperiam magni quia recusandae odio.
            Dolor adipisci temporibus consectetur iure recusandae rerum expedita
            ipsa deserunt fuga ipsam vero quos id, a nesciunt eum ratione fugiat
            omnis, voluptates cumque culpa totam delectus eligendi. Itaque porro
            veritatis facilis vel pariatur, beatae optio recusandae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
