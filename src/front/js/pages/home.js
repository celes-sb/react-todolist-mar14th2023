import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDos, settoDos] = useState([]);
	return (
		<>
			<div className="container-fluid row d-flex justify-content-center align-items-center p-2">
				<h1 className="row justify-content-center">To-Do List</h1>
				<ul className="list-container col-12">
					<li className="list-title">
						<input
							className="text"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									settoDos(toDos.concat([inputValue]));
									setInputValue("");
								}
							}}
							placeholder="What do you need to do today?">
						</input>
					</li>
					{toDos.map((item, index) => (
						<li className="list-item">{item}
							<button className="ocultar btn btn-sm btn-secondary" type="button" onClick={() => settoDos(toDos.filter((item, currentIndex) => index != currentIndex))}><i className="fas fa-trash-alt"></i></button>
						</li>
					))}
				</ul>
				<p><em>{toDos.length} item(s) left</em></p>
			</div>
		</>
	);
};
