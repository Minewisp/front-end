module.exports = function (api) {
  // Found this on https://stackoverflow.com/a/71356363
  api.cache.forever();

  return {
    plugins: ['macros'],
  };
};
