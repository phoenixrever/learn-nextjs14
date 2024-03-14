import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* head_text 这种带下划线的是自己在global.css文件中定义的样式 */}
      <h1 className="head_text text-center">
        考えてな、するな！
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">頑張れ！</span>
      </h1>

      <p className="desc text-center">
        毎日鬱けど、今の生活は以前より良かった。 でももっといい生活に送りたい。
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
