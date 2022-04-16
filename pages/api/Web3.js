import React, { useEffect, useState } from "react"
// import abi from "../comp/abi.json"
import { ethers } from "ethers"
//import { client } from '../lib/sanityClient'
//import { useRouter } from 'next/router'

export const TransactionContext = React.createContext()

let eth

if (typeof window !== "undefined") {
	eth = window.ethereum
}
let contractAddress = "0x4da79b203d995462e07903227DD8e1a82f811404"

const getEthereumContract = () => {
	const provider = new ethers.providers.Web3Provider(eth)
	const signer = provider.getSigner()
	const transactionContract = new ethers.Contract(contractAddress, abi, provider)

	return transactionContract
}

export const TransactionsProvider = ({ children }) => {
	//referal
	const [isloading, setIsloading] = useState(false)
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)

	const ref = urlParams.get("ref")
	//wallet chane
	const accountChangedHandler = (newAccount) => {
		setCurrentAccount(newAccount[0])
		const acc = newAccount[0]
		console.log(acc)
		updatewBalance(acc)
		updateMyape(acc)
		updateMybanana(acc)

		getEthereumContract()
	}

	useEffect(() => {
		if (window.ethereum) {
			checkIfWalletIsConnected()
		}
	}, [])

	useEffect(() => {
		if (window.ethereum) {
			getEthereumContract()
		}
	}, [contractAddress])

	if (window.ethereum) {
		window.ethereum.on("accountsChanged", accountChangedHandler)
	}

	const [myape, setMyape] = useState(null)
	const [mybanana, setMybanana] = useState(null)
	const [currentAccount, setCurrentAccount] = useState()
	const connectWallet = async (metamask = eth) => {
		try {
			if (!metamask) return alert("Please install metamask ")
			const accounts = await metamask.request({
				method: "eth_requestAccounts",
			})
			setCurrentAccount(accounts[0])
			const acc = accounts[0]

			updatewBalance(acc)
			updateMyape(acc)
			updateMybanana(acc)
		} catch (error) {
			console.error(error)
			throw new Error("No ethereum object.")
		}
	}

	/**
	 * Checks if MetaMask is installed and an account is connected
	 * @param {*} metamask Injected MetaMask code from the browser
	 * @returns
	 */
	const checkIfWalletIsConnected = async (metamask = eth) => {
		try {
			if (!metamask) return alert("Please install metamask ")

			const accounts = await metamask.request({ method: "eth_accounts" })

			if (accounts.length) {
				setCurrentAccount(accounts[0])
				const acc = accounts[0]

				updatewBalance(acc)
				updateMyape(acc)
				updateMybanana(acc)
			}
		} catch (error) {
			console.error(error)
			throw new Error("No ethereum object.")
		}
	}
	const [wbalance, setWBalance] = useState(null)
	const updatewBalance = async (acc) => {
		const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed3.binance.org")
		let balanceBigN = await provider.getBalance(acc)
		const wtokenBalance = ethers.utils.formatEther(balanceBigN)
		const wwtokenBalance = (Math.round(wtokenBalance * 100) / 100).toFixed(2)

		setWBalance(wwtokenBalance)
		console.log(wwtokenBalance)
	}

	//getmyapes
	const updateMyape = async (acc) => {
		const contract = getEthereumContract()
		let balanceBigN = await contract.getMyAPE(acc)
		let balanceNumber = balanceBigN.toNumber()
		//const tokenBalance=   ethers.utils.formatEther(balanceBigN);

		setMyape(balanceNumber)
		console.log(balanceNumber)
	}

	//getmybanan
	const updateMybanana = async (acc) => {
		const contract = getEthereumContract()
		let balanceBigN = await contract.BananaRewards(acc)
		//let balanceNumber = balanceBigN.toNumber();
		const tokenBalance = ethers.utils.formatEther(balanceBigN)

		const wstokenBalance = (Math.round(tokenBalance * 1000000) / 1000000).toFixed(6)
		setMybanana(wstokenBalance)
		console.log(wstokenBalance)
	}

	//buy

	const buyapes = async (event) => {
		event.preventDefault()

		const provider = new ethers.providers.Web3Provider(eth)
		const signer = provider.getSigner()
		const rcontract = new ethers.Contract(contractAddress, abi, signer)
		console.log("sending " + event.target.bnbval.value + " to the contract")
		const val = ethers.utils.parseEther(event.target.bnbval.value)
		if (ref) {
			let aw = await rcontract.BuyApes(ref, { value: val })
		} else {
			let defref = "0xf897ca20a7EbA29F77b36F7cb3036e95b5f53efF"

			let aw = await rcontract.BuyApes(defref, { value: val })
			setIsloading(true)
			console.log(aw)
			await aw.wait()
			setIsloading(false)
		}
	}

	const seHireApes = async (event) => {
		event.preventDefault()

		const provider = new ethers.providers.Web3Provider(eth)
		const signer = provider.getSigner()
		const scontract = new ethers.Contract(contractAddress, abi, signer)

		//contract.HireApes(ref);
		let c
		if (ref) {
			let c = await scontract.HireApes(ref)
		} else {
			let defref = "0xf897ca20a7EbA29F77b36F7cb3036e95b5f53efF"

			let c = await scontract.HireApes(defref)
		}

		setIsloading(true)

		let cc = await c.wait()
		console.log(cc)
		setIsloading(false)
	}

	const sellbanana = async (event) => {
		event.preventDefault()
		const provider = new ethers.providers.Web3Provider(eth)
		const signer = provider.getSigner()
		const contract = new ethers.Contract(contractAddress, abi, signer)

		//console.log('sending ' + event.target.setText.value + ' to the contract');
		let s = await contract.SellBananas()

		setIsloading(true)
		console.logs(s)
		await s.wait()
		setIsloading(false)
	}

	return (
		<TransactionContext.Provider
			value={{
				connectWallet,
				currentAccount,
				wbalance,
				myape,
				mybanana,
				seHireApes,
				sellbanana,
				buyapes,
				isloading,
			}}
		>
			{children}
		</TransactionContext.Provider>
	)
}
