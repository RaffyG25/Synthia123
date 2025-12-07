import React, { useState, useEffect } from 'react';
import { Plus, MoreHorizontal, Play, Square, X, Calendar, Repeat } from 'lucide-react';

const Tasks: React.FC = () => {
  const [view, setView] = useState<'board' | 'list'>('list');
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>('today-content');
  const [showReschedulePopup, setShowReschedulePopup] = useState(false);

  useEffect(() => {
    if (selectedTask) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedTask]);

  const tasks = {
    todo: [
      { id: 1, title: 'Wireframe Homepage', tags: ['Blueprint'], date: 'Feb 23', checklist: '0/20', status: 'In Progress', priority: 'High', workspace: 'Capstone 101', description: 'Create initial low-fidelity wireframes for the landing page.' },
      { id: 2, title: 'Create UI Style Guide', tags: ['Design'], date: 'Feb 28', checklist: '0/14', status: 'To Do', priority: 'Medium', workspace: 'Capstone 101', description: 'Define typography, color palette, and component library.' },
    ],
    ongoing: [
      { id: 3, title: 'High-Fidelity Homepage', tags: ['Pixel Perfect'], date: 'Tomorrow', checklist: '10/20', active: true, status: 'In Progress', priority: 'High Priority', workspace: 'Capstone 101', description: 'Draft the initial wireframes.' },
    ],
    completed: [
      { id: 4, title: 'Prototype for Testing', tags: ['Proto'], date: 'Jan 28', checklist: '19/19', status: 'Completed', priority: 'Low', workspace: 'Capstone 101', description: 'Interactive prototype.' },
    ]
  };

  const today = [
    { id: 10, title: 'Wireframe Homepage', overdue: true, workspace: 'Capstone 101' },
    { id: 11, title: 'High-Fidelity Homepage Design', overdue: true, workspace: 'Capstone 101' },
    { id: 12, title: 'Create UI Style Guide', description: 'Define colors, typography, and components.', workspace: 'Capstone 101' },
  ];

  const personalTasks = [
    { id: 20, title: 'Buy groceries', dueDate: 'Tomorrow', category: 'Personal' },
    { id: 21, title: 'Gym session - 6 PM', dueDate: 'Today', category: 'Personal' },
  ];

  const workspaceTasks = [
    { id: 22, title: 'Review design mockups', dueDate: 'Nov 20 • Workspace: Design Team', category: 'Workspace' },
  ];

  const upcomingTasks = [
    { id: 30, date: '19 Nov - Tomorrow - Wednesday', title: 'API Integration', workspace: 'Internal Tools' },
    { id: 31, date: '20 Nov - Thursday', title: 'Write Documentation', workspace: 'Internal Tools' },
  ];

  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-900 relative">
      {/* Header */}
      <div className="flex-shrink-0 bg-white dark:bg-slate-800 p-6 border-b border-gray-200 dark:border-slate-700 space-y-4">
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg font-semibold text-sm hover:bg-violet-700 flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>New Task</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setView('board')} 
            className={`px-4 py-2 text-sm font-semibold transition-colors ${view === 'board' ? 'text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white'}`}
          >
            Board
          </button>
          <button 
            onClick={() => setView('list')} 
            className={`px-4 py-2 text-sm font-semibold transition-colors ${view === 'list' ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white'}`}
          >
            List
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {view === 'board' ? (
          <div className="flex-1 overflow-x-auto p-6 md:p-8">
            <div className="flex space-x-6 min-w-max h-full">
              {/* To Do Column */}
              <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-500"></span> To Do
                  </h3>
                  <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">2</span>
                </div>
                <div className="space-y-3 overflow-y-auto">
                  {tasks.todo.map(task => (
                    <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 cursor-pointer hover:shadow-md transition-shadow relative group">
                      <div className="flex justify-between mb-2">
                        <span className="px-2 py-0.5 bg-violet-100 text-violet-600 text-xs rounded-full font-medium dark:bg-violet-900/30 dark:text-violet-300">{task.tags[0]}</span>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{task.title}</h4>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                        <span>{task.date}</span>
                        <span>{task.checklist}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                          className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* On Going Column */}
              <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span> On Going
                  </h3>
                  <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">1</span>
                </div>
                <div className="space-y-3 overflow-y-auto">
                  {tasks.ongoing.map(task => (
                    <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 cursor-pointer hover:shadow-md transition-shadow relative group">
                      <div className="flex justify-between mb-2">
                        <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium dark:bg-yellow-900/30 dark:text-yellow-300">{task.tags[0]}</span>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="h-20 bg-yellow-50 dark:bg-yellow-900/20 rounded mb-2 flex items-center justify-center text-yellow-700 dark:text-yellow-500 font-bold text-xs">Preview</div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{task.title}</h4>
                      <div className="flex justify-between text-xs text-red-500 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                        <span>{task.date}</span>
                        <span className="text-gray-500 dark:text-slate-400">{task.checklist}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                          className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completed Column */}
              <div className="w-80 flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-700 dark:text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Completed
                  </h3>
                  <span className="bg-white dark:bg-slate-700 px-2 py-0.5 rounded text-xs text-gray-500 dark:text-slate-300">1</span>
                </div>
                <div className="space-y-3 overflow-y-auto">
                  {tasks.completed.map(task => (
                    <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 opacity-75 relative group">
                      <div className="flex justify-between mb-2">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium dark:bg-green-900/30 dark:text-green-300">{task.tags[0]}</span>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2 line-through decoration-gray-400">{task.title}</h4>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400 mt-4 pt-3 border-t border-gray-100 dark:border-slate-700">
                        <span>{task.date}</span>
                        <span>{task.checklist}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedTask(task); }}
                          className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // LIST VIEW
          <div className="flex flex-1 h-full">
            {/* Sidebar */}
            <div className="w-64 bg-white dark:bg-slate-800 p-6 border-r border-gray-200 dark:border-slate-700 flex-shrink-0 overflow-y-auto">
              <nav className="flex flex-col space-y-2">
                {/* Categories Section */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider px-2 mb-3">Categories</h3>
                  
                  <button 
                    onClick={() => setActiveCategory('personal-content')}
                    className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${activeCategory === 'personal-content' ? 'bg-gray-100 dark:bg-slate-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Personal Tasks</span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 ml-auto">{personalTasks.length}</span>
                  </button>

                  <button 
                    onClick={() => setActiveCategory('workspace-content')}
                    className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${activeCategory === 'workspace-content' ? 'bg-gray-100 dark:bg-slate-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m0 0h-.581m.581 0a1 1 0 11-2 0m2 0a1 1 0 10-2 0m-6 0H2m16.581 0a1 1 0 11-2 0m2 0a1 1 0 10-2 0"></path></svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Workspace Tasks</span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 ml-auto">{workspaceTasks.length}</span>
                  </button>
                </div>

                {/* Views Section */}
                <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider px-2 mb-3">Views</h3>
                  
                  <button 
                    onClick={() => setActiveCategory('today-content')}
                    className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${activeCategory === 'today-content' ? 'bg-gray-100 dark:bg-slate-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <Calendar className="w-5 h-5 text-violet-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Today</span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 ml-auto">{today.length}</span>
                  </button>

                  <button 
                    onClick={() => setActiveCategory('upcoming-content')}
                    className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${activeCategory === 'upcoming-content' ? 'bg-gray-100 dark:bg-slate-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Upcoming</span>
                  </button>

                  <button 
                    onClick={() => setActiveCategory('completed-content')}
                    className={`w-full text-left flex items-center space-x-3 p-2 rounded-lg transition-colors ${activeCategory === 'completed-content' ? 'bg-gray-100 dark:bg-slate-700' : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'}`}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLineCap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">Completed</span>
                  </button>
                </div>
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-slate-900">
              {/* Personal Tasks */}
              {activeCategory === 'personal-content' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Personal Tasks</h2>
                    <button className="px-3 py-2 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Create Personal Task</span>
                    </button>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
                    <p className="text-sm text-blue-800 dark:text-blue-300">These are tasks for your personal productivity. Only you can see and manage these tasks.</p>
                  </div>
                  <div className="space-y-3">
                    {personalTasks.map(task => (
                      <div key={task.id} className="flex items-start p-3 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm transition-shadow">
                        <input type="checkbox" className="mt-1 h-4 w-4 text-blue-600 border-gray-300 dark:border-slate-600 rounded" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-semibold text-gray-800 dark:text-white">{task.title}</p>
                          <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Due: {task.dueDate}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">{task.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Workspace Tasks */}
              {activeCategory === 'workspace-content' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Workspace Tasks</h2>
                    <button className="px-3 py-2 bg-orange-500 text-white rounded-lg font-semibold text-sm hover:bg-orange-600 flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Create Workspace Task</span>
                    </button>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded mb-6">
                    <p className="text-sm text-orange-800 dark:text-orange-300">These are tasks for your workspace/team projects. You can share and collaborate with team members.</p>
                  </div>
                  <div className="space-y-3">
                    {workspaceTasks.map(task => (
                      <div key={task.id} className="flex items-start p-3 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:shadow-sm transition-shadow">
                        <input type="checkbox" className="mt-1 h-4 w-4 text-orange-600 border-gray-300 dark:border-slate-600 rounded" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-semibold text-gray-800 dark:text-white">{task.title}</p>
                          <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Due: {task.dueDate}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">{task.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Today */}
              {activeCategory === 'today-content' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Today</h2>
                  
                  <div className="mb-8 relative">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300">Overdue</h3>
                      <button 
                        onClick={() => setShowReschedulePopup(!showReschedulePopup)}
                        className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
                      >
                        Reschedule
                      </button>
                    </div>
                    
                    {showReschedulePopup && (
                      <div className="absolute right-0 top-8 z-10 w-72 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 p-4">
                        <div className="space-y-2 mb-4">
                          <button className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-5 h-5 text-green-500" />
                              <span className="text-sm text-gray-700 dark:text-slate-300">Today</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-slate-400">Tue</span>
                          </button>
                          <button className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700">
                            <div className="flex items-center space-x-2">
                              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                              <span className="text-sm text-gray-700 dark:text-slate-300">Tomorrow</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-slate-400">Wed</span>
                          </button>
                          <button className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700">
                            <div className="flex items-center space-x-2">
                              <Repeat className="w-5 h-5 text-purple-500" />
                              <span className="text-sm text-gray-700 dark:text-slate-300">This weekend</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-slate-400">Sat</span>
                          </button>
                        </div>
                        <div className="flex space-x-2 pt-2 border-t border-gray-100 dark:border-slate-700">
                          <button className="flex-1 p-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-slate-600">Time</button>
                          <button className="flex-1 p-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 text-sm rounded-md hover:bg-gray-200 dark:hover:bg-slate-600">Repeat</button>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      {today.filter(t => t.overdue).map(task => (
                        <div key={task.id} className="flex items-start p-2 border-b border-gray-200 dark:border-slate-700">
                          <input type="checkbox" className="mt-1 h-4 w-4 text-red-600 border-gray-300 dark:border-slate-600 rounded" />
                          <div className="ml-3 flex-1">
                            <p className="text-sm text-gray-800 dark:text-white">{task.title}</p>
                            <p className="text-xs text-red-600 dark:text-red-400">Yesterday</p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-slate-400">{task.workspace}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">7 Dec - Today</h3>
                    <div className="space-y-3">
                      {today.filter(t => !t.overdue).map(task => (
                        <div key={task.id} className="flex items-start p-2 border-b border-gray-200 dark:border-slate-700">
                          <input type="checkbox" className="mt-1 h-4 w-4 text-violet-600 border-gray-300 dark:border-slate-600 rounded" />
                          <div className="ml-3 flex-1">
                            <p className="text-sm text-gray-800 dark:text-white">{task.title}</p>
                            {(task as any).description && <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">{(task as any).description}</p>}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-slate-400">{task.workspace}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Upcoming */}
              {activeCategory === 'upcoming-content' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Upcoming</h2>
                  <div className="space-y-4">
                    {upcomingTasks.map(task => (
                      <div key={task.id}>
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">{task.date}</h3>
                        <div className="flex items-start p-2 border-b border-gray-200 dark:border-slate-700">
                          <input type="checkbox" className="mt-1 h-4 w-4 text-gray-500 border-gray-300 dark:border-slate-600 rounded" />
                          <div className="ml-3 flex-1">
                            <p className="text-sm text-gray-800 dark:text-white">{task.title}</p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-slate-400">{task.workspace}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed */}
              {activeCategory === 'completed-content' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Activity: All projects</h2>
                    <div className="flex space-x-2">
                      <button className="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Everyone</button>
                      <button className="text-sm text-gray-600 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">Completed tasks</button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">15 Nov - Saturday</h3>
                      <div className="flex items-center p-2 border-b border-gray-200 dark:border-slate-700">
                        <img src="https://i.pravatar.cc/100?img=5" alt="avatar" className="w-8 h-8 rounded-full" />
                        <div className="ml-3 flex-1">
                          <p className="text-sm text-gray-800 dark:text-white"><b>Peter Parker</b> completed a task: <span className="font-medium">Prototype for Usability Testing</span></p>
                          <p className="text-xs text-gray-500 dark:text-slate-400">11:30 AM</p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-slate-400">Capstone 101</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* TASK DETAILS MODAL */}
      {selectedTask && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
            onClick={() => setSelectedTask(null)}
          ></div>

          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg dark:bg-slate-800">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-violet-600 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedTask.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedTask(null)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">STATUS</p>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300">
                      {selectedTask.status || 'In Progress'}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">PRIORITY</p>
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-300">
                      {selectedTask.priority || 'High Priority'}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">DUE DATE</p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">11/20/2025</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">WORKSPACE</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{selectedTask.workspace || 'Capstone 101'}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">DESCRIPTION</p>
                  <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                    {selectedTask.description || 'No description provided for this task.'}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-gray-50 dark:bg-slate-700/30 flex justify-between items-center border-t border-gray-100 dark:border-slate-700">
                <button className="text-violet-600 text-sm font-semibold hover:text-violet-700">View all details</button>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors">
                    <Play className="w-4 h-4 fill-current" /> Play
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-semibold hover:bg-violet-700 transition-colors">
                    <Square className="w-4 h-4 fill-current" /> Stop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
