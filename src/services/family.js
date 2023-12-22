import config from '@/config'


async function getFamily(id) {
  const response = await fetch(
    `${config.api.url}/api/v1/family/${id}`, 
    { method: 'GET' }
  )

  return await response.json()
}

export { getFamily }