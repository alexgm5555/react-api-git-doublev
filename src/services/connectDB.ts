class connectDB {
  async get(url: string) {
    return await fetch(`${url}`, {
      headers: {
        Accept: 'application/json',
      }
    })
   .then(resp => resp.json())
  }

  async post(url: string, body: any) {
    return await fetch(`${url}`, {
      method: "POST",
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify(body),
      redirect: "follow"
    })
   .then(resp => resp.json())
   .catch(error => console.log(error))
  }
}

export default connectDB;