import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header className="navigation">
      <h1>
        <Link to="/">Stringy</Link>
      </h1>
  </header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Collection of common string utilities in JavaScript' },
        { name: 'keywords', content: 'stringy string javascript library lib package' },
      ]}
    />
    <Header />
    {children()}
  </div>
);

export default TemplateWrapper
