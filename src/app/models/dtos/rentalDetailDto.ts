import { CustomerDetailDtoComponent } from "src/app/components/list/customer-detail-dto/customer-detail-dto.component"

export interface RentalDetailDto {
    id: number;
    carID:number;
    customerID: number;
    rentDate: string;
    returnDate?: any;
    brandName: string;
    fullName: string;
    isEnabled:boolean;
}