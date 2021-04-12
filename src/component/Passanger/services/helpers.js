export const buildApiQuery = (data) => {
  const { page, size } = data;

  let queryFilter = '';
  if (page >= 0) {
    queryFilter = `${queryFilter}&page=${page}`;
  }
  if (size) {
    queryFilter = `${queryFilter}&size=${size}`;
  }
  return queryFilter;
};
export default buildApiQuery;

