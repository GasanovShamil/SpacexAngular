import {Component, Input, OnInit} from '@angular/core';
import {SpacexApiService} from '../../services/spacex-api.service';
import {MatBottomSheet, MatBottomSheetRef, MatTabChangeEvent} from '@angular/material';
import {Launch} from '../../models/Launch';
import {LaunchQueryOptions} from '../../models/LaunchQueryOptions';
import {BottomsheetComponent} from '../bottomsheet/bottomsheet.component';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {Data} from '../../services/Data';
import {Rocket} from '../../models/Rocket';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  launch: Launch;
  rocket: Rocket;

  constructor(private bottomSheet: MatBottomSheet, private data: Data, private spacexApi: SpacexApiService) {
    this.launch = data.storage;
  }
  openBottomSheet(): void {
    this.bottomSheet.open(BottomsheetComponent, {
      data: { video: this.launch.links.video_link },
    });
  }


  ngOnInit() {
    this.spacexApi.getRocketData(this.launch.rocket.rocket_id).subscribe(
      (data: Rocket) => {
        this.rocket = data;
      });

  }
}

