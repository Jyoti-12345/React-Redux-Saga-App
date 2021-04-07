function service() {
    const getAllProducts = () => {
      return fetch(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=40",
        {
          method: "GET",
          headers: {
          },
        }
      )
        .then((res) => res.json())
        .then((data) => data.data)
        .catch((e) => e);
    };
  
    return {
      getAllProducts,
    };
  }
  
  const productsService = service();
  
  export default productsService;
