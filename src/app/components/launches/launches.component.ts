import { Component, OnInit } from '@angular/core';
import {LaunchQueryOptions} from '../../models/LaunchQueryOptions';
import {MatTabChangeEvent} from '@angular/material';
import {SpacexApiService} from '../../services/spacex-api.service';
import {Launch} from '../../models/Launch';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: Launch[];
  constructor(private spacexApi: SpacexApiService) { }

  onLinkClick(event: MatTabChangeEvent) {
    this.launches = [];
    this.getLaunchesData(event.index);
  }


  ngOnInit() {
    this.spacexApi.getAllLaunches().subscribe(
      (data: Launch[]) => {
        this.launches = data;
      });
  }

  getLaunchesData(index: number) {
    switch (index) {
      case 0: {
        this.spacexApi.getAllLaunches().subscribe(
          (data: Launch[]) => {
            this.launches = data;
          });
        break;
      }
      case 1: {
        this.spacexApi.getLatestLaunch().subscribe(
          (data: Launch) => {
            this.launches.push(data);
          });
        break;
      }
      case 2: {
        this.spacexApi.getAllUpcomingLaunches().subscribe(
          (data: Launch[]) => {
            this.launches = data;
          });
        break;
      }
      case 3: {
        this.spacexApi.getAllPastLaunches().subscribe(
          (data: Launch[]) => {
            this.launches = data;
          });
        break;
      }
      case 4: {
        const options = <LaunchQueryOptions>{};
        this.spacexApi.getAllPastLaunches().subscribe(
          (data: Launch[]) => {
            this.launches = data;
          });
        break;
      }
    }
  }
}
