const ftrans = id => id.split('-').map(i => '_' + i).join('')

const secretos = [
    "_677e38f5_0755_43ad_a2f7_b3af0010dd6e",
    ftrans('0e394239-5075-4eb7-ab7f-b3af00107dd7')
]

for (const key of secretos) {
    const val = process.env[key]
    console.log(`Secreto ${key} en BWS: ${val}`)
    console.log()
}