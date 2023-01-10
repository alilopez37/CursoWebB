import Header from "../components/atoms/Header";
import ListStudent from "../components/molecules/ListStudent";

function App(){
    const listStudent = [
        {
            id: 1,
            name: "Dario",
        },{
            id:2,
            name:"Manuel",
        },{
            id:3,
            name: "Christian",
        },{
            id:4,
            name: "Martin"
        },{
            id:5,
            name: "Rocio"
        }
    ];
    return (
        <>
            <Header/>
            <ListStudent listStudent={listStudent}></ListStudent>
        </>
    )
}

export default App;