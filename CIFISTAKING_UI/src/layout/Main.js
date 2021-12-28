import Footer from '../components/global/Footer';
import Header from '../components/global/Header';
import Sidebar from '../components/global/Sidebar';

const Main = props => {
	return (
		<>
			<Sidebar />
			<div className='main-content'>
				<Header />
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default Main;
