![contributors](https://img.shields.io/github/contributors/hanpham32/Scaling-Ethereum-23)
![last-commit](https://img.shields.io/github/last-commit/hanpham32/Scaling-Ethereum-23)

# Scaling-Ethereum-23
Scaling Ethereum 2023 Hackathon Submission Project

Smart Contract address:

## Overview
FamilyShare is a project aimed at building a highly customizable, secure, and user-friendly multi-sig family-shared cryptocurrency wallet. It satisfies the needs of families who wish to manage their digital assets collectively while maintaining a high level of control, transparency, and security.

Using FamilyShare, parents can take full control of their digital assets without worrying about losing their private keys. The customizable access levels allow parents to easily tailor to individual preferences or roles, ensuring that each family member has the appropriate permissions and visibility for their specific needs, fostering collaboration among family members while maintaining a high level of security. 

FamilyShare aims to abstract away blockchain's complexity as much as possible. Designed with user experience in mind, FamilyShare uses account abstraction to allow users to easily interact with the wallet using their familiar authentication methods (email, biometrics, etc.).

## Link to video demo

## dApp functionalities
We built the front end using Next.js and tailwind. Our designer used Figma to prototype different components and pages for the web app. We used RainbowKit for wallet connection and used ethers.js to interact with smart contracts.

We implement account abstraction in the form of a multi-sig smart contract wallet that can be deployed on any EVM chain. The wallet owners (the parents) can use their EOA to sign and modify the privilege modules inside the wallet, which means they can set limits for the wallet and for the wallet sharers (the kids). The wallet sharers don't technically have direct access to the wallet. Instead, every transaction the sharer initiate will go through a paymaster contract that checks the parameter against the set limit to decide whether to ask the wallet owner for review or automatically execute the transaction.

## The team
Hello from `Han`
Hello from `Kimlong`
Hello from `Matt`
Hello from `Sebastian 🫶`
`Compiling ...`
