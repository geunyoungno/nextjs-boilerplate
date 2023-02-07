import { NextApiResponse } from 'next';

interface IError {
  statusCode: number;
}

function Error({ statusCode }: IError) {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

Error.getInitialProps = ({ res, err }: { res: NextApiResponse; err: IError }) => {
  if (res != null) {
    return {
      statusCode: res.statusCode,
    };
  }

  if (err != null) {
    return {
      statusCode: err.statusCode,
    };
  }

  return { statusCode: 404 };
};

export default Error;
