
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HubspotConversationsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HubspotConversationsSDK.test()
    equal(testsdk instanceof HubspotConversationsSDK, true,
      'HubspotConversationsSDK.test() must return a client synchronously')
  })

})
