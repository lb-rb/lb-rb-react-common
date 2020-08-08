import {rootUrl} from 'config';

export default (slug: string): string | null =>
  slug == null ? null : `${rootUrl}/${slug.replace(/^\//, '')}`;
