import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './Components/MyCard';
import Tags from './Components/Tags';


function App() {

  return (
    <>
      <Header title= 'Adopta un perrito'/>
      <MyCard
        image='./src/assets/img/Akamaru-Naruto.jpg'
        Name='Akamaru'
        Desc='Tierno perro albino entrenado como compañero ninja, tiene buen físico, buen olfato, sabe trabajar en conjunto con su dueño usando ninjustu y es muy leal.'
      />
      <MyCard
        image='./src/assets/img/Bond-Spy_x_Family.jpg'
        Name='Bond'
        Desc='A pesar de su avanzada edad es un perro muy inteligente y capacitado para ser un excelente perro espía, pese a ser pacifista. Tiene la habilidad de ver el futuro, a pesar de que no sepa cómo expresarlo correctamente, muy juguetón y hogareño.'
      />
      <MyCard
        image='./src/assets/img/Taromaru-Gakkou_Gurashi.jpg'
        Name='Taromaru'
        Desc='Un Shiba Inu extremadamente adorable y juguetón. Es el mejor compañero para un apocalipsis zombie, te asegurará conseguir muchos nuevos amigos y las ganas de jugar mordiendo no faltarán.'
      />
      <MyCard
        image='./src/assets/img/Alexander-Full_Metal_Alchemist.jpg'
        Name='Alexander'
        Desc='El perro prohibido. No está en adopción. Ya sabes por qué.'
      />
      <Tags text= 'Adóptalo' />
    </>
  );
};

export default App;
