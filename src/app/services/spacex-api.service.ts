import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {CompanyInfo} from '../models/CompanyInfo';
import {Launch} from '../models/Launch';
import {LaunchQueryOptions} from '../models/LaunchQueryOptions';
import {Rocket} from '../models/Rocket';

const BASE_URL = 'https://api.spacexdata.com/v2/';

@Injectable()
export class SpacexApiService {


  constructor(private http: HttpClient) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    const requestEndpoint = BASE_URL + 'info';
    return this.http.get<CompanyInfo>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getLatestLaunch(): Observable<Launch> {
    const requestEndpoint = BASE_URL + 'launches/latest';
    return this.http.get<Launch>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getAllPastLaunches(): Observable<Launch[]> {
    const requestEndpoint = BASE_URL + 'launches';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getAllUpcomingLaunches(): Observable<Launch[]> {
    const requestEndpoint = BASE_URL + 'launches/upcoming';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getAllLaunches(): Observable<Launch[]> {
    const requestEndpoint = BASE_URL + 'launches/all?order=asc';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getRocketData(rocket_id: string): Observable<Rocket> {
    const requestEndpoint = BASE_URL + 'rockets/' + rocket_id;
    return this.http.get<Rocket>(requestEndpoint).pipe(
      catchError(this.handleError)
    );
  }

  getFilteredLaunches(options: LaunchQueryOptions): Observable<Launch[]> {
    const requestEndpoint = BASE_URL + 'launches';
    let httpParams = new HttpParams();
    Object.keys(options).forEach(function (key) {
      httpParams = httpParams.append(key.toString(), options[key]);
    });
    const queryParams = { params: httpParams };
    return this.http.get<Launch[]>(requestEndpoint, queryParams).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');

  }
}
