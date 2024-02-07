import { NextPage } from 'next';

// Tableau de patients (vous pouvez le remplir avec vos propres données)
const patients = [
  { id: 1, name: "John Doe", age: 35, condition: "Hypertension" },
  { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes" },
  { id: 3, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 4, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 5, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 6, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 7, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 8, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 9, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 10, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 11, name: "Alice Johnson", age: 55, condition: "Arthritis" },
  { id: 12, name: "Alice Johnson", age: 55, condition: "Arthritis" },


];

const patientsPerPage = 5; 

const PatientsPage: NextPage = () => {
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  const showPatients = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * patientsPerPage;
    const endIndex = startIndex + patientsPerPage;
    return patients.slice(startIndex, endIndex);
  };

  return (
    <div className='text-black'>
      <h1 className="text-black">Liste des Patients</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Âge</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {showPatients(1).map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <p className="text-black">Page 1 sur {totalPages}</p>
        <button disabled={totalPages === 1}>Suivant</button>
      </div>
    </div>
  );
};

export default PatientsPage;
