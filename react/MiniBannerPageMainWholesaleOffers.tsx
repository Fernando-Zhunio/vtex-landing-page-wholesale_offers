import React/* , { useEffect } */ from 'react'
import { useCssHandles } from 'vtex.css-handles'
// import imgBackgroundMiniBanner from '../assets/landing-remate/background_remate.jpg'
// import imgMiniBanner from '../assets/landing-remate/banner_vertical_mayoristas1.svg'
// import { useRuntime } from 'vtex.render-runtime';

// import imgBannerMain from '../assets/landing-remate/banner_page_landing_2.svg';

// import imgBannerMain from '../assets/landing-remate/banner_page_landing_2.svg';
// import imgBackground from '../assets/landing-remate/fondo_page_remate_landing.jpg';
// import stylesLandingPage from './styles/stylesLandingPage.css';
type Props = {
  Component: any,
  Titlecomponent: any,
  isActive?: boolean,
  // redirect_to?: string,
  background_color?: string,
  background_image_url?: string,
  ImageBanner: any
}

function MiniBannerPageMainWholesaleOffers({ Component, Titlecomponent, ImageBanner, isActive = true, background_color = '#D70101', background_image_url = 'none' }: Props) {
  if (!isActive) return null;

  const styles = useCssHandles([
    'grid-mini-banner',
    'grid-header',
    'grid-title',
    'grid-body'
  ]);

  // function redirectProduct(href: string) {
  //   navigate({
  //     to: href
  //   })
  // }
  const backgroundImage = {
    backgroundImage: `url(${background_image_url})`
  }
  const backgroundColor = {
    backgroundColor: background_color
  }
  const backgroundFixed = {
    backgroundAttachment: 'fixed'
  }
  // const { navigate } = useRuntime()

  return (
    <React.Fragment>
      <Titlecomponent />
      <div>
        <div style={backgroundColor} className={styles['grid-mini-banner']}>
          <div style={{ ...backgroundImage, ...backgroundFixed }} className={styles['grid-header']}>
            <ImageBanner />
          </div>
          <div className={styles['grid-body']}>
            <Component />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

MiniBannerPageMainWholesaleOffers.schema = {
  title: 'Props de Mini banner',
  description: 'Mini banner para la pagina de Ofertas al por mayor',
  type: 'object',
  properties: {
    isActive: {
      type: 'boolean',
      default: true,
      description: "Activar Mini banner de ofertas al por mayor",
      title: "Banner de ofertas al por mayor"
    },
    background_color: {
      type: 'string',
      default: '#D70101',
      description: "Color de fondo del banner",
      title: "Color de fondo"
    },
    background_image_url: {
      type: 'string',
      default: 'none',
      description: "Imagen de fondo del banner",
      title: "Imagen de fondo"
    }
  }
}

export default MiniBannerPageMainWholesaleOffers
