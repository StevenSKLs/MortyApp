import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Loader2 from './Loader2'
import CardRick from "./CardRick";
import mortys from "./mortys";
import Loader from './Loader'
import Page from "./Page";
// import AudioPlayer from "../assets/mortyRock.mp3";

const Cards = () => {
	const [morty, setMorty] = useState([])
	const [searchId, setSearchId ] = useState("");
	const [loader, setLoader] = useState(false)
	const [loader2, setLoader2] = useState(false)

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
					}, 3000);
					setLoader2(!loader2)
			}  

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
					<img src={`${mortys.svgs[0]}`} alt="" />
					</div>
					<div>
						<div className='Input_1'>
							<input
				type="number" 
				min={1} max={126} 
				value={searchId <=126 ? searchId : 0} 
				onChange={(e) => setSearchId(e.target.value)} 
				placeholder={"contains the id of 126 dimensions"}
			/>
			<button onClick={()=>{searchType();retro()}}>ID location</button>
			</div>

			<div className='Residents'>
				<h1>{''}{morty.name ? <p>Name: {morty.name}</p>  : <p>No Data..<i className="fa-solid fa-spinner rotate"></i></p>}</h1>
				<div className='Residents_Info'>
				<div>
					<p className='texts'>Type: </p>
					<p className='texts2'>{morty.type}</p>
				</div>
				<div>
					<p className='texts'>Dimension: </p>
					<p className='texts2'>{morty.dimension}</p>
				</div>
				<div>
					<p className='texts'>Poblation:</p>
					<p className='texts2'>{morty.residents?.length}</p>
				</div>
				</div>
			</div>
			
				<Page page={page} setPage={setPage} quantyPage={quantyPage} loaders ={loader2} setLoaders={setLoader2}/>
			
			<div className='Card2'>
				
				{loader2 && <Loader2 />}
				{morty.residents?.length === undefined?<div className='IsUnderfined'><img src={`${mortys.gifs[0]}`} alt=""/><p className='texts3'>Poblation 0</p></div>:morty.residents?.length <=0?<div className='IsUnderfined'><img src={`${mortys.gifs[0]}`} alt=""/><p className='texts3'>Poblation 0</p></div>:''}

				<div className='residents_card'>
				{residents?.map(resident => (
					<CardRick url={resident} key={resident}/>
				)
				)}
				</div>
			</div>
			</div>
		</div>
	);
};

export default Cards;
