import { BarChart2, DollarSign, ShoppingCart, Users } from "react-feather"

const DashboardCard = ({ title, value, icon, color }) => (
  <div className={`bg-primary rounded-lg shadow-lg p-6 ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <p className="text-3xl font-semibold text-white">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-30`}>{icon}</div>
    </div>
  </div>
)

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <DashboardCard title="Total Revenue" value="$54,321" icon={<DollarSign size={24} />} color="text-green-500" />
        <DashboardCard title="Total Orders" value="1,234" icon={<ShoppingCart size={24} />} color="text-blue-500" />
        <DashboardCard title="Total Customers" value="5,678" icon={<Users size={24} />} color="text-yellow-500" />
        <DashboardCard title="Conversion Rate" value="3.45%" icon={<BarChart2 size={24} />} color="text-purple-500" />
      </div>
      <div className="bg-primary rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead className="text-xs uppercase bg-secondary">
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="px-4 py-2">#12345</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Product A</td>
                <td className="px-4 py-2">$99.99</td>
                <td className="px-4 py-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="px-4 py-2">#12346</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Product B</td>
                <td className="px-4 py-2">$149.99</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Pending</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">#12347</td>
                <td className="px-4 py-2">Bob Johnson</td>
                <td className="px-4 py-2">Product C</td>
                <td className="px-4 py-2">$199.99</td>
                <td className="px-4 py-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Cancelled</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

