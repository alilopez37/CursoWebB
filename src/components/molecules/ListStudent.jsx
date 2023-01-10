import Title from "../atoms/Title";
import Widge from "../atoms/Widge";

function ListStudent({listStudent}) {
    return (
        <>
            <Title msn="Lista de alumnos del 4B"></Title>
            {
                listStudent.map(itemStudent => (
                    <Widge item={itemStudent}></Widge>
                )
                )
            }
        </>
      );
}
export default ListStudent;