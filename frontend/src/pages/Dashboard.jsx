import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import UserCard from '../components/UserCard';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ city: "", age: "" });

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed top-0 self-start">
        <Sidebar />
      </div>

      <main className="ml-24 flex-1 overflow-y-auto bg-[#f9fafb] p-6 relative">
        <div className="sticky top-0 bg-[#f9fafb] z-20 pb-4">
          <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilters={setFilters} />
        </div>

        <div className='w-full overflow-x-auto mt-2'>
          <UserCard searchTerm={searchTerm} filters={filters} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


// const Dashboard = () => {
//   const stats = [
//     {
//       title: 'Total Contacts',
//       value: '12,847',
//       change: '+12%',
//       trend: 'up',
//       icon: Users,
//       color: 'purple'
//     },
//     {
//       title: 'Active Campaigns',
//       value: '23',
//       change: '+3',
//       trend: 'up',
//       icon: TrendingUp,
//       color: 'teal'
//     },
//     {
//       title: 'Upcoming Events',
//       value: '8',
//       change: '+2',
//       trend: 'up',
//       icon: Calendar,
//       color: 'orange'
//     },
//     {
//       title: 'Revenue (MTD)',
//       value: '$47,892',
//       change: '-5%',
//       trend: 'down',
//       icon: DollarSign,
//       color: 'green'
//     }
//   ];

//   const recentActivities = [
//     { type: 'Campaign', name: 'Summer Festival 2024', status: 'Active', engagement: '94%' },
//     { type: 'Event', name: 'Music Awards Gala', status: 'Draft', engagement: '—' },
//     { type: 'Campaign', name: 'Spring Concert Series', status: 'Completed', engagement: '87%' },
//     { type: 'Event', name: 'Jazz Night', status: 'Active', engagement: '78%' },
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       purple: 'from-purple-500 to-purple-600',
//       teal: 'from-teal-500 to-teal-600',
//       orange: 'from-orange-500 to-orange-600',
//       green: 'from-green-500 to-green-600'
//     };
//     return colors[color];
//   };

//   return (
//     <div className="p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
//         <p className="text-gray-600">Welcome back! Here's what's happening with your audience today.</p>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {stats.map((stat, index) => (
//           <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
//             <div className="flex items-center justify-between mb-4">
//               <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(stat.color)} flex items-center justify-center`}>
//                 <stat.icon className="w-6 h-6 text-white" />
//               </div>
//               <button className="p-1 hover:bg-gray-100 rounded">
//                 <MoreVertical className="w-4 h-4 text-gray-400" />
//               </button>
//             </div>
//             <div className="space-y-1">
//               <p className="text-sm font-medium text-gray-600">{stat.title}</p>
//               <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//               <div className="flex items-center space-x-1">
//                 {stat.trend === 'up' ? (
//                   <ArrowUp className="w-4 h-4 text-green-500" />
//                 ) : (
//                   <ArrowDown className="w-4 h-4 text-red-500" />
//                 )}
//                 <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
//                   {stat.change}
//                 </span>
//                 <span className="text-sm text-gray-500">vs last month</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="grid lg:grid-cols-3 gap-8">
//         {/* Chart Section */}
//         <div className="lg:col-span-2">
//           <div className="bg-white rounded-xl p-6 border border-gray-200">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Audience Growth</h3>
//               <select className="text-sm border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
//                 <option>Last 7 days</option>
//                 <option>Last 30 days</option>
//                 <option>Last 3 months</option>
//               </select>
//             </div>
//             <div className="h-64 bg-gradient-to-t from-purple-50 to-transparent rounded-lg flex items-end justify-center relative overflow-hidden">
//               <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
//                 {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
//                   <div
//                     key={index}
//                     className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm w-8 transition-all duration-500 hover:from-teal-500 hover:to-teal-400"
//                     style={{ height: `${height}%` }}
//                   />
//                 ))}
//               </div>
//               <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-gray-500">
//                 <span>Mon</span>
//                 <span>Tue</span>
//                 <span>Wed</span>
//                 <span>Thu</span>
//                 <span>Fri</span>
//                 <span>Sat</span>
//                 <span>Sun</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="bg-white rounded-xl p-6 border border-gray-200">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
//             <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View All</button>
//           </div>
//           <div className="space-y-4">
//             {recentActivities.map((activity, index) => (
//               <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                 <div className="flex-1">
//                   <div className="flex items-center space-x-2 mb-1">
//                     <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {activity.type}
//                     </span>
//                     <span className={`text-xs font-medium px-2 py-1 rounded ${
//                       activity.status === 'Active' ? 'text-green-700 bg-green-100' :
//                       activity.status === 'Draft' ? 'text-yellow-700 bg-yellow-100' :
//                       'text-gray-700 bg-gray-100'
//                     }`}>
//                       {activity.status}
//                     </span>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">{activity.name}</p>
//                   <p className="text-xs text-gray-500">Engagement: {activity.engagement}</p>
//                 </div>
//                 <button className="p-1 hover:bg-gray-100 rounded">
//                   <Eye className="w-4 h-4 text-gray-400" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };