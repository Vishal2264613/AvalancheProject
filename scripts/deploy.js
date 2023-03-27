// scripts/deploy.js

// The main function calls the getContractFactory method on the ethers library, and passes in HelloWorld as the name // of the contract. HelloWorldFactory is deployed with the message.

async function main() {
  const HelloWorldFactory = await ethers.getContractFactory("MainContract");
  const helloMessage = await HelloWorldFactory.deploy();
  await helloMessage.deployed();

  console.log("Contract deployed to:", helloMessage.address);
  console.log(
    "Contract deployed by " + JSON.stringify(helloMessage.signer) + " signer"
  );
  process.exit(0);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
