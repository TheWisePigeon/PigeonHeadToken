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

async function getData(cid) {
    const node = await createNode()
    const stream = await node.cat(cid)
    let data =''
    for await (const chunk of stream) {
        data += chunk.toString()
    }
    return(data);
}

module.exports = {
    totalSupply,
    createNode,
    addData,
    getData
}