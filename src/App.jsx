import { QuoteProvider } from "./context/QuoteProvider"
import InsuranceApp from "./components/InsuranceApp"
import useQuoter from "./hooks/useQuoter"

function App() {

  return (
    <QuoteProvider>
      <InsuranceApp />
    </QuoteProvider>
  )
}

export default App
