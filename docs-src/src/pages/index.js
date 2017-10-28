import React from 'react'
import Group from './../components/Group';
import Method from './../components/Method';
import Search from './../components/Search';
import { groups, methods } from './../metadata';

const IndexPage = () => (
  <main>
      <aside>
          <Search />
          <div className="list">
              {groups.map(
                  (group, i) => (<Group key={i} {...group} />)
              )}
          </div>
      </aside>
      <div className="content">
          {methods.map(
              (method, i) => (<Method key={i} {...method} />)
          )}
      </div>
  </main>
);

export default IndexPage
