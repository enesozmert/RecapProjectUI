import { CarDetailDto } from "../dtos/carDetailDto";
import { ResponseModel } from "./responseModel";

export interface CarDetailDtoResponseModel extends ResponseModel {
    data: CarDetailDto[]
}