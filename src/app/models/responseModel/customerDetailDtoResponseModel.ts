import { CustomerDetailDto } from "../dtos/customerDetailDto";
import { ResponseModel } from "./responseModel";

export interface CustomerDetailDtoResponseModel extends ResponseModel{
    data:CustomerDetailDto[]
}