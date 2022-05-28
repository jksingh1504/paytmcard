import "./App.css";
import Card from "./components/Card";
import "./App.css";

function App() {
	return (
		<div>
			<div style={{ backgroundColor: "#ffa500" }} className="App">
				<Card
					date={"28/10/2020"}
					cardname={"Amazon Gift Pay"}
					facility={"Desktop - Mobile"}
					imgSrc={
						"https://th.bing.com/th/id/R.047b032e66f967ea6ad96d83c0e69908?rik=yVxJmCMnXoIs5Q&riu=http%3a%2f%2fpngimg.com%2fuploads%2famazon%2famazon_PNG5.png&ehk=L3lh0wEFh3QVQe2EVJoTCSLWaMm3JzIMyfve82QR%2fyw%3d&risl=&pid=ImgRaw&r=0"
					}
				/>
			</div>
			<div style={{ backgroundColor: "#eee" }} className="App">
				<Card
					date={"17 Sep 2020"}
					cardname={"Apple Gift Payment"}
					facility={"MacOS - Mobile"}
					imgSrc={"https://clipground.com/images/apple-clipart-logos-2.png"}
				/>
			</div>
		</div>
	);
}

export default App;
