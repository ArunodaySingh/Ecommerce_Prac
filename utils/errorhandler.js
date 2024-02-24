// This will use to create custom error message

class ErrorHandler extends Error
{
    constructor(message,StatusCode)
    {
        super(message);
        this.StatusCode=StatusCode
        Error.captureStackTrace(this,this.constructor);
    }
}
module.exports=ErrorHandler;