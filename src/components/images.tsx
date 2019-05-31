import * as React from 'react';
import Img, { FluidObject, GatsbyImageProps } from 'gatsby-image';

interface FluidQuery {
  __typename: 'ImageSharpFluid';
  tracedSVG: string | null;
  aspectRatio: number | null;
  src: string | null;
  srcSet: string | null;
  sizes: string | null;
}

interface BaseProps {
  align: 'left' | 'right' | 'center';
  width?: string;
}

interface MDXSharpImgProps extends BaseProps, GatsbyImageProps {}

export const safeFluid = (f: FluidQuery | FluidObject | null): FluidObject => {
  return {
    aspectRatio: f ? f.aspectRatio || 1 : 1,
    sizes: f ? f.sizes || '' : '',
    src: f ? f.src || '' : '',
    srcSet: f ? f.srcSet || '' : '',
    tracedSVG: f ? f.tracedSVG || '' : '',
  };
};

export const MDXSharpImg = ({ width, fluid }: MDXSharpImgProps) => {
  return (
    <span style={{ width: width || '40%' }}>
      <Img fluid={fluid} />
    </span>
  );
};

interface MDXSrcImgProps extends BaseProps {
  src: string;
}

export const MDXSrcImg = ({ src, width }: MDXSrcImgProps) => {
  return <img style={{ width: width || '40%' }} src={src} />;
};
