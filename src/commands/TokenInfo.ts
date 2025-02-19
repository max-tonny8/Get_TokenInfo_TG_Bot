const instruction = () => `Usage: /token_ca [Token Mint CA]`
const mintAddrInvalidMsg = () => `Invalid [Token Mint CA]`

const tokenInfoMsg = (param: any[]) => `${param.map(ele => `${ele}`).join("\n")}`

export {
    instruction,
    mintAddrInvalidMsg,
    tokenInfoMsg
}