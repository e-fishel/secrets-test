const secretos = [ "WHICH_ENV" ]
// change config with $ doppler setup

for (const key of secretos) {
    const val = process.env[key]
    console.log(`Secreto ${key} en Infisical: ${val}`)
    console.log()
}