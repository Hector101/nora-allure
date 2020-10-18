export type Anchor = 'right' | 'left'

export type PushContentFunction = (value: DrawerChildren) => void

export type DrawerChildren =
  | React.ReactElement
  | JSX.Element
  | ((push: PushContentFunction) => React.ReactElement | JSX.Element)
  | null

export interface MenuItem {
  title: string
  href?: string
}

export enum NavTab {
  SHOP,
  HELP,
}
