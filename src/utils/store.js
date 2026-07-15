import { shallowRef } from 'vue'

const initialProject = {
  id: '',
  title: '',
  component: null,
  date: '',
  video: '',
  description: '',
  link: '',
}

export const currentProject = shallowRef(initialProject)
