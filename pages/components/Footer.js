import { Fragment } from "react"

export default function Footer() {
	return (
		<div className="relative bg-gray-900 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
				<h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Ready to get started?</h2>
				<p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
					Stay tuned for our launch by signing up here.
				</p>
				<div classname="flex justify-center">
					<form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-auto  mt-10">
						<div className="sm:flex">
							<div className="min-w-0 flex-1">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input
									id="email"
									type="email"
									placeholder="Enter your email"
									className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
								/>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<button
									type="submit"
									className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
								>
									Sign Up
								</button>
							</div>
						</div>
					</form>
				</div>

				<p className="mt-8 text-center text-base text-gray-400">&copy; 2022 Dog Treat Finance. All rights reserved.</p>
			</div>
		</div>
	)
}
