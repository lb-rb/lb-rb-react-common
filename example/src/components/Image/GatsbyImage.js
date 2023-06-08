import {StaticQuery, graphql} from 'gatsby';
import {GatsbyImage as Img} from 'gatsby-plugin-image';
import React from 'react';

function GatsbyImage(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: {
              extension: {regex: "/(jpg)|(jpeg)|(png)/"}
              sourceInstanceName: {eq: "images"}
            }
          ) {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 1920
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find((n) => {
          return n.node.relativePath.includes(
            props.src.replace(/^\/assets\//g, ''),
          );
        });
        if (!image) {
          return null;
        }

        const imageData = image.node.childImageSharp.gatsbyImageData;
        return (
          <Img className={props.className} alt={props.alt} image={imageData} />
        );
      }}
    />
  );
}

export default GatsbyImage;
