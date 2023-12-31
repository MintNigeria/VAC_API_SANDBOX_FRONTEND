import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseURI } from '../shared/baseURI.shared';

abstract class AbstractInstitutionService {
  abstract getAllInstitutions(
    institutionStatus: number,
    instituionTypeId: string,
    instituionSectorId: '',
    keyword: string,
    filter: string,
    pageIndex: number,
    pageSize: number,
    range?: string,
    fromDate?: string,
    toDate?: string
  ): Observable<any>;

  abstract getSingleInstitution(id: string): Observable<any>;
}

@Injectable({
  providedIn: 'root',
})
export class InstitutionService
  extends BaseURI
  implements AbstractInstitutionService
{
  createDegreeTypeInInstitution(payload: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {
    super();
  }

  RegisterInstitution(payload: any) {
    const {approvalFile} = payload
    const body = new FormData()
    body.append('InstitutionTypeId', payload.institutionTypeId)
    body.append('InstitutionSectorId', payload.institutionSectorId)
    body.append('RegisteringBody', payload.RegisteringBody)
    body.append('InstitutionBodyId', payload.institutionBodyId)
    body.append('InstitutionName', payload.InstitutionName)
    body.append('DateOfIncorporation', payload.DateOfIncorporation)
    body.append('RegistrationNumber', payload.RegistrationNumber)
    body.append('LgaId', payload.LgaId)
    body.append('StateId', payload.StateId)
    body.append('Street', payload.Street)
    body.append('PhoneNumber', payload.PhoneNumber)
    body.append('EmailAddress', payload.EmailAddress)
    body.append('ApproverVM.Title', payload.Title)
    body.append('ApproverVM.FirstName', payload.FirstName)
    body.append('ApproverVM.LastName', payload.LastName)
    body.append('ApproverVM.Designation', payload.Designation)
    // body.append('Documents[' + i + ']', approvalFile[i]);
    for (let i = 0; i < approvalFile?.length; i++) {
      body.append('DocumentVM[' + i + '].FileNo', '');
      body.append('DocumentVM[' + i + '].File', approvalFile[i]);
    }
    return this.http.post<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/RegisterInstitution`, body
    );
  }

  getAllInstitutionsDropdown(params?: any) {
    return this.http.get<any>(
      `${this.baseUrl2}mint-higherinstitution/api/v1/Institution/DropDown`, {params}
    );
  }

  encryptData(params: any, payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/EncryptData?ivkey=${params.ivKey}&secret=${params.secretKey}`, payload
    );
  }
  decryptData(params: any, payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/DecryptData?ivkey=${params.ivKey}&secret=${params.secretKey}&data=${params.data}`, {}
    );
  }
  callInstitutionRecordAPI(params: any, payload: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/CallInstitutionRecordApi?InstitutionId=${params.InstitutionId}`, payload
    );
  }
  callInstitutionConfigurationAPI(InstitutionId: any): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/CallInstitutionConfigurationApi?InstitutionId=${InstitutionId}`
    );
  }
  getEncryptionKeysWithInstitutionId(institutionId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/GetEncryptionKeysWithInstitutionId/${institutionId}`
    );
  }

  createOrUpdateInstitutionEncryptionKeys(
    institutionId: number,
    payload: any
  ) : Observable<any>{
    return this.http.post<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/CreateOrUpdateInstitutionEncryptionKeys?InstitutionId=${institutionId}`,
      payload
    );
  }

  getAPIDataByInstitutionId(institutionId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/GetApiDataByInstitutionId/${institutionId}`
    );
  }

  CreateOrUpdateInstitutionEndpoints(
    id:any,
    payload: any
  ) : Observable<any>{
    return this.http.post<any>(
      `${this.baseUrl}api/v1/InstitutionEncryption/CreateOrUpdateInstitutionEndpoints?InstitutionId=${id}`,
      payload
    );
  }



  getAllInstitutionsRecordsAllNames() {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/AllInstitutionRecordsByName`
    );
  }

 

  createGrade(payload: any) {
    return this.http.post<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Grades/CreateGrade`, payload
    );
  }

  updateGrades(payload: any) {
    return this.http.put<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Grades/UpdateGrade`, payload
    );
  }

 

  getAllInstitutionRecords(payload: any) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/GetAllInstitutionRecords`, {params: payload}
    );
  }

  getAllInstitutions(
    institutionStatus: number,
    instituionTypeId: string,
    instituionSectorId: string,
    keyword: string,
    filter: string,
    pageIndex: number,
    pageSize: number,
    range?: string,
    fromDate?: string,
    toDate?: string
  ) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/AllInstitutions?Keyword=${keyword}&Filter=${filter}&PageIndex=${pageIndex}&PageSize=${pageSize}&InstitutionStatus=${institutionStatus}&instituionSectorId=${instituionSectorId}&TimeBoundSearchVm.TimeRange=${range}&TimeBoundSearchVm.FromDate=${fromDate}&TimeBoundSearchVm.ToDate=${toDate}`
    );
  }

  getAllInstitutionUsers(payload: any) {
    return this.http.get<any>(
      `${this.baseUrl}mint-auth/api/v1/InstitutionUser/InstitutionUsersAndRoles`, {params: payload}
    );
  }
  getInstitutionUserInfo(userId: any) {
    return this.http.get<any>(
      `${this.baseUrl}mint-auth/api/v1/InstitutionUser/InstitutionUser/${userId}`
    );
  }

  getAllAdminInstitutionTransaction(
    institutionId: string,
    keyword: string,
    filter: string,
    status: string,
    requestor: string,
    fromDate: string,
    toDate: string,
    pageIndex: number,
    pageSize: number
  ) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Transaction/Admin-Transactions-Of-An-Institution?InstitutionId=${institutionId}&Keyword=${keyword}&Filter=${filter}&Status=${status}&Requestor=${requestor}&TimeBoundSearchVm.FromDate=${fromDate}&TimeBoundSearchVm.ToDate=${toDate}&PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

  getSingleInstitution(id: string) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/GetInstitution/${id}`
    );
  }

  getALlFacultiesInInstitution(id: string) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/GetAllFacultiesInAnInstitution?InstitutionId=${id}`
    );
  }
  createFaculty(payload: any) {
    return this.http.post<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/CreateFaculty`, payload
    );
  }
  updateFaculty(payload: any) {
    return this.http.put<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/UpdateFaculty`, payload
    );
  }

  getALlDepartmentInInstitution(id: string) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/GetAllDepartmeentsInAnInstitution?InstitutionId=${id}`
    );
  }

  createDepartment(payload: any) {
    return this.http.post<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/CreateDepartment`, payload
    );
  }

  updateDepartment(payload: any) {
    return this.http.put<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Institution/UpdateDepartment`, payload
    );
  }

  getInstitutionConfiguration(id: any) {
    ////console.log(id)
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/InstitutionConfiguration/InstitutionDocumentType/${id}`
    );
  }

  approveRejectInstitution(payload: any) {
    return this.http.post<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/InstitutionApproval/Approval-Action`, payload
    );
  }

  getDegreeTypeWithInstitutionName(institutionName: any) {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/DegreeType/GetAllDegreeTypesByInstitutionName/${institutionName}`
    );
  }

  getInstitutionTransactionTypeFilter() {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/Transaction/TransactionType-Filter-For-Institutions`
    );
  }

  getAllGradesConfig() {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/GradesConfiguration/GetAllIGradesConfigurations`
    );
  }

  getAllDegreeConfig() {
    return this.http.get<any>(
      `${this.baseUrl}mint-higherinstitution/api/v1/DegreeConfiguration/All-Degree-Configuration`
    );
  }

}
