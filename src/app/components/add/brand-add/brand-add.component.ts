import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
  providers: [ConfirmationService]
})
export class BrandAddComponent implements OnInit {
  position: string;
  constructor(private toastrService: ToastrService,
    public confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }
  confirmPosition(position: string) {
    this.position = position;

    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.toastrService.success("Success","Confirmed");
        },
        reject: () => {
          this.toastrService.error("Error","Not Confirmed");
        },
        key: "positionDialog"
    });
}
}
