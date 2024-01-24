import Layout from "../layout/Layout"
import PageSelection from "../pages/PageSelection"

const components = [ "videocards", "processors", "cases", "coolers", "hdd", "moutherboards", "power", "ram", "ssd"]


const routeComponents = components.map((path) => (
        {
    path: `/${path}`,
    element: 
      (<Layout>
        <PageSelection/>
      </Layout>),
  }
))


export {
    routeComponents
}