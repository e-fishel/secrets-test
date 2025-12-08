const secretos = [ "MY_DOPPLER_SECRET", "PRIVATE_KEY", "WHICH_CONFIG" ]
// change config with $ doppler setup

for (const key of secretos) {
    const val = process.env[key] // doppler substitutes here
    console.log(`Secreto ${key} en Doppler: ${val}`)
    console.log()
}