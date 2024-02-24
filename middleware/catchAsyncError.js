const ErrorHandler=require("../utils/errorhandler")

const catchAsyncError = (asyncFn) => {
    return (req, res, next) => {
        asyncFn(req, res, next)
            .then(() => {}) // No-op to handle Mongoose resolving with null
            .catch((error) => {
                // Handle Mongoose-specific errors
                if (error.name === 'CastError') {
                    return next(new ErrorHandler('Invalid ID format', 400));
                }

                next(error);
            });
    };
};

module.exports = catchAsyncError;


// didn't get above line