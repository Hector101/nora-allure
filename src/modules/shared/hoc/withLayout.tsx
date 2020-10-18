import { NextPage } from 'next'
import React from 'react'

import MainLayout from '../components/Layout/MainLayout'
import LightLayout from '../components/Layout/LightLayout'

const layouts = {
  main: MainLayout,
  light: LightLayout,
}

function withLayout<T>(
  Component: NextPage<T>,
  variant: keyof typeof layouts = 'main',
  layoutsProps?: React.ComponentProps<typeof layouts[typeof variant]>
) {
  const Layout = layouts[variant]

  const WithLayoutComponent = (props: T) => (
    <Layout {...layoutsProps}>
      <Component {...props} />
    </Layout>
  )

  if ('getInitialProps' in Component) {
    console.log('has initial props')
    WithLayoutComponent.getInitialProps = Component.getInitialProps
  }

  return WithLayoutComponent
}

export default withLayout
