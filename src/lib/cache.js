import NodeCache from 'node-cache'

if (!global.__cache) {
  global.__cache = new NodeCache({ stdTTL: 300 })
}
const cache = global.__cache

export { cache }
