import Card from './card';
import './card.css';



function App() {
  return (
    <div className="App">
      <Card
        bgcolor='red'/>
        title='Title 1'
        subtitle='Subtitle 1'
        description='Hello world 1!'

      <Card 
        bgcolor='orange'/>
        title='Title 2'
        subtitle='Subtitle 2'
        description='Hello world 2!'

      <Card 
        bgcolor='yellow'/>
        title='Title 3'
        subtitle='Subtitle 3'
        description='Hello world 3!'

      <Card 
        bgcolor='green'/>
        title='Title 4'
        subtitle='Subtitle 4'
        description='Hello world 4!'
    </div>
  );
}



export default App;