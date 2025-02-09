import Helmet from 'react-helmet';
import React from 'react';
import createUrl from '../../utils/createUrl';
import {defaultDescription} from 'config';

const defaultFavicon = '/favicon.png';

type Props = {
  title: string,
  description: string,
  image: string,
  url: string,
  redirect_to?: string,
  favicon?: string,
};

const Title = ({
  title,
  description,
  image,
  url,
  redirect_to,
  favicon,
}: Props) => {
  const defaultImage = createUrl(favicon || defaultFavicon);
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="description" content={description || defaultDescription} />
      <link
        rel="shortcut icon"
        type="image/png"
        href={favicon || defaultFavicon}
      />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      {redirect_to && (
        <meta http-equiv="refresh" content={'0; url=' + redirect_to} />
      )}
    </Helmet>
  );
};

export default Title;
