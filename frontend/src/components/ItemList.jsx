const ItemList = ({ productList }) => {
  return (
    <>
      <h1>Item List</h1>
      <div>
        {productList &&
          productList.map((product) => (
            <>
              <div
                key={product.id}
                style={{
                  border: "2px solid black",
                  backgroundColor: "green",
                  color: "white",
                  width: "30vw",
                  borderRadius: "4%",
                }}
              >
                <h2>{product.name}</h2>
                <p>{product.stock}</p>
                <p>{product.price}</p>
              </div>
              <br></br>
            </>
          ))}
      </div>
    </>
  );
};

export default ItemList;
