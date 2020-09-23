const mode = process.env.NODE_ENV;

module.exports = {
  productionSourceMap: mode !== 'production',
};
