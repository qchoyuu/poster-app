// Node race related interfaces

import config from 'src/api/utils/config'
import { _get } from './indexStrong'

const getUrl = (url) => {
  return config.triggerUrl + url
}

/**
 * Querying user Rankings
 *  address token address
 */
export const getCoinPrice = address => _get(getUrl(`/trigger/token-info/${address}`))

/**
 * Querying a User Node
 */
export const getPoolInfo = (data) => _get(getUrl('/trigger/trigger-pool?'), data)

/**
 * None Example Query users of a specified period
 *  pk: user address
 */
export const getStarfishInfo = pk => _get(getUrl(`/trigger/pool-user/starfish-info?pk=${pk}`))

/**
 * None Example Query users of a specified period
 *  pk: user address
 */
export const getUserStakeInfo = pk => _get(getUrl(`/trigger/pool-user/stake-info?pk=${pk}`))

/**
 * None Example Query users of a specified period
 *  pk: user address
 */
export const getUserStakeRecord = data => _get(getUrl('/trigger/stake-record'), data)

/**
 * None Example Query users of a specified period
 *  pk: user address
 */
export const getUserMerkleClaims = pk => _get(getUrl(`/trigger/pool-user/merkle-claims?pk=${pk}`))
