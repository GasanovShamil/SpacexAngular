import { Component, OnInit } from '@angular/core';
import {LaunchQueryOptions, Order} from '../../models/LaunchQueryOptions';
import {MatTabChangeEvent} from '@angular/material';
import {SpacexApiService} from '../../services/spacex-api.service';
import {Launch} from '../../models/Launch';
import {Option} from '../../models/Option';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: Launch[];
  selectedValue: Option[];
  queryOptions = {};


  options = [
    {value: {label: 'id', type: 'boolean'}},
    {value: {label: 'flight_id', type: 'number'}},
    {value: {label: 'order', type: 'Order'}},
    {value: {label: 'start', type: 'Date'}},
    {value: {label: 'final', type: 'Date'}},
    {value: {label: 'flight_number', type: 'number'}},
    {value: {label: 'launch_year', type: 'string'}},
    {value: {label: 'launch_date_utc', type: 'Date'}},
    {value: {label: 'launch_date_local', type: 'Date'}},
    {value: {label: 'rocket_id', type: 'string'}},
    {value: {label: 'rocket_name', type: 'string'}},
    {value: {label: 'rocket_type', type: 'string'}},
    {value: {label: 'core_serial', type: 'string'}},
    {value: {label: 'cap_serial', type: 'string'}},
    {value: {label: 'core_flight', type: 'number'}},
    {value: {label: 'block', type: 'number'}},
    {value: {label: 'core_reuse', type: 'boolean'}},
    {value: {label: 'side_core1_reuse', type: 'boolean'}},
    {value: {label: 'side_core2_reuse', type: 'boolean'}},
    {value: {label: 'fairings_reuse', type: 'boolean'}},
    {value: {label: 'capsule_reuse', type: 'boolean'}},
    {value: {label: 'site_id', type: 'string'}},
    {value: {label: 'site_name', type: 'string'}},
    {value: {label: 'site_name_long', type: 'string'}},
    {value: {label: 'payload_id', type: 'string'}},
    {value: {label: 'customer', type: 'string'}},
    {value: {label: 'payload_type', type: 'string'}},
    {value: {label: 'orbit', type: 'string'}},
    {value: {label: 'launch_success', type: 'boolean'}},
    {value: {label: 'reused', type: 'boolean'}},
    {value: {label: 'land_success', type: 'boolean'}},
    {value: {label: 'landing_type', type: 'string'}},
    {value: {label: 'landing_vehicle', type: 'string'}},
  ];


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
        // const options = <LaunchQueryOptions>{};
        // options.rocket_id = 'falcon9';
        // this.spacexApi.getFilteredLaunches(this.queryOptions).subscribe(
        //   (data: Launch[]) => {
        //     this.launches = data;
        //   });
        // break;
      }
    }
  }

  doFilteredSearch(){
    this.spacexApi.getFilteredLaunches(this.queryOptions).subscribe(
      (data: Launch[]) => {
        this.launches = data;
      });
  }
}
