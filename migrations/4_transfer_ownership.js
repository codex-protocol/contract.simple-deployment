const SimpleToken = artifacts.require('./SimpleToken.sol')

module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    let newOwner

    // The owner key should be stored securely in cold storage.
    switch (network) {
      case 'ganache':
        newOwner = accounts[1]
        break

      default:
        throw new Error('No ownership transfer defined for this network')
    }

    console.log('Transferring ownership of SimpleToken to: ', newOwner)

    const simpleToken = await SimpleToken.deployed()
    simpleToken.transferOwnership(newOwner)
  }).catch((error) => {
    console.log(error)
  })
}
