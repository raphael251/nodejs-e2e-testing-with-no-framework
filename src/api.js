import { once } from 'node:events'
import { createServer } from 'node:http'
import JWT from 'jsonwebtoken'

const DEFAULT_USER = {
  user: 'raphasteps',
  password: '123'
}

const JWT_KEY = 'super_secure_key'

async function loginRoute(request, response) {
  const { user, password } = JSON.parse(await once(request, 'data'))
  if (DEFAULT_USER.user !== user || DEFAULT_USER.password !== password) {
    response.writeHead(401)
    response.end(JSON.stringify({ error: 'invalid credentials.' }))
    return;
  }

  const access_token = JWT.sign({ user }, JWT_KEY)
  response.end(JSON.stringify({ access_token }))
}

function isHeadersValid(headers) {
  try {
    const [_, token] = headers.authorization.split(' ')
    JWT.verify(token, JWT_KEY)
    return true
  } catch (error) {
    return false
  }
}

async function handler (request, response) {
  if (request.url === '/login' && request.method === 'POST') {
    return loginRoute(request, response)
  }

  if (!isHeadersValid(request.headers)) {
    response.writeHead(401)
    response.end(JSON.stringify({ error: 'invalid token.' }))
    return
  }

  response.end(JSON.stringify({ result: 'welcome to the private area' }))
}

export const app = createServer(handler)
  .listen(2000, () => console.log('listening on port 2000'))