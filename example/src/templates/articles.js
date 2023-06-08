import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link} from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import styled from '@emotion/styled';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Title from 'components/Title';
import createUrl from 'utils/createUrl';
import navigation from '../../data/navigation/primary.yml';

import Image from 'components/Image';

const TitleRow = styled(Row)`
  min-width: 300px;
  max-width: 40vw;
  margin: auto;
`;

const ContentRow = styled(Row)`
  max-width: 60rem;
  margin: auto;
`;

const CardTitle = styled(Card.Title)`
  font-variant: all-small-caps;
`;

const ArticleDeck = styled(CardDeck)`
  max-width: 1500px;
  margin: auto;
`;
const StyledCard = styled(Card)`
  margin-top: 1rem;
  margin: auto;
  max-width: 60rem;
  margin-right: 1em;
  margin-bottom: 1em;
`;

const ArticleTitle = styled.h1`
  font-size: 3.5vmax;
  & > a {
    color: #ff2626;
  }

  & > a:hover {
    color: #ff2626;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5vmax;
  & > a {
  font-weight: bold;
`;

const Author = styled.h3`
  font-size: small;
  font-weight: bold;
  padding-bottom: 1em;
`;

const ImageAuthor = styled.span`
  font-size: small;
`;

const Uppercase = styled.span`
  text-transform: uppercase;
`;

const SmallCaps = styled.span`
  font-variant: all-small-caps;
`;

const formatDate = (date_string) => {
  const date = new Date(
    /^\d+$/.test(date_string) ? parseInt(date_string) : date_string,
  );
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return (
    date.toLocaleDateString('de-DE', options) +
    ' ' +
    date.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}) +
    ' Uhr'
  );
};

const shortcodes = {
  Image,
  Card,
  CardDeck,
  StyledCard,
  CardTitle,
  ImageAuthor,
  Author,
  Uppercase,
  SmallCaps,
};

const Articles = ({data, children}) => (
  <DefaultLayout navigation={navigation}>
    <Title
      title={
        data.mdx.frontmatter.title +
        ' - ' +
        data.mdx.frontmatter.section +
        ' - Articles'
      }
      description={data.mdx.frontmatter.subtitle}
      image={createUrl(data.mdx.frontmatter.image)}
      url={createUrl('/' + data.mdx.fields.slug)}
      redirect_to={data.mdx.frontmatter.redirect_to}
    />
    <TitleRow>
      <Col>
        <Link to="/articles">Articles</Link>{' '}
        {'> ' + data.mdx.frontmatter.section}
        <ArticleTitle>
          <Link to={'/' + data.mdx.fields.slug}>
            {data.mdx.frontmatter.title}
          </Link>
        </ArticleTitle>
        <Subtitle>{data.mdx.frontmatter.subtitle}</Subtitle>
        <Author>
          {data.mdx.frontmatter.article_author},{' '}
          {formatDate(data.mdx.frontmatter.date)}
        </Author>
      </Col>
    </TitleRow>
    <ContentRow>
      <Col>
        <StyledCard>
          <Card.Body>
            <CardTitle>{data.mdx.frontmatter.image_title}</CardTitle>
          </Card.Body>
          <Card.Img variant="top" as={Image} src={data.mdx.frontmatter.image} />
          <Card.Footer>
            <CardTitle>{data.mdx.frontmatter.image_subtitle}</CardTitle>
            <ImageAuthor>
              © Image: {data.mdx.frontmatter.image_author}
            </ImageAuthor>
          </Card.Footer>
        </StyledCard>
        <div className="article">
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </Col>
    </ContentRow>
  </DefaultLayout>
);

Articles.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query getArticleMarkdown($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        title
        subtitle
        section
        date
        article_author
        image
        image_title
        image_subtitle
        image_author
        redirect_to
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default Articles;
