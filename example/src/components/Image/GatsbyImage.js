import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
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
                  sizes(maxWidth: 1920) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(
            props.src.replace(/^\/assets\//g, ''),
          );
        });
        if (!image) {
          return null;
        }

        const imageSizes = image.node.childImageSharp.sizes;
        return (
          <Img className={props.className} alt={props.alt} sizes={imageSizes} />
        );
      }}
    />
  );
}

export default GatsbyImage;
