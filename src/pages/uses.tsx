import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

interface KeyboardPictureData {
  keyboard: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  desk: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const NotFoundPage: React.FC = () => {
  const data: KeyboardPictureData = useStaticQuery(graphql`
    query keyboardQuery {
      keyboard: file(absolutePath: { regex: "/assets/keyboard/" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desk: file(absolutePath: { regex: "/assets/desk/" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="My Setup"
        keywords={[`setup`, `gear`, `mechanical keyboards`]}
      />
      <h2>Stuff</h2>
      <p>
        I thought I'd write down a few trinkets and more useful tools I'm a fan
        of and use in my day-to-day.
      </p>
      <h3>Hardware and Desk</h3>
      <p>
        At work I use a <b>late 2016 15" MacBook Pro</b> with Intel Core i7
        processor and a 250GB SSD running Catalina. The keyboard went pretty
        quickly, so I usually travel with one of my compact ortholinear boards.
      </p>
      <p>
        For my personal machine, I'm using a 2018 Pixelbook running Crostini on
        the beta channel which allows me to install Linux apps. To be honest,
        it's been pretty underwhelming and often downright painful: running a
        beta OS is not for the faint of heart. I'll probably swap this for a
        ThinkPad running Linux soon.
      </p>
      <p>
        <Img fluid={data.desk.childImageSharp.fluid} />
      </p>
      <p>
        What to write about this quirky little keyboard? I built it (them?) in{' '}
        <a
          href="https://twitter.com/alessbell/status/1122223104451928064"
          target="_blank"
          rel="noopener noreferrer"
        >
          April 2019
        </a>
        . It's a <b>Levinson split ortholinear keyboard</b> with{' '}
        <a
          href="https://input.club/the-comparative-guide-to-mechanical-switches/tactile/halo-true/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Halo True
        </a>{' '}
        switches and{' '}
        <a
          href="https://drop.com/buy/82783"
          target="_blank"
          rel="noopener noreferrer"
        >
          WinMix Retro Beige DSA keycaps
        </a>
        . I bought most of the parts on{' '}
        <a
          href="https://keeb.io/products/levinson-lets-split-w-led-backlight"
          target="_blank"
          rel="noopener noreferrer"
        >
          keeb.io
        </a>
        ; while building it, I made a mistake early on so the plate on the left
        half doesn't match the right (stainless vs. acrylic). This has only
        endeared it to me more. It's a <i>lot</i> of fun to use.
      </p>
      <p>
        <Img fluid={data.keyboard.childImageSharp.fluid} />
      </p>

      <p>
        I use a Jarvis motorized sit/stand desk with{' '}
        <a
          href="https://www.amazon.com/gp/product/B00V3TO9EK/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Topo foam mat
        </a>{' '}
        when standing and a{' '}
        <a
          href="https://drop.com/buy/56882"
          target="_blank"
          rel="noopener noreferrer"
        >
          Massdrop Flex Task Chair
        </a>
        . I have a Sonos speaker, this{' '}
        <a
          href="https://www.amazon.com/Updated-Version-Vertical-OMOTON-Adjustable/dp/B078W3QSZY"
          target="_blank"
          rel="noopener noreferrer"
        >
          OMOTON double laptop stand
        </a>{' '}
        and this <a>CalDigit Thunderbolt 3 Dock</a> to connect all my
        peripherals (two monitors,{' '}
        <a
          href="https://www.amazon.com/gp/product/B07K95WFWM/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          webcam
        </a>
        , keyboards, drawing machines, phones, etc.) to my MacBook with a single
        Thunderbolt cable (unfortunately it doesn't work with the Pixelbook
        because Thunderbolt... boo).
      </p>
      <p>
        For monitors, I use an{' '}
        <a
          href="https://www.amazon.com/gp/product/B078GVTD9N/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          LG 27" 4K
        </a>{' '}
        monitor and a{' '}
        <a
          href="https://www.amazon.com/gp/product/B00PC9HFNY/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dell 24" Ultra HD 4K
        </a>
        . They're rigged to the desk with a{' '}
        <a
          href="https://www.amazon.com/gp/product/B00MIBN71I/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          dual monitor stand
        </a>{' '}
        and both have{' '}
        <a
          href="https://www.amazon.com/gp/product/B01LR3O8SI/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          bias lighting strips
        </a>{' '}
        on the back, which I swear by.
      </p>
      <h3>Software</h3>
      {/* <ul>
        <li>Hardware and desk</li>
        <ul>
          <li>
            <a href="#macbook">MacBook Pro</a>
          </li>
          <li>Pixelbook</li>
          <li>Monitors</li>
          <li>Sonos</li>
          <li>Jarvis Motorized standing desk (and matt)</li>
          <li>Custom keyboard</li>
          drawing bachinesd
        </ul>
        <li>Software</li>
        <ul>
          <li>VSCode</li>
          <li>iTerm</li>
          <li>Operator Mono</li>
          <li>Theme</li>
          <li>Zsh</li>
          <li>Alfred</li>
        </ul>
        <li>Personal Gear and Stuff</li>
        <ul>
          <li>Camera</li>
          <li>bag</li>
        </ul>
      </ul>
      <hr />
      <h3 id="macbook">MacBook Pro</h3> */}
    </Layout>
  );
};

export default NotFoundPage;
