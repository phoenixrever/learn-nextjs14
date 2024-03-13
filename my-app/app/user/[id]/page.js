//元数据能在任何一个页面上设置，会覆盖和合并原有的元数据（比如你在layout中为所有文件加上了元数据）

//1 static metadata
// export const metadata = {
//   title: 'MetaData Title',
// };

//函数形式才能动态metadata
export async function generateMetadata({ params, searchParams }) {
  //FIXME 这边取不到值
  console.log('params', params);
  console.log('searchParams', searchParams);
  return { title: 'Dynamic Metadata Title' };
}

const User = () => {
  return (
    <div>
      static metadata and Dynamic metadata!!!
    </div>
  );
}

export default User;