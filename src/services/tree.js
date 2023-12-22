import config from '@/config'


async function getTree(id) {
  const response = await fetch(
    `${config.api.url}/api/v1/tree/${id}`, 
    { method: 'GET' }
  )

  return await response.json()
}

export { getTree }