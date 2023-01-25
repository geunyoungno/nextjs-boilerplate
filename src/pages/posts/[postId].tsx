import Header from 'components/Header';
import { NextPage, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import IPostDto from '#dto/post/IPostDto';

const Post: NextPage<{ postId: IPostDto['id'] }> = ({ postId }) => {
  const router = useRouter();

  // const { postId: nullablePostId } = router.query;
  // const postId = first(nullablePostId) ?? '-1';

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <h1>Post: {postId}</h1>
      <ul>
        <li>
          <Link href={`/post/${postId}/first-comment`}>First comment</Link>
        </li>
        <li>
          <Link href={`/post/${postId}/second-comment`}>Second comment</Link>
        </li>
      </ul>
    </>
  );
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
};

// This also gets called at build time
// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<{ postId: string }>) => {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   // const res = await got(`https://.../posts/${params?.postId}`);
//   // const post = await res.json();

//   // Pass post data to the page via props
//   return {
//     props: { post },
//     // Re-generate the post at most once per second
//     // if a request comes in
//     revalidate: 1,
//   };
// };

export default Post;
