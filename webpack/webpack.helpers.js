/**
 * Are we in development mode?
 */
function inDev() {
  return process.env.NODE_ENV == "development";
}

module.exports = {
  inDev,
};
