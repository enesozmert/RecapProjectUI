import { ResponseModel } from './responseModel/responseModel';

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}