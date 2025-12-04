import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, MessageSquare, Hash, Users, X } from 'lucide-react';

const Collaboration: React.FC = () => {
  const navigate = useNavigate();
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [showJoinLinkDialog, setShowJoinLinkDialog] = useState(false);
  const [showJoinCodeDialog, setShowJoinCodeDialog] = useState(false);
  const [showCreateTeamDialog, setShowCreateTeamDialog] = useState(false);
  
  const [inviteLink, setInviteLink] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [teamLogo, setTeamLogo] = useState<File | null>(null);

  return (
    <div className="p-6 md:p-8 bg-gray-100 dark:bg-slate-900 h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Collaboration</h1>
        <button 
          onClick={() => setShowJoinDialog(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Join or create team</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 dark:bg-slate-800 dark:border-slate-700 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <MessageSquare className="w-5 h-5 text-gray-600 dark:text-slate-300" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Teams</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Card 1 */}
          <div 
            onClick={() => navigate('/workspace')}
            className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold">Logo</div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">SBIT-3K SIA101</h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400">8 members</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 pt-4 border-t border-gray-100 dark:border-slate-600 text-violet-600 dark:text-violet-400 text-sm font-medium">
              View workspace
            </div>
          </div>

          {/* Create New Card */}
          <button className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-slate-700/50 transition-colors">
            <Plus className="w-8 h-8 text-gray-400 mb-2" />
            <p className="font-medium text-gray-700 dark:text-slate-300 mb-1">Create a new team</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">Start a new workspace</p>
          </button>
        </div>
      </div>

      {/* Main Join or Create Dialog */}
      {showJoinDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Join or Create Team</h2>
              <button
                onClick={() => setShowJoinDialog(false)}
                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Join via Link */}
              <div
                onClick={() => {
                  setShowJoinDialog(false);
                  setShowJoinLinkDialog(true);
                }}
                className="p-5 border border-gray-200 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center min-h-[110px] hover:bg-gray-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
              >
                <Plus className="w-6 h-6 text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white mb-2" />
                <h3 className="text-base font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white">
                  Join via Link
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white text-center">
                  Paste an invite link
                </p>
              </div>

              {/* Join via Code */}
              <div
                onClick={() => {
                  setShowJoinDialog(false);
                  setShowJoinCodeDialog(true);
                }}
                className="p-5 border border-gray-200 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center min-h-[110px] hover:bg-gray-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
              >
                <Hash className="w-6 h-6 text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white mb-2" />
                <h3 className="text-base font-semibold mb-1 text-gray-900 dark:text-white">Join via Code</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white text-center">
                  Enter a team code
                </p>
              </div>

              {/* Create a Team */}
              <div
                onClick={() => {
                  setShowJoinDialog(false);
                  setShowCreateTeamDialog(true);
                }}
                className="p-5 border border-gray-200 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center min-h-[110px] hover:bg-gray-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group"
              >
                <Plus className="w-6 h-6 text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white mb-2" />
                <h3 className="text-base font-semibold mb-1 text-gray-900 dark:text-white">Create a Team</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-white text-center">
                  Start a new workspace
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Team via Link Dialog */}
      {showJoinLinkDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Join Team</h2>
              <button
                onClick={() => setShowJoinLinkDialog(false)}
                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Invite Link</label>
                <input
                  type="text"
                  placeholder="Paste your team invite link here"
                  value={inviteLink}
                  onChange={(e) => setInviteLink(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={() => setShowJoinLinkDialog(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setShowJoinLinkDialog(false);
                    setInviteLink('');
                  }}
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Team via Code Dialog */}
      {showJoinCodeDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Join Team</h2>
              <button
                onClick={() => setShowJoinCodeDialog(false)}
                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Invite Code</label>
                <input
                  type="text"
                  placeholder="Enter your team invite code"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={() => setShowJoinCodeDialog(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setShowJoinCodeDialog(false);
                    setInviteCode('');
                  }}
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Join Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Team Dialog */}
      {showCreateTeamDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create New Team</h2>
              <button
                onClick={() => setShowCreateTeamDialog(false)}
                className="text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Team Logo */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Team Logo</label>
                <div className="flex gap-4">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-gray-400 dark:text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={(e) => setTeamLogo(e.target.files?.[0] || null)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                      Upload a logo (PNG, JPG, or WEBP)
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Team Name</label>
                <input
                  type="text"
                  placeholder="Enter team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Team Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">Team Description</label>
                <textarea
                  placeholder="Describe your team's purpose..."
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[100px]"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={() => setShowCreateTeamDialog(false)}
                  className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setShowCreateTeamDialog(false);
                    setTeamName('');
                    setTeamDescription('');
                    setTeamLogo(null);
                  }}
                  className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                >
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaboration;