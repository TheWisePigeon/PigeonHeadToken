const totalSupply = 10000
const ipfs = require('ipfs')


async function createNode() {
    const node = await ipfs.create()
    return node
}

async function addData(data) {

    const node = await createNode()
    const results = node.add(data)
    return results
}

module.exports = {
    totalSupply,
    createNode,
    addData
}