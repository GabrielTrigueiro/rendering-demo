import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use multiple libraries, use environment variavles, interact with database, process confidential information`
  );

  return "server result";
};
