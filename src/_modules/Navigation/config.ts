interface INavigationField {
  name: string
  path: string
  id: string
}

interface INavigationFields {
  [key: string] : INavigationField[]
}
const navigationFields: INavigationFields = {
  main: [
    {
      name: 'О нас',
      path: '#about',
      id: 'about'
    }
  ]
};

export function getLinks(key: string): INavigationField[] | undefined {
  return navigationFields[key];
}
