import test from 'ava';
import sut from './index';

const html = '<p class="description">paragraph</p>';
const escapedHtml = '&lt;p class=&quot;description&quot;&gt;paragraph&lt;/p&gt;';

test('String with no special characters is unchanged', t => t.is(sut('myVar'), 'myVar'));

test('Escape HTML', t => t.is(sut(html), escapedHtml));
