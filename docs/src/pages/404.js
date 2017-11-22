import React from 'react'
import Link from 'gatsby-link'

const p = {
    textAlign: 'center',
    color: '#fff',
    fontSize: '24px',
};

const h1 = {
    fontSize: '255px',
    textAlign: 'center',
    color: '#fff',
    marginBottom: '0',
};

const a = {
    color: '#fff'
};


const span = {
    paddingRight: '15px'
};

const NotFoundPage = () => (
  <div>
    <h1 style={h1}>404</h1>
      <p style={p}>
          <span style={span}>Page not found. Let's get back to</span>
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
          <Link to="/" style={a}>@laces/laces</Link>
      </p>
  </div>
);

export default NotFoundPage
