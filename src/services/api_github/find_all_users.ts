import connectDB from '../connectDB';

export const findAllUsers = async (user: string) => {
  const connect: any = new connectDB();
  const urlApiGithub = process.env.REACT_APP_API_GIT;
  const endPoint = `${process.env.REACT_APP_API_GIT_SEARCH}${user}`;
  const {items} = await connect.get(`${urlApiGithub}${endPoint}+followers:%3E2&per_page=10`)
  return items
}
