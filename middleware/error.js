module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    if(err.name==='CastError')
    {
       err.statusCode=400,
       err.message="Wrong Object Id"
    }

    res.status(err.statusCode).json({
        success: false,
        error: err.message
    });
};