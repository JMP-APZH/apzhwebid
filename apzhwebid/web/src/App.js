import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import {Helmet} from "react-helmet";

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => (
  <div>

    <FatalErrorBoundary page={FatalErrorPage}>

        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">

          <RedwoodApolloProvider>
            <Helmet>
              <title>A&P Zürich WebID</title>
              <meta name="description" content="App Description" />
            </Helmet>
            <Routes />


          </RedwoodApolloProvider>
        </RedwoodProvider>
    </FatalErrorBoundary>
  </div>
)

export default App
