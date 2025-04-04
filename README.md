# ERC-20 Workshop

Before proceeding, make sure to install Metamask browser extension and have some Sepolia ETH testnet in your account from [Sepolia faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia). Hopefully Node install nahi karwana padega! :)

## Setup React Vite project
<pre lang="md">npm create vite@latest</pre>
- Select React and JS and give your project a name!
  
- ```cd .\my-token-dapp\```
- ```npm i```
- ```npm run dev```
- Okay now your basic React project is running.
- Let's install the packages you'll be using.
- <pre lang="md">npm install ethers@5.7.2 @metamask/detect-provider</pre>
- Clean up App.css and index.css files
- Install [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- Add ```@import "tailwindcss";``` in index.css file
- Next let's make our smart contract first!

## Smart Contract Dev
Go to [Remix](https://remix.ethereum.org/) and from this repo copy the src\contract\Token.sol contract and paste it in Remix IDE.

Now let's understand the contract!

#### What is ```mint```?
#### What is ```burn```?
#### What is ```transfer```?

### 🧠 Design Understanding
1. What is address(0)?
2. Why does minting use from = address(0) instead of a dedicated function?
3. What are the risks of exposing _mint() or _burn() publicly?
4. Why are zero address checks necessary?
5. Why does transferFrom skip the Approval event under certain conditions?
6. Why is the default decimals() set to 18?
7. How would changing decimals affect dApps using this token?
8. What does ```emit``` does?
9. What does virtual mean in func def?
10. What is use of Ownable.sol?

- Compile the contract, oh wait... first let's give your token a name!
- In deploy tab select Injected Provider Metamask as Environment.
- Deploy the contract! Copy the deployed contract address, you can view it on Etherscan.
- Now let's add your coin to your Metamask wallet!
- Metamask -> Import token -> Paste your contract address

Cool! You've successfully made your own token. Time to hook it up with a UI.

## Frontend-Backend Integration (probably the thing you dread the most)
It's totally fine for folks who are not confident in React yet. Focus on this part from abstraction point of view! 
```
components/
├── BurnForm.jsx              # Form for burning tokens
├── Header.jsx                # App header with connection status
├── MintForm.jsx              # Form for minting tokens (owner only)
├── TokenActions.jsx          # Container for all token action forms
├── TokenInfo.jsx             # Displays token information and balance
├── TransactionNotification.jsx # Notification for transaction status
├── TransferForm.jsx          # Form for transferring tokens
└── WelcomeSection.jsx        # Welcome screen for non-connected users
```
