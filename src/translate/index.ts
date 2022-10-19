import { Locale } from 'antd/lib/locale-provider';

import vi_VN from 'antd/lib/locale-provider/vi_VN';
import en_US from 'antd/lib/locale-provider/en_US';

import localeEn from './langs/en.json';
import localeVi from './langs/vi.json';

export const languagesAntd: Record<string, Locale> = {
  en: en_US,
  vi: vi_VN
};

export const languages = {
  en: localeEn,
  vi: localeVi
};
