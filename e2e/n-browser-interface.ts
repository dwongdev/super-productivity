import { NightwatchAPI } from 'nightwatch';

export interface AddTaskWithReminderParams {
  title: string;
  taskSel?: string;
  scheduleTime?: number;
}

export interface NBrowser extends NightwatchAPI {
  addTask: (taskTitle: string, isSkipClose?: boolean) => NBrowser;
  addTaskWithNewTag: (tagName: string, taskTitle: string) => NBrowser;
  addNote: (noteTitle: string) => NBrowser;
  draftTask: (taskTitle: string) => NBrowser;
  createAndGoToDefaultProject: () => NBrowser;
  noError: () => NBrowser;
  loadAppAndClickAwayWelcomeDialog: (url?: string) => NBrowser;
  openPanelForTask: (taskSel: string) => NBrowser;
  sendKeysToActiveEl: (keys: string | string[]) => NBrowser;
  addTaskWithReminder: (params: AddTaskWithReminderParams) => NBrowser;
  navigateToPluginSettings: () => NBrowser;
  checkPluginStatus: (pluginName: string, expectedEnabled?: boolean) => NBrowser;
  enableTestPlugin: (pluginName?: string) => NBrowser;
  setupWebdavSync: (config: {
    baseUrl: string;
    username: string;
    password: string;
    syncFolderPath: string;
  }) => NBrowser;
  triggerSync: () => NBrowser;
}
