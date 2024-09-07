import { defineStore } from 'pinia';

export interface ResponseErrors {
  message: string;
  errors: Record<string, string[]>;
}

export interface AppState {
  errors: ResponseErrors['errors'];
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    errors: {},
  }),
  actions: {
    setErrors(errors: ResponseErrors['errors']) {
      this.errors = errors;
    },
  },
});
