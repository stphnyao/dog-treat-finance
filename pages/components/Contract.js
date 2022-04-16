const category = [
	{ name: "📝 Contract Balance", amount: "600 BNB" },
	{ name: "💰 Your Wallet", amount: "300 BNB" },
	{ name: "🐶 Your Dog Treats", amount: "2.7 BNB" },
	// More people...
]

export default function Contract() {
	return (
		<div >
			<table className="min-w-full divide-y divide-gray-300">
				<tbody className="divide-y divide-gray-200 bg-white">
					{category.map((category) => (
						<tr key={category.email}>
							<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
								{category.name}
							</td>
							<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.amount}</td>

						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
