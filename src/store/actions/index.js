export const moviesList = () => {
  return {
    type: "MOVIES_LIST", // MOVIES_LIST FROM MOVIES_REDUCER
    payload: [
      { id: 1, name: "Pulp fiction" },
      { id: 2, name: "Pacific Rim" },
      { id: 3, name: "Rambo" },
    ],
  };
};
