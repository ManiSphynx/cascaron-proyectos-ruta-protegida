import { basicInformation } from './basic-information';
import { schemas } from './schema-definition';
import { servers } from './servers';
import { tags } from './tags';
import { apis } from './docs';

export const docs = {
  ...basicInformation,
  ...servers,
  ...tags,
  ...schemas,
  ...apis,
};
