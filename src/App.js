import { Route, Routes, Link } from 'react-router-dom';
import './App.css';

const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: "G" },
    { number: 2, name: 'Dave Defender', position: "D" },
    { number: 3, name: 'Sam Sweeper', position: "D" },
    { number: 4, name: 'Matt Demon', position: "M" },
    { number: 5, name: 'William Winder', position: "M" },
    { number: 6, name: 'John Forward', position: "F" },
  ],
  all: function () { return this.players },
  get: function (id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer)
  }
}

const Home = () => (
  <div>
    <h1>Welcome to my site</h1>
  </div>
)

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Roster = () => (
  <div>
    <Routes>
      <Route path="" element={<FullRoster />} />
    </Routes>
  </div>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 спартак</li>
      <li>6/8 зенит</li>
      <li>14/6 рубин</li>
    </ul>
  </div>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    {/* в примере Switch, который заменен на Routes */}
    <Routes>
      {/* в примере компонент, который заменен на element */}
      <Route path='/' element={<Home />} />
      <Route path='/roster/*' element={<Roster />} />
      <Route path='schedule' element={<Schedule />} />
    </Routes>
  </main>
)

const App = () => (
  <div>
    {/* отображает список ссылок */}
    <Header />
    <Main />
  </div>
)

export default App;
