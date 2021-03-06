import Helmet from 'react-helmet';
import React from 'react';
import createUrl from '../../utils/createUrl';
import {defaultDescription} from 'config';

const defaultImage = createUrl('/favicon.png');

type Props = {
  title: string,
  description: string,
  image: string,
  url: string,
};

const Title = ({title, description, image, url}: Props) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="description" content={description || defaultDescription} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <meta property="og:image" content={image || defaultImage} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default Title;
