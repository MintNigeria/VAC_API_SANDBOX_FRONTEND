import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseURI } from '../shared/baseURI.shared';

@Injectable({
  providedIn: 'root',
})
export class TestEnvironmentService extends BaseURI {
  constructor(private http: HttpClient) {
    super();
  }

  getEncryptionKeysWithInstitutionId(institutionId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}InstitutionEncryption/GetEncryptionKeysWithInstitutionId/${institutionId}`
    );
  }

  createOrUpdateInstitutionEncryptionKeys(
    institutionId: string | number,
    payload: any
  ) : Observable<any>{
    return this.http.post<any>(
      `${this.baseUrl}InstitutionEncryption/CreateOrUpdateInstitutionEncryptionKeys`,
      payload
    );
  }

  getApiDataByInstitutionId(institutionId: string | number) {
    this.http.get<any>(
      `${this.baseUrl}InstitutionEncryption/GetApiDataByInstitutionId/${institutionId}`
    );
  }

  createOrUpdateInstitutionEndpoints(
    institutionId: string | number,
    payload: any
  ) {
    this.http.post<any>(
      `${this.baseUrl}InstitutionEncryption/CreateOrUpdateInstitutionEndpoints/${institutionId}`,
      payload
    );
  }
}
