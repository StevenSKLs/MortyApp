import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Loader2 from './Loader2'
import CardRick from "./CardRick";
import sev from "../assets/morty_1.svg";
import Loader from './Loader'
import Page from "./Page";
// import AudioPlayer from "../assets/mortyRock.mp3";

const Cards = () => {
	const [morty, setMorty] = useState([])
	const [ searchId, setSearchId ] = useState("");
	const [loader, setLoader] = useState(false)
	const [loader2, setLoader2] = useState(false)
	
const [ checkchId, setcheckchId ] = useState("");


		useEffect(()=>{
				const randomId = Math.floor(Math.random() * 126) + 1;
			axios.get(`https://rickandmortyapi.com/api/location/${randomId}`).then(res => setMorty(res.data))

			setTimeout(() => {
			setLoader(false)
			}, 3000);
			setLoader(true)
		},[])

const searchType = () => {
				axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
					.then(res => setMorty(res.data)) 
					setTimeout(() => {
						setLoader2(!true)
					}, 2000);
					setLoader2(!loader2)
			}  

const checky = ()=>{
				setcheckchId('')
		}

const pollito = (<img src="https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/aves/pollito/Pollito-Animales-Faunia-main.jpg" alt="" />)

const polli = checkchId ==='pollito' ? 'true' : checkchId
const pl = <h2>{polli}</h2>
const mundo = checkchId ==='pollito' ? pollito : ''



const [page, setPage] = useState(1)
		const perPage = 4
		const quantyPage = morty.residents? Math.ceil(morty.residents?.length / perPage):1
		
		const firstIndex = (page - 1) * perPage

		const residents = morty.residents?.slice(firstIndex,firstIndex + perPage)

const retro= ()=>{
	setPage(1)
}
		return (
				<div className='Card1'>
					{/* <audio controls muted autoPlay >
						<source src={`${AudioPlayer}`} type="audio/mpeg" />
					</audio> */}
					{loader && <Loader />}
					<div className='images'>
					<img src={`${sev}`} alt="" />
					</div>
					<div>
						<div className='Input_1'>
							<input
				type="number" 
				min={1} max={126} 
				value={searchId} 
				onChange={(e) => setSearchId(e.target.value)} 
				placeholder={"contains the id of 126 dimensions"}
			/>
			<button onClick={()=>{searchType();retro()}}>Search location</button>
			</div>

			<div className='Residents'>
				<h1>Name:{''}{morty.name ? morty.name : 'no data'}</h1>
				<div className='Residents_Info'>
					<p>Type: {morty.type}</p>
				<p>Dimension: {morty.dimension}</p>
				<p>Poblation: {morty.residents?.length}</p>
				</div>
			</div>
			
				<Page page={page} setPage={setPage} quantyPage={quantyPage} loaders ={loader2} setLoaders={setLoader2}/>
			
			<div className='Card2'>
				{loader2 && <Loader2 />}
				<div className='residents_card'>
				{residents?.map(resident => (
					<CardRick url={resident} key={resident}/>
				)
				)}
			</div>
			</div>
			
				
		
				<div>
				<input type="text" value={checkchId} onChange = {(e) => setcheckchId(e.target.value)}
				/>
				<button onClick={checky}>borrar</button>
				{pl}
			</div>
			
			{mundo}
		 <img src={`${morty.image}`} alt="" />
						</div>
				</div>
		);
};

export default Cards;
