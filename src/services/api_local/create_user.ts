import connectDB from '../connectDB';

export interface IUserData {
  id: string;
  public_repos: string;
  followers: number;
  name: string;
  login: string;
  avatar_url: string;
  url: string;
  node_id: string
}

export const createUser = async (userDetail: IUserData) => {
  const connect: any = new connectDB();
  const { 
    node_id,
    name,
    login,
    avatar_url,
    url,
  } = userDetail;
  return await connect.post(
    `${process.env.REACT_APP_LOCAL_API}`,
    { 
      id: node_id,
      name,
      login,
      avatar_url,
      url,
    }
  );
}
