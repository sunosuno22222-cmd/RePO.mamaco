/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RobloxScript {
  id: string;
  title: string;
  gameName: string;
  description: string;
  code: string;
  hasKey: boolean;
  keyLink?: string;
  status: 'Working' | 'Patched' | 'Updating';
  categories: string[];
  views: number;
  copies: number;
  imageUrl: string;
  features: string[];
  updatedDate: string;
  author: string;
}

export interface Executor {
  id: string;
  name: string;
  platform: 'Android' | 'iOS' | 'PC' | 'Android/iOS' | 'Multiplatform';
  isFree: boolean;
  hasKey: boolean;
  status: 'Working' | 'Patched' | 'Updating';
  rating: number;
  version: string;
  downloadUrl: string;
  imageUrl: string;
  features: string[];
  size: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  discordUsername?: string;
  subject: string;
  message: string;
}
