import './ComingSoon.css';
import bgImg from '../components/LOGO.svg';
const ComingSoon = () => {
	return (
		<div className='home'>
			<div className='container'>
				<main className='main'>
					<img src={bgImg} alt='logo' className='logo' />
					<div className='main__info'>
						<h1 className='main__title'>Our new Website</h1>
						<div className='hero__flex'>
							<p className='main__cmn'>COMING</p>
							<p className='main__cmn sn'>SOON</p>
						</div>
						<p className='main__subtitle'>
							Svetro is an e-commerce company with long experience in creating
							solutions and providing services to give its customers a
							competitive edge. We are global providers of various range of
							first-class services that can uplift your business to the The next
							level.
						</p>
					</div>
					<div className='main__social'>
						<h2 className='social__title'>Get in Touch</h2>
						<div className='social__icons'>
							<a href='https://facebook.com/svetro.official'>
								<i class='fab fa-facebook'></i>
							</a>
							<a href='https://twitter.com/Svetro_Official'>
								<i class='fab fa-twitter'></i>
							</a>
							<a href='https://www.instagram.com/svetro.official/'>
								<i class='fab fa-instagram'></i>
							</a>
							<a href=' https://www.linkedin.com/in/svetro-ecommerce-47847322b/'>
								<i class='fab fa-linkedin-in'></i>
							</a>
							<a href='https://www.youtube.com/channel/UC9vZdbs9RKepzDw2ZnjJqzA'>
								<i class='fab fa-youtube'></i>
							</a>
						</div>
						<div className='contact__info'>
							<a href='tel:+92 343 441 3578' className='phone flex'>
								<i class='fas fa-phone-alt'></i> +92 343 441 3578
							</a>
							<a href='mailto:info@svetro.com' className='email flex'>
								<i class='far fa-envelope'></i> info@svetro.com
							</a>
							<div className='address flex'>
								<i class='fas fa-map-marker-alt'></i>
								Plaza 25A, Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore,
								Punjab 54000, Pakistan
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ComingSoon;
