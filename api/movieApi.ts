import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

import {
  DetailResponseValue,
  FailedResponse,
  ListResponseValue,
} from '../src/apiType';

const { APIKEY } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { ref, i, plot, s, y, page } = req.body;
  const defaultUrl = `https://omdbapi.com/?apikey=${APIKEY}`;

  try {
    if (ref === 'search') {
      const { data: responseValue } = await axios({
        url: `${defaultUrl}&s=${s}${y ? '&y=' + y : ''}${
          page ? '&page=' + page : ''
        }`,
        method: 'GET',
      });
      const data = responseValue as ListResponseValue & Partial<FailedResponse>;
      res.status(200).json(data);
    } else if (ref === 'detail') {
      const { data: responseValue } = await axios({
        url: `${defaultUrl}&i=${i}${plot ? '&plot=' + plot : ''}`,
        method: 'GET',
      });
      const data = responseValue as DetailResponseValue &
        Partial<FailedResponse>;
      res.status(200).json(data);
    }
  } catch (error: any) {
    res.status(400).json({ error: 'error' });
  }
}
