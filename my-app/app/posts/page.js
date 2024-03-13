const page = async ({ params }) => {

  //1.Server Side Render(SSR)
  //no-store 服务端每次访问都动态渲染

  const res = await fetch(`https://github.com/qeury?q=${params.id}`, {
    cache: 'no-store',
  });

  //2.Static Site Generation(SSG)
  //no-store   初始访问获取的值放入cache，之后不会更新这个值了。
  const res1 = await fetch(`https://github.com/qeury?q=${params.id}`);

  //3. Incremental Static Generation(ISR)
  //数据之后缓存10秒，超过这个时间再访问，就会再次渲染新的数据。
  const res2= await fetch(`https://github.com/qeury?q=${params.id}`,{
    next:{revalidate:10}
  });

  const data = await res.json()

  return <div>{data}</div>;
};

export default page;
