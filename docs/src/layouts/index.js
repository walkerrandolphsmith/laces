import React from 'react'
import Helmet from 'react-helmet'

import './index.css'

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

                <link rel="canonical" href="http://walkerrandolphsmith.github.io/" />
                <link rel="icon" type="image/png" href={logo} />
                <link rel="apple-touch-icon" sizes="57x57" href={smallLogo} />
                <link rel="apple-touch-icon" sizes="72x72" href={mediumLogo} />
                <link rel="apple-touch-icon" sizes="114x114" href={largeLogo} />
                <link rel="apple-touch-icon" sizes="144x144" href={extraLargeLogo} />
                <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
            </Helmet>
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