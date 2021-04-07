export const buildApiQuery = (data) => {
    const { page, size } = data;
    console.log("data",data);

    let queryFilter = '';
    if (page >= 0) {
      queryFilter = `${queryFilter}&page=${page}`;
    }
    if (size) {
      queryFilter = `${queryFilter}&size=${size}`;
    }
    console.log("query", queryFilter);
    return queryFilter;
};
export default buildApiQuery;
  
  