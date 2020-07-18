import React from 'react';

function ProductTable (props) {
return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Category</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {props.x.map((product) => (
    <tr>
    <td>{product.category}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    </tr>
    ))}
  </tbody>
</table>
)
}
export default ProductTable;

