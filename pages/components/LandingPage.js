import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/solid"

import Contract from "./Contract"

export default function LandingPage() {
	return (
		<div className="relative bg-gray-800 overflow-hidden">
			<div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
				<svg
					className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
					width={364}
					height={384}
					viewBox="0 0 364 384"
					fill="none"
				>
					<defs>
						<pattern
							id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect x={0} y={0} width={4} height={4} fill="currentColor" />
						</pattern>
					</defs>
					<rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
				</svg>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<Popover>
					<nav
						className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
						aria-label="Global"
					>
						<div className="flex items-center flex-1">
							<div className="flex items-center justify-between w-full md:w-auto">
								<h1 className="text-white text-3xl font-extrabold">Dog Treat Finance</h1>
							</div>
						</div>
						<div className="hidden md:flex">
							<a
								href="#"
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
							>
								Connect to Wallet
							</a>
						</div>
					</nav>
				</Popover>

				<main className="mt-16 sm:mt-24">
					<div className="mx-auto max-w-7xl">
						<div className="lg:grid lg:grid-cols-12 lg:gap-8">
							<div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
								<div>
									<a
										href="#"
										className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
									>
										<span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
											$DOGTREAT
										</span>
										<span className="ml-4 text-sm">Generating generational passive income</span>
										<ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
									</a>
									<h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
										<span className="md:block">Every Dog Has Its Day</span>{" "}
										<span className="text-indigo-400 md:block">$DOGTREAT</span>
									</h1>
									<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
										Our ecosystem is designed in a way to maximize sustainability and reward investors with high
										compounding values to achieve a sustainable system that generates passive income.
									</p>
									<div className="flex justify-center lg:flex lg:justify-start">
										<p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Powered by</p>
										<img className="h-8 pl-2 sm:h-10 mt-6" src="/eth2.png" alt="Ethereum" />
									</div>
								</div>
							</div>
							<div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 px-4">
								<div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
									<div className="px-4 py-8 sm:px-10">
										<div>
											<p className="text-sm text-center font-medium text-gray-700">
												The first miner/token ecosystem in Ethereum made for generating generational passive income.
											</p>
										</div>

										<div className="mt-6 relative">
											<div className="absolute inset-0 flex items-center" aria-hidden="true">
												<div className="w-full border-t border-gray-300" />
											</div>
											<div className="relative flex justify-center text-sm">
												<span className="px-2 bg-white text-gray-500"></span>
											</div>
										</div>

										<Contract />

										<div className="mt-6 ">
											<form action="#" method="POST" className="space-y-6">
												<div>
													<label htmlFor="name" className="sr-only">
														SendDoges
													</label>
													<input
														type="text"
														// name="name"
														// id="name"
														// autoComplete="name"
														placeholder="0.0 BNB"
														required
														className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
													/>
												</div>

												<div className="flex justify-center">
													<button
														type="submit"
														className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													>
														Send Doges
													</button>
												</div>
												<div className="flex justify-center py-10">
													<div className="px-2">
														<button
															type="submit"
															className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
														>
															Send More Doges
														</button>
													</div>

													<div className="px-2">
														<button
															type="submit"
															className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
														>
															Sell Dogtreats
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
