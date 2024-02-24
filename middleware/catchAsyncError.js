module.exports = thisSync = (req, res, next) => {
    Promise.resolve(thisSync(req,res,next)).catch(next);
}

// didn't get above line