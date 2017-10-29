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
      <div className="links">
          <span>
              <a href="https://www.github.com/quillio/stringy/releases">v0.0.1</a>
          </span>
          <span>
              <a href="https://www.github.com/quillio/stringy">GitHub</a>
          </span>
      </div>
  </header>
);

const TemplateWrapper = ({ children, data }) => {
    return (
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
}

export default TemplateWrapper