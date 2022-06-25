export const getArgs = (argv) => {
  const args = argv.slice(2);

  return args.reduce((acc, curr, index, array) => {
    if (curr.startsWith('-')) {
      const key = curr.slice(1);
      const value =
        index + 1 === array.length || array[index + 1].startsWith('-')
          ? true
          : array[index + 1];

      acc[key] = value;
    }
    return acc;
  }, {});
};
