import { toolbarItems } from '../mockdata'

const getFieldDetail = (key: string) => {
  return toolbarItems.find((item) => item.key === key)
}

export default getFieldDetail
