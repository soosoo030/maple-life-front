import { atom, DefaultValue, selector } from 'recoil';
import TaskAPI from '../api/TaskAPI';
import { requestID } from './request';

const tasksAtom = atom({
  key: 'tasks',
  default: null,
});

export const asyncTasks = selector({
  key: 'asyncTasks',
  async get({ get }) {
    const tasks = get(tasksAtom);
    if (tasks !== null) {
      return tasks;
    } else {
      const res = await TaskAPI.getTasks();
      return res.data;
    }
  },
  set({ set }, tasks) {
    if (tasks instanceof DefaultValue) {
      set(tasksAtom, null);
    } else {
      set(tasksAtom, tasks);
    }
    set(requestID, (prev) => prev + 1);
  },
});

export const remainDailyTaskTime = selector({
  key: 'remainDailyTaskTime',
  get({ get }) {
    const tasks = get(asyncTasks);
    return tasks.data.available_task_time;
  },
});
