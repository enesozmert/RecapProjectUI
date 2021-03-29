import { ResponseModel } from "./responseModel/responseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}