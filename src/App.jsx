import { useState } from 'react'

import Breeds from './components/Breeds'
import Search from './components/Search'

function App() {

	const [searchBreed, setSearchBreed] = useState({});


	return (
		<>
			<header>
				<Search setSearchBreed={setSearchBreed} searchBreed={searchBreed} />
			</header>
			<main>
				<Breeds searchBreed={searchBreed}	/>
			</main>
			<footer>&copy; Designed and developed by&nbsp;
        <a href="https://github.com/tatianallorente/CatsApp-React" target="_blank" rel="noreferrer">Tatiana Llorente</a>
      </footer>
		</>
	)
}

export default App
