import axios from 'axios'

const baseUrl = 'https://api.npoint.io'

const usersApiSdk = {}

usersApiSdk.getAll = async () => {
  const res = await axios.get(`${baseUrl}/f5cbbe6ec094792b0ea5`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res?.data
}

export default usersApiSdk
