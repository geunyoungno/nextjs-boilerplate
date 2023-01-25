import Layout from '#components/Layout';
import { GetServerSideProps } from 'next';
import IUserDto from '#dto/user/IUserDto';

export const getServerSideProps: GetServerSideProps = async ({ req, res: _res }) => {
  const { user } = req.session;

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

const Profile = ({ user }: { user: IUserDto }) => {
  // Show the user. No loading state is required
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
};

export default Profile;
