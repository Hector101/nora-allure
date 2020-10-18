import React from 'react'
import Head from 'next/head'

type PageHeaderProps = {
  title: string
  description?: string
  image_url?: string
  ogType?: 'website'
  ogDescription?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  title,
  description,
  image_url = 'https://res.cloudinary.com/dqssxfxct/image/upload/v1602934281/nora_allure_logo_tpvgfl.png',
  ogType = 'website',
  ogDescription,
}) => {
  const desc =
    description || 'Place your orders on all your fashion need.'

  return (
    <>
      <Head>
        <title>{title} | Noraallure Store</title>
        <meta name="description" content={desc} />
        <meta name="theme-color" content="#4b5548" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription || desc} />
        <meta property="og:image" content={image_url} />
        <meta property="og:site_name" content="Noraallure Store" />
        <meta property="og:type" content={ogType} />
        <meta property="og:image:alt" content={title} />
      </Head>
      {children}
    </>
  )
}
export default PageHeader
