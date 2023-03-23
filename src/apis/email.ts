import { functions, httpsCallable } from './firebase';
import { type AcknowledgeResponse } from '../types/api';

export interface EmailData {
  name: string
  email: string
  countryCode: string
  countryName: string
  phone: string
  note: string
  emailTo: string
}

export const sendEmail = httpsCallable<EmailData, AcknowledgeResponse>(functions, 'sendEmail');
