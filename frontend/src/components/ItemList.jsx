const ItemList = ({ productList, aNumber }) => {
  console.log(aNumber);
  return (
    <>
      <h1>Item List</h1>
      <div>
        {productList &&
          productList.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemList;
