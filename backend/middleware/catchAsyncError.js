// we can't  write try catch block with async function everywhere so we will make async function like
// this to  catch errors

module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
