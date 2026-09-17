
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { HubspotConversationsSDK } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
} = require('../../utility')


describe('CustomChannelsCollectionResponseWithTotalPublicChannel2Direct', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_CONVERSATIONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_CONVERSATIONS_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new HubspotConversationsSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-custom_channels_collection_response_with_total_public_channel2', async (t) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    const { client, calls } = setup

    const params = {}
    if (setup.live) {
      params.channel_id = setup.idmap['channel01']
    } else {
      params.channel_id = 'direct01'
    }

    const result = await client.direct({
      path: 'conversations/custom-channels/2026-09/{channel_id}/channel-accounts',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(setup.live ? result.status >= 200 && result.status < 300 : result.status === 200)
    assert(Array.isArray(result.data))

    if (!setup.live) {
      assert(result.data.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
    }
  })

})



function liveScenariosActive() { return false && process.env.HUBSPOT_CONVERSATIONS_TEST_LIVE === 'TRUE' }
function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2_ENTID': {},
    'HUBSPOT_CONVERSATIONS_TEST_LIVE': 'FALSE',
    'HUBSPOT_CONVERSATIONS_APIKEY': '',
  })

  const live = 'TRUE' === env.HUBSPOT_CONVERSATIONS_TEST_LIVE

  if (live) {
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new HubspotConversationsSDK(
      Object.assign({}, liveClientOptions(), {
      apikey: env.HUBSPOT_CONVERSATIONS_APIKEY,
      }))

    let idmap = env['HUBSPOT_CONVERSATIONS_TEST_CUSTOM_CHANNELS_COLLECTION_RESPONSE_WITH_TOTAL_PUBLIC_CHANNEL2_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new HubspotConversationsSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  
