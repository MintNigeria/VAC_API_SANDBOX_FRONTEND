import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BaseURI {
  public baseUrl: string = environment.apiBaseURI;
  public baseUrl2: string = environment.apiBaseURI2;
}
