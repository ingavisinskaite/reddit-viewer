import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private _http: HttpClient) { }

  public getAllThemes(): Promise<any> {
    const url = 'https://www.reddit.com/reddits.json';
    return this._http.get<any>(url).toPromise();
  }

  public getTheme(theme: string, limit: number): Observable<any> {
    const url = 'https://www.reddit.com' + theme + '/.json?&show=all&limit=' + limit;
    return this._http.get<any>(url);
  }
}
