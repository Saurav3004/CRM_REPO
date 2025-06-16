import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Palette,
  Globe,
  CreditCard,
  Users,
  Settings as SettingsIcon,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';



const Settings = () => {
  return (
    // const Settings = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [showPassword, setShowPassword] = useState(false);
//   const [notifications, setNotifications] = useState({
//     email: true,
//     push: false,
//     sms: true,
//     marketing: false
//   });

//   const tabs = [
//     { id: 'profile', label: 'Profile', icon: User },
//     { id: 'account', label: 'Account', icon: SettingsIcon },
//     { id: 'notifications', label: 'Notifications', icon: Bell },
//     { id: 'security', label: 'Security', icon: Shield },
//     { id: 'billing', label: 'Billing', icon: CreditCard },
//     { id: 'team', label: 'Team', icon: Users }
//   ];

//   const handleNotificationChange = (key) => {
//     setNotifications(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="space-y-6">
//             <div className="flex items-center space-x-6">
//               <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center">
//                 <User className="w-12 h-12 text-purple-600" />
//               </div>
//               <div className="space-y-2">
//                 <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
//                   Upload Photo
//                 </button>
//                 <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size 2MB.</p>
//               </div>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                 <input
//                   type="text"
//                   defaultValue="John"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   defaultValue="Doe"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   defaultValue="john.doe@example.com"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   defaultValue="+1 (555) 123-4567"
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
//                 <textarea
//                   rows={4}
//                   defaultValue="Event organizer and marketing professional with 8+ years of experience in audience engagement and community building."
//                   className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//             </div>
//           </div>
//         );

//       case 'notifications':
//         return (
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                   <div>
//                     <h4 className="font-medium text-gray-900">Email Notifications</h4>
//                     <p className="text-sm text-gray-500">Receive updates about your campaigns and events</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={notifications.email}
//                       onChange={() => handleNotificationChange('email')}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                   </label>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                   <div>
//                     <h4 className="font-medium text-gray-900">Push Notifications</h4>
//                     <p className="text-sm text-gray-500">Get push notifications on your devices</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={notifications.push}
//                       onChange={() => handleNotificationChange('push')}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                   </label>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                   <div>
//                     <h4 className="font-medium text-gray-900">SMS Notifications</h4>
//                     <p className="text-sm text-gray-500">Receive important updates via SMS</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={notifications.sms}
//                       onChange={() => handleNotificationChange('sms')}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                   </label>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                   <div>
//                     <h4 className="font-medium text-gray-900">Marketing Updates</h4>
//                     <p className="text-sm text-gray-500">Receive news about new features and tips</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={notifications.marketing}
//                       onChange={() => handleNotificationChange('marketing')}
//                       className="sr-only peer"
//                     />
//                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'security':
//         return (
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       className="w-full px-3 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     >
//                       {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
//                   <input
//                     type="password"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
//                   <input
//                     type="password"
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
//                   Update Password
//                 </button>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-200 pt-6">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
//               <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                 <div>
//                   <h4 className="font-medium text-gray-900">Enable 2FA</h4>
//                   <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
//                 </div>
//                 <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
//                   Enable
//                 </button>
//               </div>
//             </div>
//           </div>
//         );

//       case 'billing':
//         return (
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h3>
//               <div className="border border-gray-200 rounded-lg p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <h4 className="text-lg font-medium text-gray-900">Professional Plan</h4>
//                     <p className="text-sm text-gray-500">$79/month • Billed monthly</p>
//                   </div>
//                   <span className="inline-flex px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
//                     Active
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Next billing date: February 15, 2024
//                 </p>
//                 <div className="flex space-x-3">
//                   <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
//                     Upgrade Plan
//                   </button>
//                   <button className="border border-gray-200 hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
//                     Cancel Plan
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
//               <div className="border border-gray-200 rounded-lg p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
//                       <span className="text-white text-xs font-bold">VISA</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
//                       <p className="text-sm text-gray-500">Expires 12/26</p>
//                     </div>
//                   </div>
//                   <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return (
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                   <input
//                     type="text"
//                     defaultValue="Audience Republic Inc."
//                     className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
//                   <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
//                     <option>Pacific Time (PT)</option>
//                     <option>Mountain Time (MT)</option>
//                     <option>Central Time (CT)</option>
//                     <option>Eastern Time (ET)</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
//                   <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
//                     <option>English</option>
//                     <option>Spanish</option>
//                     <option>French</option>
//                     <option>German</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="p-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
//         <p className="text-gray-600">Manage your account settings and preferences.</p>
//       </div>

//       <div className="grid lg:grid-cols-4 gap-8">
//         {/* Sidebar */}
//         <div className="lg:col-span-1">
//           <nav className="space-y-1">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
//                   activeTab === tab.id
//                     ? 'bg-purple-50 text-purple-700 border border-purple-200'
//                     : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 <tab.icon className="w-5 h-5" />
//                 <span className="font-medium">{tab.label}</span>
//               </button>
//             ))}
//           </nav>
//         </div>

//         {/* Content */}
//         <div className="lg:col-span-3">
//           <div className="bg-white rounded-xl p-6 border border-gray-200">
//             {renderTabContent()}
            
//             {/* Save Button */}
//             <div className="flex justify-end pt-6 border-t border-gray-200 mt-6">
//               <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-200">
//                 <Save className="w-4 h-4" />
//                 <span>Save Changes</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
  )
}

export default Settings