import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';
import { MyservicesService } from 'src/app/appservices/myservices.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  users: any;
  fetching: boolean = false;
  status = 'No Data';
  constructor(private myService: MyservicesService) {}
  ngOnInit(): void {}
  getalldata() {
    this.fetching = true;
    this.myService
      .getAllData()
      .pipe(
        // retry(4)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount = retryCount + 1;
                console.log(retryCount);
                this.status = 'Retrying Attempt #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.status = 'Data Fetched';
          this.users = res;
          this.fetching = false;
        },
        (err: any) => {
          console.log(err);
          this.status = 'Problem Fetching Data';
          this.fetching = false;
        }
      );
  }
  identify(index: any, item: any) {
    return item.name;
  }
}
