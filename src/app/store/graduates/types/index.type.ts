export interface IGraduateDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userType: number;
    address: string;
    gender: number;
    stateId: number;
    state: string;
    lgaId: number;
    lga: string;
    profileImagePath: string;
    genderString: string;
    dateOfBirth: string;
    is2FAEnabled: boolean;
    imei?: any;
    serialNumber?: any;
    device?: any;
    ipAddress?: any;
}

export interface CreateAuditVM {
  imei: string;
  serialNumber: string;
  device: string;
  ipAddress: string;
}
export interface IGraduateApproveReject {
  approvalRequestId: number;
  stage: string;
  comment: string;
  createAuditVM: CreateAuditVM;
}

export interface GraduatesStateInterface {
    gradautes: { data: Array<any>; totalCount: number };
  
  }