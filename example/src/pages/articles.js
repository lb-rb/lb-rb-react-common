import React, {Component, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import DefaultLayout from 'components/layouts/DefaultLayout';
import Title from 'components/Title';
import createUrl from 'utils/createUrl';
import navigation from '../../data/navigation/primary.yml';

import Flex from 'components/Flex';
import CTAButton from 'components/buttons/CTAButton';
import {media} from 'utils/media';

import Image from 'components/Image';

import {linksShape, sectionItemsType} from 'components/navigation/Primary';

type Props = {};

const CardTitle = styled(Card.Title)`
  text-decoration: none;
  color: black;
`;

type CardProps = {
  children: Function,
  title: String,
  subtitle: String,
  date: String,
  author: String,
  image_author: String,
  src: String,
  to: String,
};

const TitleRow = styled(Row)`
  text-align: center;
  margin: auto;
`;

const ArticleDeck = styled(CardDeck)`
  min-width: 300px;
  max-width: 40vw;
  margin: auto;
`;

const StyledCard = styled(Card)`
  min-width: 300px;
  max-width: 100vw;
  margin-top: 1em;
`;

const Subtitle = styled.h3`
  font-size: x-large;
  font-weight: light;
  color: black;
`;

const Author = styled.h4`
  font-size: small;
  font-weight: bold;
  padding-bottom: 1em;
`;

const ImageAuthor = styled.span`
  font-size: small;
  color: black;
`;

const formatDate = date_string => {
  const date = new Date(date_string);
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return (
    date.toLocaleDateString('de-DE', options) +
    ' ' +
    date.toLocaleTimeString('de-DE', {hour: '2-digit', minute: '2-digit'}) +
    ' Uhr'
  );
};

class ArticleCard extends Component<CardProps> {
  render() {
    const {
      children,
      title,
      subtitle,
      author,
      date,
      image_author,
      src,
      to,
    } = this.props;

    return (
      <a href={to} className="w-100">
        <StyledCard>
          <Card.Img variant="top" as={Image} src={src} />
          <ImageAuthor>© Image: {image_author}</ImageAuthor>
          <Card.Body>
            <CardTitle>
              <h2>{title}</h2>
            </CardTitle>
            <Subtitle>{subtitle}</Subtitle>
          </Card.Body>
          <Card.Footer>
            <Flex
              align="center"
              verticalAlign="center"
              css={{
                paddingTop: 40,
                paddingBottom: 20,
                flexWrap: 'wrap',
                justifyContent: 'center',

                [media.greaterThan('xlarge')]: {
                  paddingTop: 65,
                },
              }}>
              <CTAButton to={to} type="cta">
                Read
              </CTAButton>
            </Flex>
          </Card.Footer>
        </StyledCard>
      </a>
    );
  }
}

class ArticleSection extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      items: sectionItemsType.isRequired,
    };
  }

  render() {
    return Object.entries(this.props.items).map(([key, item]) => {
      var today = new Date();
      var date = new Date(item.date);
      if (date.valueOf() >= today.valueOf()) return;
      return (
        <ArticleCard
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          author={item.article_author}
          image_author={item.image_author}
          src={item.image}
          to={item.to}></ArticleCard>
      );
    });
  }
}

class ArticleCards extends React.Component {
  static get propTypes() {
    return {
      navigation: linksShape.isRequired,
    };
  }
  render() {
    return Object.entries(this.props.navigation.links.articles.sections).map(
      ([key, section]) => {
        return (
          <p>
            <TitleRow>
              <Col>
                <h2>{section.title}</h2>
                <ArticleDeck>
                  <ArticleSection
                    key={key}
                    title={section.title}
                    items={section.items}
                  />
                </ArticleDeck>
              </Col>
            </TitleRow>
          </p>
        );
      },
    );
  }
}

class Articles extends Component<Props> {
  render() {
    return (
      <DefaultLayout navigation={navigation}>
        <Title title="Articles" url={createUrl('/articles')} />
        <TitleRow>
          <Col>
            <h1>Articles</h1>
          </Col>
        </TitleRow>
        <Row>
          <Col>
            <ArticleCards navigation={navigation} />
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default Articles;
