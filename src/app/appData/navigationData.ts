import { INavProps } from "../../entities/headerNavigation/ui/navigationMenu";

export const navMenuLinks: INavProps['links'] = [
  { to: 'products',
    text: 'Products',
    type: 'dropdown',
    inner: [
      {to: 'products/evercourse', text: 'evercourse'},
      {to: 'products/evercourse-pro', text: 'evercourse Pro'},
      {to: 'products/evercourse-plus', text: 'evercourse Plus'}
    ]
  },
  { to: 'cases',
    text: 'Cases',
    type: 'dropdown',
    inner: [
      {to: 'cases/1', text: '1'},
      {to: 'cases/2', text: '2'},
      {to: 'cases/3', text: '3'}
    ]
  },
  { to: 'carreer',
    text: 'Carreer',
    type: 'icon'
  },
  { to: 'contacts',
    text: 'Contacts',
    type: 'simple'
  }
]