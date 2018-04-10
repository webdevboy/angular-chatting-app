import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as mtz from 'moment-timezone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    console.log('chatting page');
  }


}
