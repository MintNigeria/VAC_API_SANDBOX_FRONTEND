export interface ISetupEncryptionAndDecryption {
  id: string;
  institutionId: string;
  institutionName: string;
  ivKey: string;
  secretKey: string;
}

export interface IPartnerAPI {
  id: number;
  recordQueryEndpoint: string;
  configurationEndpoint: string;
}

export interface ISecurityStateInterface {
  setupEncryptionAndDecryption: ISetupEncryptionAndDecryption | null;
  partnerAPI: IPartnerAPI | null;
}
