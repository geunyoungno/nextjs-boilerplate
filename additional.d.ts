import IUserDto from '#dto/user/IUserDto';

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface IronSessionData {
    user?: IUserDto;
  }
}
