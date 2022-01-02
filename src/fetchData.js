const gql = require('graphql-tag')
const { GraphQLWrapper } = require('@aragon/connect-thegraph')
const dotenv = require('dotenv')

dotenv.config()

const SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange'

const PRICE_QUERY = gql`
  query {
    token(id: "${process.env.TOKEN_ID}") {
      derivedAVAX
      symbol
    }
    bundle(id: 1) {
      avaxPrice
    }
  }
`

const fetchData = async () => {
  const graphqlClient = new GraphQLWrapper(SUBGRAPH_URL)
  const result = await graphqlClient.performQuery(PRICE_QUERY)

  if (!result.data) return undefined
  return result
}

exports.getTokenPrice = async () => {
  const res = await fetchData()
  const price = parseFloat(res.data.token.derivedAVAX * res.data.bundle.avaxPrice).toFixed(2)
  return price
}

exports.getTokenSymbol = async () => {
  const res = await fetchData()
  return res.data.token.symbol
}
