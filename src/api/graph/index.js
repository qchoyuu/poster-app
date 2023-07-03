import gql from 'graphql-tag'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
})

/**
 * mutate
 * @param {String} gqls gql语句
 * @param {Boolean} loading 是否显示加载loading框
 * @param {Boolean} showErrorInfo 是否展示错误提示框
 * @return {Promise} Promise对象
 */
export const mutate = async (gqls, loading = true, showErrorInfo = true) => {
  try {
    const res = await apolloClient.mutate({
      mutation: gql`mutation {
        ${gqls}
      }`,
    })
    return Promise.resolve(res)
  } catch (err) {
    const msg = err.message || err
    return Promise.reject(msg)
  }
}  

export function getCatPriceList (params) {
  return apolloClient.query({
    query: gql`
      query pairHourDatas($pairId: String, $first: Int) {
        pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {
          id
          hourStartUnix
          reserve0
          reserve1
          reserveUSD
          pair {
            token0 {
              id
            }
            token1 {
              id
            }
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
    variables: params,
  })
}
