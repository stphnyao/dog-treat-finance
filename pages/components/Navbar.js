
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { PlusSmIcon } from "@heroicons/react/solid"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex">
								<h1 className="flex-shrink-0 flex items-center text-lg sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
									Dog Treat Finance
								</h1>
							</div>
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<button
										type="button"
										className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										<PlusSmIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
										<span>Connect to Wallet</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	)
}
