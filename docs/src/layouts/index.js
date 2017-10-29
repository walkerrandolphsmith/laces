import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header className="navigation">
      <h1>
          <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 511.996 511.996"
              width="25px"
              height="25px"
          >
            <g>
                <path
                    d="M486.467,0.032h-0.119h-0.009c-0.026,0-0.051,0-0.077,0h-0.008h-0.017c-0.538,0-1.067,0.017-1.596,0.051    c-7.858,0.461-123.504,7.833-187.256,46.91c-13.754,8.43-18.088,24.547-20.921,52.294c-9.129-9.189-20.187-15.844-33.984-15.844    c-9.283,0-18.37,3.285-26.296,9.496c-23.745,18.617-103.939,85.638-138.887,166.497c-42.968,99.409-35.886,172.555-35.562,175.618    c0.085,0.802,0.444,1.51,0.606,2.287c-24.018,30.733-38.608,52.362-40.187,54.726c-3.925,5.87-2.338,13.822,3.549,17.747    c2.184,1.45,4.65,2.15,7.09,2.15c4.138,0,8.199-1.997,10.665-5.7c0.367-0.546,13.788-20.418,36.415-49.495    c0.29,0.085,0.529,0.282,0.819,0.358c1.928,0.512,12.448,3.037,30.358,3.037c49.76,0,152.991-19.3,285.206-148.537    C493.924,196.605,510.025,49.698,511.723,29.391c0.179-1.229,0.273-2.483,0.273-3.763C511.996,11.491,500.597,0.032,486.467,0.032    z M358.348,293.326C230.834,417.964,133.738,434.568,91.034,434.568c-5.307,0-9.437-0.282-13.02-0.623    c43.762-53.591,109.954-125.628,184.253-175.302c5.87-3.95,7.466-11.902,3.524-17.773c-3.95-5.87-11.885-7.423-17.747-3.524    C175.392,285.92,111.537,353.418,67.016,406.813c1.357-28.156,7.926-77.438,33.762-137.223    c32.67-75.595,110.586-140.363,131.183-156.515c3.592-2.816,7.099-4.044,10.495-4.044c22.653,0.008,40.724,54.384,50.118,54.384    c0.341,0,0.666-0.068,0.981-0.213c8.097-3.737,4.804-86.789,17.201-94.392c59.862-36.671,175.576-43.181,175.576-43.181    S476.732,177.604,358.348,293.326z"
                    fill="white"
                />
            </g>
        </svg>
        <Link to="/">@quillio/Stringy</Link>
      </h1>
      <div className="links">
          <span>
              <a href="https://www.github.com/quillio/stringy/releases" target="_blank">v0.0.1</a>
          </span>
          <span>
              <a href="https://www.github.com/quillio/stringy" target="_blank">GitHub</a>
          </span>
      </div>
  </header>
);

const TemplateWrapper = ({ children, data }) => {
    const {
        title,
        description,
        url,
        author,
        logo,
        smallLogo,
        mediumLogo,
        largeLogo,
        extraLargeLogo,
    } = data.site.siteMetadata;

    return (
        <div>
            <Helmet title={title}>
                <meta name="description" content={description} />
                <meta name="keywords" content='stringy string javascript library lib package' />
                <meta name="author" content={author} />
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="HandheldFriendly" content="True" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="referrer" content="no-referrer-when-downgrade" />
                <meta property="og:site_name" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={url} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={logo} />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:url" content={url} />
                <meta name="twitter:image" content={logo} />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={author} />

                <link rel="canonical" href="http://quillio.github.io/" />
                <link rel="icon" type="image/png" href={logo} />
                <link rel="apple-touch-icon" sizes="57x57" href={smallLogo} />
                <link rel="apple-touch-icon" sizes="72x72" href={mediumLogo} />
                <link rel="apple-touch-icon" sizes="114x114" href={largeLogo} />
                <link rel="apple-touch-icon" sizes="144x144" href={extraLargeLogo} />
            </Helmet>
            <Header />
            {children()}
        </div>
    );
}

export default TemplateWrapper

export const pageQuery = graphql`
query metadata {
  site {
    siteMetadata {
      title,
      description,
      url,
      author,
      logo,
      smallLogo,
      mediumLogo,
      largeLogo,
      extraLargeLogo
    }
  }
}
`