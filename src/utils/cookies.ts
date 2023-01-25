import { serialize, CookieSerializeOptions } from 'cookie';
import { NextApiResponse } from 'next';
// import { CookieSerializeOptions } from 'next-cookie';

/**
 * This sets `cookie` using the `res` object
 */
const setCookie = (res: NextApiResponse, name: string, value: unknown, options: CookieSerializeOptions = {}) => {
  const stringValue = typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value);
  const cookeOptions = options;

  if (typeof cookeOptions.maxAge === 'number') {
    cookeOptions.expires = new Date(Date.now() + cookeOptions.maxAge * 1000);
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, cookeOptions));
};

export default setCookie;
