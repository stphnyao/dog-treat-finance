import { Fragment } from "react"
import {
    CurrencyDollarIcon,
    UserGroupIcon,
	CogIcon,
} from "@heroicons/react/outline"


const features = [
	{
		name: "$DOGTREAT TOKEN",
		description:
			"Our parent token, $DOGTREAT is an auto staking token that is part of the Dog Treat Ecosystem. Growing with the total worth of our project, and a 2% reflection fee spreading its tokens across holders with every transaction, Its ready to give passive rewards in form of $DOGTREAT just by holding.",
		icon: CurrencyDollarIcon,
	},
	{
		name: "DOGTREAT MINER",
		description:
			"An aggressive but locked ETH Staking Pool, returning up to 12% in ETH daily! Grow your army of Doges to Get treats. Sell treats for ETH or Hire more dogs with treats to increase your daily returns!🐒💰 *Depending on multiple factors such as TVL, dog treats market value, personal investment habits and more..",
		icon: CogIcon,
	},
	{
		name: "THE DOG TREASURY",
		description:
			"Combining and accumulating ecosystem fees, dividing them across our Dogtreat TVL, marketing/developing, and an everlasting treasury dividend investments portfolio, we strive to build and support Dog Treats a sustainable wealth building ecosystem for all to enjoy.",
		icon: UserGroupIcon,
	},
]

export default function Features() {
	return (
		<div className="relative bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">$DOGTREAT Features</h2>
				<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Learn more about the Dog Treat Finance Ecosystem!
				</p>
				<div className="mt-12">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="pt-6">
								<div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
												<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
											</span>
										</div>
										<h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
										<p className="mt-5 text-base text-gray-500">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
