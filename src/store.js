import { shallowRef } from 'vue'

const initialProject = {
  id: '',
  title: '',
  component: null,
  date: '',
  video: '',
}

export const currentProject = shallowRef(initialProject)
