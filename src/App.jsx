import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Card } from 'react-bootstrap'

function App() {

  return (
    <>
      <Header />
      <div className='container  mt-5'>
        {/* 1 part */}
        <div>
          <h1 className='text-dark ' style={{ height: '60px' }}>Discover our trip planner</h1>
        </div>

        <div className="row mt-5 shadow p-3 mb-5 bg-body-tertiary rounded  " >
          <div className="col-lg-6 fw-bold   bg-info "  >
            <div className='  f1 '>
              <h3 style={{ height: '40px' }}>Create your own itinerary</h3>
              <p className=' mt-3 text-align-start text-light'>Create a fully customized day-by-day itinerary and discover the hidden gems of Saudi.</p>
              <button className='btn btn-primary mt-3 ' style={{ width: '130px', height: '60px', borderRadius: '40px' }}>Learn more</button>
            </div>
          </div>

          <div className="col-lg-6"  >
            <img style={{ height: '430px' }} src="https://scth.scene7.com/is/image/scth/gallery_05:crop-375x210?defaultImage=gallery_05&wid=580&hei=324" alt="" />
          </div>
        </div>

        {/* 2 part */}
        <div className='mt-5'>
          <h2 className='text-dark' style={{ height: '40px' }} >Useful information</h2>
        </div>
        <hr />
        <div className="row mt-5  shadow p-3 mb-5 bg-body-tertiary rounded " >
          <div className="col-lg-6 "  >
            <img style={{ height: '430px' }} src="https://scth.scene7.com/is/image/scth/transportation-plan-your-trip:
            crop-375x210?defaultImage=transportation-plan-your-trip&wid=580&hei=324" alt="" />
          </div>

          <div className="col-lg-6 fw-bold "  >
            <div className='f1'>
              <h3 className='text-dark' style={{ height: '40px' }}>Transportation</h3>
              <p className='mt-3 '>With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t
                be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
              <button className='btn btn-primary mt-3' style={{ width: '130px', height: '60px', borderRadius: '40px' }}>Learn more</button>
            </div>
          </div>

        </div>

        {/* 3 part */}
        <div className="row mt-5 shadow p-3 mb-5 bg-body-tertiary rounded" >
          <div className="col-lg-6  fw-bold   "  >
            <div className='f1'>
              <h3 className='text-dark' style={{ height: '40px' }}>Road Trip Guide</h3>
              <p className='mt-3 '> Routes, rental cars and local tips: Here's everything you need to know for an unforgettable road trip adventure. </p>
              <button className='btn btn-primary mt-3' style={{ width: '130px', height: '60px', borderRadius: '40px' }}>Learn more</button>
            </div>
          </div>

          <div className="col-lg-6"  >
            <img style={{ height: '430px' }} src="https://scth.scene7.com/is/image/scth/getting_around_01_1920x1080:crop-375x210?defaultImage=getting_around_01_1920x1080&wid=580&hei=324" alt="" />
          </div>
        </div>

        {/* 4 part */}
        <div className="row mt-5 shadow p-3 mb-5 bg-body-tertiary rounded" >
          <div className="col-lg-6"  >
            <img style={{ height: '430px' }} src=" https://media.istockphoto.com/id/1391369779/photo/guide-pointing-out-features-of-diriyah-ruins-near-riyadh.jpg?s=612x612&w=0&k=20&c=_aUeVbIcbh5v45R3fiwYQIFLE91SplRJ62kAqaTIZ6c=" alt="" />
          </div>

          <div className="col-lg-6  fw-bold   "  >
            <div className='f1'>
              <h3 className='text-dark' style={{ height: '40px' }}>Your best Saudi holiday awaits</h3>
              <p className='mt-3 '>Find the perfect holiday in Saudi. Dive into the Red Sea, explore Riyadh’s cultural gems or unwind on Jeddah’s beaches. Book now and create lifelong memories. </p>
              <button className='btn btn-primary mt-3' style={{ width: '130px', height: '60px', borderRadius: '40px' }}>Learn more</button>
            </div>
          </div>

        </div>

        <div className='mt-5'>
          <h2 className='py-5 text-dark'>Get inspired to plan your trip</h2>
        </div>

        <div className='row '>
          <div className='col-lg-3 p-3 text-dark'>
            <Card style={{ height: '300px' }}>
              <Card.Img variant="top" src=" https://scth.scene7.com/is/image/scth/Packages-3:crop-375x210?defaultImage=Packages-3&wid=580&hei=324" />
              <Card.Body>
                <Card.Title style={{ height: '30px' }}> Destinations</Card.Title>
                <hr />
                <Card.Text>
                  Learn More
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-3 p-3'>
            <Card style={{ height: '300px' }}>
              <Card.Img variant="top" src=" https://scth.scene7.com/is/image/scth/114798-1:crop-375x210?defaultImage=114798-1&wid=580&hei=324" />
              <Card.Body>
                <Card.Title style={{ height: '30px' }}>Experinces & tours</Card.Title>
                <hr />
                <Card.Text>
                  Learn More
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-3 p-3'>
            <Card style={{ height: '300px' }}>
              <Card.Img variant="top" src="https://scth.scene7.com/is/image/scth/brand-page-hero-1920-232:crop-375x210?defaultImage=brand-page-hero-1920-232&wid=580&hei=324" />
              <Card.Body>
                <Card.Title style={{ height: '30px' }}>Activities & attractions</Card.Title>
                <hr />
                <Card.Text>
                  Learn More
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-3 p-3 mb-5'>
            <Card style={{ height: '300px' }}>
              <Card.Img variant="top" src=" https://scth.scene7.com/is/image/scth/itinerary-landing-new-a:crop-375x210?defaultImage=itinerary-landing-new-a&wid=580&hei=324" />
              <Card.Body>
                <Card.Title style={{ height: '30px' }}>ltineraries</Card.Title>
                <hr />
                <Card.Text>
                  Learn More
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <hr />

        </div>


      </div>


      <Footer />
    </>
  )
}

export default App
