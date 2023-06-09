import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '#lib/session';
import { NextApiRequest, NextApiResponse } from 'next';
import IUserDto from '#dto/user/IUserDto';

async function userRoute(req: NextApiRequest, res: NextApiResponse<IUserDto>) {
  if (req.session.user != null) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
      login: '',
      avatarUrl: '',
    });
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions);
