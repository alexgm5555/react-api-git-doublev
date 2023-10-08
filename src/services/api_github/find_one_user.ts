import connectDB from '../connectDB';

export const findOneUser = async (userDetail: string) => {
  const connect: any = new connectDB();
  const urlApiGithub = process.env.REACT_APP_API_GIT;
  const endPoint = `${process.env.REACT_APP_API_GIT_USER}${userDetail}`;
  return await connect.get(`${urlApiGithub}${endPoint}`);
}
