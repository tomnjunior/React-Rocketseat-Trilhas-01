import { RepositoryList } from './components/RepositoryList';
import { HeaderList } from './components/HeaderList';
import './styles/global.scss';


export default function App() {
    return (
        <>
            <HeaderList />
            <RepositoryList />
        </>
    )
}
