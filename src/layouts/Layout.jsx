import { Outlet } from 'react-router-dom'
import ShapeGrid from '../components/ShapeGrid'
import Navbar from '@/components/Navbar'

function Layout() {
  return (
    <div className="relative min-h-screen bg-[#120F17]">
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          speed={0.36}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor="#2F293A"
          hoverFillColor='#222'
          shape='square' // square, hexagon, circle, triangle
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
        />
      </div>
      <div className='relative z-100'>
        <Navbar />
        <div className="relative z-10 px-6 py-8 md:px-12 md:py-12 lg:px-24 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout