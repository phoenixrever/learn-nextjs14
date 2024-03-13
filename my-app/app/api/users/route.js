// handle /api/users
export async function GET(request) {

  const users = [
    {id:1,name:'tom'},
    {id:2,name:'jerry'},
    {id:3,name:'shadow'}
  ];

  return new Response(JSON.stringify(users))
}
