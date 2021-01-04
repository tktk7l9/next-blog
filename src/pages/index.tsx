import { PostItem } from "../types";
import { PostList, Title } from "../components";
import posts from "../../.contents/posts.json";
import { Header, SubContent, ProfileCard } from "../components";
import { Meta } from "../components/common/Meta";

export default function Home({ }) {

  return (
    <>
      <Meta
        title="Portfolio"
        description="Takuya Saito | System Engineer."
        image="https://images.microcms-assets.io/protected/ap-northeast-1:12587faf-e507-4a34-8fbf-d773ad9ed641/service/tktk7l9/media/asakusashi_dance.jpg"
      />
      <Header />
      <main className="max-w-3xl mx-auto  my-10 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <section className="mb-10">
          <ProfileCard />
        </section>
        <SubContent />
        <section>
          <Title>Articles</Title>
          <PostList items={posts as PostItem[]} />
        </section>
      </main>
    </>
  );
}