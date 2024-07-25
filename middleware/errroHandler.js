import { constants  } from "../constants";
const errorHandler = (err,req,res,next) => {
    const status = res.statusCode ? res.statusCode : 500;
    switch(status){
        case constants.VALIDATION_ERROR:
            res.json({title: "validation failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({title:"Not found", messsage: err.message, stackTrace:err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title:"Forbidden", messsage: err.message, stackTrace:err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title:"unathorized", messsage: err.message, stackTrace:err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title:"server error", messsage: err.message, stackTrace:err.stack});
            break;
        default:
            console.log("No error all good")
            break;
    }
};
module.exports = errorHandler;