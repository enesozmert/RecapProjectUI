import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .toPromise()
      .then(params => {
        //console.log(params["url"])
        if (params["url"]) {
          this.router.navigate(['/' + params["url"]])
        }
        //this.setDefaultUrl()
      });
  }
}
