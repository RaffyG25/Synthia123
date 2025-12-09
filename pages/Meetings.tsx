import React from 'react';
import { Calendar, Clock, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Meetings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-8 bg-gray-50 dark:bg-slate-900 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Meetings</h2>
          <p className="text-gray-500 dark:text-slate-400">Plan meetings, check schedules, and stay connected.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-left dark:bg-slate-800 dark:border dark:border-slate-700">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="p-4 bg-gray-100 text-gray-600 rounded-full mb-4 dark:bg-slate-700 dark:text-slate-300">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1 dark:text-white">Schedule Meeting</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Pick a date and notify your team.</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/recording')}
            className="w-full h-full block bg-white p-6 rounded-2xl shadow-md border-2 border-red-100 hover:shadow-lg transition-all hover:border-red-300 dark:bg-slate-800 dark:border-red-900"
          >
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="p-4 bg-red-100 text-red-600 rounded-full mb-4 animate-pulse dark:bg-red-900/30 dark:text-red-400">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1 dark:text-white">Record Meeting</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Start live transcription & recording.</p>
            </div>
          </button>
          </div>

          <button 
            onClick={() => navigate('/meeting-history')}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-left dark:bg-slate-800 dark:border dark:border-slate-700"
          >
            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="p-4 bg-gray-100 text-gray-600 rounded-full mb-4 dark:bg-slate-700 dark:text-slate-300">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1 dark:text-white">Meeting History</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Access recordings and notes.</p>
            </div>
          </button>
        </div>

      <div className="bg-white p-6 rounded-2xl shadow-md dark:bg-slate-800 dark:border dark:border-slate-700">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white">Upcoming Meetings</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm font-medium text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-700">
                <th className="py-3 px-4">Meeting</th>
                <th className="py-3 px-4">Team</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-800 dark:text-white block">Design Review</span>
                  <span className="text-xs text-gray-500 dark:text-slate-400">ShopEase Dashboard</span>
                </td>
                <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">Kobam Design</span></td>
                <td className="py-4 px-4 text-gray-700 dark:text-slate-300">Feb 20, 2025</td>
                <td className="py-4 px-4 text-gray-700 dark:text-slate-300">09:00 AM</td>
                <td className="py-4 px-4">
                  <button onClick={() => navigate('/video')} className="px-3 py-1 bg-violet-600 text-white text-xs rounded hover:bg-violet-700">Join</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="py-4 px-4">
                  <span className="font-semibold text-gray-800 dark:text-white block">Weekly Sync</span>
                  <span className="text-xs text-gray-500 dark:text-slate-400">General Updates</span>
                </td>
                <td className="py-4 px-4"><span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">Internal</span></td>
                <td className="py-4 px-4 text-gray-700 dark:text-slate-300">Feb 21, 2025</td>
                <td className="py-4 px-4 text-gray-700 dark:text-slate-300">02:00 PM</td>
                <td className="py-4 px-4">
                  <button onClick={() => navigate('/video')} className="px-3 py-1 bg-violet-600 text-white text-xs rounded hover:bg-violet-700">Join</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Meetings;