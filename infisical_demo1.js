import { InfisicalSDK } from '@infisical/sdk'

const client = new InfisicalSDK({
    // siteUrl: 'your-infisical-instance.com' // Optional, defaults to https://app.infisical.com
})

await client.auth().universalAuth.login({
    clientId: '9d2a7046-21b3-4ebe-be3b-d568a0c216ce',
    clientSecret: '1ddc97c1ac6bf5fa735933f837224d8fbfc0da5ff224492ae33b292d8f8357e6',
})

const allSecrets = await client.secrets().listSecrets({
    environment: 'dev',
    projectId: '14ace45e-f686-4c92-9566-36e519097e28',
})

const envName = allSecrets?.secrets.find(({ secretKey }) => secretKey === 'WHICH_ENV').secretValue

console.log('Fetched secrets', allSecrets)

console.log('Current environemnt:', envName)

const allAllSecrets = await client.secrets().listSecrets({
    environment: 'dev',
    projectId: '14ace45e-f686-4c92-9566-36e519097e28',
    recursive: true,
})

console.log('All secrets (even inside folders)', allAllSecrets)