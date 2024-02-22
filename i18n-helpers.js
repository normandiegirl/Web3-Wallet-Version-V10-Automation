import { getMessage } from '../../ui/helpers/utils/i18n-helper';
import * as en from '../../app/_locales/en/messages.json';

export function tEn(keys) {
  return getMessage('en', en, key);
}
