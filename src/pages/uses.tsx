import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject, FixedObject } from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

type KeyboardPictureData = {
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
  vscode: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  ogImage: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
};

const UsesPage = (): JSX.Element => {
  const { desk, vscode, keyboard, ogImage }: KeyboardPictureData =
    useStaticQuery(graphql`
      query keyboardQuery {
        keyboard: file(absolutePath: { regex: "/assets/keyboard/" }) {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desk: file(absolutePath: { regex: "/assets/desk.JPG/" }) {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        vscode: file(absolutePath: { regex: "/assets/vscode2/" }) {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        ogImage: file(
          absolutePath: { regex: "/assets/things-i-use-twitter-card/" }
        ) {
          childImageSharp {
            fixed(height: 630, width: 1200) {
              src
            }
          }
        }
      }
    `);

  return (
    <Layout>
      <SEO
        ogImageProp={ogImage.childImageSharp.fixed.src}
        title="Things I Use"
        keywords={[`setup`, `gear`, `mechanical keyboards`]}
      />
      <h2>Things I Use</h2>
      <p>
        I thought I{"'"}d write down a few trinkets and more useful tools I{"'"}
        m a fan of and use in my day-to-day. 🌻
      </p>
      <h3>🖥 Hardware and Desk 🖨</h3>
      <p>
        For personal and work machines, I use{' '}
        <b>late 2019 16{`"`} MacBook Pros</b> with 2.3GHz 8-core Intel Core i9
        processors and 1TB SSDs.
      </p>
      <p>
        <Img fluid={desk.childImageSharp.fluid} />
      </p>
      <p>
        I use a{' '}
        <a
          href="https://www.fully.com/standing-desks/jarvis.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jarvis
        </a>{' '}
        motorized sit/stand desk with{' '}
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
        </a>{' '}
        when sitting. I use this{' '}
        <a
          href="https://www.amazon.com/Updated-Version-Vertical-OMOTON-Adjustable/dp/B078W3QSZY"
          target="_blank"
          rel="noopener noreferrer"
        >
          OMOTON double laptop stand
        </a>{' '}
        and a{' '}
        <a
          href="https://www.amazon.com/gp/product/B07CZPV8DF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          CalDigit Thunderbolt 3 Dock
        </a>{' '}
        to connect all my peripherals (two monitors,{' '}
        <a
          href="https://www.amazon.com/gp/product/B07K95WFWM/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logitech C920S HD Pro Webcam
        </a>
        , keyboards, drawing machines, phones, etc.) to my MacBook with a single
        Thunderbolt cable. I use the{' '}
        <a
          href="https://www.amazon.com/gp/product/B071YZJ1G1/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logitech MX Master 2S Wireless Mouse
        </a>{' '}
        and don{"'"}t think I{"'"}ll ever use another mouse again.
      </p>
      <p>
        Finally, I use a{' '}
        <a
          href="https://www.amazon.com/gp/product/B00L5I8RII/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          US Art Supply green self-healing cutting mat
        </a>
        . It{`'`}s taken its fair share of scuffs with the soldering I do, and
        has kept the desk in reasonably good shape.
      </p>
      <p>
        <Img fluid={keyboard.childImageSharp.fluid} />
      </p>
      <p>
        What to write about this quirky little keyboard? I built it in{' '}
        <a
          href="https://twitter.com/alessbell/status/1122223104451928064"
          target="_blank"
          rel="noopener noreferrer"
        >
          April 2019
        </a>
        . It{"'"}s a <b>Levinson split ortholinear keyboard</b> with{' '}
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
        half doesn{"'"}t match the right (stainless vs. acrylic). This has only
        endeared it to me more. It{"'"}s a <i>lot</i> of fun to use.
      </p>
      <p>
        My lancscape monitor is an{' '}
        <a
          href="https://www.amazon.com/gp/product/B078GVTD9N/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          LG 27{`"`} 4K
        </a>{' '}
        and the other is a{' '}
        <a
          href="https://www.amazon.com/gp/product/B00PC9HFNY/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dell 24{`"`} Ultra HD 4K
        </a>
        . They{"'"}re rigged to the desk with an{' '}
        <a
          href="https://www.amazon.com/gp/product/B00MIBN71I/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon dual monitor stand
        </a>{' '}
        and both have{' '}
        <a
          href="https://www.amazon.com/gp/product/B01LR3O8SI/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          bias lighting strips
        </a>{' '}
        on the back.
      </p>
      <h3>💾 Software 🌸</h3>
      <p>
        I spend most of my (computer-)days in a few apps, both native Mac + web:
      </p>
      <ul>
        <li>
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft{`'`}s Visual Studio Code
          </a>
          : I use dark theme{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=cev.overnight"
            target="_blank"
            rel="noopener noreferrer"
          >
            Overnight
          </a>{' '}
          combined with{' '}
          <a
            href="https://gumroad.com/l/dank-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dank Mono
          </a>
          . My editor settings are in this{' '}
          <a
            href="https://gist.github.com/alessbell/448846c679de7134cf0b67e28e553e25#file-settings-json"
            target="_blank"
            rel="noopener noreferrer"
          >
            public gist
          </a>
          .
          <Img
            style={{ marginTop: '1rem' }}
            fluid={vscode.childImageSharp.fluid}
          />
        </li>
        <li>
          <a
            href="https://www.iterm2.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iTerm 2
          </a>{' '}
          +{' '}
          <a
            href="https://fishshell.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            fish shell
          </a>{' '}
          💗🐟
        </li>
        <li>
          <a
            href="https://www.mozilla.org/en-US/firefox/channel/desktop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firefox Nightly 🦊
          </a>
        </li>
        <li>
          <a
            href="https://www.fastmail.com/signup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fastmail 💌
          </a>
        </li>
        <li>
          <a href="https://insomnia.rest/">Insomnia</a>, a REST client for MacOS
        </li>
        <li>
          <a
            href="https://kapeli.com/dash"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dash
          </a>
          , a Mac app that gives you offline access to 200+ API documentation
          sets
        </li>
      </ul>
    </Layout>
  );
};

export default UsesPage;
