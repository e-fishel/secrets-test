import '@dotenvx/dotenvx/config'

const secretos = [ "MY_TEST", "ENVIRONMENT_WHERE" ]

for (const key of secretos) {
    const val = process.env[key] // dotenvx substitutes here
    console.log(`Secreto ${key} en DotEnvX: ${val}`)
    console.log()
}