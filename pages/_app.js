import HomeLayouter from '../layouter/HomeLayouter'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayouter>
      <div className='box p-2 m-2'>
        <Component {...pageProps} />
      </div>
    </HomeLayouter>
  )
}

export default MyApp
